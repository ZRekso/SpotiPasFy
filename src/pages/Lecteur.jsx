import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; {/* Permet de recuperer ce qui est transmis avec navigate state = recup les infos */}
import { useNavigate } from "react-router-dom";
import "./LecteurStyle.css";


function Lecteur() {
    {/* Code Claude */}
    const [enLecture, setEnLecture] = useState(false);
    const [tempsActuel, setTempsActuel] = useState(0);
    const [duree, setDuree] = useState(0);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        function majTemps() {
            setTempsActuel(audio.currentTime);
        }
        function majDuree() {
            setDuree(audio.duration);
        }
        audio.addEventListener("timeupdate", majTemps);
        audio.addEventListener("loadedmetadata", majDuree);
        return () => {
            audio.removeEventListener("timeupdate", majTemps);
            audio.removeEventListener("loadedmetadata", majDuree);
        };
    }, []);

    function changerPosition(event) {
        const nouveauTemps = event.target.value;
        audioRef.current.currentTime = nouveauTemps;
        setTempsActuel(nouveauTemps);
    }

    {/* fin Claude */}


    const { state } = useLocation();
    const album = state?.album;
    const audioRef = useRef(null);
    const navigate = useNavigate();

    if (!album) {
        return <p>Aucun album sélectionné.</p>;
    }

    function retour() {
        navigate("/Home");
    }   

    function togglePlay() {
        if (enLecture) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setEnLecture(!enLecture);
    }

    return (
        <div className="Lecteur">
            <div className="background-blur" style={{ backgroundImage: `url(${album.image})` }}></div>
            <header>
                <button onClick={retour}>&lt; Retour</button>
            </header>
            <div>
                <h1>{album.titre}</h1>
                {album.auteur && <p>{album.auteur}</p>}
                <img src={album.image} alt={album.titre} width="60%"/>
                <audio ref={audioRef} src={album.audio} autoPlay onPlay={() => setEnLecture(true)}/>
                <input
                    type="range"
                    min="0"
                    max={duree || 0}
                    value={tempsActuel}
                    onChange={changerPosition}
                    className="barre-progression"
                />
                <div className="controles">
                    <button onClick={togglePlay} className="btn-play">
                        {enLecture ? "⏸" : "▶"}
                    </button>
                </div>
            </div>
            
        </div>
    );
}

export default Lecteur;