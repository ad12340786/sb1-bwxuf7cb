import React from 'react';
import { motion } from 'framer-motion';
import { 
  MousePointer2, 
  GripHorizontal, 
  Download, 
  Share2, 
  Plus, 
  ArrowDownToLine,
  Trash2,
  Crown,
  Trophy,
  Star,
  Medal,
  Award
} from 'lucide-react';

const features = [
  {
    icon: MousePointer2,
    title: "Easy Drag & Drop",
    description: "Create tier lists for Marvel Rivals, Brawl Stars, NIKKE, and more with our intuitive drag and drop interface."
  },
  {
    icon: GripHorizontal,
    title: "Flexible Ranking",
    description: "Arrange and reorder items within tiers to create the perfect game tier list rankings."
  },
  {
    icon: Download,
    title: "High Quality Export",
    description: "Download your tier lists as high-quality images perfect for sharing on social media or gaming communities."
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description: "Share your tier lists instantly with the gaming community, perfect for Marvel Rivals and Brawl Stars discussions."
  }
];

const tiers = [
  {
    name: "S Tier",
    icon: Crown,
    color: "from-red-500 to-pink-500",
    description: "Top tier characters in Marvel Rivals, strongest units in NIKKE, and best brawlers in Brawl Stars."
  },
  {
    name: "A Tier",
    icon: Trophy,
    color: "from-orange-500 to-yellow-500",
    description: "Very strong picks that are just below the meta but still highly effective in competitive play."
  },
  {
    name: "B Tier",
    icon: Star,
    color: "from-green-500 to-emerald-500",
    description: "Balanced characters and units that perform well in most situations."
  },
  {
    name: "C Tier",
    icon: Medal,
    color: "from-blue-500 to-cyan-500",
    description: "Average performers that might need specific strategies or team compositions."
  },
  {
    name: "D Tier",
    icon: Award,
    color: "from-indigo-500 to-violet-500",
    description: "Below average choices that may need buffs or reworks to become competitive."
  }
];

const Help = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="absolute inset-0 bg-grid-white/15 bg-grid-16 [mask-image:linear-gradient(0deg,transparent,white,transparent)]" />
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto text-white"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Create Perfect Tier Lists
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Learn how to create professional tier lists for Marvel Rivals, Brawl Stars, NIKKE, and more using our powerful tier list maker.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Essential Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Understanding Tiers */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Understanding Tier Rankings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${tier.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <tier.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                <p className="text-gray-600">{tier.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">How do I create a Marvel Rivals tier list?</h3>
              <p className="text-gray-600">
                Simply select the Games category, choose your characters, and drag them into their respective tiers. Our tier list maker makes it easy to rank Marvel Rivals characters based on their performance in the current meta.
              </p>
            </motion.div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">Can I create a Brawl Stars tier list?</h3>
              <p className="text-gray-600">
                Yes! Our tier list generator includes all Brawl Stars characters and makes it simple to create and update your rankings as the meta changes with each update.
              </p>
            </motion.div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">How do I rank NIKKE characters?</h3>
              <p className="text-gray-600">
                Use our NIKKE tier list template to easily rank characters based on their combat effectiveness, utility, and team synergy. Perfect for both new players and veterans.
              </p>
            </motion.div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">What makes a good tier list?</h3>
              <p className="text-gray-600">
                A good tier list combines meta knowledge, practical experience, and clear explanations for rankings. Whether you're creating a Marvel Rivals tier list or ranking Brawl Stars characters, focus on providing valuable insights for your audience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tips & Best Practices */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Tips for Creating Great Tier Lists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
              <p className="text-gray-600">
                Keep your tier lists current with the latest game updates, meta changes, and balance patches for Marvel Rivals, Brawl Stars, and NIKKE.
              </p>
            </motion.div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Consider Context</h3>
              <p className="text-gray-600">
                Factor in different game modes, team compositions, and skill levels when creating your rankings.
              </p>
            </motion.div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Explain Your Choices</h3>
              <p className="text-gray-600">
                Add notes and explanations for your tier placements to help others understand your reasoning and improve their gameplay.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Help;