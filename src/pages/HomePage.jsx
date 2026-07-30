import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePageStyle.css";

function HomePage() {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const stored = localStorage.getItem("spotypasfyUser");
        if (stored) {
            setUsername(stored);
        }
    }, []);

    const albumsTendance = [
        {
            id: 1,
            titre: "Smooth Rnb Chill",
            image: "https://usercontent.jamendo.com/?type=album&id=380990&width=300&trackid=1579436",
            audio: "https://prod-1.storage.jamendo.com/?trackid=1579436&format=mp31&from=EUdFTusI%2FBT4d172%2BGxGcw%3D%3D%7Co2Wol3x7SqXDQ9Kc8Elp4Q%3D%3D",
        },
        {
            id: 2,
            titre: "Island Girls",
            image: "https://usercontent.jamendo.com/?type=album&id=306646&width=300&trackid=1597598",
            audio: "https://prod-1.storage.jamendo.com/?trackid=1597598&format=mp31&from=SvnPodsaZDTlWjPIB4FEzQ%3D%3D%7C5duHlHeNbvOAdGqZqzQCjQ%3D%3D",
        },
        {
            id: 3,
            titre: "BlackRain",
            image: "https://usercontent.jamendo.com/?type=album&id=42332&width=300&trackid=312689",
            audio: "https://prod-1.storage.jamendo.com/?trackid=312689&format=mp31&from=ZWMQWncUfjJe6XLB4mpDFQ%3D%3D%7CKQ7WtilcPluXMdGPQPqnhg%3D%3D",
        },
        {
            id: 4,
            titre: "Kangaroo",
            image: "https://usercontent.jamendo.com/?type=album&id=162388&width=300&trackid=1383874",
            audio: "https://prod-1.storage.jamendo.com/?trackid=1383874&format=mp31&from=zOcrAoz%2FSKFrU3YzqS52Vg%3D%3D%7CYPKs5TUGBWmBCeEJFX8HYg%3D%3D",
        },
    ];

    const pop = [
        {
            id: 1,
            titre: "Start Again",
            auteur: "Backnbloom",
            image: "https://usercontent.jamendo.com/?type=album&id=126867&width=300&trackid=1071005",
            audio: "https://prod-1.storage.jamendo.com/?trackid=1071005&format=mp31&from=Hvm7Sn64xKFkZSbrx5BHJw%3D%3D%7CuUu%2BHMp7vz4VKyis18qYCg%3D%3D",
        },
        {
            id: 2,
            titre: "Uplifting",
            auteur: "StereoResonance",
            image: "https://usercontent.jamendo.com/?type=album&id=143701&width=300&trackid=1193995",
            audio: "https://prod-1.storage.jamendo.com/?trackid=1193995&format=mp31&from=2zBDq%2B8X43dDpuCIIcl4lA%3D%3D%7CjNhlSMr9E1rZa1YcB%2FajkA%3D%3D",
        },
        {
            id: 3,
            titre: "For a Song",
            auteur: "Big Infinite",
            image: "https://usercontent.jamendo.com/?type=album&id=220858&width=300&trackid=1507067",
            audio: "",
        },
        {
            id: 4,
            titre: "Sound of victory",
            auteur: "Olezhka MUSIC",
            image: "https://usercontent.jamendo.com/?type=album&id=558357&width=300&trackid=2150502",
            audio: "",
        },
        {
            id: 5,
            titre: "my_heart",
            auteur: "Mistery",
            image: "https://usercontent.jamendo.com/?type=album&id=40277&width=300&trackid=291378",
            audio: "",
        },
        {
            id: 6,
            titre: "Inspiring",
            auteur: "Avalon Audio",
            image: "https://usercontent.jamendo.com/?type=album&id=296300&width=300&trackid=1533953",
            audio: "https://prod-1.storage.jamendo.com/?trackid=1533953&format=mp31&from=HEKhWjnqfH1F%2FcdprE3%2FRg%3D%3D%7CxbfGrUenN2PLzEbGc92wsg%3D%3D",
        },
        {
            id: 7,
            titre: "Tiempo de Sorpresa",
            auteur: "Antoniocamel",
            image: "https://usercontent.jamendo.com/?type=album&id=28224&width=300&trackid=188492",
            audio: "https://prod-1.storage.jamendo.com/?trackid=188492&format=mp31&from=qbTsNy2noIyHqVwCKPCEBA%3D%3D%7CpKayBM0neRHO4HI84oK%2BKQ%3D%3D",
        },
        {
            id: 8,
            titre: "Lazy Keys",
            auteur: "Lonely Image",
            image: "https://usercontent.jamendo.com/?type=album&id=530735&width=300&trackid=2061190",
            audio: "https://prod-1.storage.jamendo.com/?trackid=2061190&format=mp31&from=nwolFBxMlRS9I82v1YjGWA%3D%3D%7CFor7bQm8j0OWI1mFDqsOiQ%3D%3D",
        },
        {
            id: 9,
            titre: "te amo, desde cuando",
            auteur: "Antoniocamel",
            image: "https://usercontent.jamendo.com/?type=album&id=35265&width=300&trackid=242887",
            audio: "https://prod-1.storage.jamendo.com/?trackid=242887&format=mp31&from=zhd8gIr8zEFaZoOxYRFBPA%3D%3D%7CuF16UiiCuIxSc04lvFLZzg%3D%3D",
        },
    ];

    const rap = [
        {
            id: 1,
            titre: "Dancer (feat Killer)",
            auteur: "EJAY IVAN LAC",
            image: "https://usercontent.jamendo.com/?type=album&id=176323&width=300&trackid=1541058",
            audio: "https://prod-1.storage.jamendo.com/?trackid=1541058&format=mp31&from=uw41DPskZJH2aXmmQ51yGw%3D%3D%7CyvEJDy4CO5%2Bb3fRNtCX2mA%3D%3D",
        },
        {
            id: 2,
            titre: "01 - fuori quarantena",
            auteur: "Miguel Prod",
            image: "https://usercontent.jamendo.com/?type=album&id=6901&width=300&trackid=76725",
            audio: "https://prod-1.storage.jamendo.com/?trackid=76725&format=mp31&from=OqJSsp3rtBuAZlZ5dwFnog%3D%3D%7CqoybhQEVbi9EoDM2WP2sZg%3D%3D",
        },
        {
            id: 3,
            titre: "BJBeats - I Want You",
            auteur: "KMR BND",
            image: "https://usercontent.jamendo.com/?type=album&id=167954&width=300&trackid=1443671",
            audio: "https://prod-1.storage.jamendo.com/?trackid=1443671&format=mp31&from=WXssgNWbsZqb9ojaLifpng%3D%3D%7CNYhtoTsLlN6623ErtzYrkQ%3D%3D",
        },
        {
            id: 4,
            titre: "Vamp aka - Я верю",
            auteur: "Vamp aka 16'ый",
            image: "https://usercontent.jamendo.com/?type=album&id=168812&width=300&trackid=1452842",
            audio: "https://prod-1.storage.jamendo.com/?trackid=1452842&format=mp31&from=uFV9btQ7cZEikDKNYXzlPQ%3D%3D%7CYprWB6HjrURPrrAOMB1yiw%3D%3D",
        },
        {
            id: 5,
            titre: "We're not the Same",
            auteur: "Morphiction",
            image: "https://usercontent.jamendo.com/?type=album&id=252926&width=300&trackid=1776729",
            audio: "https://prod-1.storage.jamendo.com/?trackid=1776729&format=mp31&from=Pb0jqBIXGW9ASjTLlLcKMA%3D%3D%7CDgJappvQJH9Sh10rZ8pHbA%3D%3D",
        },
        {
            id: 6,
            titre: "BOLLE",
            auteur: "Tes",
            image: "https://usercontent.jamendo.com/?type=album&id=40580&width=300&trackid=295114",
            audio: "https://prod-1.storage.jamendo.com/?trackid=1776729&format=mp31&from=Pb0jqBIXGW9ASjTLlLcKMA%3D%3D%7CDgJappvQJH9Sh10rZ8pHbA%3D%3D",
        },
        {
            id: 7,
            titre: "Trend",
            auteur: "Donar Donny",
            image: "https://usercontent.jamendo.com/?type=album&id=157110&width=300&trackid=1327232",
            audio: "https://prod-1.storage.jamendo.com/?trackid=1327232&format=mp31&from=QRDsvLjXgsXJAIRi4F2TrQ%3D%3D%7CxXilqkHi%2FRSgZHJbUnatmQ%3D%3D",
        },
        {
            id: 8,
            titre: "najibeat",
            auteur: "Zegua",
            image: "https://usercontent.jamendo.com/?type=album&id=140996&width=300&trackid=1171140",
            audio: "https://prod-1.storage.jamendo.com/?trackid=1171140&format=mp31&from=cu9vL%2FEL6sJqGWGloIRbMg%3D%3D%7CIwAFwYMIUROjVsKKLbCUCQ%3D%3D",
        },
        {
            id: 9,
            titre: "Intro",
            auteur: "Coehn & Foehrb",
            image: "https://usercontent.jamendo.com/?type=album&id=13941&width=300&trackid=111038",
            audio: "https://prod-1.storage.jamendo.com/?trackid=111038&format=mp31&from=IqoYDffKKpbB6Aen0HbXww%3D%3D%7Cfgaop9OTsDieOssji7jsEA%3D%3D",
        },
    ];

    const rb = [
    {
        id: 1,
        titre: "Droppin Drips",
        auteur: "Thorsten Strohbeck",
        image: "https://usercontent.jamendo.com/?type=album&id=55923&width=300&trackid=473774",
        audio: "https://prod-1.storage.jamendo.com/?trackid=473774&format=mp31&from=vyx7QE%2BDR3YXe0GEu%2BKVng%3D%3D%7CWx5toyTuTEMU%2FF0929yYjw%3D%3D",
    },
    {
        id: 2,
        titre: "Zangri",
        auteur: "Mecizand",
        image: "https://usercontent.jamendo.com/?type=album&id=581414&width=300&trackid=2207221",
        audio: "https://prod-1.storage.jamendo.com/?trackid=2207221&format=mp31&from=5SPLXddxbZX298ppKRlpew%3D%3D%7CCzrXajcGkir%2F8TW2L07mKIg%3D%3D",
    },
    {
        id: 3,
        titre: "Verse Layer",
        auteur: "Janevo",
        image: "https://usercontent.jamendo.com/?type=album&id=607983&width=300&trackid=2263563",
        audio: "https://prod-1.storage.jamendo.com/?trackid=2263563&format=mp31&from=ctKblQQXP9HyKo8X2uog7g%3D%3D%7CWi7m5AF8815AklUTEez0MA%3D%3D",
    },
    {
        id: 4,
        titre: "War Fanfares",
        auteur: "Serge Quadrado",
        image: "https://usercontent.jamendo.com/?type=album&id=0&width=300&trackid=1402036",
        audio: "https://prod-1.storage.jamendo.com/?trackid=1402036&format=mp31&from=hqnG%2BymPzCGDyLsPeqVtWw%3D%3D%7CwvtGegrrID8sllEV5W4paQ%3D%3D",
    },
    {
        id: 5,
        titre: "New Year Eve",
        auteur: "Emmraan",
        image: "https://usercontent.jamendo.com/?type=album&id=505849&width=300&trackid=1993094",
        audio: "https://prod-1.storage.jamendo.com/?trackid=1993094&format=mp31&from=esI%2B5Wpzeugk2Ie5GQUclw%3D%3D%7C1J8w3vgtzmFF5zv2buqM6w%3D%3D",
    },
    {
        id: 6,
        titre: "La Batalla",
        auteur: "Adrián Berenguer",
        image: "https://usercontent.jamendo.com/?type=album&id=138848&width=300&trackid=1157100",
        audio: "https://prod-1.storage.jamendo.com/?trackid=1157100&format=mp31&from=WVr8XSr2Ebt0g%2Bn1S%2F5GTg%3D%3D%7C7C0j%2F2FSh1sI4y1OVmJE3Kd5A%3D%3D",
    },
    {
        id: 7,
        titre: "Sunshine",
        auteur: "Free Seeds",
        image: "https://usercontent.jamendo.com/?type=album&id=63129&width=300&trackid=541335",
        audio: "https://prod-1.storage.jamendo.com/?trackid=541335&format=mp31&from=zacyR5SKg0U1u6a%2Foa2b3Q%3D%3D%7CXwZmTNS1srsie9cb3j6Cxg%3D%3D",
    },
    {
        id: 8,
        titre: "Lazy In The Sun",
        auteur: "piccadillyCircus",
        image: "https://usercontent.jamendo.com/?type=album&id=594031&width=300&trackid=2233809",
        audio: "https://prod-1.storage.jamendo.com/?trackid=2233809&format=mp31&from=Ng%2FFvK12XqI7pW%2BBdkZL5P6Q%3D%3D%7C5EQD23fvk2FDMGdnapiAX8g%3D%3D",
    },
    {
        id: 9,
        titre: "Swag Angry Beat",
        auteur: "BMFM",
        image: "https://usercontent.jamendo.com/?type=album&id=364312&width=300&trackid=1461331",
        audio: "https://prod-1.storage.jamendo.com/?trackid=1461331&format=mp31&from=Lx0mw5QySufBwGFT7%2FFZbhQ%3D%3D%7CCs559umHwG9aCLJ6X%2FcexjA%3D%3D",
    },
    {
        id: 10,
        titre: "Energetic Upbeat Funk",
        auteur: "Dmitry Taras",
        image: "https://usercontent.jamendo.com/?type=album&id=485320&width=300&trackid=1950563",
        audio: "https://prod-1.storage.jamendo.com/?trackid=1950563&format=mp31&from=MyNnSJ1%2BBNXciy9DE8gn1Yg%3D%3D%7CBNqtVbHp1FBMkKBfdNeCKQ%3D%3D",
    },
];

    function ouvrirAlbum(album) {
        navigate("/Lecteur", { state: { album } });
    }

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
        <div className="HomePage">
            <header>
                <div>
                    <svg width="40" height="40" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
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
                    <h1 id="welcome">{username}</h1>
                </div>
                <svg className="loupeSVG" width="40" height="40" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="60" fill="none" stroke="#a3a3a3" strokeWidth="16" />
                    <line x1="144" y1="144" x2="200" y2="200" stroke="#a3a3a3" strokeWidth="16" strokeLinecap="round" />
                </svg>
            </header>

            <section>
                <div className="container-section">
                    <h2>Bonjour !</h2>
                    <div className="tendance">
                        {albumsTendance.map((album) => (
                            <div key={album.id} onClick={() => ouvrirAlbum(album)}>
                                <img src={album.image} alt={album.titre} width="20%" />
                                <p>{album.titre}</p>
                            </div>
                        ))}
                    </div>
                    <div className="container-pop">
                        <h2>PoP</h2>
                        <div>
                            {pop.map((album) => (
                                <div key={album.id} onClick={() => ouvrirAlbum(album)}>
                                    <img src={album.image} alt={album.titre} width="20%"/>
                                    <p>{album.titre}</p>
                                    <p>{album.auteur}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="container-rap">
                        <h2>Rap</h2>
                        <div>
                            {rap.map((album) => (
                                <div key={album.id} onClick={() => ouvrirAlbum(album)}>
                                    <img src={album.image} alt={album.titre} width="20%"/>
                                    <p>{album.titre}</p>
                                    <p>{album.auteur}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="container-rb">
                        <h2>R&B</h2>
                        <div>
                            {rb.map((album) => (
                                <div key={album.id} onClick={() => ouvrirAlbum(album)}>
                                    <img src={album.image} alt={album.titre} width="20%"/>
                                    <p>{album.titre}</p>
                                    <p>{album.auteur}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <span></span>
            <nav>
                <div>
                    <svg onClick={home} width="40" height="40" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 120 L120 60 L190 120" fill="none" stroke="#2fd978" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M70 105 V190 H170 V105" fill="none" stroke="#2fd978" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
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
                        <path fill="#8c8c8c" fill-rule="evenodd" d="M 153.54 87.72 L 160.05 46.48 L 199.95 46.48 L 206.46 87.72 L 209.07 88.51 L 211.65 89.37 L 214.21 90.30 L 216.74 91.31 L 219.24 92.39 L 221.71 93.53 L 224.14 94.75 L 226.54 96.04 L 226.54 96.04 L 260.30 71.48 L 288.52 99.70 L 263.96 133.46 L 265.25 135.86 L 266.47 138.29 L 267.61 140.76 L 268.69 143.26 L 269.70 145.79 L 270.63 148.35 L 271.49 150.93 L 272.28 153.54 L 272.28 153.54 L 313.52 160.05 L 313.52 199.95 L 272.28 206.46 L 271.49 209.07 L 270.63 211.65 L 269.70 214.21 L 268.69 216.74 L 267.61 219.24 L 266.47 221.71 L 265.25 224.14 L 263.96 226.54 L 263.96 226.54 L 288.52 260.30 L 260.30 288.52 L 226.54 263.96 L 224.14 265.25 L 221.71 266.47 L 219.24 267.61 L 216.74 268.69 L 214.21 269.70 L 211.65 270.63 L 209.07 271.49 L 206.46 272.28 L 206.46 272.28 L 199.95 313.52 L 160.05 313.52 L 153.54 272.28 L 150.93 271.49 L 148.35 270.63 L 145.79 269.70 L 143.26 268.69 L 140.76 267.61 L 138.29 266.47 L 135.86 265.25 L 133.46 263.96 L 133.46 263.96 L 99.70 288.52 L 71.48 260.30 L 96.04 226.54 L 94.75 224.14 L 93.53 221.71 L 92.39 219.24 L 91.31 216.74 L 90.30 214.21 L 89.37 211.65 L 88.51 209.07 L 87.72 206.46 L 87.72 206.46 L 46.48 199.95 L 46.48 160.05 L 87.72 153.54 L 88.51 150.93 L 89.37 148.35 L 90.30 145.79 L 91.31 143.26 L 92.39 140.76 L 93.53 138.29 L 94.75 135.86 L 96.04 133.46 L 96.04 133.46 L 71.48 99.70 L 99.70 71.48 L 133.46 96.04 L 135.86 94.75 L 138.29 93.53 L 140.76 92.39 L 143.26 91.31 L 145.79 90.30 L 148.35 89.37 L 150.93 88.51 L 153.54 87.72 Z M 225.50 180.00 A 45.5 45.5 0 1 0 134.50 180.00 A 45.5 45.5 0 1 0 225.50 180.00 Z"/>
                    </svg>
                </div>
            </nav>
        </div>
    );
}

export default HomePage;