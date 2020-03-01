import PopupTab from "./index";

export default class Template_2 extends PopupTab{
    constructor(option) {
        super(option);
        let {position, transition, width, height} = option;
        this.parent = parent;
        this.position = position || "";
        this.transition = transition + "ms" || "";
        this.width = width || "";
        this.height = height || "";
        this.parametersPopupTab();
        this.openPopupTab = this.openPopupTab.bind(this);
        this.closePopupTab = this.closePopupTab.bind(this);
    }
}