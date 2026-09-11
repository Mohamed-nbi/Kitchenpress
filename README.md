# KitchenPress

Site vitrine premium pour **KitchenPress**, cuisiniste sur mesure — *« Nous compressons les prix, pas la qualité. »*

Stack : Vite + React + TypeScript + Tailwind CSS + Framer Motion.

## Démarrer le projet

```bash
npm install
npm run dev       # serveur de développement
npm run build      # build de production dans /dist
npm run preview    # prévisualiser le build de production
```

## Configuration centralisée

Toutes les informations modifiables (téléphone, WhatsApp, email, adresse,
lien Google Maps, réseaux sociaux, horaires d'ouverture, prix affichés dans
l'animation de compression) se trouvent dans un seul fichier :

```
src/config/site.ts
```

Les cuisines de la galerie (nom, catégorie, description, palette de
couleurs) sont dans :

```
src/config/kitchens.ts
```

## Emplacements à remplacer avant mise en ligne

- `src/config/site.ts` : toutes les valeurs entre crochets `[...]` (numéro,
  WhatsApp, email, adresse, lien Google Maps, réseaux sociaux).
- Section Showroom (`src/components/ShowroomSection.tsx`) : remplacer
  l'emplacement `[REMPLACER PAR PHOTO DU SHOWROOM]` par une vraie photo.
- Section Avis clients (`src/components/Testimonials.tsx`) : remplacer les
  `[AVIS CLIENT 1/2/3]` par de vrais avis.
- Section Visite virtuelle (`src/components/VirtualShowroom.tsx`) : un
  emplacement clairement commenté dans le code indique où intégrer une
  vraie visite Matterport / 360° / Three.js.
- `index.html` : remplacer `/og-image.jpg` par une vraie image Open Graph
  (1200×630) et mettre à jour les données structurées `LocalBusiness`.

## Identité visuelle

Le site n'utilise aucune photo de stock présentée comme une réalisation
réelle. Les illustrations de cuisines sont des SVG signature générés dans
`src/components/KitchenScene.tsx`, réutilisés (avec différentes palettes)
dans le Hero, la galerie, le plan 3D et la visite virtuelle.
