const animate = document.querySelectorAll('._item-scroll')//cоздание базового класса, благодаря которому будет совершаться плавная анимация при скроле

if (animate.length > 0) {
   window.addEventListener('scroll', animScrollOn)
   function animScrollOn() {
      for (let index = 0; index < animate.length; index++) {
         const animateItems = animate[index];
         const animateItemHeight = animateItems.offsetHeight;
         const animateItemOffset = offset(animateItems).top;
         const animateStart = 4;

         let animItemPoint = window.innerHeight - animateItemHeight / animateStart;

         if (animateItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animateStart;
         }

         if (pageYOffset > (animateItemOffset - animItemPoint) && pageYOffset < (animateItemOffset - animateItemHeight)) {
            animateItems.classList.add('active');
         } else {
            if (!animateItems.classList.contains('blocked')) {
               animateItems.classList.remove('active');
            }
         }

      }
      function offset(e) {
         const rect = e.getBoundingClientRect(),//JavaScript метод getBoundingClientRect() возвращает объект DOMRect, который содержит размеры элемента и его положение относительно видимой области просмотра. ...

            elementTop = window.pageYOffset || document.documentElement.scrollTop,
            elementLeft = window.pageXoffset || document.documentElement.scrollLeft;

         return { top: rect.top + elementTop, left: rect.left + elementLeft }

      }
   }
   animScrollOn();
}