document.addEventListener("DOMContentLoaded", (event) => {

  // handle the shadow for the header
  window.addEventListener('scroll', () => {
    const element = document.getElementById('header');

    if (window.scrollY >= 50) {
      element.classList.add('blurred');
    } else {
      element.classList.remove('blurred');
    }
  });

  // animate the text
  const {animate, splitText, stagger} = anime; 

  const elems = document.getElementsByClassName('anime');
  
  Object.values(elems).forEach(element => {
    splitText(element, {lines: { wrap: 'clip' }})
    .addEffect(({ lines }) => animate(lines, {
      y: [{ to: ['100%', '0%'] }],
      duration: 1000,
      ease: 'out(3)',
      delay: stagger(200),
      loop: false,
    }));
  });
});
