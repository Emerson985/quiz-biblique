// Questions du Quiz Biblique
const questions = [
  // Ancien Testament
  {
    question: "Combien de jours Dieu a-t-il pris pour créer le monde ?",
    options: ["5 jours", "6 jours", "7 jours", "10 jours"],
    answer: 1,
    category: "Création"
  },
  {
    question: "Quel est le premier livre de la Bible ?",
    options: ["Exode", "Psaumes", "Genèse", "Matthieu"],
    answer: 2,
    category: "La Bible"
  },
  {
    question: "Combien de livres y a-t-il dans la Bible (canon catholique) ?",
    options: ["66", "73", "39", "27"],
    answer: 1,
    category: "La Bible"
  },
  {
    question: "Qui a construit l'arche selon la Bible ?",
    options: ["Abraham", "Moïse", "David", "Noé"],
    answer: 3,
    category: "Ancien Testament"
  },
  {
    question: "Quel homme de la Bible a vécu le plus longtemps ?",
    options: ["Noé", "Mathusalem", "Adam", "Seth"],
    answer: 1,
    category: "Ancien Testament"
  },
  {
    question: "Combien de plaies Dieu envoya-t-il sur l'Égypte ?",
    options: ["7", "10", "12", "5"],
    answer: 1,
    category: "Exode"
  },
  {
    question: "Qui reçut les dix commandements de Dieu sur le mont Sinaï ?",
    options: ["Abraham", "David", "Moïse", "Aaron"],
    answer: 2,
    category: "Exode"
  },
  {
    question: "Quel est le nom du premier homme créé selon la Genèse ?",
    options: ["Abel", "Caïn", "Noé", "Adam"],
    answer: 3,
    category: "Création"
  },
  {
    question: "Qui était le roi d'Israël connu pour sa grande sagesse ?",
    options: ["Saül", "David", "Salomon", "Josias"],
    answer: 2,
    category: "Rois"
  },
  {
    question: "Avec quoi David a-t-il tué le géant Goliath ?",
    options: ["Une épée", "Une fronde et une pierre", "Une lance", "Un arc"],
    answer: 1,
    category: "David"
  },
  {
    question: "Quelle mer Moïse a-t-il traversée à pied sec ?",
    options: ["La mer Morte", "La mer Rouge", "La mer Méditerranée", "La mer de Galilée"],
    answer: 1,
    category: "Exode"
  },
  {
    question: "Quel prophète fut avalé par un grand poisson ?",
    options: ["Élie", "Ésaïe", "Jonas", "Amos"],
    answer: 2,
    category: "Prophètes"
  },
  {
    question: "Qui était la femme d'Abraham ?",
    options: ["Rachel", "Sara", "Rebecca", "Léa"],
    answer: 1,
    category: "Patriarches"
  },
  {
    question: "Combien de fils Jacob avait-il ?",
    options: ["10", "11", "12", "13"],
    answer: 2,
    category: "Patriarches"
  },
  {
    question: "Quel arbre se trouvait au milieu du jardin d'Éden ?",
    options: ["L'arbre de vie", "L'arbre de la connaissance du bien et du mal", "Les deux précédents", "Le figuier"],
    answer: 2,
    category: "Création"
  },
  {
    question: "Qui a vendu son droit d'aînesse pour un plat de lentilles ?",
    options: ["Jacob", "Joseph", "Ésaü", "Ruben"],
    answer: 2,
    category: "Patriarches"
  },
  {
    question: "Dans quelle ville Jésus est-il né ?",
    options: ["Nazareth", "Jérusalem", "Bethléem", "Capharnaüm"],
    answer: 2,
    category: "Jésus"
  },
  {
    question: "Combien de disciples Jésus avait-il ?",
    options: ["7", "10", "12", "70"],
    answer: 2,
    category: "Jésus"
  },
  {
    question: "Qui a baptisé Jésus ?",
    options: ["Pierre", "Jean-Baptiste", "Paul", "Élie"],
    answer: 1,
    category: "Jésus"
  },
  {
    question: "Quel est le dernier livre de la Bible ?",
    options: ["Jean", "Jude", "Hébreux", "Apocalypse"],
    answer: 3,
    category: "La Bible"
  },
  {
    question: "Où Jésus a-t-il accompli son premier miracle ?",
    options: ["Jérusalem", "Nazareth", "Cana", "Bethsaïda"],
    answer: 2,
    category: "Jésus"
  },
  {
    question: "Quel était le premier miracle de Jésus ?",
    options: ["Guérir un aveugle", "Changer l'eau en vin", "Multiplier les pains", "Ressusciter Lazare"],
    answer: 1,
    category: "Jésus"
  },
  {
    question: "Combien de jours Jésus a-t-il jeûné dans le désert ?",
    options: ["20 jours", "30 jours", "40 jours", "7 jours"],
    answer: 2,
    category: "Jésus"
  },
  {
    question: "Qui a trahi Jésus pour 30 pièces d'argent ?",
    options: ["Pierre", "Thomas", "Judas Iscariote", "Barabbas"],
    answer: 2,
    category: "Jésus"
  },
  {
    question: "Comment s'appelait la mère de Jésus ?",
    options: ["Marie-Madeleine", "Marie", "Elisabeth", "Anne"],
    answer: 1,
    category: "Jésus"
  },
  {
    question: "Quel apôtre a renié Jésus trois fois ?",
    options: ["Jean", "Pierre", "Matthieu", "André"],
    answer: 1,
    category: "Apôtres"
  },
  {
    question: "Sur quelle montagne Moïse a-t-il reçu les tables de la loi ?",
    options: ["Mont Carmel", "Mont Hermon", "Mont Sinaï", "Mont Sion"],
    answer: 2,
    category: "Exode"
  },
  {
    question: "Qui fut le premier roi d'Israël ?",
    options: ["David", "Saül", "Salomon", "Jéroboam"],
    answer: 1,
    category: "Rois"
  },
  {
    question: "Quel psalmiste a écrit la majorité des Psaumes ?",
    options: ["Asaph", "Salomon", "Moïse", "David"],
    answer: 3,
    category: "Poésie"
  },
  {
    question: "Quelle femme courageuse est connue pour avoir sauvé le peuple juif en Perse ?",
    options: ["Ruth", "Déborah", "Esther", "Abigaïl"],
    answer: 2,
    category: "Femmes de la Bible"
  }
];
