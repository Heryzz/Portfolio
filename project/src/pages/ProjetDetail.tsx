import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { projets } from '../data/projets';

const ProjetDetail = () => {
  const { id } = useParams();
  const projet = projets.find(p => p.id === Number(id));

  if (!projet) {
    return (
      <div className="min-h-screen pt-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Projet non trouvé</h1>
          <Link
            to="/projets"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="mr-2" />
            Retour aux projets
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Link
            to="/projets"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
          >
            <ArrowLeft className="mr-2" />
            Retour aux projets
          </Link>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={projet.image}
              alt={projet.titre}
              className="w-full h-[400px] object-cover"
            />
            <div className="p-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{projet.titre}</h1>
              <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full mb-4">
                {projet.categorie}
              </span>
              <p className="text-lg text-gray-600 mb-6">{projet.description}</p>
              
              {/* Ici, vous pouvez ajouter plus de détails sur le projet */}
              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold mb-4">Description détaillée</h2>
                <p className="text-gray-600">
                  Une description plus détaillée du projet sera ajoutée ici...
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjetDetail;