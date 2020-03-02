import {openTabTemplate_1,openTabTemplate_2,openTabTemplate_3,openTabGallery,openPopup} from "./common";

let btn = document.querySelector('.button-open-popup');
let btnOpenTab = document.querySelector('.button-open-popup-right');

function openNewTab(popup) {
    let openOtherTabLeft = document.querySelector('.open-other-popup-left');

    openOtherTabLeft.addEventListener('click', () => {
       popup.addNewTab(openTabTemplate_2);
    });
}


btn.addEventListener('click', () => {
   let popup = openPopup(openTabGallery);
    popup.openWrapperForTabs();
    popup.addNewTab(openTabTemplate_3);
    openNewTab(popup);
});

btnOpenTab.addEventListener('click', () => {
    let popup = openPopup(openTabTemplate_2, openTabTemplate_3);
    popup.openWrapperForTabs();
});
