import $ from 'jquery';

class Basket {
    constructor() {
        this.count = 0;
        this.$item = $('.basket');
        this.elements = {};
    }

    add(id) {
        this.count += 1;
        this.elements[id] = this.elements[id] ? this.elements[id] + 1 : 1;
        this.$item.attr('data-count', this.count);
    }
}

export default Basket;