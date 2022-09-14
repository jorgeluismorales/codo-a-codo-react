const Input = ({type, placeholder, name, onChange,todo}) => {
  return (
    <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={e => onChange(e.target.value)}
        value={todo}
        className="form-control mb-4"
    />
  )
}

export default Input