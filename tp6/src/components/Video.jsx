const Video = ({ src, title }) => {
  return (
    <div>
      <video
        src={src}
        controls
        style={{ width: "400px" }}
      ></video>
      <p>{title}</p>
    </div>
  )
}

export default Video