import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupStyle.css";
import logo from "../assets/logoFav.png";
import logoGoogle from "../assets/google.png";
import logoIphone from "../assets/apple-logo.png";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function SignupPage() {
    const [nom, setNom] = useState("");
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        if (nom === "") {
            alert("Merci de rentrer votre nom !");
        } else {
            localStorage.setItem("spotypasfyUser", nom);
            navigate("/home");
        }
    }

    function connexionGoogle() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                localStorage.setItem("spotypasfyUser", user.displayName);
                navigate("/home");
            })
            .catch((error) => {
                console.error("Erreur de connexion Google :", error);
            });
    }

    return (
        <div className="signup-page">
            <header>
                <img id="logo" src={logo} alt="Logo SpotiPasFy" />
            </header>
            <section>
                <div>
                    <h1>Inscrivez-vous pour commencer à écouter</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            id="name"
                            type="text"
                            placeholder="Votre nom d'utilisateur"
                            value={nom}
                            onChange={(event) => setNom(event.target.value)}
                        />
                        <input id="suivant" type="submit" value="Suivant" />
                    </form>
                    <p>ou</p>
                    <button className="login-button" onClick={connexionGoogle}>
                        <img src={logoGoogle} alt="Logo Google" width="8%"/>Inscrivez-vous avec Google
                    </button>
                    <button className="login-button">
                        <img src={logoIphone} alt="Logo Google" width="8%"/>Inscrivez-vous avec Apple
                    </button>
                </div>
            </section>
        </div>
    );
}

export default SignupPage;