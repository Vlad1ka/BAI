document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slider-image');
    const totalSlides = slides.length;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((sliderImage, i) => {
            sliderImage.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 2000);
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    showSlide(currentSlide);
    startSlideShow();

    const sliderContainer = document.querySelector('.slider');
    sliderContainer.addEventListener('mouseenter', stopSlideShow);
    sliderContainer.addEventListener('mouseleave', startSlideShow);
});