import { addTextContent, addContainerDivs } from "./homepage.js"

function addContactPage() {
    const [_, contentDiv] = addContainerDivs()
    const email = "Email: fake_address@mail.com";
    const phone = "Phone: +1 2345 678 910";

    addTextContent(contentDiv, "h1", "Contact Us");
    addTextContent(contentDiv, "p", email);
    addTextContent(contentDiv, "p", phone);
}

export default addContactPage