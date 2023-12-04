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

const openButton_1 = document.getElementById("voyage");
const openButton_2 = document.getElementById("beginning");
const openButton_3 = document.getElementById("conte");
const openButton_4 = document.getElementById("paran");
const openButton_5 = document.getElementById("what");
const openButton_6 = document.getElementById("two");
const openButton_7 = document.getElementById("nan");
const openButton_8 = document.getElementById("curt");
const openButton_9 = document.getElementById("spec");
const openButton_10 = document.getElementById("swim");

const modal_1 = document.querySelector(".voyage");
const modal_2 = document.querySelector(".beginning");
const modal_3 = document.querySelector(".conte");
const modal_4 = document.querySelector(".paran");
const modal_5 = document.querySelector(".what");
const modal_6 = document.querySelector(".two");
const modal_7 = document.querySelector(".nan");
const modal_8 = document.querySelector(".curt");
const modal_9 = document.querySelector(".spec");
const modal_10 = document.querySelector(".swim");

const overlay_1 = modal_1.querySelector(".modal_overlay")
const overlay_2 = modal_2.querySelector(".modal_overlay")
const overlay_3 = modal_3.querySelector(".modal_overlay")
const overlay_4 = modal_4.querySelector(".modal_overlay")
const overlay_5 = modal_5.querySelector(".modal_overlay")
const overlay_6 = modal_6.querySelector(".modal_overlay")
const overlay_7 = modal_7.querySelector(".modal_overlay")
const overlay_8 = modal_8.querySelector(".modal_overlay")
const overlay_9 = modal_9.querySelector(".modal_overlay")
const overlay_10 = modal_10.querySelector(".modal_overlay")

const closeBtn_1 = modal_1.querySelector("button")
const closeBtn_2 = modal_2.querySelector("button")
const closeBtn_3 = modal_3.querySelector("button")
const closeBtn_4 = modal_4.querySelector("button")
const closeBtn_5 = modal_5.querySelector("button")
const closeBtn_6 = modal_6.querySelector("button")
const closeBtn_7 = modal_7.querySelector("button")
const closeBtn_8 = modal_8.querySelector("button")
const closeBtn_9 = modal_9.querySelector("button")
const closeBtn_10 = modal_10.querySelector("button")

const openModal_1 = () =>{modal_1.classList.remove("hidden");}
const openModal_2 = () =>{modal_2.classList.remove("hidden");}
const openModal_3 = () =>{modal_3.classList.remove("hidden");}
const openModal_4 = () =>{modal_4.classList.remove("hidden");}
const openModal_5 = () =>{modal_5.classList.remove("hidden");}
const openModal_6 = () =>{modal_6.classList.remove("hidden");}
const openModal_7 = () =>{modal_7.classList.remove("hidden");}
const openModal_8 = () =>{modal_8.classList.remove("hidden");}
const openModal_9 = () =>{modal_9.classList.remove("hidden");}
const openModal_10 = () =>{modal_10.classList.remove("hidden");}

const closeModal_1 = () =>{modal_1.classList.add("hidden");}
const closeModal_2 = () =>{modal_2.classList.add("hidden");}
const closeModal_3 = () =>{modal_3.classList.add("hidden");}
const closeModal_4 = () =>{modal_4.classList.add("hidden");}
const closeModal_5 = () =>{modal_5.classList.add("hidden");}
const closeModal_6 = () =>{modal_6.classList.add("hidden");}
const closeModal_7 = () =>{modal_7.classList.add("hidden");}
const closeModal_8 = () =>{modal_8.classList.add("hidden");}
const closeModal_9 = () =>{modal_9.classList.add("hidden");}

closeBtn_1.addEventListener("click", closeModal_1);
closeBtn_2.addEventListener("click", closeModal_2);
closeBtn_3.addEventListener("click", closeModal_3);
closeBtn_4.addEventListener("click", closeModal_4);
closeBtn_5.addEventListener("click", closeModal_5);
closeBtn_6.addEventListener("click", closeModal_6);
closeBtn_7.addEventListener("click", closeModal_7);
closeBtn_8.addEventListener("click", closeModal_8);
closeBtn_9.addEventListener("click", closeModal_9);

overlay_1.addEventListener("click", closeModal_1);
overlay_2.addEventListener("click", closeModal_2);
overlay_3.addEventListener("click", closeModal_3);
overlay_4.addEventListener("click", closeModal_4);
overlay_5.addEventListener("click", closeModal_5);
overlay_6.addEventListener("click", closeModal_6);
overlay_7.addEventListener("click", closeModal_7);
overlay_8.addEventListener("click", closeModal_8);
overlay_9.addEventListener("click", closeModal_9);

openButton_1.addEventListener("click", openModal_1);
openButton_2.addEventListener("click", openModal_2);
openButton_3.addEventListener("click", openModal_3);
openButton_4.addEventListener("click", openModal_4);
openButton_5.addEventListener("click", openModal_5);
openButton_6.addEventListener("click", openModal_6);
openButton_7.addEventListener("click", openModal_7);
openButton_8.addEventListener("click", openModal_8);
openButton_9.addEventListener("click", openModal_9);