export default class PopupTab {
    constructor(option) {
        let {position, transition, width, height} = option;
        this.position = position || "";
        this.transition = transition + "ms" || "";
        this.width = width || "";
        this.height = height || "";
    }

    parametersPopupTab() {
        this.node.style.width = this.width;
        this.node.style.height = this.height;
        this.node.style.transition = this.transition;
    }

    positionPopupTab() {
        if (this.position === "left") {
            this.node.classList.add('position-left');
        }

        if (this.position === "right") {
            this.node.classList.add('position-right');
        }

        if (this.position === "top") {
            this.node.classList.add('position-top');
        }

        if (this.position === "center") {
            this.node.classList.add('position-center');
        }
    }

    openPopupTab() {
        this.node.classList.add('open')
    }

    closePopupTab() {
        this.node.classList.remove('open')
    }

    render() {
        let tab = document.createElement('div');
        tab.classList.add('popup-tab');
        this.node = tab;

        let btnClose = document.createElement('button');
        btnClose.classList.add('button-close-popup-tab');

        let content = document.createElement('div');
        content.classList.add('popup-tab-content');

        tab.appendChild(btnClose);
        tab.appendChild(content);

        return this.node;
    }
}