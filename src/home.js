function createHome() {
    const home = document.createElement('div');

    const heading = document.createElement('h1');
    heading.textContent = "Welcome to Bear Steakhouse";

    const image = document.createElement('img');
    image.src = require('./images/steak.jpg');
    image.alt = "Delicious steak";
    image.wdith = 500;

    const description = document.createElement('p');
    description.textContent = "We server meals that bring out your wild side! Come on in and grab a bite!";

    home.appendChild(heading);
    home.appendChild(image);
    home.appendChild(description);

    return home;
}

export default createHome;