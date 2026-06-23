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
