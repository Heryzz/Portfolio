import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Projet } from '../data/projets';

interface ProjetCardProps {
  projet: Projet;
}

const ProjetCard: React.FC<ProjetCardProps> = ({ projet }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        to={`/projets/${projet.id}`}
        className="group relative block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <div className="relative pb-[56.25%]">
          <img
            src={projet.image}
            alt={projet.titre}
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white text-xl font-semibold mb-1">{projet.titre}</h3>
              <p className="text-white/90 text-sm">{projet.description}</p>
              <span className="inline-block mt-2 px-3 py-1 bg-blue-600 text-white text-xs rounded-full">
                {projet.categorie}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjetCard;