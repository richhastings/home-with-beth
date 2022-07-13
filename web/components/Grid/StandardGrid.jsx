import Card from '../Card'

const StandardGrid = ({ items }) => (
  <div className="grid gap-5 lg:grid-cols-3">
    {items.map((item, i) => (
      <Card isLast={i === items.length - 1} {...item} key={`card${i}`} />
    ))}
  </div>
)

export default StandardGrid
