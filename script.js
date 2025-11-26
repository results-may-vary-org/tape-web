window.addEventListener('scroll', () => {
  const element = document.getElementById('header');
  
  if (window.scrollY >= 50) {
    element.classList.add('blurred');
  } else {
    element.classList.remove('blurred');
  }
});
