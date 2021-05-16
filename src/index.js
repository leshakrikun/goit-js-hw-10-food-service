import './sass/main.scss';
import dish from "./menu.json"
import dishesTemplate from './templates/dishes.hbs'

const dishesData = {
    dish: dish,
}
console.log(dish)
const dishesHTML = dishesTemplate(dishesData)
console.log(dishesHTML)
document.querySelector('.js-menu').innerHTML = dishesHTML 

/* 
const listDishes = menu.map(menu => {
    const newEl = `<li class = 'gallery__item'><a class = 'gallery__link' href = "${image.original}"><img class = 'gallery__image' src = ${image.preview} data-source = ${image.original} alt=${image.description}></a></li>`
    return newEl
})



"id": "XWaQXcbk0",
"name": "Картофель, запеченный в мундире",
"description": "Ароматный, сытный, шипящий домашний картофель, фаршированный сметанно-беконной начинкой, — это очень простой и очень эффектный способ накормить большое количество человек, практически не потратив на готовку ни сил, ни времени. Обычную картошку при желании тут можно заменить на сладкий батат, а в начинку добавить, к примеру, кукурузу или сладкий красный перец.",
"image": "https://s1.eda.ru/StaticContent/Photos/140812180013/140820212258/p_O.jpg",
"price": 100,
"ingredients": [ */