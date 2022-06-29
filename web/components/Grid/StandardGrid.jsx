const StandardGrid = ({ items }) => (
  <div className="mx-auto mt-12 grid gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
    {items.map((item, i) => (
      <div
        key={item.title}
        className={`flex flex-col overflow-hidden rounded-lg border ${
          i === items.length - 1 &&
          'lg:mx-none sm:col-span-2 sm:mx-auto sm:w-1/2 lg:col-auto lg:w-full'
        }`}
      >
        <div className="flex-shrink-0">
          <img
            className="h-48 w-full object-cover"
            // src={item.imageUrl}
            src="http://picsum.photos/400"
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
          <div className="flex-1">
            <a href={item.href} className="mt-2 block">
              <p className="text-gray-900 text-xl font-semibold">
                {item.title}
              </p>
              <p className="text-gray-500 mt-3 text-base">{item.description}</p>
            </a>
          </div>
          <div className="mt-6 flex items-center">
            <div className="text-gray-500 text-sm">
              {/* <time dateTime={item.datetime}>{item.date}</time> */}
              <time dateTime={item.datetime}>22 June 2022</time>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
)

export default StandardGrid
