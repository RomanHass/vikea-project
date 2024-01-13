// Меню бургер

const burger = document.querySelector('.burger'),
    menubody = document.querySelector('.menu__body');

burger.addEventListener('click', function (e) {
    document.body.classList.toggle('lock');
    burger.classList.toggle('burger--active');
    menubody.classList.toggle('menu__body--active');
});

// portfolio-slider

new Swiper('.portfolio-slider', {
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    preloadImages: false,
    lazy: {
        loadOnTransitionStart: false,
        loadPrevNext: false,
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        993: {
            slidesPerView: 2,
            spaceBetween: 100,
        },
        994: {
            spaceBetween: 100,
        },
        1200: {
            spaceBetween: 175,
        },
    },
});

// questionnaire slider

new Swiper('.questionnaire-slider', {
    grabCursor: true,
    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
        clickable: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    loop: true,
    preloadImages: false,
    lazy: {
        loadOnTransitionStart: false,
        loadPrevNext: false,
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    zoom: {
        maxRatio: 2,
        minRatio: 1,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});

// portfolio-portfolio-slider

new Swiper('.portfolio-portfolio-slider', {
    grabCursor: true,
    navigation: {
        prevEl: '.portfolio-button-prev',
        nextEl: '.portfolio-button-next',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    }, 
    autoHeight: false,
    breakpoints: {
        768: {
            slidesPerView: 1,
            slidesPerColumn: 1,
            spaceBetween: 0,
        },
        993: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 2,
            slidesPerColumn: 2,
        }
    },
});

// reviews slider

new Swiper('.slider', {
    grabCursor: true,
    navigation: {
        prevEl: '.slide-button-prev',
        nextEl: '.slide-button-next',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    autoHeight: false,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        994: {
            slidesPerView: 2,
            slidesPerColumn: 1,
            spaceBetween: 15,
        },
        1201: {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerColumn: 2,
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerColumn: 2,
            slidesPerGroup: 1,
        }
    },
});

// kviz slider

new Swiper('.kviz-slider', {
    grabCursor: true,
    
    slidesPerGroup: 1,
    autoHeight: false,
    spaceBetween: 25,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    breakpoints: {
        768 : {
            slidesPerView: 1,
        },
        993 : {
            slidesPerView: 3,
        }
    },
});

// Divier

const wrapper  = document.querySelector('.kviz__items');
const itemList  = document.querySelectorAll('.kviz__item');
const itemLine  = document.querySelectorAll('.kviz__line');
const nextButton  = document.querySelector('.kviz__btn');

let questionNumber = 1;

function showNextKviz() {
    questionNumber++;
    if (questionNumber === 6) {
        nextButton.classList.add('none');
    }
    showNumber();
    showItem();
}

function showNumber() {
    for (let i = 1; i <= itemLine.length; i++) {
        if (i <= questionNumber) {
            itemLine[i - 1].classList.remove('background-divider');
        }
    }
}

function showItem() {
    for (let i = 1; i <= itemList.length; i++) { 
        if (questionNumber === i) {
            itemList[i - 1].classList.remove('none');
        } else {
            itemList[i - 1].classList.add('none');
        }
        
    }
}

showNumber();
nextButton.addEventListener('click', showNextKviz)

// Range
const rangeInput = document.getElementById('myRange');
const rangeNumberInput = document.querySelector('.item-kviz-two__input-space');
let numberOfFlatArea = 0;

rangeInput.addEventListener('input', function() {
    makeInputLogic(rangeInput.value);
});

rangeNumberInput.addEventListener('input', function() {
    makeInputLogic(rangeNumberInput.value);
});

function changeFlatArea() {
    rangeInput.value = numberOfFlatArea;
    rangeNumberInput.value = numberOfFlatArea;
}

function getRangeBackground() {
    const color = `linear-gradient(90deg, rgb(227, 186, 129) ${numberOfFlatArea}%, rgb(241, 241, 241) ${numberOfFlatArea}%)`;
    rangeInput.style.background = color;
}

function makeInputLogic(flatArea = 0) {
    numberOfFlatArea = flatArea;
    changeFlatArea();
    getRangeBackground();
}

// Smooth scroll

const menuLinks = document.querySelectorAll('.btn[data-goto]');

if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageXOffset - document.querySelector('.header').offsetHeight;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

// TODO: create data object and insert data from every kviz list 
