const Container = ({ children, size, className }) => {
  const widthClassMap = {
    narrow: 'max-w-4xl',
    medium: 'max-w-5xl',
  }
  return (
    <div
      className={`mx-auto px-4 md:px-8 ${
        widthClassMap[size] || 'max-w-7xl'
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default Container
