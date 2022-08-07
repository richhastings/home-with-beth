const Field = ({ name, label, type = 'text' }) => {
  return (
    <div className="col-span-3">
      <label htmlFor={name} className="font-body text-sm">
        {label}
      </label>
      <div className="mt-1">
        {type === 'textarea' ? (
          <textarea
            id={name}
            name={name}
            rows={4}
            className="block w-full rounded border-black p-3 px-4"
          />
        ) : (
          <input
            type="text"
            name={name}
            id={name}
            className="block w-full rounded border-black p-3 px-4"
          />
        )}
      </div>
    </div>
  )
}

export default Field
