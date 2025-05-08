function createMenu() {
    const menu = document.createElement('div');

const heading = document.createElement('h1');
heading.textContent = "Our Menu";

const item1 = document.createElement('p');
item1.textContent = "🔥 Grizzly Ribeye - $24.99";

const item2 = document.createElement('p');
item2.textContent = "🐻 Honey-Glazed Salmon - $19.99";

const item3 = document.createElement('p');
item3.textContent = "🌲 Wild Mushroom Risotto - $17.99";

menu.appendChild(heading);
menu.appendChild(item1);
menu.appendChild(item2);
menu.appendChild(item3);

return menu;

};


export default createMenu;