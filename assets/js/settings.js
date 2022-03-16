// On crée et identifie les différentes uApps disponibles
// Puis on les ajoute dans le local storage
let uapps = ["Pierre Papier Ciseaux", "Shop List", "Jokes de Papa"];
localStorage.setItem("u-apps", JSON.stringify(uapps));


let allAppsEl = document.querySelectorAll('.checkbox-input');

app1Name = uapps[0];
let app1State = localStorage.getItem(uapps[0]);

app2Name = uapps[1];
let app2State = localStorage.getItem(uapps[1]);

app3Name = uapps[2];
let app3State = localStorage.getItem(uapps[2]);


// Coche les cases déjà sélectionnées auparavant par l'utilisateur
function initValues() {
    if (app1State == "true") {
        allAppsEl[0].checked = true;
    }
    if (app2State == "true") {
        allAppsEl[1].checked = true;
    }
    if (app3State == "true") {
        allAppsEl[2].checked = true;
    }
}    





allAppsEl.forEach((item) => {
    
    
    item.addEventListener('click', () => {
        
        
        if(item.checked) {
            localStorage.setItem(item.name, "true");          
        } else {
            localStorage.setItem(item.name, "false");
        }
    })

    
});


initValues();





