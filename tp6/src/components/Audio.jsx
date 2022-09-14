const Audio = ({src,title}) => {
  return (
    <div>
        <audio
            src={src}
            controls
        ></audio>
        <p>{title}</p>
    </div>
  )
}

export default Audio