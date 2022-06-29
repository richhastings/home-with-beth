import Heading from '../Heading'

const Features = () => {
  return (
    <div className="mx-auto my-16 flex max-w-7xl space-x-16">
      <div className="flex-1 text-center">
        <Heading>Latest project</Heading>
        <div
          key="key"
          className="mt-8 flex flex-col overflow-hidden rounded-lg shadow-lg"
        >
          <div className="flex-shrink-0">
            <img
              className="h-48 w-full object-cover"
              src="http://picsum.photos/600/360"
              alt=""
            />
          </div>
          <div className="flex flex-1 flex-col justify-between bg-white p-6">
            <div className="flex-1">
              {/*<p className="text-indigo-600 text-sm font-medium">
                     <a href={item.category.href} className="hover:underline">
                      {item.category.name}
                    </a> 
                  </p>*/}
              <a href="#" className="mt-2 block">
                <p className="text-gray-900 text-xl font-semibold">
                  {/* {item.title} */}
                  item
                </p>
                <p className="text-gray-500 mt-3 text-base">
                  {/* {item.description} */}
                  descrption
                </p>
              </a>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                {/* <a href={item.author.href}>
                      <span className="sr-only">{item.author.name}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={item.author.imageUrl}
                        alt=""
                      />
                    </a> */}
              </div>
            </div>
          </div>
        </div>
        view all
      </div>
      <div className="flex-1 text-center">
        <Heading>Latest post</Heading>
        <div
          key={'title'}
          className="mt-8 flex flex-col overflow-hidden rounded-lg shadow-lg"
        >
          <div className="flex-shrink-0">
            <img
              className="h-48 w-full object-cover"
              src="http://picsum.photos/600/360"
              alt=""
            />
          </div>
          <div className="flex flex-1 flex-col justify-between bg-white p-6">
            <div className="flex-1">
              {/*<p className="text-indigo-600 text-sm font-medium">
                     <a href={item.category.href} className="hover:underline">
                      {item.category.name}
                    </a> 
                  </p>*/}
              <a href="#" className="mt-2 block">
                <p className="text-gray-900 text-xl font-semibold">
                  {/* {item.title} */}
                  item
                </p>
                <p className="text-gray-500 mt-3 text-base">
                  {/* {item.description} */}
                  description
                </p>
              </a>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                {/* <a href={item.author.href}>
                      <span className="sr-only">{item.author.name}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={item.author.imageUrl}
                        alt=""
                      />
                    </a> */}
              </div>
              <div className="ml-3">
                {/* <p className="text-gray-900 text-sm font-medium">
                      <a href={item.author.href} className="hover:underline">
                        {item.author.name}
                      </a>
                    </p> */}
                {/* <div className="text-gray-500 flex space-x-1 text-sm">
                  <time dateTime={item.datetime}>{item.date}</time>
                  <span aria-hidden="true">&middot;</span>
                  <span>{item.readingTime} read</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        view all
      </div>
    </div>
  )
}

export default Features
