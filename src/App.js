import './App.css';
import { useEffect, useState } from 'react';
import NavHeader from './components/NavHeader';
import ErrorComponent from './components/ErrorComponent';
import Card from './components/Card';

function App() {
  const [characters, setCharacters] = useState([]);

  function handleChange(e) {

  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function getCharaters() {
    fetch('https://squid-api.herokuapp.com/characters')
      .then(response => response.json())
      .then(data => setCharacters(data))
      .catch(error => console.log('Hubo un problema con la petición Fetch:' + error.message));
  }

  //componentDidMount
  useEffect(() => {
    getCharaters()
  }, []);

  return (
    <>
    <NavHeader />
      <div className="container-card">
            {
                characters.length > 0
                ? characters?.map(elem => {
                    return (
                        <div className="item-details">
                          <Card
                            actorName={elem.actorName}
                            imageUrl={elem.imageUrl}
                            characterName={elem.characterName}
                            playerNumber={elem.playerNumber}
                            characterRole={elem.characterRole}
                            key={elem.id}
                          ></Card>
                        </div>
                    );
                }) 
                : <ErrorComponent message="No results found :(" />
            }
      </div>
    </>
  );
}

export default App;
