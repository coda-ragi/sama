# Code Walkthrough

Date: 2026-06-24

This page explains the existing Sama codebase in beginner-friendly React terms. It focuses on what each file and component does, why it exists, and the React knowledge behind the decisions.

## Big Picture

This is a beginner-friendly React and Vite app for a music curation project called **Sama**.

Right now, the app is mostly a static prototype. It does not yet have forms, saving, deleting, filtering, or browser storage. The purpose of the current code is to establish:

- The product idea.
- The first page structure.
- A reusable music library display.
- A sample data shape for future features.

The current React concept being practiced is mostly **components, props, and rendering lists**.

## How The App Starts

File: `index.html`

```html
<div id="root"></div>
<script type="module" src="/src/main.jsx"></script>
```

This file gives React one empty HTML element: `#root`.

React takes control of that element and renders the app inside it.

Rationale:

- HTML provides the starting container.
- React handles the actual interface.
- Vite loads `/src/main.jsx` as the JavaScript entry point.

## React Entry Point

File: `src/main.jsx`

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

This is the React bootstrapping file.

Important concepts:

- `createRoot(...)` tells React where to render.
- `document.getElementById('root')` finds the HTML element from `index.html`.
- `<App />` is the top-level React component.
- `<StrictMode>` helps catch common React mistakes during development.

Rationale:

- Keeping `main.jsx` small is good. Its only job is to start React.
- The actual app UI belongs in `App.jsx`, not in the boot file.

## Main App Structure

File: `src/App.jsx`

```jsx
function App() {
  return (
    <main>
      <Header />
      <Hero />
      <FocusAreas />
      <MusicLibrary items={sampleMusic} />
      <LearningNote />
    </main>
  )
}
```

`App` is the root UI component.

It renders the page in sections:

- `Header`
- `Hero`
- `FocusAreas`
- `MusicLibrary`
- `LearningNote`

Rationale:

- `App` acts like the page coordinator.
- It does not contain every detail directly.
- Smaller components make the page easier to read and change.

React knowledge:

- Components are reusable pieces of UI.
- JSX lets you write HTML-like syntax inside JavaScript.
- `<Header />` means "render the Header component here."

## Data Ownership

At the top of `App.jsx`:

```jsx
import { MusicLibrary } from './components/MusicLibrary.jsx'
import { sampleMusic } from './data/sampleMusic.js'
```

Then:

```jsx
<MusicLibrary items={sampleMusic} />
```

The `App` component imports the sample music data and passes it down to `MusicLibrary`.

Rationale:

- `App` currently owns the page-level data.
- `MusicLibrary` only needs to know what items it should display.
- This follows React's common pattern: data flows from parent to child through props.

Important beginner concept:

```jsx
items={sampleMusic}
```

This means:

- The prop name is `items`.
- The value is the `sampleMusic` array.
- `MusicLibrary` receives it like this:

```jsx
export function MusicLibrary({ items }) {
```

There is no React state yet. That is intentional at this stage because the data is static.

Later, when users can add or delete music, `App` will likely own state like:

```jsx
const [musicItems, setMusicItems] = useState(sampleMusic)
```

But that is not needed yet.

## Header Component

```jsx
function Header() {
  return (
    <header>
      <p>Sama</p>
      <nav aria-label="Primary navigation">
        <a href="#vision">Vision</a>
        <a href="#library">Library</a>
        <a href="#learning">Learning</a>
      </nav>
    </header>
  )
}
```

The `Header` shows the app name and navigation links.

Rationale:

- The header gives the app identity: `Sama`.
- The nav links jump to sections on the same page.
- This is simple and appropriate before routing is needed.

Accessibility decision:

```jsx
<nav aria-label="Primary navigation">
```

This helps screen readers understand what this navigation area is for.

Knowledge behind the links:

```jsx
<a href="#vision">Vision</a>
```

This link jumps to an element with:

```jsx
id="vision"
```

So the page uses normal browser anchor navigation instead of React Router.

That is a good early decision because there is only one page.

## Hero Component

```jsx
function Hero() {
  return (
    <section id="vision">
      <p>Personal music curation</p>
      <h1>A place to collect, understand, and revisit music on your own terms.</h1>
      <p>
        Sama is an early-stage platform...
      </p>
    </section>
  )
}
```

The `Hero` introduces the product.

Rationale:

- Every landing page or app homepage usually needs a clear main message.
- The `h1` explains the central purpose.
- The section has `id="vision"` so the header nav can link to it.

HTML knowledge:

- There should usually be one main `h1` per page.
- `section` groups related content.
- The first paragraph acts like a small label or eyebrow text.

## Focus Areas Data

```jsx
const focusAreas = [
  {
    title: 'Collect',
    description: 'Bring together music...',
  },
  {
    title: 'Curate',
    description: 'Add notes, moods...',
  },
  {
    title: 'Revisit',
    description: 'Return to albums...',
  },
]
```

This is a plain JavaScript array.

Rationale:

- The three focus areas are data-like content.
- Keeping them in an array avoids repeating the same JSX three times.
- If you want to add another focus area later, you add another object.

React knowledge:

- Arrays are commonly used to render repeated UI.
- Each object represents one card or article.

## FocusAreas Component

```jsx
function FocusAreas() {
  return (
    <section aria-labelledby="focus-heading">
      <h2 id="focus-heading">What the platform should help with</h2>
      <div>
        {focusAreas.map((area) => (
          <article key={area.title}>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
```

This component displays the `Collect`, `Curate`, and `Revisit` items.

Important React concept:

```jsx
focusAreas.map((area) => (
```

`.map()` loops through the array and returns one `<article>` per item.

Rationale:

- This teaches the most common React list-rendering pattern.
- The UI is generated from data instead of being manually duplicated.

Important React decision:

```jsx
key={area.title}
```

React needs a `key` when rendering lists.

The key helps React understand which item is which if the list changes.

In this case, `area.title` works because the titles are unique: `Collect`, `Curate`, `Revisit`.

Accessibility decision:

```jsx
<section aria-labelledby="focus-heading">
<h2 id="focus-heading">
```

This connects the section to its heading for assistive technology.

## MusicLibrary Component

File: `src/components/MusicLibrary.jsx`

```jsx
export function MusicLibrary({ items }) {
  return (
    <section id="library" aria-labelledby="library-heading">
      <h2 id="library-heading">Library</h2>
      <p>
        Phase 1 starts with manual entries...
      </p>

      <div>
        {items.map((item) => (
          <MusicCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
```

`MusicLibrary` receives an `items` prop and displays a list of music cards.

Rationale:

- The library section should not care where the music comes from.
- It only cares that it receives an array of items.
- This makes it easier later to replace sample data with real state or `localStorage`.

Important React knowledge:

```jsx
export function MusicLibrary({ items })
```

This is a named export. Other files import it like:

```jsx
import { MusicLibrary } from './components/MusicLibrary.jsx'
```

The `{ items }` syntax means the component expects props shaped like:

```jsx
{
  items: [...]
}
```

List rendering:

```jsx
items.map((item) => (
  <MusicCard key={item.id} item={item} />
))
```

For each music item, the component renders one `MusicCard`.

Rationale for `key={item.id}`:

- `id` is better than title because titles may repeat.
- React keys should be stable and unique.
- This prepares the code for future editing and deleting.

## MusicCard Component

File: `src/components/MusicCard.jsx`

```jsx
export function MusicCard({ item }) {
  return (
    <article>
      <p>{item.type}</p>
      <h3>{item.title}</h3>
      <p>{item.artist}</p>
      <p>Source: {item.source}</p>
      <p>{item.notes}</p>

      <TagList label="Tags" values={item.tags} />
      <TagList label="Moods" values={item.moods} />
    </article>
  )
}
```

`MusicCard` displays one music item.

Rationale:

- Each music item deserves its own component.
- This keeps `MusicLibrary` clean.
- Later, edit or delete buttons can be added to `MusicCard` without cluttering the library component.

Semantic HTML decision:

```jsx
<article>
```

An `article` is appropriate because each card represents a standalone piece of content.

Data displayed:

- `type`
- `title`
- `artist`
- `source`
- `notes`
- `tags`
- `moods`

Important design decision:

```jsx
<TagList label="Tags" values={item.tags} />
<TagList label="Moods" values={item.moods} />
```

Tags and moods have the same display pattern, so the code uses a helper component instead of duplicating the same markup twice.

## TagList Component

```jsx
function TagList({ label, values }) {
  if (values.length === 0) {
    return null
  }

  return (
    <div>
      <p>{label}</p>
      <ul>
        {values.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
    </div>
  )
}
```

`TagList` displays either tags or moods.

Rationale:

- Tags and moods are both arrays of strings.
- The same UI can handle both.
- The `label` prop changes the heading text.

Important React concept:

```jsx
if (values.length === 0) {
  return null
}
```

Returning `null` means "render nothing."

This is useful because if a song has no moods or tags, the app should not show an empty list.

List rendering:

```jsx
values.map((value) => (
  <li key={value}>{value}</li>
))
```

Each tag or mood becomes an `<li>`.

Rationale for `key={value}`:

- It works if each tag or mood is unique inside that list.
- If duplicate tags become possible later, this may need a stronger key.

## Sample Music Data

File: `src/data/sampleMusic.js`

```jsx
export const sampleMusic = [
  {
    id: 'midnight-discovery',
    title: 'Midnight discovery',
    artist: 'Unknown artist',
    type: 'discovery',
    source: 'YouTube',
    sourceUrl: '',
    notes: 'Saved because...',
    tags: ['ambient', 'to revisit'],
    moods: ['late night', 'calm'],
    collectionIds: [],
    createdAt: '2026-06-23T00:00:00.000Z',
    updatedAt: '2026-06-23T00:00:00.000Z',
  },
]
```

This file stores temporary example data.

Rationale:

- It lets the UI be built before forms or storage exist.
- It defines the expected shape of a music item.
- It keeps data separate from components.

Important data-model decisions:

- `id`: unique identifier for React keys and future editing or deleting.
- `title`: name of the track, album, artist, or discovery.
- `artist`: associated artist name.
- `type`: allows different kinds of music entries.
- `source`: where it came from, like YouTube or Bandcamp.
- `sourceUrl`: planned for clickable links later, currently unused.
- `notes`: personal meaning or context.
- `tags`: organizational labels.
- `moods`: emotional or contextual labels.
- `collectionIds`: prepares for future collections.
- `createdAt` and `updatedAt`: prepare for sorting, editing history, and persistence.

Good decision:

The data model is flexible. Instead of creating separate models for tracks, albums, artists, and discoveries immediately, the project starts with one general `musicItem` shape.

That is smart for an early app because the product is still being discovered.

## Current Component Responsibility

Current ownership looks like this:

```txt
App
  owns page structure
  imports sampleMusic
  passes items to MusicLibrary

MusicLibrary
  receives items
  renders a list
  passes each item to MusicCard

MusicCard
  receives one item
  displays item details
  uses TagList for repeated list UI

TagList
  receives label and values
  renders tags or moods
```

This is a clean beginner React structure.

The data flow is one-way:

```txt
sampleMusic -> App -> MusicLibrary -> MusicCard -> TagList
```

That is exactly how React apps usually grow.

## What State Exists Right Now

There is no React state yet.

That means:

- No `useState`.
- No form input.
- No add or delete behavior.
- No persistence.

This is okay because the current goal is displaying static data.

When the app becomes interactive, state will likely belong in `App` because multiple components may need access to the music library.

For example:

- `MusicForm` would add items.
- `MusicLibrary` would display items.
- `SearchAndFilters` would filter items.

Since all of those depend on the same music list, `App` would be the natural owner.

## Tooling Files

File: `vite.config.js`

```jsx
export default defineConfig({
  plugins: [react()],
})
```

This tells Vite to use the React plugin.

Rationale:

- Vite handles the local dev server and builds.
- The React plugin enables JSX and React-specific tooling.

File: `eslint.config.js`

This config enables linting for JavaScript and JSX.

Rationale:

- ESLint catches common mistakes.
- React Hooks rules help prevent incorrect hook usage later.
- React Refresh rules support Vite's fast development updates.

File: `package.json`

Important scripts:

```json
"dev": "vite",
"build": "vite build",
"lint": "eslint .",
"preview": "vite preview"
```

Meaning:

- `npm run dev`: start local dev server.
- `npm run build`: create production build.
- `npm run lint`: check code quality.
- `npm run preview`: preview the built app.

## Overall Rationale

The current code is intentionally small and educational.

Good decisions already present:

- Components are separated by responsibility.
- Sample data is separate from UI.
- Props are used for parent-to-child data flow.
- Lists are rendered with `.map()`.
- Stable IDs are used as React keys for music items.
- Semantic HTML like `main`, `section`, `header`, `nav`, and `article` is used.
- Accessibility basics are present with `aria-label` and `aria-labelledby`.
- The data model prepares for future features without building them too early.

## Natural Next Step

The next natural feature would be a small manual `MusicForm`.

Before coding that, the important concept to understand is `useState`, because adding music means the library can no longer be static.
