import  "./styles.css"
import  "./reset-styles.css"
import addHomepage from "./homepage.js"
import addMenu from "./menu.js"

addHomepage();

function onClickMenu() {
    addMenu()
}

const handleClick = () => {
    const menuButton = document.querySelector("#menu")
    menuButton.addEventListener("click", onClickMenu)
}

handleClick();