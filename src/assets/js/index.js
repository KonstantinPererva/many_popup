import Template_1 from "./popup/Template_1";
import Gallery from "./popup/Gallery";

let popupTab_1 = new Template_1({
    position: "left",
    transition: 400,
    width: "500px",
    parent: '.popup'
});

popupTab_1.openPopupTab();

let popupGallery = new Gallery({
    position: "center",
    transition: 400,
    width: "500px",
    height: "400px",
    parent: '.popup'
});

popupGallery.openPopupTab();
