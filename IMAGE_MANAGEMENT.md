# Guide de gestion des images

## Comment ajouter ou modifier des images sur le site

Ce guide explique comment gérer facilement les images sur le site Planète Mer. Le système est conçu pour être simple : uploadez vos images sur GitHub et référencez-les dans les fichiers appropriés.

## 📁 Structure des dossiers

Les images sont stockées dans `/public/images/uploads/`. Cette structure permet un accès direct depuis n'importe quelle page du site.

```
public/
└── images/
    └── uploads/        # Toutes les images du site
        ├── ocean-hero.jpg
        ├── blog-images/
        └── ...
```

## 🖼️ Types d'images et leur utilisation

### 1. Images de la page d'accueil

Modifiez le fichier `src/config/images.ts` pour changer les images de la page d'accueil :

```typescript
homepage: {
  hero: '/images/uploads/ocean-hero.jpg',      // Image principale
  testimonial1: '/images/uploads/marie.jpg',   // Photo témoignage 1
  testimonial2: '/images/uploads/jean.jpg',    // Photo témoignage 2
}
```

### 2. Images des articles de blog

#### Image principale de l'article (hero)

Dans le fichier markdown de l'article (ex: `src/content/blog/mon-article.md`), ajoutez le champ `image` dans le frontmatter :

```markdown
---
title: "Mon titre"
description: "Ma description"
publishDate: 2024-03-15
author: "Nom Auteur"
image: "/images/uploads/mon-image-hero.jpg"  # ← Ajoutez cette ligne
tags: ["tag1", "tag2"]
---
```

#### Images dans le contenu de l'article

Pour ajouter des images dans le corps de l'article, utilisez la syntaxe Markdown standard :

```markdown
## Mon paragraphe

Voici mon texte...

![Description de l'image](/images/uploads/mon-image.jpg)

Suite du texte...
```

### 3. Images de la page Missions

Modifiez `src/config/images.ts` :

```typescript
missions: {
  hero: '/images/uploads/missions-hero.jpg',
  biodiversity: '/images/uploads/biodiversity.jpg',
  resources: '/images/uploads/resources.jpg',
  restoration: '/images/uploads/restoration.jpg',
}
```

## 📝 Instructions étape par étape

### Pour ajouter une nouvelle image :

1. **Préparez votre image**
   - Format recommandé : JPG ou PNG
   - Taille recommandée : 1920x1080 pour les hero images, 800x600 pour les images de contenu
   - Poids : Optimisez pour le web (< 500KB idéalement)

2. **Uploadez l'image sur GitHub**
   - Allez dans le dossier `public/images/uploads/` sur GitHub
   - Cliquez sur "Add file" → "Upload files"
   - Glissez votre image ou sélectionnez-la
   - Commitez avec un message descriptif

3. **Référencez l'image**
   - Pour une page : modifiez `src/config/images.ts`
   - Pour un article : ajoutez le chemin dans le frontmatter ou le contenu

4. **Vérifiez le déploiement**
   - GitHub pushera automatiquement vers Netlify
   - Le site sera mis à jour en quelques minutes

### Pour modifier une image existante :

**Option 1 : Remplacer le fichier (simple)**
1. Uploadez une nouvelle image avec **exactement le même nom**
2. GitHub la remplacera automatiquement
3. Le site sera mis à jour sans autre modification

**Option 2 : Utiliser un nouveau fichier**
1. Uploadez la nouvelle image avec un nom différent
2. Mettez à jour la référence dans `src/config/images.ts` ou le fichier markdown
3. Commitez les changements

## 🎨 Bonnes pratiques

### Nommage des fichiers
- Utilisez des noms descriptifs : `ocean-cleanup-2024.jpg` plutôt que `image1.jpg`
- Pas d'espaces ni de caractères spéciaux : utilisez des tirets `-`
- Minuscules uniquement

### Organisation
- Créez des sous-dossiers si nécessaire : `/uploads/blog/2024/`
- Groupez les images par type ou par section

### Optimisation
- Compressez les images avant upload (TinyPNG, Squoosh, etc.)
- Utilisez le format approprié :
  - JPG pour les photos
  - PNG pour les images avec transparence
  - SVG pour les icônes et logos

## 🔧 Configuration avancée

### Images de fallback

Si une image n'est pas trouvée, le système affiche automatiquement une image de substitution. Ces images sont définies dans `src/config/images.ts` :

```typescript
fallback: {
  hero: 'data:image/svg+xml...',     // SVG inline pour les grandes images
  thumbnail: 'data:image/svg+xml...' // SVG inline pour les vignettes
}
```

### Composant Image personnalisé

Le site utilise un composant `Image.astro` qui gère automatiquement :
- Le chargement progressif (lazy loading)
- Les images de fallback
- L'optimisation des performances

## 🚀 Exemple complet

### Ajouter un nouvel article avec image :

1. **Créez le fichier markdown** : `src/content/blog/nouveau-projet.md`

```markdown
---
title: "Notre nouveau projet de conservation"
description: "Découvrez notre initiative pour protéger les récifs coralliens"
publishDate: 2024-03-20
author: "Marie Océan"
image: "/images/uploads/coral-reef-project.jpg"
tags: ["conservation", "récifs", "biodiversité"]
---

## Introduction

Notre nouveau projet vise à protéger les récifs coralliens...

![Récif corallien en bonne santé](/images/uploads/healthy-coral.jpg)

## Les actions prévues

Nous allons mettre en place...
```

2. **Uploadez les images** dans `/public/images/uploads/` :
   - `coral-reef-project.jpg` (image hero)
   - `healthy-coral.jpg` (image de contenu)

3. **Commitez et pushez** → Le site est automatiquement mis à jour !

## ❓ Résolution des problèmes

### L'image ne s'affiche pas
- Vérifiez le chemin : il doit commencer par `/images/uploads/`
- Assurez-vous que l'image est bien uploadée sur GitHub
- Vérifiez l'orthographe du nom de fichier (sensible à la casse)

### L'image est trop lourde
- Optimisez-la avant upload
- Formats recommandés : JPG 80% de qualité, PNG compressé

### Je veux une image différente sur mobile
- Contactez un développeur pour implémenter des images responsives

## 📞 Besoin d'aide ?

Si vous rencontrez des difficultés, n'hésitez pas à :
1. Vérifier ce guide
2. Regarder les exemples existants dans le code
3. Créer une issue sur GitHub pour demander de l'aide