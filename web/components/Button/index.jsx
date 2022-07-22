import ShadowWrapper from '../ShadowWrapper'
import Link from 'next/link'

const Button = ({ href, children }) => (
  <Link className="inline-block" href={href}>
    <ShadowWrapper>
      <div className=" px-3 pt-1.5 pb-5 font-body">{children}</div>
    </ShadowWrapper>
  </Link>
)

export default Button
