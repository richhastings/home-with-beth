import ShadowWrapper from '../ShadowWrapper'
import Link from 'next/link'

const Button = ({ href, children, additionalClasses }) => {
  if (href) {
    return (
      <Link href={href}>
        <a className="inline-block">
          <ShadowWrapper>
            <div className="px-3 pt-1.5 pb-5 font-body">{children}</div>
          </ShadowWrapper>
        </a>
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
