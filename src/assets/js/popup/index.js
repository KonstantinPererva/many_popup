export default class PopupTab {
    constructor(option) {
        let {parent, position, transition, width, height} = option;
        this.parent = document.querySelector(parent) || null;
        this.position = position || "";
        this.transition = transition + "ms" || "";
        this.width = width || "";
        this.height = height || "";
        this.parent ? this.parent.appendChild(this.render()) : console.error('No parent selector specified in options');
        this.node.classList.add('position-' + this.position);
    }

    parametersPopupTab() {
        this.node.style.width = this.width;
        this.node.style.height = this.height;
        this.node.style.transition = this.transition;
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