const sliderMain = new Swiper('.slider_main',{
    freeMode: true,
    centerSlides: true,
    mousewheel: true,
    breakpoints:{
        0:{
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        680:{
            slidesPerView: 3.5,
            spaceBetween: 60
        }
    }
})
document.querySelectorAll('.slider_item').forEach(item=>{
    item.addEventListener('click', event=>{
        item.classList.toggle('opened');
    })
})

const textOnScreen = document.getElementById("info")
let isVisible = false;
function ShowInfo(){
    if (isVisible){
        textOnScreen.style.display="none";
    } else{
        textOnScreen.style.display="block"
    }
    isVisible=!isVisible;
}

