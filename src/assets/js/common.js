import WrapperForTabs from "./popup/WrapperForTabs";
import Template_1 from "./popup/Template_1";
import Gallery from "./popup/Gallery";

let data_gallery = '<button class="open-other-popup-left">Open other popup left</button>';
let data_other = '<div><button class="btn-open-r-p">open right popup</button>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aliquam consequatur cumque deserunt distinctio ducimus eaque eum eveniet exercitationem expedita fugiat harum, laboriosam laborum minus nam neque nihil nisi non obcaecati omnis pariatur placeat quam quos reiciendis rem sunt suscipit temporibus totam velit voluptate. Beatae blanditiis delectus doloremque ducimus eaque eius error eum facere facilis fugiat itaque iusto labore libero magnam, molestiae neque, nulla numquam perferendis placeat quaerat, quia ratione recusandae reiciendis repellendus voluptas voluptatem voluptatibus. Accusantium ad, asperiores doloremque, hic laboriosam necessitatibus nemo neque pariatur, perferendis perspiciatis quidem voluptatum! Consequatur doloribus iusto possimus quia quibusdam repellat tempora tempore. Nostrum.</div>';

function openTabTemplate_1(parent) {
    let tab = new Template_1(
        {
            position: "left",
            transition: 400,
            width: "500px",
            background: 'rgba(255,224,190,1)',
            parent: parent
        },

        data_other
    );

    tab.openPopupTab();

    return tab;
}

function openTabTemplate_2(parent) {
    let tab = new Template_1(
        {
            position: "right",
            transition: 400,
            width: "400px",
            background: 'rgba(209,246,255,1)',
            parent: parent
        },

        data_other
    );

    tab.openPopupTab();

    return tab;
}

function openTabTemplate_3(parent) {
    let tab = new Template_1(
        {
            position: "top",
            transition: 400,
            width: "400px",
            height: "300px",
            background: 'rgba(255,219,219,1)',
            parent: parent
        },

        data_other
    );

    tab.openPopupTab();

    return tab;
}

function openTabGallery(parent) {
    let tab = new Gallery(
        {
            position: "center",
            transition: 400,
            width: "500px",
            height: "400px",
            background: 'rgba(194,255,205,1)',
            parent: parent
        },

        data_gallery
    );

    tab.openPopupTab()

    ;return tab;
}

function openPopup() {
    let arg = [...arguments];

    new Promise(function (resolve, reject) {
        let wrapper = new WrapperForTabs(
            {
                transition: 400,
                background: 'rgba(0,0,0,.5)'
            },

            arg
        );

        resolve(wrapper);
    }).then(wrapper => {
        wrapper.openWrapperForTabs();
    });
}

export {openTabTemplate_1,openTabTemplate_2,openTabTemplate_3,openTabGallery,openPopup};