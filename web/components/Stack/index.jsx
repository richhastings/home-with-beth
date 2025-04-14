const Stack = ({ children, className, gap = 32, divided }) => {
  const gapMap = {
    8: 'my-8 space-y-8',
    16: 'my-8 space-y-16',
    32: 'my-16 space-y-32',
  }

  const dividedClasses =
    'child:relative child:before:absolute child:before:left-0 child:before:right-0 child:before:-top-16 child:before:h-px child:before:bg-lightgrey first-child:before:hidden'

  return (
    <div
      className={`${gapMap[gap]} ${divided ? dividedClasses : ''} ${className}`}
    >
      {children}
    </div>
  )
}

export default Stack
