let index = 0;

let slides=document.getElementsByClassName('slider-image');

function showslide(){
    for(let i=0 ; i<slides.length ; i++){
        slides[i].style.display="none"
    }
    slides[index].style.display="block"
}

function nextSlide(){
    index++;
    if(index > 3) index=0;
    showslide();
}

function prevSlide(){
    index--;
    if(index <0) index=3;
    showslide();
}

showslide();
