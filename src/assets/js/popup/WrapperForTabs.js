import Wrapper from "./Wrapper";

export default class WrapperForTabs extends Wrapper {
    constructor(option, listTab) {
        super(option, listTab);

        this.closeWrapperForTabs = this.closeWrapperForTabs.bind(this);
        this.openWrapperForTabs = this.openWrapperForTabs.bind(this);
        this.openWrapper = this.openWrapper.bind(this);
        this.closeWrapper = this.closeWrapper.bind(this);

        this.substrate.addEventListener('click', this.closeWrapperForTabs);
        console.log(this.node);
    }

    addTab() {
        this.listTab.forEach(fn => {
            let tab = fn();
            console.log(tab);
            tab.renderPopupTab();
            this.node.appendChild(tab);
        });
    }

    closeWrapperForTabs() {
        this.substrate.classList.remove('open');
        this.listTab.forEach(function (tab) {
            console.log(tab);
        });

        this.closeWrapper();
    }

    openWrapperForTabs() {
        this.openWrapper();

        this.addTab();
    }
}