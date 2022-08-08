import InstagramSVG from './svg/instagram.svg'
import PinterestSVG from './svg/pinterest.svg'

const Icon = ({ type, href, target }) => {
  const iconMap = {
    instagram: <InstagramSVG />,
    pinterest: <PinterestSVG />,
  }

  const Element = href ? 'a' : 'dev'

  return (
    <Element
      href={href}
      target={target}
      className="h-6 w-6 child:fill-current child-hover:fill-champagne "
    >
      {iconMap[type]}
    </Element>
  )
}

export default Icon
