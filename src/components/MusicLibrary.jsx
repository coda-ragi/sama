import { MusicCard } from './MusicCard.jsx'

export function MusicLibrary({ items }) {
  return (
    <section id="library" aria-labelledby="library-heading">
      <h2 id="library-heading">Library</h2>
      <p>
        Phase 1 starts with manual entries. The goal is to understand the shape of
        the music library before adding integrations or automation.
      </p>

      <div>
        {items.map((item) => (
          <MusicCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
