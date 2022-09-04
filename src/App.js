import "./styles/App.css";
import { useState } from "react";
import Dog from "./components/Dog";
import { MutatingDots } from "react-loader-spinner";

function App() {
  const [dog, setDog] = useState(null);
  const [load, setLoading] = useState(false); // Se declara el state inicial del loader

  const getDog = async () => {
    // Se cmabia el estado a true para que el loader se renderice
    setLoading(true);

    // Obtener respuesta de la API
    const api = await fetch("https://dog.ceo/api/breeds/image/random");
    // Obtener el contenido de la API en JSON (message[linkDeImagen] & status)
    const dogApi = await api.json();

    // Insertar el link de la imagen en consola
    console.log(dogApi.message);
    // Cambiar el State de null a setDog al link de la API
    setDog(dogApi.message);

    // Finalmente se regresa el estado al inicial para desmontar el componente
    setLoading(false);
  };

  return (
    <div className="App" style={{ alignItems: "center" }}>
      <button
        className="dog_btn"
        style={{
          height: 30,
          width: 300,
          borderRadius: 5,
          marginTop: 12,
          marginLeft: 490,
        }}
        onClick={getDog}
        type="submit"
      >
        See a cute dog
      </button>

      {!load && !dog ? (
        <p className="dog_msj">Here will be your dog</p>
      ) : load && !dog ? (
        <div className="loader-container">
          <MutatingDots
            height="100"
            width="100"
            color="#4fa94d"
            secondaryColor="#4fa94d"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <Dog dogImage={dog} />
      )}
    </div>
  );
  // Se usan ternarios { x ? (true) : (false)} para el Conditional Rendering del componente que contiene el data de la API y el loader
}

export default App;
