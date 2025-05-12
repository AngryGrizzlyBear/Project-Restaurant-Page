import './style.css'
import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";



function setActiveTab(tabFunction) {
    const content = document.getElementById('content');
    content.classList.add('fade-out');
    setTimeout(() => {
        content.innerHTML = '';
        content.appendChild(tabFunction());
        content.classList.remove('fade-out');
    }, 200); // match the CSS transition duration
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll("nav button");
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('home-btn').textContent = 'Home';
    document.getElementById('menu-btn').textContent = "Menu";
    document.getElementById('about-btn').textContent = "Contact";

    document.getElementById('home-btn').addEventListener('click', (e) => {
        setActiveButton(e.target);
       setActiveTab(createHome);
    });
    document.getElementById('menu-btn').addEventListener('click', (e) => {
        setActiveButton(e.target);
        setActiveTab(createMenu);
    });
    document.getElementById('about-btn').addEventListener('click', (e) => {
        setActiveButton(e.target);
        setActiveTab(createContact);
    });

    document.querySelectorAll("nav button").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.currentTarget.blur();
        });
    });

    // document.getElementById("home-btn").classList.add("active");
    setActiveTab(createHome);
})