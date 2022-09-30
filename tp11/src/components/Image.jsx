const Image = ({ src }) => {
  return (
    <div>
      <img
        src={src}
        alt="random"
        style={{ width: "300px" }}
        className="mb-4" />
    </div>
  )
}

export default Image