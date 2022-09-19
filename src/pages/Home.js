import React from "react";
import "../styles/Home.css";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import Dog from "../components/home/Dog";

function Home() {
  const [dog, setDog] = useState(null);
  const [load, setLoading] = useState(false); // Se declara el state inicial del loader

  const getDog = async () => {
    // Se cambia el estado a true para que el loader se renderice
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
    <div className="Home">
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
        <div style={{ marginLeft: 625, marginTop: 15 }}>
          <RotatingLines
            strokeColor="#cee5f2"
            strokeWidth="6"
            animationDuration="0.75"
            width="20"
            visible={true}
          />
        </div>
      ) : (
        <Dog dogImage={dog} />
      )}
    </div>
  );
}

export default Home;