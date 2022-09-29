
import videoData from './data/videos.json';
import audioData from './data/audios.json';
import imagesData from './data/images.json';

import Video from "./components/Video";
import Audio from "./components/Audio";
import Image from "./components/Image";

function App() {

  return (
    <div className='container mt-4 mb-4'>

      <div className="d-flex">
        <div className="row">
          {
            videoData.map((video, indice) => <div className="col-4"> <Video key={indice} src={video.source} title={video.title} /> </div>)
          }
        </div>
      </div>

      <hr />

      <div className="d-flex">
        <div className="row">
          {
            audioData.map((audio, indice) => <div className="col-4"> <Audio key={indice} src={audio.source} title={audio.title} /> </div>)
          }
        </div>
      </div>

      <hr />

      <div className="d-flex">
        <div className="row">
          {
            imagesData.map((img) => <div className="col-3"> <Image key={img.id} src={img.source} /> </div>)
          }
        </div>
      </div>

    </div>
  );
}

export default App;
