import {openTabTemplate_1,openTabTemplate_2,openTabTemplate_3,openTabGallery,openPopup} from "./common";

let btn = document.querySelector('.button-open-popup');
let btnOpenRightPopup = document.querySelector('.button-open-popup-right');

btn.addEventListener('click', function () {
    openPopup(openTabGallery);
});

btnOpenRightPopup.addEventListener('click', function () {
    openPopup(openTabTemplate_2, openTabTemplate_3)
});
