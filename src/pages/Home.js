import React from "react";
import "../styles/Home.css";
import { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../FirebaseConfig";
import Dog from "../components/home/Dog";
import { useNavigate } from "react-router-dom";
import NotLogged from "../components/home/NotLogged";
import { FaDog } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";
import ProfileModal from "../components/home/ProfileModal";
import ProfileSettings from "../components/home/ProfileSettings";
import { doc, setDoc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import LikedDogs from "../components/home/LikedDogs";

function Home() {
  const navigate = useNavigate();
  const [pmodal, setPModal] = useState(false);
  const [pSettings, setPSettings] = useState(false);
  const [likedModal, setLikedModal] = useState(false);
  const [dog, setDog] = useState(null);
  const [load, setLoading] = useState(false); // Se declara el state inicial del loader
  const [notLogged, setNotLogged] = useState(false);

  const getDog = async () => {
    // Se cambia el estado a true para que el loader se renderice
    setLoading(true);

    // Obtener respuesta de la API
    const api = await fetch("https://dog.ceo/api/breeds/image/random");
    // Obtener el contenido de la API en JSON (message[linkDeImagen] & status)
    const dogApi = await api.json();

    // Insertar el objeto que contiene el link de la imagen en consola
    console.log(dogApi);
    // Cambiar el State de null a setDog al objeto de la API
    setDog(dogApi.message);

    // Finalmente se regresa el estado al inicial para desmontar el componente
    setLoading(false);
  };

  const authUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        navigate("/");
      } else {
        setNotLogged(true);
      }
    });
  };

  const handleLike = () => {
    const user = auth.currentUser;

    let randomString = (Math.random() + 1).toString(36).substring(7);

    setDoc(doc(db, "users", user.uid, "likes", randomString), {
      dog,
    });
    getDog().catch((error) => {
      toast.error(error.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    });
  };

  const handleProfMenu = () => {
    setPModal(false);
    setPSettings(true);
  };

  useEffect(() => {
    authUser();
  }, []);

  return (
    <div className="Home">
      {notLogged && <NotLogged />}
      {pSettings && <ProfileSettings closeModal={(e) => setPSettings(false)} />}
      {likedModal && <LikedDogs closeModal={(e) => setLikedModal(false)} />}

      <div className="nav_bar">
        <p className="logo">Random Dogs</p>

        <div className="profile_container" onClick={(e) => setPModal(!pmodal)}>
          <FaDog
            style={{
              marginTop: "10px",
              color: "white",
              backgroundColor: "#ff4d6d",
              borderRadius: "100%",
              fontSize: 15,
              padding: "5px",
              cursor: "pointer",
            }}
          />
          <VscTriangleDown
            style={{
              color: "gray",
              marginTop: 18,
              marginLeft: 2,
              fontSize: 10,
              cursor: "pointer",
            }}
          />
          {pmodal && (
            <ProfileModal
              onClick={handleProfMenu}
              likedModal={(e) => setLikedModal(true)}
            />
          )}
        </div>
      </div>
      {!load && !dog ? (
        <div className="emptydog_container">
          <img
            src="https://i.gifer.com/5AB5.gif"
            alt="navbar_gif"
            className="navbar_gif"
          ></img>
          <p className="dog_msj">Here will be your dog</p>
        </div>
      ) : load && !dog ? (
        <div style={{ marginLeft: 625, marginTop: 15 }}>
          <RotatingLines
            strokeColor="#ede7e3"
            strokeWidth="5"
            animationDuration="0.75"
            width="17"
            visible={true}
          />
        </div>
      ) : (
        <Dog dogImage={dog} addLike={handleLike} /> // dog = a la API regresando el objeto y el .message es para acceder al link de la imagen
      )}
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
      <ToastContainer />
    </div>
  );
}

export default Home;
