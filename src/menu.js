import { addTextContent, addContainerDivs } from "./homepage.js"

function createMenuItems() {
    
    let menuItems = [];

    class Menu {

        constructor(meal, price, section) {
            this.meal = meal
            this.price = price
            this.section = section
        }
    }

    const menuData = [
        { meal: "Soup of the Day", price: 7.00, section: "Starters"},
        { meal: "Escargots", price: 9.50, section: "Starters"},
        { meal: "Chicken Liver Pâté", price: 9.00, section: "Starters"},
        { meal: "Baked Camembert", price: 8.00, section: "Starters"},
        { meal: "Ratatouille", price: 18.00, section: "Mains"},
        { meal: "Duck à l'Orange", price: 22.00, section: "Mains"},
        { meal: "Coq au Vin", price: 21.00, section: "Mains"},
        { meal: "Bœuf Bourguignon", price: 24.00, section: "Mains"},
        { meal: "Bouillabaisse", price: 22.00, section: "Mains"},
        { meal: "Pear Tarte Tatin", price: 10.00, section: "Desserts"},
        { meal: "Chocolate Soufflé", price: 9.00, section: "Desserts"},
        { meal: "Creme Brûlée", price: 8.00, section: "Desserts"},
        { meal: "Chocolate Fondant", price: 8.50, section: "Desserts"},
    ]

    menuData.forEach(item => menuItems.push(
        new Menu(item.meal,item.price, item.section)));

    return menuItems;
}

function addMenu() {
    const menuItems = createMenuItems();
    const [_, contentDiv] = addContainerDivs();
    addTextContent(contentDiv, "h1", "Menu");
    contentDiv.classList.add("menu");

    const createMenuSectionDiv = (sectionHeader, parentDiv = contentDiv) => {
        const sectionDiv = document.createElement("div");
        addTextContent(sectionDiv, "h2", sectionHeader);
        sectionDiv.setAttribute("id", sectionHeader.toLowerCase());
        parentDiv.appendChild(sectionDiv);
    }

    const getUniqueSections = menuItems => {
        return [... new Set(menuItems.map(item => item.section))];
    }

    const uniqueMenuSections = getUniqueSections(menuItems);
    uniqueMenuSections.forEach(section => createMenuSectionDiv(section));
    menuItems.forEach(item => addTextContent(
        (document.querySelector(`#${item.section.toLowerCase()}`)),
        "p", `${item.meal} ${'.'.repeat(50 - item.meal.length - item.price.toString().length)} ${item.price}`))


}

export default addMenu;