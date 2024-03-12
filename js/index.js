
document.addEventListener('DOMContentLoaded', function () {
    let currentSlideIndex = 0;
    const slides = document.querySelectorAll('.slideshow img');
    const dots = document.querySelectorAll('.dot');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
    }

    // 이미지 변경 간격 (밀리초 단위)
    const slideInterval = 3000;

    // 초기 이미지 표시
    showSlide(currentSlideIndex);

    // 주기적으로 다음 이미지로 전환
    setInterval(nextSlide, slideInterval);
});

function currentSlide(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
}