const slides = document.querySelectorAll('.item_container.mobile');
let currentSlide = 0;

function updateSlide() {
    // Убираем все активные классы
    slides.forEach(slide => {
        slide.classList.remove('active');
        slide.style.opacity = '0.5';
        slide.style.transform = 'scale(0.9)';
    });
    
    // Применяем стили к текущему слайду
    slides[currentSlide].classList.add('active');
    slides[currentSlide].style.opacity = '1';
    slides[currentSlide].style.transform = 'scale(1)';
    
    // Применяем стили к предыдущему слайду
    const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[prevSlide].style.opacity = '0.7';
    slides[prevSlide].style.transform = 'scale(0.95)';
    
    // Применяем стили к следующему слайду
    const nextSlide = (currentSlide + 1) % slides.length;
    slides[nextSlide].style.opacity = '0.7';
    slides[nextSlide].style.transform = 'scale(0.95)';
    
    // Вычисляем смещение для центрирования текущего слайда
    const slider = document.querySelector('.slider');
    const containerWidth = document.querySelector('.slider-container').offsetWidth;
    const slideWidth = 270; // Должно соответствовать ширине .item_container.mobile
    const offset = (containerWidth / 2) - (slideWidth / 2) - (currentSlide * slideWidth);
    slider.style.transform = `translateX(${offset}px)`;
}

document.getElementById('prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
});

document.getElementById('next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
});

// Инициализация
updateSlide();

// Обработчик изменения размера окна
window.addEventListener('resize', updateSlide);