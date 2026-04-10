# 📖 Quiz Biblique

Jeu de quiz interactif sur la Bible (Ancien & Nouveau Testament), hébergé gratuitement sur **GitHub Pages** et monétisé via **Google AdSense**.

## 🎮 Démo en ligne

👉 **[https://emerson985.github.io/quiz-biblique/](https://emerson985.github.io/quiz-biblique/)**

---

## 🚀 Hébergement sur GitHub Pages (gratuit)

Le site est déployé automatiquement à chaque push sur la branche `main` grâce au workflow GitHub Actions inclus.

### Étapes pour activer GitHub Pages

1. Aller dans **Settings → Pages** de ce dépôt.
2. Sous **Source**, choisir **GitHub Actions**.
3. Faire un `git push` sur `main` — le workflow `deploy.yml` s'occupera du reste.
4. Votre jeu sera disponible à `https://<votre-pseudo>.github.io/quiz-biblique/`.

---

## 💰 Monétisation avec Google AdSense

Le jeu est prêt pour afficher des publicités Google AdSense sur :
- Le bandeau en haut de page (728×90)
- Les deux colonnes latérales (300×600)
- Un espace au milieu du quiz
- Un encart sur la page des résultats

### Étapes pour activer les publicités

1. Créer un compte sur **[https://adsense.google.com](https://adsense.google.com)**.
2. Ajouter votre site et attendre l'approbation Google (quelques jours à quelques semaines).
3. Une fois approuvé, remplacer **toutes** les occurrences de `ca-pub-XXXXXXXXXXXXXXXX` dans `index.html` par votre vrai **ID Éditeur AdSense** (format `ca-pub-1234567890123456`).
4. Remplacer les slots fictifs (`1111111111`, `2222222222`, etc.) par vos vrais **Ad Unit IDs** créés dans votre tableau de bord AdSense.
5. Faire un `git push` pour mettre en ligne.

> **Conseil :** Plus vous avez de visiteurs, plus vous gagnez. Partagez le jeu sur les réseaux sociaux, groupes WhatsApp et Facebook !

---

## 📁 Structure du projet

```
quiz-biblique/
├── index.html       ← Page principale du jeu + emplacements AdSense
├── style.css        ← Styles visuels
├── script.js        ← Logique du jeu
├── questions.js     ← Base de 30 questions bibliques en français
└── .github/
    └── workflows/
        └── deploy.yml  ← Déploiement automatique sur GitHub Pages
```

---

## 🛠️ Développement local

Ouvrez simplement `index.html` dans votre navigateur — aucune dépendance ni build tool requis.

---

## 📜 Licence

Boost Software License 1.0 — voir [LICENSE](LICENSE).