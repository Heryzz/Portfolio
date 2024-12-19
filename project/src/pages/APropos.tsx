import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Shield } from 'lucide-react';

const competences = [
  {
    icon: Code,
    titre: 'Développement',
    description: 'Python, JavaScript/TypeScript, React, SQL'
  },
  {
    icon: Server,
    titre: 'Réseaux',
    description: 'Configuration BGP/OSPF, Administration système'
  },
  {
    icon: Shield,
    titre: 'Sécurité',
    description: 'Gestion des accès, Cryptographie, Sécurité réseau'
  }
];

const APropos = () => {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-6">À Propos</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Passionné par l'informatique et les nouvelles technologies, je me spécialise
            dans le développement d'applications et la gestion des infrastructures réseau.
            Mon parcours m'a permis d'acquérir une expertise variée, allant de la
            programmation à la sécurité des systèmes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {competences.map((competence, index) => (
            <motion.div
              key={competence.titre}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <competence.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{competence.titre}</h3>
              <p className="text-gray-600">{competence.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default APropos;