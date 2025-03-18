import React from 'react';
import { motion } from 'framer-motion';
import { 
  Scale, 
  FileText, 
  AlertCircle, 
  CheckCircle,
  Mail,
  Shield,
  FileLock2,
  FileWarning
} from 'lucide-react';

const dmcaSteps = [
  {
    icon: FileText,
    title: "Submit a Notice",
    description: "Provide detailed information about the copyrighted work and alleged infringement."
  },
  {
    icon: AlertCircle,
    title: "Review Process",
    description: "Our team will carefully review your submission within 24-48 hours."
  },
  {
    icon: CheckCircle,
    title: "Resolution",
    description: "We'll take appropriate action and notify all parties involved."
  },
  {
    icon: Mail,
    title: "Communication",
    description: "Receive updates throughout the entire process via email."
  }
];

const DMCA = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:dmca@tierlistmaker.xyz';
  };

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
            <Scale className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              DMCA Policy
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Understanding your rights and our commitment to protecting intellectual property.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DMCA Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            DMCA Takedown Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dmcaSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
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
                <Shield className="w-8 h-8 text-indigo-600 mr-4" />
                <h2 className="text-2xl font-bold">Copyright Protection</h2>
              </div>
              <p className="text-gray-600 mb-6">
                We respect the intellectual property rights of others and expect our users to do the same. 
                In accordance with the Digital Millennium Copyright Act of 1998, we will respond expeditiously 
                to claims of copyright infringement that are reported to our designated copyright agent.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <FileLock2 className="w-8 h-8 text-indigo-600 mr-4" />
                <h2 className="text-2xl font-bold">DMCA Notice Requirements</h2>
              </div>
              <p className="text-gray-600 mb-4">
                To file a DMCA notice, please provide the following information:
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-3"></span>
                  <span>A physical or electronic signature of the copyright owner</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-3"></span>
                  <span>Description of the copyrighted work claimed to have been infringed</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-3"></span>
                  <span>Description of where the material is located on our website</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-3"></span>
                  <span>Your contact information</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-3"></span>
                  <span>A statement of good faith belief that the use is not authorized</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-3"></span>
                  <span>A statement that the information is accurate and that you are authorized to act</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <FileWarning className="w-8 h-8 text-indigo-600 mr-4" />
                <h2 className="text-2xl font-bold">Counter-Notice Procedure</h2>
              </div>
              <p className="text-gray-600 mb-4">
                If you believe your content was removed in error, you may file a counter-notice containing:
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-3"></span>
                  <span>Your physical or electronic signature</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-3"></span>
                  <span>Identification of the removed material and its location</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-3"></span>
                  <span>A statement under penalty of perjury that you have a good faith belief the material was removed by mistake</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-3"></span>
                  <span>Your name, address, and telephone number</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Need to Submit a DMCA Notice?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our copyright agent is available to assist you with any DMCA-related inquiries.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEmailClick}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>Contact Copyright Agent (dmca@tierlistmaker.xyz)</span>
            </motion.button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default DMCA;