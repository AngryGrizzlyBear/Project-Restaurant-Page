function createContact() {
    const contact = document.createElement('div');

    const heading = document.createElement('h1');
    heading.textContent = "Contact Us";

    const phone = document.createElement('p');
    phone.textContent = "📞 (555) 123-4567";

    const email = document.createElement('p');
    email.textContent = "📧 contact@bearsteakhouse.com";

    const address = document.createElement('p');
    address.textContent = "📍 123 Forest Lane, Pinewood, CO"; 

    contact.appendChild(heading);
    contact.appendChild(phone);
    contact.appendChild(email);
    contact.appendChild(address);

    return contact;
}

export default createContact;