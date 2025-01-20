import { addTextContent, addContainerDivs } from "./homepage.js"

function addMenu() {
    const [_, contentDiv] = addContainerDivs()
    addTextContent(contentDiv, "h1", "Menu")

    const menuHeadings = ["Starters", "Mains", "Desserts", "Drinks"]
    menuHeadings.forEach(heading => addTextContent(contentDiv, "h2", heading))

}

export default addMenu;