import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  FileText,
  Server,
  UserCheck,
  Key,
  RefreshCw
} from 'lucide-react';
import { Link } from 'react-router-dom';

const privacyFeatures = [
  {
    icon: Shield,
    title: "Data Protection",
    description: "Your data is encrypted and protected using industry-standard security measures."
  },
  {
    icon: Lock,
    title: "Secure Storage",
    description: "All personal information is stored securely in encrypted databases."
  },
  {
    icon: Eye,
    title: "Privacy Controls",
    description: "Manage your privacy settings and control what information is shared."
  },
  {
    icon: Server,
    title: "Data Management",
    description: "Access, update, or delete your personal information at any time."
  }
];

const Privacy = () => {
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
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              We take your privacy seriously. Learn how we collect, use, and protect your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <FileText className="w-8 h-8 text-indigo-600 mr-4" />
                <h2 className="text-2xl font-bold">Information We Collect</h2>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-3"></span>
                  <span>Basic account information (email, username)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-3"></span>
                  <span>Usage data and preferences</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-3"></span>
                  <span>Device and browser information</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <UserCheck className="w-8 h-8 text-indigo-600 mr-4" />
                <h2 className="text-2xl font-bold">How We Use Your Information</h2>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-3"></span>
                  <span>Improve our services and user experience</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-3"></span>
                  <span>Personalize content and recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-3"></span>
                  <span>Communicate important updates and changes</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <Key className="w-8 h-8 text-indigo-600 mr-4" />
                <h2 className="text-2xl font-bold">Data Security</h2>
              </div>
              <p className="text-gray-600 mb-4">
                We implement various security measures to maintain the safety of your personal information:
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-3"></span>
                  <span>End-to-end encryption for sensitive data</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-3"></span>
                  <span>Regular security audits and updates</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-3"></span>
                  <span>Secure data storage and transmission</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <RefreshCw className="w-8 h-8 text-indigo-600 mr-4" />
                <h2 className="text-2xl font-bold">Updates to This Policy</h2>
              </div>
              <p className="text-gray-600">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Questions About Privacy?</h2>
            <p className="text-xl text-gray-600 mb-8">
              If you have any questions about our privacy policy, please don't hesitate to contact us.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Privacy;