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

export default FeatureList