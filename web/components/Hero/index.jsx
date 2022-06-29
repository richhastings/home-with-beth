import classNames from 'classnames'
import Heading from '../Heading'

const Hero = ({ title, subtitle, tight, imgUrl }) => (
  <div
    className={classNames(
      'relative bg-champagne text-center sm:overflow-hidden',
      tight ? 'h-[30vh]' : 'h-[calc(100vh)]'
    )}
  >
    {imgUrl && (
      <div className="absolute inset-0 bg-black">
        <img
          className="h-full w-full object-cover opacity-50"
          src={imgUrl}
          alt="People working on laptops"
        />
      </div>
    )}
    <div
      className={`relative flex h-full flex-col items-center justify-center ${
        imgUrl && 'text-white'
      }`}
    >
      <div>
        <Heading size="lg">{title}</Heading>
        <p className="mx-auto mt-6 max-w-lg text-center font-body text-xl font-bold text-white sm:max-w-3xl">
          {subtitle}
        </p>
      </div>
    </div>
  </div>
)

export default Hero
