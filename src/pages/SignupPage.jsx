import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupStyle.css";
import logo from "../assets/logoFav.png";

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
                    <button className="login-button">
                        Inscrivez-vous avec Google {/* todo : revoir les btn*/}
                    </button>
                    <button className="login-button">
                        Inscrivez-vous avec Apple
                    </button>
                </div>
            </section>
        </div>
    );
}   

export default SignupPage;