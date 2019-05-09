import Basket from './basket.js';
import $ from 'jquery';
import './index.scss';

const $message = $('#message');
const basket = new Basket();

$('.btn-add').click(e => {
    const id = e.target.dataset.id;
    basket.add(id);
});

$('.basket').click(() => {
    $message.text(JSON.stringify(basket.elements));
    Object.keys(basket.elements).forEach(key => {
        console.log('Count of id:'+key, basket.elements[key]);
    });
    
});

