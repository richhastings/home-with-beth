const Shadow = () =>
  Array(6)
    .fill('')
    .map((_, i) => (
      <div
        key={i}
        style={{
          transform: ` translate(${i + 1}px, ${i + 1}px)`,
        }}
        className={`absolute inset-0 bottom-[15px] rounded bg-darkgrey group-active:hidden ${
          i > 3
            ? 'group-hover:hidden'
            : 'group-hover:translate-x-2! group-hover:translate-y-2!'
        }`}
      />
    ))

const ShadowWrapper = ({ children }) => (
  <div className="group relative rounded hover:translate-x-[2px] hover:translate-y-[2px] ">
    <div className="relative z-[1] group-active:translate-x-1 group-active:translate-y-1">
      {children}
    </div>
    <div>
      <Shadow />
    </div>
    <div className="absolute top-0 bottom-[15px] left-0 right-0 block rounded border border-lightgrey bg-white group-hover:bg-champagne group-active:translate-x-1 group-active:translate-y-1" />
  </div>
)

export default ShadowWrapper
