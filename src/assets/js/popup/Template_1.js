import PopupTab from "./index";

export default class Template_1 extends PopupTab{
    constructor(option,data) {
        super(option,data);

        this.openPopupTab = this.openPopupTab.bind(this);
    }
}