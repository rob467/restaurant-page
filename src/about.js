import { addTextContent, addContainerDivs } from "./homepage.js"

function addAboutPage() {
    const [_, contentDiv] = addContainerDivs()
    const aboutParagraphText = `Our restaurant was founded in 1879 and
    has been in the family ever since. We strive to only serve meals
    made with fresh, local ingredients and high quality wines from the region.`
    
    contentDiv.classList.add("about");
    addTextContent(contentDiv, "h1", "About Us");
    addTextContent(contentDiv, "p", aboutParagraphText);
}

export default addAboutPage