let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Change image every 3 seconds
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

let slideIndex1 = 0;
let slideIndex2 = 0;
showSlides();

function showSlides() {
    showSlides(slideIndex1, 0);
    showSlides(slideIndex2, 1);
}

function showSlide(index, slideshowIndex) {
    const slides = document.querySelectorAll('.slideshow-container')[slideshowIndex].getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    if (index >= slides.length) {
        index = 0; // Reset to start of slides
    }
    if (index < 0) {
        index = slides.length - 1; // Go to last slide if at the beginning
    }
    slides[index].style.display = "block";  
}

function plusSlides(n, slideshowIndex) {
    if (slideshowIndex === 0) {
        slideIndex1 += n;
        showSlides();
    } else if (slideshowIndex === 1) {
        slideIndex2 += n;
        showSlides();
    }
}
