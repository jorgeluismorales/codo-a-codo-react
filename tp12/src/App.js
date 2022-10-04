import Image from "./components/Image";
import InputForm from './components/InputForm';
import { useEffect, useState } from 'react';
import { images } from "./helpers/images";
import { Col, Container, Row } from "react-bootstrap";

function App() {

  const [imagesData, setImagesData] = useState([]);
  const [numbOfImages, setNumbOfImages] = useState(0);

  useEffect(() => {
    setImagesData(images(numbOfImages));
  }, [numbOfImages]);

  const arrayLength = (n) => {
    setNumbOfImages(n);
  }

  const addImage = () => {
    const newImage = images(1);
    setImagesData([...imagesData, ...newImage]);
  }

  const deleteImage = () => {
    if (imagesData.length > 0) {
      setImagesData(imagesData.slice(0, -1));
    }
  }

  console.log(imagesData);
  console.log(numbOfImages);

  return (
    <Container>
      <InputForm
        arrayLength={arrayLength}
        addImage={addImage}
        deleteImage={deleteImage}
      />
      <div className="d-flex">
        <Row>
          {
            imagesData.map((img) => <Col key={Math.random() * img.id}> <Image src={img.source} /> </Col>)
          }
        </Row>
      </div>
    </Container>
  );
}

export default App;
