import videoFile from "../../assets/video/ForBiggerEscapes.mp4";

const Video = () => {
  return (
    <video
      src={videoFile}
      controls
      style={{ width: "400px" }}
    ></video>
  )
}

export default Video