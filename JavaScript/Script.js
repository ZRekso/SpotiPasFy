function utilisateur(event){
    event.preventDefault(); // bloque le rechargement

    let input = document.getElementById("name").value; // stoque l'identifiant

    if(input == ""){
        alert("Merci de rentrer votre nom !");
    }
    else {
        localStorage.setItem("spotypasfyUser", input);
        window.location.href = "Construction.html";
    }
}

function nameutilisateur() {
    // Récupère le nom stocke
    const username = localStorage.getItem("spotypasfyUser");

    if (username) {
        document.getElementById("welcome").textContent = username;
    } else {
        document.getElementById("welcome").textContent = "SpotiPasFy";
    }
}
// charge des que la page est open
window.onload = nameutilisateur;

// Search

function searchMusic() {
    let input = document.getElementById("search").value;
    let url = "https://api.jamendo.com/v3.0/tracks?client_id=f8ac19b7&format=json&fuzzytags=" + input;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let search = document.getElementById("container-Search");
            search.innerHTML = "";

            data.results.forEach(track => {
                search.innerHTML += `
                <div class="container-result-search">
                    <div class="result-search" onclick="PlayAlbum('${track.audio}')">
                        <img src="${track.album_image}" width="15%">
                        <p>${track.name}</p>
                    </div>
                </div>
                `
            })
        })
}

// Lancer audio
function PlayAlbum(lienAlbum) {
    let audio = document.getElementById("audio");
    audio.src = lienAlbum;
    audio.play();
}

// Menu connexion 
/*let logo = document.getElementById("logo");

let Spread = 0;
let direction = 1;

function pulse(){
    Spread += direction * 0.6;
    if(Spread >= 30){
        direction = -1;  
    }
    if(Spread <= 0){
        direction = 1;
    }

    logo.style.boxShadow = `0 0 ${Spread}px 13px #1ED760`;
    requestAnimationFrame(pulse); // relance pulse au prochain chargement de la fenetre 
}

pulse(); */ 



function demarrerCompteur() {
    let dateFin = localStorage.getItem("finCompteur");

    if (!dateFin) {
        dateFin = Date.now() + 3 * 24 * 60 * 60 * 1000; // 3 jours en millisecondes
        localStorage.setItem("finCompteur", dateFin);
    } else {
        dateFin = Number(dateFin);
    }

    const compteurElement = document.getElementById("compteur");
    if (!compteurElement) return;

    function majCompteur() {
        const maintenant = Date.now();
        const diff = dateFin - maintenant;

        if (diff <= 0) {
            compteurElement.textContent = "0j 0h 0m 0s";
            clearInterval(intervalle);
            return;
        }

        const jours = Math.floor(diff / (1000 * 60 * 60 * 24));
        const heures = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const secondes = Math.floor((diff / 1000) % 60);

        compteurElement.textContent = `${jours}j ${heures}h ${minutes}m ${secondes}s`;
    }

    majCompteur();
    const intervalle = setInterval(majCompteur, 1000);
}

window.addEventListener("load", demarrerCompteur);