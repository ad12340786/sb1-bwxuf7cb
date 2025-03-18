import React, { useState, useEffect, memo, forwardRef } from 'react';
import { useParams } from 'react-router-dom';
import {
  DndContext,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  closestCenter,
  DragEndEvent,
  DragStartEvent,
  UniqueIdentifier,
  useDroppable,
} from '@dnd-kit/core';
import {
  SortableContext,
  horizontalListSortingStrategy,
  useSortable,
  arrayMove,
} from '@dnd-kit/sortable';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Plus, X, PlusCircle, Trash2, HelpCircle, Edit2, Check } from 'lucide-react';
import { toPng } from 'html-to-image';
import { categoryItems, categoryIcons, TierListItem } from '../data/tierListItems';
import { findMatchingIcon } from '../data/tierListItems';

const tiers = ['S', 'A', 'B', 'C', 'D', 'F'];
const tierColors = {
  S: 'bg-gradient-to-r from-red-500 via-rose-500 to-pink-500',
  A: 'bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500',
  B: 'bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500',
  C: 'bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500',
  D: 'bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500',
  F: 'bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500',
};

const tierDescriptions = {
  S: 'Supreme - The absolute best of the best',
  A: 'Amazing - Excellent quality, highly recommended',
  B: 'Better - Above average, good quality',
  C: 'Common - Average, meets expectations',
  D: 'Disappointing - Below average, needs improvement',
  F: 'Failed - Poor quality, not recommended',
};

const SortableItem = memo(forwardRef<HTMLDivElement, {
  item: TierListItem;
  removeItem: (id: string, container: string) => void;
  container: string;
}>(({ item, removeItem, container }, ref) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ 
    id: item.id,
    data: {
      type: 'item',
      item,
    },
  });

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    transition,
    zIndex: isDragging ? 1 : 0,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      whileHover={{ scale: 1.05 }}
      className={`bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${
        isDragging ? 'ring-2 ring-indigo-500' : ''
      }`}
    >
      <div className="flex flex-col items-center w-20 relative group">
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => removeItem(item.id, container)}
          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <X size={14} />
        </motion.button>
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="w-10 h-10 flex items-center justify-center text-indigo-600"
        >
          {React.createElement(item.icon, { size: 24 })}
        </motion.div>
        <span className="text-xs font-medium text-center mt-1 line-clamp-2">{item.content}</span>
      </div>
    </motion.div>
  );
}));

SortableItem.displayName = 'SortableItem';

const DroppableArea = memo(({ id, items, removeItem }: { id: string; items: TierListItem[]; removeItem: (id: string, container: string) => void }) => {
  const { setNodeRef, isOver } = useDroppable({
    id,
  });

  return (
    <div 
      ref={setNodeRef}
      className={`flex-1 min-h-[100px] p-3 rounded-r-lg transition-all duration-300 ${
        isOver ? 'bg-indigo-50 ring-2 ring-indigo-300 scale-[1.02]' : 'bg-gray-50'
      }`}
    >
      <SortableContext items={items.map(item => item.id)} strategy={horizontalListSortingStrategy}>
        <motion.div 
          className="flex flex-wrap gap-2"
          layout
        >
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <SortableItem key={item.id} item={item} removeItem={removeItem} container={id} />
            ))}
          </AnimatePresence>
        </motion.div>
      </SortableContext>
    </div>
  );
});

DroppableArea.displayName = 'DroppableArea';

const TierListMaker = () => {
  const { category } = useParams<{ category: string }>();
  const [items, setItems] = useState<Record<string, TierListItem[]>>({});
  const [unassignedItems, setUnassignedItems] = useState<TierListItem[]>([]);
  const [newItemName, setNewItemName] = useState('');
  const [showAddItem, setShowAddItem] = useState(false);
  const [showTierInfo, setShowTierInfo] = useState(false);
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const CategoryIcon = category && categoryIcons[category] ? categoryIcons[category] : null;
  
  const [tierListName, setTierListName] = useState(category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Tier List` : 'Custom Tier List');
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(tierListName);

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  useEffect(() => {
    if (category && categoryItems[category]) {
      setUnassignedItems(categoryItems[category]);
      const initialTiers = tiers.reduce((acc, tier) => {
        acc[tier] = [];
        return acc;
      }, {} as Record<string, TierListItem[]>);
      setItems(initialTiers);
    }
  }, [category]);

  const findContainer = (id: UniqueIdentifier) => {
    if (unassignedItems.find(item => item.id === id)) {
      return 'unassigned';
    }

    return Object.keys(items).find(key => items[key].some(item => item.id === id));
  };

  const findItemById = (id: UniqueIdentifier): TierListItem | undefined => {
    const container = findContainer(id);
    if (!container) return undefined;
    
    return container === 'unassigned'
      ? unassignedItems.find(item => item.id === id)
      : items[container]?.find(item => item.id === id);
  };

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) {
      setActiveId(null);
      return;
    }

    const activeContainer = findContainer(active.id);
    const overContainer = findContainer(over.id) || over.id.toString();

    if (!activeContainer || !overContainer || activeContainer === overContainer) {
      setActiveId(null);
      return;
    }

    const activeItem = findItemById(active.id);
    if (!activeItem) {
      setActiveId(null);
      return;
    }

    setItems(prev => {
      const newItems = { ...prev };

      if (activeContainer === 'unassigned') {
        setUnassignedItems(items => items.filter(item => item.id !== active.id));
      } else {
        newItems[activeContainer] = newItems[activeContainer].filter(item => item.id !== active.id);
      }

      if (overContainer === 'unassigned') {
        setUnassignedItems(items => [...items, activeItem]);
      } else {
        newItems[overContainer] = [...(newItems[overContainer] || []), activeItem];
      }

      return newItems;
    });

    setActiveId(null);
  };

  const addNewItem = () => {
    if (newItemName.trim()) {
      const newItem: TierListItem = {
        id: `custom-${Date.now()}`,
        content: newItemName.trim(),
        icon: findMatchingIcon(category || 'games', newItemName),
      };
      setUnassignedItems(prev => [...prev, newItem]);
      setNewItemName('');
      setShowAddItem(false);
    }
  };

  const removeItem = (itemId: string, container: string) => {
    if (container === 'unassigned') {
      setUnassignedItems(prev => prev.filter(item => item.id !== itemId));
    } else {
      const itemToMove = items[container].find(item => item.id === itemId);
      if (itemToMove) {
        setItems(prev => ({
          ...prev,
          [container]: prev[container].filter(item => item.id !== itemId)
        }));
        setUnassignedItems(prev => [...prev, itemToMove]);
      }
    }
  };

  const downloadTierList = () => {
    const element = document.getElementById('tier-list');
    if (element) {
      toPng(element, { quality: 0.95 })
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.download = `${tierListName.toLowerCase().replace(/\s+/g, '-')}-${new Date().toISOString().slice(0, 10)}.png`;
          link.href = dataUrl;
          link.click();
        })
        .catch((error) => {
          console.error('Error downloading tier list:', error);
        });
    }
  };

  const handleNameEdit = () => {
    setIsEditingName(true);
    setTempName(tierListName);
  };

  const handleNameSave = () => {
    if (tempName.trim()) {
      setTierListName(tempName.trim());
    }
    setIsEditingName(false);
  };

  const handleNameKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleNameSave();
    } else if (e.key === 'Escape') {
      setIsEditingName(false);
      setTempName(tierListName);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8 max-w-6xl"
    >
      <motion.div 
        className="flex justify-between items-center mb-8"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
      >
        <div className="flex items-center space-x-3">
          {CategoryIcon && (
            <motion.div
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CategoryIcon className="w-8 h-8 text-indigo-600" />
            </motion.div>
          )}
          <div className="flex items-center space-x-2">
            {isEditingName ? (
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="flex items-center space-x-2"
              >
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  onKeyDown={handleNameKeyPress}
                  autoFocus
                  className="text-2xl font-bold bg-white border-b-2 border-indigo-600 focus:outline-none px-2 py-1 rounded"
                  placeholder="Enter list name"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleNameSave}
                  className="text-green-600 hover:text-green-700"
                >
                  <Check size={24} />
                </motion.button>
              </motion.div>
            ) : (
              <motion.div className="flex items-center space-x-2">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {tierListName}
                </h1>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleNameEdit}
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <Edit2 size={20} />
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowTierInfo(!showTierInfo)}
            className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <HelpCircle size={20} />
            <span>Tier Info</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAddItem(true)}
            className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
          >
            <PlusCircle size={20} />
            <span>Add Item</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadTierList}
            className="flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
          >
            <Download size={20} />
            <span>Download</span>
          </motion.button>
        </div>
      </motion.div>

      <AnimatePresence>
        {showTierInfo && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white p-6 rounded-lg shadow-lg mb-8"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Tier Descriptions</h2>
              <button
                onClick={() => setShowTierInfo(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(tierDescriptions).map(([tier, description]) => (
                <motion.div 
                  key={tier} 
                  className="p-4 rounded-lg bg-gray-50 hover:shadow-md transition-shadow duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`${tierColors[tier]} w-8 h-8 flex items-center justify-center text-white font-bold rounded-lg mb-2`}>
                    {tier}
                  </div>
                  <p className="text-sm text-gray-600">{description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {showAddItem && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white p-6 rounded-lg shadow-lg mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Add New Item</h2>
              <button
                onClick={() => setShowAddItem(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                placeholder="Enter item name"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                onKeyPress={(e) => e.key === 'Enter' && addNewItem()}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={addNewItem}
                className="flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <Plus size={20} />
                <span>Add</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToWindowEdges]}
      >
        <motion.div 
          id="tier-list" 
          className="bg-white rounded-xl shadow-xl p-6 space-y-3"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {tiers.map((tier, index) => (
            <motion.div 
              key={tier} 
              className="flex items-stretch"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div 
                className={`${tierColors[tier]} w-20 flex items-center justify-center text-white text-2xl font-bold rounded-l-xl cursor-help shadow-inner`} 
                title={tierDescriptions[tier]}
              >
                {tier}
              </div>
              <DroppableArea id={tier} items={items[tier] || []} removeItem={removeItem} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-8 bg-white rounded-xl shadow-xl p-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Available Items
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setUnassignedItems([])}
              className="flex items-center space-x-2 text-red-500 hover:text-red-600 transition-colors"
            >
              <Trash2 size={20} />
              <span>Clear All</span>
            </motion.button>
          </div>
          <DroppableArea id="unassigned" items={unassignedItems} removeItem={removeItem} />
        </motion.div>

        <DragOverlay>
          {activeId ? (
            <motion.div 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1.1 }}
              className="bg-white p-2 rounded-lg shadow-xl ring-2 ring-indigo-500"
            >
              {(() => {
                const item = findItemById(activeId);
                if (!item) return null;
                return (
                  <div className="flex flex-col items-center w-20">
                    <div className="w-10 h-10 flex items-center justify-center text-indigo-600">
                      {React.createElement(item.icon, { size: 24 })}
                    </div>
                    <span className="text-xs text-center mt-1 font-medium">{item.content}</span>
                  </div>
                );
              })()}
            </motion.div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </motion.div>
  );
};

export default TierListMaker;