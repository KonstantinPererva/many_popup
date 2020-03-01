import Wrapper from "./Wrapper";

export default class WrapperForTabs extends Wrapper {
    constructor(option, listTab) {
        super(option, listTab);
        this.node = this.node;
        this.closeWrapperForTabs = this.closeWrapperForTabs.bind(this);
        this.openWrapperForTabs = this.openWrapperForTabs.bind(this);
        this.openWrapper = this.openWrapper.bind(this);
        this.closeWrapper = this.closeWrapper.bind(this);
        this.substrate.addEventListener('click', this.closeWrapperForTabs);
        this.list = [];
    }

    addTab() {
        this.list = this.listTab.map(fn => {
            let tab = fn();
            tab.renderPopupTab();
            this.node.appendChild(tab.node);
            tab.openPopupTab();

            return tab
        });
    }

    addNewTab(tab) {
        let newTab = tab();
        newTab.renderPopupTab();
        this.node.appendChild(newTab.node);
        newTab.openPopupTab();
        this.list.push(newTab);
    }

    closeWrapperForTabs() {
        this.substrate.classList.remove('open');
        this.closeWrapper();
        this.list.forEach(function (tab) {
            tab.closePopupTab();
        })
    }

    openWrapperForTabs() {
        this.openWrapper();

        this.addTab();
    }
}