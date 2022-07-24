import './App.css';
import { useState } from 'react';
import Dog from './components/Dog'

function App() {

  const [dog, setDog] = useState(null);

  const getDog = async ()  => {
    // Obtener respuesta de la API
    const api = await fetch("https://dog.ceo/api/breeds/image/random")
    // Obtener el contenido de la API en JSON (message[linkDeImagen] & status)
    const dogApi = await api.json()

    // Insertar el link de la imagen en consola
    console.log(dogApi.message)
    // Cambiar el State de null a setDog al link de la API
    setDog(dogApi.message)
  }

  return (
    <div className="App" style={{ alignItems: 'center' }}>
      <button style={{
                        backgroundColor: 'lightgray',
                        color: 'white',
                        fontWeight: 'bold', 
                        borderRadius: 5,
                        width: 130,
                        height: 25,
                        border: 'none',
                        fontFamily:'monospace',
                        marginTop: 50,
                        marginBottom: 50,
                        marginLeft: 585,
                        }} onClick={getDog} type='submit'>See a cute dog</button>

      
      {dog ? (<Dog dogImage={dog} />) : (<p>Here will be your dog</p>)}
    </div>
  );
  // Se usan ternarios { x ? (true) : (false)} para el Conditional Rendering del componente que contiene el data de la API
}


export default App;
