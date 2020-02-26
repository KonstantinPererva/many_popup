import PopupTab from "./index";

export default class Template_1 extends PopupTab{
    constructor(option, parent) {
        super(option);
        let {position, transition, width, height} = option;
        this.parent = parent;
        this.position = position || "";
        this.transition = transition + "ms" || "";
        this.width = width || "";
        this.height = height || "";
        this.parent.appendChild(this.render());
        this.positionPopupTab();
        this.parametersPopupTab();
    }
}