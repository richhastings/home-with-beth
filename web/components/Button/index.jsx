import { add } from 'date-fns'
import ShadowWrapper from '../ShadowWrapper'
import Link from 'next/link'

const Button = ({ href, children, additionalClasses, target }) => {
  if (href) {
    return (
      <Link
        target={target}
        href={href}
        className={`inline-block ${additionalClasses}`}
      >
        <ShadowWrapper>
          <div className="px-3 pt-1.5 pb-5 font-body">{children}</div>
        </ShadowWrapper>
      </Link>
    )
  }

  return (
    <button className={`inline-block ${additionalClasses}`}>
      <ShadowWrapper>
        <div className="px-3 pt-1.5 pb-5 font-body">{children}</div>
      </ShadowWrapper>
    </button>
  )
}

export default Button
