import audioFile from '../../assets/audio/SoundHelix-Song-1.mp3'

const Audio = () => {
  return (
    <audio
            src={audioFile}
            controls
        ></audio>
  )
}

export default Audio