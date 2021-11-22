// Скрипты для header
function changeHeaderContact() {
    const number = document.querySelector('.header-contact__number');
    number.innerHTML = '';
    number.insertAdjacentHTML('beforeend', `<img src="./img/call.png" alt="номер телефона">`)
}

window.onload = function() {
    if (document.documentElement.clientWidth < 1500) {
        changeHeaderContact()
    }

    // делаем все слайды в новостях квадратные
    const sliderItems = document.querySelectorAll('.newsActions-slider .newsActions-slider__item');
    sliderItems.forEach(element => {
        element.style.height = element.offsetWidth + 'px';
    });
};

window.addEventListener(`resize`, event => {
    if (document.documentElement.clientWidth < 1500) {
        changeHeaderContact()
    }

    // делаем все слайды в новостях квадратные
    const sliderItems = document.querySelectorAll('.newsActions-slider .newsActions-slider__item');
    sliderItems.forEach(element => {
        element.style.height = element.offsetWidth + 'px';
    });
}, false); 
// Скрипты для header

// Подключение слайдера
if (document.documentElement.clientWidth > 1300) {
    $('.newsActions-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });
}else if (document.documentElement.clientWidth > 750) {
    $('.newsActions-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });
} else{
    $('.newsActions-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });
}

// Подключение слайдера

$("#price1").animatedModal();
const contentModal = document.querySelector('.modal-news');
const titleModal = document.querySelector('.my-h4__news');

function openNews(id) {
    newsForModal.forEach(element => {
        if (id == element[0]) {
            titleModal.innerHTML = '';
            titleModal.insertAdjacentText('beforeend', element[1])
            contentModal.innerHTML = '';
            contentModal.insertAdjacentHTML('beforeend', `<div>
            <img src="${element[2]}" alt="сердце вашего автомобиля">
          </div>`);
          contentModal.insertAdjacentHTML('beforeend', element[3])
        }
    });
}

const news = document.querySelectorAll('.wrapper');
news.forEach(element => {
    element.addEventListener('click', ()=>openNews(element.id))
});

$(".inline").modaal();
$("#m1").animatedModal();
