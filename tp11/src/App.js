import imagesData from './data/images.json';

import Image from "./components/Image";

function App() {

  return (
    <div className='container mt-4 mb-4'>
      <div className="d-flex">
        <div className="row">
          {
            imagesData.filter(img =>img.showImage === true).map((img) => <div className="col-3" key={img.id}> <Image src={img.source} /> </div>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
