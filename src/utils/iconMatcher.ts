import Fuse from 'fuse.js';
import { Gamepad, Dice1 as Dice, Trophy, FolderRoot as Football, ShoppingBasket as Basketball, Ticket as Cricket, Baseline as Baseball, Tent as Tennis, Music, Headphones, Mic, Radio, Piano, Film, Tv, Clapperboard, Video, Book, BookOpen, Library, Bookmark, Utensils, Pizza, Coffee, Beer, Shirt, ShoppingBag, Scissors, Crown, Palette, PaintBucket, Brush, Image, Globe, Plane, Mountain, Map, Users, User, Group, PersonStanding } from 'lucide-react';

const iconCategories = {
  games: [
    { icon: Gamepad, keywords: ['game', 'gaming', 'play', 'console', 'playstation', 'xbox', 'nintendo'] },
    { icon: Dice, keywords: ['dice', 'random', 'board game', 'cards'] },
    { icon: Trophy, keywords: ['trophy', 'win', 'achievement', 'award', 'competition'] }
  ],
  sports: [
    { icon: Football, keywords: ['football', 'soccer'] },
    { icon: Basketball, keywords: ['basketball', 'nba'] },
    { icon: Cricket, keywords: ['cricket'] },
    { icon: Baseball, keywords: ['baseball', 'mlb'] },
    { icon: Tennis, keywords: ['tennis'] }
  ],
  music: [
    { icon: Music, keywords: ['music', 'song', 'audio', 'sound'] },
    { icon: Headphones, keywords: ['headphones', 'listening', 'audio'] },
    { icon: Mic, keywords: ['microphone', 'singing', 'voice', 'podcast'] },
    { icon: Radio, keywords: ['radio', 'broadcast', 'fm'] },
    { icon: Piano, keywords: ['piano', 'keyboard', 'instrument'] }
  ],
  movies: [
    { icon: Film, keywords: ['film', 'movie', 'cinema'] },
    { icon: Tv, keywords: ['tv', 'television', 'show', 'series'] },
    { icon: Clapperboard, keywords: ['movie', 'film', 'director'] },
    { icon: Video, keywords: ['video', 'streaming', 'youtube'] }
  ],
  books: [
    { icon: Book, keywords: ['book', 'reading', 'novel'] },
    { icon: BookOpen, keywords: ['book', 'reading', 'study'] },
    { icon: Library, keywords: ['library', 'books', 'collection'] },
    { icon: Bookmark, keywords: ['bookmark', 'favorite', 'save'] }
  ],
  food: [
    { icon: Utensils, keywords: ['food', 'eating', 'restaurant', 'meal'] },
    { icon: Pizza, keywords: ['pizza', 'fast food', 'italian'] },
    { icon: Coffee, keywords: ['coffee', 'drink', 'cafe'] },
    { icon: Beer, keywords: ['beer', 'drink', 'alcohol'] }
  ],
  fashion: [
    { icon: Shirt, keywords: ['shirt', 'clothing', 'fashion', 'wear'] },
    { icon: ShoppingBag, keywords: ['shopping', 'bag', 'retail'] },
    { icon: Scissors, keywords: ['design', 'cut', 'style'] },
    { icon: Crown, keywords: ['luxury', 'premium', 'royal'] }
  ],
  art: [
    { icon: Palette, keywords: ['art', 'painting', 'color'] },
    { icon: PaintBucket, keywords: ['paint', 'color', 'design'] },
    { icon: Brush, keywords: ['brush', 'painting', 'art'] },
    { icon: Image, keywords: ['image', 'picture', 'photo'] }
  ],
  travel: [
    { icon: Globe, keywords: ['travel', 'world', 'global'] },
    { icon: Plane, keywords: ['flight', 'airplane', 'travel'] },
    { icon: Mountain, keywords: ['mountain', 'hiking', 'nature'] },
    { icon: Map, keywords: ['map', 'location', 'navigation'] }
  ],
  people: [
    { icon: Users, keywords: ['people', 'group', 'team'] },
    { icon: User, keywords: ['person', 'individual', 'profile'] },
    { icon: Group, keywords: ['group', 'team', 'community'] },
    { icon: PersonStanding, keywords: ['person', 'standing', 'individual'] }
  ]
};

export const findMatchingIcon = (category: string, itemName: string) => {
  const categoryIcons = iconCategories[category] || iconCategories.games;
  
  const fuse = new Fuse(categoryIcons, {
    keys: ['keywords'],
    threshold: 0.4
  });

  const result = fuse.search(itemName.toLowerCase());
  return result.length > 0 ? result[0].item.icon : categoryIcons[0].icon;
};