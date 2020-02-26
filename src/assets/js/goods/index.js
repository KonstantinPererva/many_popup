export default class Goods {
    constructor(brand,image,title,price) {
        this.brand = brand;
        this.image = image;
        this.title = title;
        this.price = price;
    }

    imgScalePlus() {
        this.goodsImg.classList.add('active');
    }

    imgScaleNormal() {
        this.goodsImg.classList.remove('active');
    }

    render() {
        let goods = document.createElement('div');
        goods.classList.add('goods');

        let goodsImg = document.createElement('img');
        goodsImg.src = this.image;
        this.goodsImg = goodsImg;

        let goodsTitle = document.createElement('div');
        goodsTitle.classList.add('title');
        goodsTitle.innerHTML = this.title;

        let goodsPrice = document.createElement('div');
        goodsPrice.classList.add('price');
        goodsPrice.innerHTML = this.price;

        goods.appendChild(goodsImg);
        goods.appendChild(goodsTitle);
        goods.appendChild(goodsPrice);

        return goods;
    }
};