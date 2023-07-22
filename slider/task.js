document.addEventListener('DOMContentLoaded', function() {
  const sliderItems = document.querySelectorAll('.slider__item');
  const prevArrow = document.querySelector('.slider__arrow_prev');
  const nextArrow = document.querySelector('.slider__arrow_next');
  const dotItems = document.querySelectorAll('.slider__dot'); 
  let activeIndex = 0;

  function hideAllImages() {
    sliderItems.forEach(item => item.classList.remove('slider__item_active'));
    dotItems.forEach(dot => dot.classList.remove('slider__dot_active'));
  }

  function showImage(index) {
    hideAllImages();
    sliderItems[index].classList.add('slider__item_active');
    dotItems[index].classList.add('slider__dot_active');
  }

  function clickArrow(event) {
    if (event.target.classList.contains('slider__arrow_prev')) {
      activeIndex = (activeIndex - 1 + sliderItems.length) % sliderItems.length;
    } else if (event.target.classList.contains('slider__arrow_next')) {
      activeIndex = (activeIndex + 1) % sliderItems.length;
    } else if (event.target.classList.contains('slider__dot')){
      activeIndex =  Array.from(dotItems).indexOf(event.target.closest('.slider__dot'));

    }

    showImage(activeIndex);
  }

  prevArrow.addEventListener('click', clickArrow);
  nextArrow.addEventListener('click', clickArrow);
  dotItems.forEach(dot => dot.addEventListener('click', clickArrow));
});
