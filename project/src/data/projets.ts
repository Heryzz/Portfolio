export interface Projet {
  id: number;
  titre: string;
  description: string;
  image: string;
  categorie: string;
}

export const projets: Projet[] = [
  {
    id: 1,
    titre: 'Projet GSB',
    description: 'Gestion de base de données',
    image: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&q=80&w=800',
    categorie: 'Base de données'
  },
  {
    id: 2,
    titre: 'Supervision distribuée',
    description: 'Système de supervision',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    categorie: 'Réseau'
  },
  {
    id: 3,
    titre: 'Gestionnaire de mot de passe',
    description: 'Application sécurisée',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800',
    categorie: 'Sécurité'
  },
  {
    id: 4,
    titre: 'Installation BGP',
    description: 'Configuration protocole BGP',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    categorie: 'Réseau'
  },
  {
    id: 5,
    titre: 'Installation OSPF',
    description: 'Configuration protocole OSPF',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
    categorie: 'Réseau'
  },
  {
    id: 6,
    titre: 'Projet Python/Tkinter',
    description: 'Interface graphique',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800',
    categorie: 'Développement'
  },
  {
    id: 7,
    titre: 'Développement Python',
    description: 'Scripts et applications',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800',
    categorie: 'Développement'
  },
  {
    id: 8,
    titre: 'Installation réseau',
    description: 'Configuration réseau',
    image: 'https://images.unsplash.com/photo-1520869562399-e772f042f422?auto=format&fit=crop&q=80&w=800',
    categorie: 'Réseau'
  },
  {
    id: 9,
    titre: 'Active Directory',
    description: 'Configuration Windows Server',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=800',
    categorie: 'Système'
  }
];