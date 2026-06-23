# Product Requirements Document: Phase 1

## Product Name

Sama

## Phase

Phase 1: Personal Music Catalog

## Goal

Build the first usable version of Sama as a personal music catalog.

The goal is not to stream music. The goal is to help a user manually save, organize, rate, and reflect on albums they care about.

## Problem

Music listening is often spread across many places: streaming apps, YouTube, Bandcamp, recommendations, screenshots, notes, and memory.

This makes it hard to keep a personal record of albums that matter, albums to revisit, and thoughts about past listening experiences.

## Target User

The Phase 1 user is someone who wants a simple personal space to track albums.

They may want to remember:

- What albums they listened to
- Which albums they liked
- What rating they gave an album
- What they thought or felt while listening
- Which albums they want to find again later

## Product Scope

Phase 1 should focus only on a simple album catalog.

Users can:

- Add albums
- View albums
- Search albums
- Rate albums
- Add notes

## Non-Goals

Phase 1 should not include:

- Music streaming
- Audio playback
- Spotify integration
- YouTube integration
- Bandcamp integration
- User accounts
- Social features
- Public profiles
- AI recommendations
- Complex statistics
- Mobile app development
- Backend database work

These features may be considered later, but they are not required for the first version.

## Core Features

### 1. Add Albums

The user should be able to manually add an album to their catalog.

Each album should include:

- Album title
- Artist name
- Release year, if known
- Genre or tags, if desired
- Rating
- Notes

The first version does not need to be perfect. The form should be simple and easy to understand.

### 2. View Albums

The user should be able to see all saved albums in a library view.

Each album card should show the most important information first:

- Album title
- Artist name
- Rating
- Notes preview

The view should make it easy to scan the catalog quickly.

### 3. Search Albums

The user should be able to search their catalog.

Search should work with:

- Album title
- Artist name
- Notes
- Tags, if tags are included

The search does not need advanced filters in Phase 1. A simple text search is enough.

### 4. Rate Albums

The user should be able to give each album a rating.

The rating system should be simple. For Phase 1, a 1 to 5 rating scale is enough.

Example:

```txt
1 = Did not enjoy
2 = Some good moments
3 = Solid
4 = Great
5 = Personal favorite
```

The exact labels can change later.

### 5. Add Notes

The user should be able to write personal notes for each album.

Notes can include:

- First impressions
- Favorite tracks
- Memories connected to the album
- Mood or listening context
- Reasons to revisit the album

Notes are important because Sama is meant to be personal, not just a list of album names.

## Suggested Album Data Model

For Phase 1, an album can be represented with a simple object:

```js
{
  id: string,
  title: string,
  artist: string,
  releaseYear: string,
  rating: number,
  notes: string,
  tags: string[],
  createdAt: string,
  updatedAt: string
}
```

This model can grow later if the product needs more detail.

## User Flow

The basic user flow should be:

1. User opens Sama.
2. User sees their album catalog.
3. User adds a new album with title, artist, rating, and notes.
4. New album appears in the catalog.
5. User searches for an album later.
6. User finds the album and reads their notes.

## Success Criteria

Phase 1 is successful when a user can:

- Add an album without confusion
- See all added albums
- Search for a saved album
- Rate an album
- Add and read personal notes
- Return later and still see their saved catalog

## Beginner-Friendly Technical Direction

The first version should stay simple.

Recommended technical approach:

- Use React components for the interface.
- Use React state to manage albums while the app is open.
- Use `localStorage` to save albums in the browser.
- Avoid backend work until the frontend experience is clear.
- Avoid complex state management libraries for now.

The first version should prioritize clarity over cleverness.

## Phase 1 Build Order

1. Create sample album data.
2. Display albums in a catalog view.
3. Create an album card component.
4. Add a form for new albums.
5. Store submitted albums in React state.
6. Add a simple search input.
7. Add rating support.
8. Add notes support.
9. Save albums to `localStorage`.
10. Improve layout and empty states.

## Open Questions

- Should ratings allow half points later?
- Should tags be included in the first form or added after the basics work?
- Should album cover images be part of Phase 1 or saved for later?
- Should albums be editable in Phase 1, or only added and viewed?

## Phase 1 Summary

Sama Phase 1 should be a simple personal album catalog.

It should help users answer:

What albums have I listened to, how did I feel about them, and what do I want to remember?
