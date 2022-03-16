const personnalAppsEl = document.getElementById('personnal-apps');
const personnalAppEl = document.getElementById('personnal-app');
let uapps = ["Pierre Papier Ciseaux", "Shop List", "Jokes de Papa"];

let app1State = localStorage.getItem(uapps[0]);
let app2State = localStorage.getItem(uapps[1]);
let app3State = localStorage.getItem(uapps[2]);


if (app1State == "true") {
    personnalAppEl.innerHTML += `
    <li>
        <a href="app-ppc.html">
            <i class="fa fa-hand-scissors fa-2x"></i>
        </a>
    </li>
    `  
}

if (app2State == "true") {
    personnalAppEl.innerHTML += `
    <li>
        <a href="app-shoplist.html">
            <i class="fa fa-cart-plus fa-2x"></i>
        </a>
    </li>
    `  
}

if (app3State == "true") {
    personnalAppEl.innerHTML += `
    <li>
        <a href="app-jokes.html">
            <i class="fa fa-face-grin-squint-tears fa-2x"></i>
        </a>
    </li>
    `  
}
