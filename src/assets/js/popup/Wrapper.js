export default class Wrapper {
    constructor(option, listTab) {
        let {transition, background} = option;
        this.listTab = listTab;
        this.transition = transition || "";
        this.background = background || "rgba(0,0,0,.35)";
        let {wrapper, substrate} = this.renderWrapper();
        this.node = wrapper;
        this.substrate = substrate;
    }

    openWrapper() {
        setTimeout(() => {
            this.substrate.classList.add('open');
        },0);
    }

    closeWrapper() {
        setTimeout(() => this.node.remove(), this.transition);
    }

    renderWrapper() {
        let wrapper = document.createElement('div');
        wrapper.classList.add('popup');

        let substrate = document.createElement('span');
        substrate.classList.add('popup-substrate');
        substrate.style.background = this.background;
        substrate.style.transition = this.transition + "ms";

        wrapper.appendChild(substrate);
        document.body.appendChild(wrapper);

        return {wrapper, substrate};
    }
}