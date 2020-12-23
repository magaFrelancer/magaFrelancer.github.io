const productBlocks = document.querySelectorAll('.products__item-img');
const nameImgs = [
    '../img/products/1.jpg',
    '../img/products/2.jpg',
    '../img/products/3.jpg',
    '../img/products/4.jpeg',
    '../img/products/5.jpg',
    '../img/products/6.jpeg',
    '../img/products/7.jpeg',
    '../img/products/8.jpeg'
]
productBlocks.forEach((item, index) => {
    item.style.background = `url(${nameImgs[index]}) center center/cover`;
})

const servicesBlocks = document.querySelectorAll('.services__item-img');
const nameImgs2 = [
    '../img/services/1.jpg',
    '../img/services/2.jpg',

]
servicesBlocks.forEach((item, index) => {
    item.style.background = `url(${nameImgs2[index]}) center center/cover`;
})