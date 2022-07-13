const Heading = ({ level = 'h2', size = 'md', children }) => {
  const Element = level
  const sizeMap = {
    sm: 'text-xl sm:text-2xl lg:text-4xl',
    md: 'text-3xl sm:text-4xl lg:text-6xl',
    lg: 'text-5xl sm:text-6xl lg:text-8xl',
  }

  return (
    <Element className={`font-display ${sizeMap[size]}`}>{children}</Element>
  )
}

export default Heading
