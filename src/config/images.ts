/**
 * Configuration centralisée des images du site
 *
 * Pour ajouter ou modifier une image:
 * 1. Uploadez votre image dans /public/images/uploads/
 * 2. Modifiez ce fichier pour pointer vers la nouvelle image
 * 3. Commitez et pushez vers GitHub - Netlify déploiera automatiquement
 */

export const siteImages = {
  // Images de la page d'accueil
  homepage: {
    hero: '/images/uploads/ocean-hero.jpg', // Image principale de la page d'accueil
    testimonial1: '/images/uploads/testimonial-1.jpg', // Photo du premier témoignage
    testimonial2: '/images/uploads/testimonial-2.jpg', // Photo du deuxième témoignage
  },

  // Images de la page Missions
  missions: {
    hero: '/images/uploads/missions-hero.jpg', // Image principale de la page missions
    biodiversity: '/images/uploads/biodiversity.jpg', // Protection de la biodiversité
    resources: '/images/uploads/resources.jpg', // Gestion des ressources
    restoration: '/images/uploads/restoration.jpg', // Restauration des milieux
  },

  // Images de la page Don
  donation: {
    hero: '/images/uploads/donation-hero.jpg', // Image principale de la page de don
  },

  // Images par défaut pour les blogs (si pas d'image spécifique)
  blog: {
    defaultHero: '/images/uploads/blog-default.jpg', // Image par défaut pour les articles
    defaultThumbnail: '/images/uploads/blog-thumb-default.jpg', // Vignette par défaut
  },

  // Images de fallback (si l'image n'existe pas)
  fallback: {
    hero: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"%3E%3Cdefs%3E%3ClinearGradient id="ocean" x1="0%25" y1="0%25" x2="0%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%230A2342"%3E%3C/stop%3E%3Cstop offset="100%25" style="stop-color:%231e40af"%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill="url(%23ocean)" width="1200" height="600"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="white" font-size="24" font-family="sans-serif"%3EPlanète Mer%3C/text%3E%3C/svg%3E',
    thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Cdefs%3E%3ClinearGradient id="ocean2" x1="0%25" y1="0%25" x2="0%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%230A2342"%3E%3C/stop%3E%3Cstop offset="100%25" style="stop-color:%231e40af"%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill="url(%23ocean2)" width="400" height="300"/%3E%3C/svg%3E',
  }
};

/**
 * Fonction helper pour obtenir une image avec fallback
 */
export function getImage(path: string | undefined, fallbackType: 'hero' | 'thumbnail' = 'hero'): string {
  if (!path) {
    return siteImages.fallback[fallbackType];
  }
  return path;
}