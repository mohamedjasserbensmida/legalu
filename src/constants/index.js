import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    document,
    docker,
    meta,
    starbucks,
    stock,
    tresorie,
    fournisseur,
    client,
    calculator,
    shopify,
    bomberman,
    HPDBMS,
    algorithms,
    threejs,
  } from "../assets";
  
  export const navLinks = [
   
    
    {
      id: "about",
      title: "Nos Packs",
    },
    {
      id: "experience",
      title: "Fonctionnalités",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "LEGENDALU Avancée",
      icon: web,
      description: [
        "Gestion Des Clients et Fournisseur.",
        "Création , modification et suppression Des Matieres Premier ",
        "Création , modification et suppression de tous types des modeles",
        "Optimisation et débitage des barres, gestion des chutes et des barres multiples, recherche de la longueur de barre idéale",
        "Géneration des devis en quelques secondes",
        "Generation des facture",
        "Assistance téléphonique Ou par Google Meet"
      ],
      prix:"50 TND"
    },
    {
      title: "LEGENDALU PRO",
      icon: mobile,
      description: [
        "Gestion Des Clients et Fournisseur.",
        "Création , modification et suppression Des Matieres Premier ",
        "Création , modification et suppression de tous types des modeles",
        "Optimisation et débitage des barres, gestion des chutes et des barres multiples, recherche de la longueur de barre idéale",
        "Géneration des devis en quelques secondes",
        "Generation des facture",
        "Trésorerie : Recettes et Dépenses.",
        "Assistance téléphonique Ou par Google Meet"
      ],
      prix:"80 TND"
    },
  ];
  
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Gestion des Clients",
      company_name: "Software Name",
      icon: client,
      iconBg: "#383E56",
      date: "Jan 2023 - Present",
      points: [
        "Devis – Bon de livraison – Factures – Suivi des règlements – Extrait de compte."
      ],
    },
    {
      title: "Gestion des Fournisseurs",
      company_name: "Software Name",
      icon: fournisseur,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Commandes – Bon de livraison – Factures – Retenue à la source – Échéanciers – Extrait de compte."
      ],
    },
    {
      title: "Trésorerie",
      company_name: "Software Name",
      icon: tresorie,
      iconBg: "#383E56",
      date: "Jan 2023 - Present",
      points: [
        "Recettes et Dépenses."
      ],
    },
    {
      title: "Gestion du Stock",
      company_name: "Software Name",
      icon: stock,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Stock des matières premières : profilés, joints, accessoires, etc."
      ],
    },
    {
      title: "Modèles de Documents",
      company_name: "Software Name",
      icon: document,
      iconBg: "#383E56",
      date: "Jan 2023 - Present",
      points: [
        "Création de modèles de documents personnalisés."
      ],
    },
    {
      title: "Calculs des Matériels",
      company_name: "Software Name",
      icon: calculator,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Calcul de la liste des matériels pour profilés, accessoires, vitrages, panneaux."
      ],
    },
    {
      title: "Optimisation et Débitage",
      company_name: "Software Name",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2023 - Present",
      points: [
        "Optimisation et débitage des barres, gestion des chutes et des barres multiples.",
        "Recherche de la longueur de barre idéale.",
        "Gestion des profils avec ou sans couvre joint.",
        "Gestion des déchets récupérables."
      ],
    },
    {
      title: "Édition",
      company_name: "Software Name",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Plan de coupe, Plan de montage, Étiquettes pour dormant et ouvrant."
      ],
    },
   
  ];
  
  
  const testimonials = [
    {
      testimonial:
        "Merci Beaucoup al logiciel , yarhem weldikom service tayara !",
      name: "Monji Bhar",
      designation: "Gérant Societe AluPro",
      company: "AluMenuiserie Pro",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      testimonial:
        "L'optimisation et le débitage des barres sont incroyablement précis. Le gain de temps et de ressources est impressionnant.",
      name: "Sophie Laurent",
      designation: "Chef de Projet",
      company: "AluInnov",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
  ];
  
  
  const projects = [
    {
      name: "Bomberman",
      description:
        "A Java swing game that is inspired by the classic Bomberman game.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Java-Swing",
          color: "green-text-gradient",
        },
      ],
      image: bomberman,
      source_code_link: "https://github.com/tpSpace/Bomberman-Adventure?organization=tpSpace&organization=tpSpace",
    },
    {
      name: "Hospitals DBMS",
      description:
        "Web application that allows users to book appointments with doctors, and allows doctors to manage their patients.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: HPDBMS,
      source_code_link: "https://github.com/tpSpace/Hospital-DBMS",
    },
    {
      name: "Algorithms Visualizer",
      description:
        "A simple web application that visualizes some of the most popular algorithms.",
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: algorithms,
      source_code_link: "https://github.com/tpSpace/Algorithms-Visualizer",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };