const focusAreas = [
  {
    title: 'Collect',
    description:
      'Bring together music from streaming platforms, YouTube, Bandcamp, local files, friends, and the wider internet.',
  },
  {
    title: 'Curate',
    description:
      'Add notes, moods, tags, and context so saved music becomes more than a list of links.',
  },
  {
    title: 'Revisit',
    description:
      'Return to albums, artists, and discoveries through a library that reflects personal meaning.',
  },
]

const sampleMusic = [
  {
    title: 'Midnight discovery',
    artist: 'Unknown artist',
    source: 'YouTube',
    tags: ['late night', 'ambient', 'to revisit'],
  },
  {
    title: 'Album that changed my taste',
    artist: 'Saved for later',
    source: 'Bandcamp',
    tags: ['album', 'personal history', 'deep listen'],
  },
]

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <FocusAreas />
      <LibraryPreview />
      <LearningNote />
    </main>
  )
}

function Header() {
  return (
    <header>
      <p>Sama</p>
      <nav aria-label="Primary navigation">
        <a href="#vision">Vision</a>
        <a href="#library-preview">Library</a>
        <a href="#learning">Learning</a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="vision">
      <p>Personal music curation</p>
      <h1>A place to collect, understand, and revisit music on your own terms.</h1>
      <p>
        Sama is an early-stage platform for organizing music from scattered sources
        into a library shaped by notes, moods, tags, memories, and intentional
        collections.
      </p>
    </section>
  )
}

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

function LibraryPreview() {
  return (
    <section id="library-preview" aria-labelledby="library-preview-heading">
      <h2 id="library-preview-heading">Early library preview</h2>
      <p>
        Phase 1 starts with manual entries. The goal is to understand the shape of
        the music library before adding integrations or automation.
      </p>
      <div>
        {sampleMusic.map((item) => (
          <article key={item.title}>
            <p>{item.source}</p>
            <h3>{item.title}</h3>
            <p>{item.artist}</p>
            <ul>
              {item.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

function LearningNote() {
  return (
    <section id="learning" aria-labelledby="learning-heading">
      <h2 id="learning-heading">Built as a learning project</h2>
      <p>
        This repository is both a product and a record of learning React, web
        development, and software engineering fundamentals step by step.
      </p>
    </section>
  )
}

export default App
