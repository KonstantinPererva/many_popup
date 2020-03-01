export default class PopupTab {
    constructor(option,data) {
        let {position, transition, width, height, background} = option;
        this.data = data || "### content ###";
        this.position = position || "";
        this.transition = transition || "";
        this.width = width || "";
        this.height = height || "";
        this.background = background || "#ffffff";
        let {tab, btnClose} = this.renderPopupTab();
        this.node = tab;
        this.btnClose = btnClose;

        this.closePopupTab = this.closePopupTab.bind(this);
        this.btnClose.addEventListener('click', this.closePopupTab);
    }

    openPopupTab() {
        setTimeout(() => {
            this.node.classList.add('open');
        },0);
    }

    closePopupTab() {
        this.node.classList.remove('open');
        setTimeout(() => this.node.remove(), this.transition);
    }

    renderPopupTab() {
        let tab = document.createElement('div');
        tab.classList.add('popup-tab');
        tab.classList.add('position-' + this.position);
        tab.style.width = this.width;
        tab.style.height = this.height;
        tab.style.transition = this.transition + "ms";
        tab.style.background = this.background;

        let btnClose = document.createElement('button');
        btnClose.classList.add('button-close-popup-tab');
        btnClose.innerHTML = "x";

        let content = document.createElement('div');
        content.classList.add('popup-tab-content');
        content.innerHTML = this.data;

        tab.appendChild(btnClose);
        tab.appendChild(content);

        return {tab, btnClose};
    }
}