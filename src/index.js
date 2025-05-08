import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";


function setActiveTab(tabFunction) {
    const content = document.getElementById('content');
    content.innerHTML = ``;
    content.appendChild(tabFunction());
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('home-btn').textContent = 'Home';
    document.getElementById('menu-btn').textContent = "Menu";
    document.getElementById('about-btn').textContent = "Contact";

    document.getElementById('home-btn').addEventListener('click', () => setActiveTab(createHome));
    document.getElementById('menu-btn').addEventListener('click', () => setActiveTab(createMenu));
    document.getElementById('about-btn').addEventListener('click', () => setActiveTab(createContact));

   setActiveTab(createHome);
})