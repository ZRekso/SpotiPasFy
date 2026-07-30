import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ReglageStyle.css";

function ReglagePage() {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const stored = localStorage.getItem("spotypasfyUser");
        if (stored) {
            setUsername(stored);
        }
    }, []);

    function home() {
        navigate("/home");
    }

    {/* TODO Config + dev page parametre et recherche */}
    function recherche() {
        navigate("/Recherche");
    }

    function parametre(){
        navigate("/Reglage")
    }

    return (
        <div className="Reglage">
            <header>
                <h1>Paramètre</h1>
            </header>
            <section>
                <h2>Affichage</h2>
                <div>
                    <div className="container-blanc">
                        <div className="Blanc">
                            <span></span>
                        </div>
                        <div>
                            <p>Mode Clair</p>
                        </div>
                    </div>
                    <div className="container-black">
                        <div className="Noir">
                            <span></span>
                        </div>
                        <div>
                            <p>Mode Sombre</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h2>Profil</h2>
                <div>
                    <svg width="52" height="52" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <clipPath id="circleClip">
                                <circle cx="120" cy="120" r="112" />
                            </clipPath>
                        </defs>
                        <circle cx="120" cy="120" r="112" fill="#141414" />
                        <g clipPath="url(#circleClip)">
                            <circle cx="120" cy="98" r="38" fill="#a3a3a3" />
                            <ellipse cx="120" cy="225" rx="90" ry="70" fill="#a3a3a3" />
                        </g>
                    </svg>
                    <p id="welcome">{username}</p>
                </div>
            </section>
            <section className="mentions-legales">
                <h2>Confidentialité & droits</h2>
                <div>
                    <p>© 2025 Nathan Salomé. Tous droits réservés.</p>
                    <p>Pour toute question, contactez-moi à :</p>
                    <p><a href="mailto:nathansalome.pro@outlook.com">nathansalome.pro@outlook.com</a></p>
                    <p className="dev-notice">Thème de l'application en cours de développement...</p>
                </div>
            </section>
            <nav>
                <div>
                    <svg onClick={home} width="40" height="40" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 120 L120 60 L190 120" fill="none" stroke="#8c8c8c" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M70 105 V190 H170 V105" fill="none" stroke="#8c8c8c" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>

                <div>
                    <svg onClick={recherche} width="40" height="40" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="100" cy="100" r="60" fill="none" stroke="#8c8c8c" strokeWidth="16"/>
                        <line x1="144" y1="144" x2="200" y2="200" stroke="#8c8c8c" strokeWidth="16" strokeLinecap="round"/>
                    </svg>
                </div>
                <div>
                    <svg onClick={parametre} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 360" width="40" height="40">
                        <path fill="#2fd978" fill-rule="evenodd" d="M 153.54 87.72 L 160.05 46.48 L 199.95 46.48 L 206.46 87.72 L 209.07 88.51 L 211.65 89.37 L 214.21 90.30 L 216.74 91.31 L 219.24 92.39 L 221.71 93.53 L 224.14 94.75 L 226.54 96.04 L 226.54 96.04 L 260.30 71.48 L 288.52 99.70 L 263.96 133.46 L 265.25 135.86 L 266.47 138.29 L 267.61 140.76 L 268.69 143.26 L 269.70 145.79 L 270.63 148.35 L 271.49 150.93 L 272.28 153.54 L 272.28 153.54 L 313.52 160.05 L 313.52 199.95 L 272.28 206.46 L 271.49 209.07 L 270.63 211.65 L 269.70 214.21 L 268.69 216.74 L 267.61 219.24 L 266.47 221.71 L 265.25 224.14 L 263.96 226.54 L 263.96 226.54 L 288.52 260.30 L 260.30 288.52 L 226.54 263.96 L 224.14 265.25 L 221.71 266.47 L 219.24 267.61 L 216.74 268.69 L 214.21 269.70 L 211.65 270.63 L 209.07 271.49 L 206.46 272.28 L 206.46 272.28 L 199.95 313.52 L 160.05 313.52 L 153.54 272.28 L 150.93 271.49 L 148.35 270.63 L 145.79 269.70 L 143.26 268.69 L 140.76 267.61 L 138.29 266.47 L 135.86 265.25 L 133.46 263.96 L 133.46 263.96 L 99.70 288.52 L 71.48 260.30 L 96.04 226.54 L 94.75 224.14 L 93.53 221.71 L 92.39 219.24 L 91.31 216.74 L 90.30 214.21 L 89.37 211.65 L 88.51 209.07 L 87.72 206.46 L 87.72 206.46 L 46.48 199.95 L 46.48 160.05 L 87.72 153.54 L 88.51 150.93 L 89.37 148.35 L 90.30 145.79 L 91.31 143.26 L 92.39 140.76 L 93.53 138.29 L 94.75 135.86 L 96.04 133.46 L 96.04 133.46 L 71.48 99.70 L 99.70 71.48 L 133.46 96.04 L 135.86 94.75 L 138.29 93.53 L 140.76 92.39 L 143.26 91.31 L 145.79 90.30 L 148.35 89.37 L 150.93 88.51 L 153.54 87.72 Z M 225.50 180.00 A 45.5 45.5 0 1 0 134.50 180.00 A 45.5 45.5 0 1 0 225.50 180.00 Z"/>
                    </svg>
                </div>
            </nav>
        </div>
    );
}

export default ReglagePage;
