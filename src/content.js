import wineImage from "./wine-bar.jpg";
const contentDiv = document.createElement("div");

const image = document.createElement("img");
image.src = wineImage

contentDiv.appendChild(image);
document.body.appendChild(contentDiv);