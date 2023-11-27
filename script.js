var slides = document.querySelector('.slides'),
    slides = document.querySelectorAll('.slides li'),
    currentIdx = 0,
    slideCount = slides.length,
    slideWidth = 272,
    slideMargin = 12,
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next');

makeClone();

function makeClone(){
    for(var i = 0; i<slideCount; i++){
        var cloneSlide = slides[i].cloneNode(true);
        cloneSlide.classList.add('.clone');
        slides[i].parentNode.appendChild(cloneSlide);
    }
    for(var i = slideCount -1; i>=0; i--){
        var cloneSlide = slides[i].cloneNode(true);
        cloneSlide.classList.add('.clone');
        slides[i].parentNode.prepend(cloneSlide);
    }
    updateWidth();
}

function updateWidth(){
    var currentSlides = document.querySelectorAll('.slides li');
    var newSlideCount = currentSlides.length;
    var newWidth =(slideWidth + slideMargin)*newSlideCount - slideMargin +'px';
    slides.style.width = newWidth;
}