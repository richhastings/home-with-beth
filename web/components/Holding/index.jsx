import Countdown, { CountdownRendererFn } from 'react-countdown'
import Heading from '../Heading'
export const launchDate = () => new Date('2022-08-15T09:00:00')

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return
  } else {
    return (
      <div className="mt-4">
        <div className="flex justify-center space-x-4 font-alt text-3xl">
          <div>{hours}h</div>
          <div>{minutes}m</div>
          <div>{seconds}s</div>
        </div>
      </div>
    )
  }
}

const Holding = () => (
  <div className="flex min-h-screen flex-wrap items-center justify-center bg-champagne">
    <div className="text-center">
      <h1 className="w-full font-display text-8xl">Home with Beth</h1>
      <Countdown date={launchDate()} renderer={renderer} />
    </div>
  </div>
)

export default Holding
