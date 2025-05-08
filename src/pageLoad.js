import ImageSrc from './images/steak.jpg';

export default function loadHomePage() {
    const content = document.getElementById('content');

    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Bear Steakhouse!';

    const image = document.createElement('img');
    image.src = ImageSrc;
    image.alt = 'delicious steak';
    image.width = 500;

    const paragraph = document.createElement('p');
    paragraph.textContent = "we serve meals that bring out your wild side! Come on in and have a bite!";

    content.append(heading, image, paragraph);
}