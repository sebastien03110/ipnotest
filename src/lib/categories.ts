export const categories = {
  fiscalite: {
    name: 'Fiscalité',
    slug: 'fiscalite',
    description: 'Actualités et analyses des évolutions fiscales impactant la gestion de patrimoine'
  },
  succession: {
    name: 'Succession',
    slug: 'succession',
    description: 'Guides et conseils pour la transmission du patrimoine'
  },
  'gestion-patrimoniale': {
    name: 'Gestion patrimoniale',
    slug: 'gestion-patrimoniale',
    description: 'Stratégies et optimisations pour la gestion de patrimoine'
  },
  immobilier: {
    name: 'Immobilier',
    slug: 'immobilier',
    description: 'Expertise immobilière et conseils pour l\'investissement'
  }
} as const;

export type CategorySlug = keyof typeof categories;
export type CategoryName = (typeof categories)[CategorySlug]['name'];

// Liste des catégories disponibles
export const categoryList = Object.values(categories).map(cat => ({
  value: cat.name,
  label: cat.name,
  slug: cat.slug
}));

// Map pour convertir les slugs en noms de catégories
export const categoryMap = Object.fromEntries(
  Object.entries(categories).map(([slug, info]) => [slug, info])
) as Record<CategorySlug, typeof categories[CategorySlug]>;

// Fonction utilitaire pour obtenir une catégorie par son slug
export function getCategoryBySlug(slug: string) {
  return categories[slug as CategorySlug];
}

// Fonction utilitaire pour obtenir une catégorie par son nom
export function getCategoryByName(name: string) {
  return Object.values(categories).find(cat => cat.name === name);
}