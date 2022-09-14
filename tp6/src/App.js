import { useState } from 'react';

import videoData from './data/videos.json';
import audioData from './data/audios.json';

import Input from "./components/Input";
import Button from "./components/Button";
import Video from "./components/Video";
import Audio from "./components/Audio";
import List from './components/List';

function App() {



  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo === "") return;
    
    const newTodo = {
      id: new Date().getTime(),
      text: todo,
    }
    setTodos([...todos, newTodo]);
    setTodo("");
  }
  return (
    <div className='container'>
      <div className="mt-4 mb-4 d-flex row justify-content-center" >
        <form onSubmit={handleSubmit} style={{ width: "500px" }} className="d-flex row justify-content-center">
          <Input type="text" placeholder="Agregar tarea" name="todo" onChange={setTodo} todo={todo}/>
          <Button btnClases="btn btn-primary btn-block"
            btnType="submit"
            title="Agregar"
          />
        </form>
      </div>

        <List items={todos} />
      <hr />

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

    </div>
  );
}

export default App;
