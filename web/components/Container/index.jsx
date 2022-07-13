const Container = ({ children, size }) => {
  const widthClassMap = {
    narrow: 'max-w-3xl',
    medium: 'max-w-5xl',
  }
  return (
    <div
      className={`mx-auto px-4 md:px-8 ${widthClassMap[size] || 'max-w-7xl'}`}
    >
      {children}
    </div>
  )
}

export default Container
