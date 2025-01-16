import wineImage from "./wine-bar.jpg";

const addImage = (div, image) => {
    const imageEle = document.createElement("img");
    imageEle.src = image
    div.appendChild(imageEle);
}

const addTextContent = (div, element, text) => {
    const textElement = document.createElement(element);
    textElement.textContent = text
    div.appendChild(textElement);
}


function addHomepage() {
    const contentDiv = document.querySelector("#content");
    addImage(contentDiv, wineImage);
    const homepageParagraphText = "Welcome to our wine bar and restaurant"

    addTextContent(contentDiv, "h1", "Carcassonne");
    addTextContent(contentDiv, "p", homepageParagraphText);
}

export default addHomepage