export default class Card {
    constructor(nodeGoods, goods) {
        this.goods = goods;
        this.nodeGoods = nodeGoods;
    }

    changeState() {
        this.node.addEventListener('mouseover', () => {
            this.node.classList.add('active');
            this.goods.imgScalePlus();
        });

        this.node.addEventListener('mouseout', () => {
            this.node.classList.remove('active');
            this.goods.imgScaleNormal();
        });
    }

    render() {
        let card = document.createElement('div');
        card.classList.add('card');
        this.node = card;
        this.node.appendChild(this.nodeGoods);
        return card;
    }
};