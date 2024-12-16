const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// 显示特定幻灯片
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active', 'previous');
    if (i === index) {
      slide.classList.add('active');
    } else if (i === currentSlide) {
      slide.classList.add('previous');
    }
  });
}

// 下一页
document.getElementById('next').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

// 上一页
document.getElementById('prev').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

// 初始化
showSlide(currentSlide);
