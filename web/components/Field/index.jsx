const Field = ({ name, label, type = 'text' }) => {
  const fieldMap = {
    textarea: (
      <textarea
        id={name}
        name={name}
        rows={4}
        className="block w-full rounded border-lightgrey p-3 px-4 font-body"
      />
    ),
    select: (
      <select
        className="block w-full rounded border-lightgrey p-3 px-4 font-body"
        name={name}
        id={name}
      >
        <option value="Inspire me!">Inspire me!</option>
        <option value="Personal shopping">Personal shopping</option>
        <option value="Interior design">Interior design</option>
        <option value="I'm not sure">I'm not sure</option>
      </select>
    ),
  }
  return (
    <div className="col-span-3">
      <label htmlFor={name} className="font-body text-sm">
        {label}
      </label>
      <div className="mt-1">
        {fieldMap[type] || (
          <input
            type="text"
            name={name}
            id={name}
            className="block w-full rounded border-lightgrey p-3 px-4 font-body"
          />
        )}
      </div>
    </div>
  )
}

export default Field
