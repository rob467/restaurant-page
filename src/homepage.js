import wineImage from "./wine-bar.jpg";


const addTextContent = (div, element, text) => {
    const textElement = document.createElement(element);
    textElement.textContent = text
    div.appendChild(textElement);
}

function addContainerDivs() {
    const heroDiv = document.querySelector(".hero");
    while (heroDiv.firstChild) {
        heroDiv.removeChild(heroDiv.firstChild);
    }
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content-container");
    heroDiv.appendChild(contentDiv);
    
    return [heroDiv, contentDiv];
}

function addHomepage() {
    const [_, contentDiv] = addContainerDivs()
    const homepageParagraphText = "Welcome to our exclusive wine bar and restaurant"
    contentDiv.classList.add("homepage");

    addTextContent(contentDiv, "h1", "Carcassonne");
    addTextContent(contentDiv, "p", homepageParagraphText);
}

export default addHomepage;
export { addTextContent, addContainerDivs };