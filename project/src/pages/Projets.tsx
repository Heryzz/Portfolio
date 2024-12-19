import React from 'react';
import { motion } from 'framer-motion';
import ProjetCard from '../components/ProjetCard';
import { projets } from '../data/projets';

const Projets = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-20 px-4 max-w-7xl mx-auto"
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Mes Projets</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projets.map((projet) => (
          <ProjetCard key={projet.id} projet={projet} />
        ))}
      </div>
    </motion.div>
  );
}

export default Projets;