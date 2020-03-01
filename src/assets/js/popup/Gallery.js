import PopupTab from "./index";

export default class Gallery extends PopupTab{
    constructor(option,data) {
        super(option,data);

        this.openPopupTab = this.openPopupTab.bind(this);
    }
}