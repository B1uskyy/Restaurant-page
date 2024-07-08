import frontPage from "./frontPage";
import './style.css';
import menu from "./menu";
import about from "./about";
let menuButton = document.querySelector(".menu");
let homeButton = document.querySelector(".home");
let aboutButton = document.querySelector(".about");


const content = document.querySelector(".content");


content.innerHTML = frontPage();

function homeScreen() {
    content.innerHTML = frontPage();
}

function menuScreen() {
    content.innerHTML = "";
    content.appendChild(menu());
}

function aboutScreen() {
    content.innerHTML = "";
    content.appendChild(about());
}

menuButton.addEventListener("click", menuScreen);
homeButton.addEventListener("click", homeScreen);
aboutButton.addEventListener("click", aboutScreen);
