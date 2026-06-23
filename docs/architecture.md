# Architecture

This document captures the current technical direction for Sama. It should evolve as the product becomes clearer.

## Phase 1 Direction

Phase 1 should stay intentionally small: a client-only React app for manually building a personal music library.

The first usable version should allow manual curation before adding integrations, automation, playback, or backend infrastructure.

## Scope

Phase 1 should support:

- Manual music item creation
- A visible saved library
- Basic track, album, artist, and discovery information
- Personal notes
- Tags and moods
- Source information and optional source URLs
- Simple collections
- Search or filtering
- Browser-based persistence

Phase 1 should not include:

- Spotify integration
- YouTube integration
- Bandcamp integration
- AI recommendations
- Full music playback
- Public profiles
- Social features
- Mobile app development
- Complex import or export tools
- Authentication
- Backend storage

## Application Shape

The app should begin as a frontend-only Vite and React application.

Recommended responsibilities:

- React components handle the interface.
- React state handles the current library, form input, filters, and collections.
- `localStorage` keeps personal data available between browser sessions.
- A small storage module should isolate persistence logic from UI code.

## Data Model

For Phase 1, use one flexible `musicItem` model instead of separate track, album, and artist entities.

```js
{
  id: string,
  title: string,
  artist: string,
  type: 'track' | 'album' | 'artist' | 'discovery',
  source: string,
  sourceUrl: string,
  notes: string,
  tags: string[],
  moods: string[],
  collectionIds: string[],
  createdAt: string,
  updatedAt: string
}
```

Collections can stay simple:

```js
{
  id: string,
  name: string,
  description: string,
  createdAt: string
}
```

This keeps the early app flexible while the right long-term structure becomes clearer through use.

## Suggested Source Structure

The project does not need all of these files immediately, but this is the preferred direction as the app grows:

```txt
src/
  App.jsx
  main.jsx
  data/
    sampleMusic.js
  components/
    Header.jsx
    MusicForm.jsx
    MusicLibrary.jsx
    MusicCard.jsx
    SearchAndFilters.jsx
    CollectionList.jsx
  storage/
    musicStorage.js
  styles/
    index.css
```

## Build Order

1. Replace the landing-page preview with a real library interface.
2. Add static sample data using the final `musicItem` shape.
3. Build `MusicLibrary` and `MusicCard`.
4. Add a manual `MusicForm`.
5. Add create and delete functionality.
6. Add notes, tags, moods, source, and source URL fields.
7. Add search and basic filters.
8. Add `localStorage` persistence.
9. Add simple collections.
10. Polish layout, empty states, and mobile responsiveness.

## Phase 1 Success Question

Sama's first phase is successful if it answers this question well:

Can I manually save music I care about, describe why it matters, and find it again later?
