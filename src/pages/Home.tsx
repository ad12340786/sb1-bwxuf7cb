import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Gamepad2, Music, Film, Trophy, Book, Utensils, 
  Shirt, Palette, Globe, Users, ChevronRight,
  Star, Share2, Layout, Download
} from 'lucide-react';

const categories = [
  { 
    id: 'games', 
    name: 'Games', 
    icon: Gamepad2, 
    color: 'bg-red-500', 
    description: 'Create tier lists for Marvel Rivals, Brawl Stars, NIKKE, and more popular games',
    keywords: ['marvel rivals tier list', 'brawl stars tier list', 'nikke tier list', 'game tier lists']
  },
  { id: 'music', name: 'Music', icon: Music, color: 'bg-blue-500', description: 'Create tier lists for albums, artists, and genres' },
  { id: 'movies', name: 'Movies & TV', icon: Film, color: 'bg-green-500', description: 'Rate films, TV shows, and streaming content' },
  { id: 'sports', name: 'Sports', icon: Trophy, color: 'bg-yellow-500', description: 'Rank athletes, teams, and memorable sports moments' },
  { id: 'books', name: 'Books', icon: Book, color: 'bg-purple-500', description: 'Organize your reading list and favorite authors' },
  { id: 'food', name: 'Food', icon: Utensils, color: 'bg-pink-500', description: 'Rate restaurants, cuisines, and dishes' },
  { id: 'fashion', name: 'Fashion', icon: Shirt, color: 'bg-indigo-500', description: 'Rank brands, styles, and fashion trends' },
  { id: 'art', name: 'Art', icon: Palette, color: 'bg-orange-500', description: 'Create lists for artworks, artists, and movements' },
  { id: 'travel', name: 'Travel', icon: Globe, color: 'bg-teal-500', description: 'Rate destinations, hotels, and travel experiences' },
  { id: 'people', name: 'People', icon: Users, color: 'bg-cyan-500', description: 'Rank influencers, celebrities, and historical figures' },
];

const features = [
  {
    icon: Star,
    title: 'Smart Tier List Generator',
    description: 'Create professional tier lists with our intelligent ranking system'
  },
  {
    icon: Layout,
    title: 'Flexible Tier System',
    description: 'Organize items across S to F tiers with customizable descriptions'
  },
  {
    icon: Share2,
    title: 'Easy Sharing',
    description: 'Export and share your tier lists on social media with one click'
  },
  {
    icon: Download,
    title: 'High Quality Exports',
    description: 'Download your tier lists as high-resolution images'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Gaming Content Creator',
    content: 'The best tool for creating Marvel Rivals and Brawl Stars tier lists. Professional and easy to use!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80'
  },
  {
    name: 'Michael Chen',
    role: 'Esports Analyst',
    content: 'Perfect for creating NIKKE tier lists. The drag and drop interface is smooth and intuitive.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Gaming Streamer',
    content: 'I use this daily for game tier lists. The customization options are exactly what I needed.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80'
  }
];

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Create Amazing Tier Lists
            </h1>
            <p className="text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              The most powerful and intuitive tier list maker. Rank anything with style, share with everyone.
            </p>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link 
                to="/create/custom"
                className="inline-flex items-center px-8 py-4 text-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Start Creating
                <ChevronRight className="ml-2" size={24} />
              </Link>
              <Link 
                to="/help"
                className="inline-flex items-center px-8 py-4 text-xl font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-full hover:border-indigo-500 hover:text-indigo-600 transition-all duration-300"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Choose Your Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Link 
                  to={`/create/${category.id}`}
                  className="block p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-600 text-center">{category.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Create Your Tier List?</h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <Link 
              to="/create/custom"
              className="inline-flex items-center px-8 py-4 text-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Start Now
              <ChevronRight className="ml-2" size={24} />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;