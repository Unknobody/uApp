const styleSheet = document.getElementById('style-sheet');
// menu de navigation
let homeLink = document.getElementById('home-link');
let appsLink = document.getElementById('apps-link');
let surpriseLink = document.getElementById('surprise-link');
let settingsLink = document.getElementById('settings-link');

let appSection = document.querySelector('section');



const tempMessageContainer = document.getElementById('temp-message-container');
const closeTempMessage = document.getElementById('close-temp-message');
const openTempMessage = document.getElementById('open-temp-message');
const tempMessageTitle = document.getElementById('temp-message-title');
const tempMessageText = document.getElementById('temp-message-text');


// On vérifie si l'utilisateur a déjà choisi un thème, si oui, on lui applique ce theme
// Si il n'en a pas, le theme par défaut sera le thème dark
if (localStorage.getItem('uapp-theme') == 'light') {
    styleSheet.setAttribute('href', 'assets/css/themes/light/main.css');
} else {
    styleSheet.setAttribute('href', 'assets/css/themes/dark/main.css');
}



if (document.body.classList.contains('app-home-page')) {
    console.log('Le fichier est chargé depuis la page d accueil');


    //Avatar de l'utilisateur
    let userAvatar = document.getElementById('user-avatar');
    let avatarChoisi = localStorage.getItem('avatar-choisi');
    userAvatar.innerHTML = `
    <img src="assets/images/avatars/${avatarChoisi}.jpg" alt="Ton avatar" class="img-fluid w-50">

    `

    //Changement d'avatar
    let editAvatar = document.querySelector('.avatar-edit-btn');

    editAvatar.addEventListener('click', () => {
        
        window.location.replace('avatars.html');

    });


    // Ecoute du clic sur le bouton d'ouverture du message personnel
    openTempMessage.addEventListener('click', () => {
        tempMessageContainer.classList.toggle('hide');

    })


    // Ecoute du clic sur le bouton de fermeture du message personnel
    closeTempMessage.addEventListener('click', () => {
        // Si la note a été lue ...
        if (localStorage.getItem('temp-hasread') == "true") {
            localStorage.setItem('temp-hasread', 'false');
            tempMessageContainer.classList.toggle('hide');
            localStorage.setItem('temp-message-title', tempMessageTitle.textContent);

            localStorage.setItem('temp-message-text', tempMessageText.textContent);
            
        } else {
            localStorage.setItem('temp-hasread', 'true');
            tempMessageContainer.classList.toggle('hide');
            localStorage.setItem('temp-message-title', tempMessageTitle.textContent);
            localStorage.setItem('temp-message-text', tempMessageText.textContent);

        }

        
    })

    if (localStorage.getItem('temp-message-title')) {
        tempMessageTitle.innerText = localStorage.getItem('temp-message-title');
    } else {
        tempMessageTitle.innerText = "Le savais-tu ?";

    }

    if (localStorage.getItem('temp-message-text')) {
        tempMessageText.innerText = localStorage.getItem('temp-message-text');
    } else {
        tempMessageText.innerHTML = `
        Cette note ainsi que le titre sont modifiables, ils te permettent de te créer une note personnalisée
        `;

    }





    

}




if (document.body.classList.contains('app-apps-page')) {
    console.log('Le fichier est chargé depuis la page Apps');
}

if (document.body.classList.contains('app-surprise-page')) {
    console.log('Le fichier est chargé depuis la page Surprise');
}


if (document.body.classList.contains('app-settings-page')) {
    console.log('Le fichier est chargé depuis la page Réglages');
    const darkThemeBtn = document.getElementById('dark-theme-btn');
    const lightThemeBtn = document.getElementById('light-theme-btn');
    lightThemeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        styleSheet.setAttribute('href', '/assets/css/themes/light/main.css');
        localStorage.setItem('uapp-theme', 'light');
    });

    darkThemeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        styleSheet.setAttribute('href', '/assets/css/themes/dark/main.css');
        localStorage.setItem('uapp-theme', 'dark');
    });
}








console.log('chargement js ok!');