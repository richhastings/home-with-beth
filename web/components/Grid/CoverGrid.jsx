import Heading from '../Heading'

const CoverGrid = ({ items, columns = '3' }) => {
  const columnsClassMap = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
  }

  return (
    <div
      className={`mx-auto mt-12 grid gap-5 px-4 sm:px-6 lg:px-8 ${columnsClassMap[columns]}`}
    >
      {items.map((item) => (
        <a
          href={`/project/${item.slug.current}`}
          key={item.title}
          className={`relative flex aspect-1 items-center justify-center overflow-hidden rounded-lg `}
        >
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="/images/project.jpg"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-[#000]/50" aria-hidden="true" />
          <div className="relative text-center text-white">
            <Heading>{item.title}</Heading>
          </div>
        </a>
      ))}
    </div>
  )
}

export default CoverGrid
