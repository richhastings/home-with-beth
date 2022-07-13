import ShadowWrapper from '../ShadowWrapper'

const Button = ({ href, children }) => (
  <a className="inline-block" href={href}>
    <ShadowWrapper>
      <div className=" px-3 pt-1.5 pb-5 font-body">{children}</div>
    </ShadowWrapper>
  </a>
)

export default Button
