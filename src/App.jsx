import { MusicLibrary } from './components/MusicLibrary.jsx'
import { sampleMusic } from './data/sampleMusic.js'

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
