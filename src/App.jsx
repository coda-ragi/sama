const features = [
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
    <>
      <Header />
      <main>
        <Hero />
        <FeatureList />
      </main>
      <Footer />
    </>
  )
}

function Header() {
  return (
    <header>
      <p>Sama</p>
      <nav aria-label="Primary navigation">
        <a href="#start">Get Started</a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="start">
      <p>Personal music curation</p>
      <h1>Welcome to Sama</h1>
      <p>A simple place to collect, curate, and revisit music that matters to you.</p>
      <a href="#features">Start Now</a>
    </section>
  )
}

function FeatureList() {
  return (
    <section id="features" aria-labelledby="features-heading">
      <h2 id="features-heading">What you can do</h2>
      <div>
        {features.map((feature) => (
          <article key={feature.title}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <p>© 2026 Sama</p>
    </footer>
  )
}

export default App
