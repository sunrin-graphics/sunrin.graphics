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
    setInitialPos();
    
    setTimeout(function() {
        slides[0].parentNode.classList.add('anim');
    }, 100);
}

function updateWidth(){
    var currentSlides = document.querySelectorAll('.slides li');
    var newSlideCount = currentSlides.length;
    var newWidth =(slideWidth + slideMargin)*newSlideCount - slideMargin +'px';
    slides[0].parentNode.style.width = newWidth;
}
function setInitialPos(){
    var initialTranslateValue = -(slideWidth + slideMargin)*slideCount;
    //slides { transform:translateX(-1000px);}
    slides[0].parentNode.style.transform = 'translateX(' + initialTranslateValue+'px)';
}
//nextBtn.addEventListener('click',function(){
    //moveSlide(currentIdx + 1);
//});
//prevBtn.addEventListener('click',function(){
    //moveSlide(currentIdx - 1);
//});
function moveSlide(num){
    slides[0].parentNode.style.left = -num * (slideWidth + slideMargin) +'px';
    currentIdx = num;
    console.log(currentIdx, slideCount);
    if(currentIdx ==slideCount || currentIdx == -slideCount){
        
        
        slides[0].parentNode.classList.remove('anim');
        slides[0].parentNode.left = '0px';
        currentIdx = 0;
        
        setTimeout(function(){
            slides[0].parentNode.classList.add('anim');
        },50)
        
    }
}
var timer = undefined;
function autoSlide(){
    if(timer == undefined){
        timer = setInterval(function(){
            moveSlide(currentIdx + 1)
        },1000)
    }
}
autoSlide();