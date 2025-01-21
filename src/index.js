import  "./styles.css"
import  "./reset-styles.css"
import addHomepage from "./homepage.js"
import addMenu from "./menu.js"
import addAboutPage from "./about.js"
import addContactPage from "./contact.js"

addHomepage();

const getNavButtons = () => {
    return document.querySelectorAll("button")
}

const handleClick = (btn) => {
        const btnId = btn.getAttribute("id")
        if (btnId === "home") {
            addHomepage();
        } else if (btnId === "menu") {
            addMenu();
        } else if (btnId === "about") {
            addAboutPage();
        } else if (btnId === "contact") {
            addContactPage();
        }
    }

function onClick() {
    const navButtons = getNavButtons();
    navButtons.forEach(btn => btn.addEventListener("click", () => {handleClick(btn)}))
}

onClick();