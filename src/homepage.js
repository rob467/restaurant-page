import wineImage from "./wine-bar.jpg";


const addTextContent = (div, element, text) => {
    const textElement = document.createElement(element);
    textElement.textContent = text
    div.appendChild(textElement);
}


function addHomepage() {
    const heroDiv = document.querySelector(".hero");
    const contentDiv = document.createElement("div")
    contentDiv.classList.add("content-container");

    // const imageContainer = document.createElement("div");
    // imageContainer.classList.add("image-container");

    // // addImage(imageContainer, wineImage);
    // contentDiv.appendChild(imageContainer);
    const homepageParagraphText = "Welcome to our exclusive wine bar and restaurant"

    addTextContent(contentDiv, "h1", "Carcassonne");
    addTextContent(contentDiv, "p", homepageParagraphText);
    heroDiv.appendChild(contentDiv)
}

export default addHomepage