import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Accueil = () => {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Bienvenue sur mon Portfolio
          </h1>
          
          {/* Espace pour l'image */}
          <div className="mb-8">
            <img 
              src="/path/to/your/image.jpg" 
              alt="Illustration de portfolio" 
              className="mx-auto max-w-full h-auto rounded-lg shadow-md"
            />
          </div>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Développeur passionné spécialisé en réseaux et sécurité informatique
          </p>

          <Link
            to="/projets"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors group"
          >
            Découvrir mes projets
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Accueil;