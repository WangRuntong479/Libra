const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// 显示特定幻灯片
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
      if (index === 0) {
        setTimeout(() => {
          slide.querySelector('.hidden-text').classList.add('black');
        }, 500); // 延迟显示文字
      }
    }
  });
}

// 下一页功能
document.body.addEventListener('click', () => {
  const currentContent = slides[currentSlide].querySelector('.hidden-text');
  if (currentContent && !currentContent.classList.contains('black')) {
    currentContent.classList.add('black'); // 显示当前页面文字
  } else {
    currentSlide = (currentSlide + 1) % slides.length; // 进入下一页
    showSlide(currentSlide);
  }
});

// 初始化
showSlide(currentSlide);
