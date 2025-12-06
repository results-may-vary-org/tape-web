const { animate, svg, stagger, createTimeline, onScroll, splitText } = anime;

const tl = createTimeline();

tl.label('start')
  .add(svg.createDrawable('.svanim'), {
    draw: ['0 0', '0 1'],
    ease: 'inOutQuad',
    duration: 800,
    delay: stagger(100),
    loop: false
  }, 'start')
  .add(['.svanim'], {fill: '#292524', duration: 200})
  .add(['.picture'], {opacity: [0, 1]})
  .call(() => document.getElementsByTagName('body')[0].classList.remove('ns'));

const p = [...document.getElementsByTagName("p")];
const btn = [...document.getElementsByTagName("button")];
const footer = [...document.getElementsByTagName("h6")];
const icon = [...document.getElementsByClassName("icon")];
const debug = false;
const duration = 560;

if (p.length > 0) {
  p.forEach(element => {
    const { words } = splitText(element, {words: { wrap: 'clip' }});
    animate(words, {
      y: [100, 0],
      opacity: [0, 1],
      duration,
      ease: 'out(3)',
      delay: stagger(90), // between each words
      autoplay: onScroll({
        target: element.parentElement,
        debug
      })
    });
  });
}

if (icon.length > 0) {
  icon.forEach(element => {
    animate(element, {
      y: [100, 0], // TODO do not work
      opacity: [0, 1],
      duration,
      ease: 'out(3)',
      autoplay: onScroll({
        target: element.parentElement,
        debug
      })
    });
  });
}

if (btn.length > 0) {
  btn.forEach(element => {
    animate(element, {
      y: [100, 0],
      opacity: [0, 1],
      duration,
      ease: 'out(3)',
      autoplay: onScroll({
        target: element.parentElement,
        debug
      })
    });
  });
}

if (footer.length > 0) {
  footer.forEach(element => {
    animate(element, {
      y: [100, 0],
      opacity: [0, 1],
      duration,
      ease: 'out(3)',
      delay: stagger(90),
      autoplay: onScroll({
        target: element.parentElement,
        debug
      })
    });
  });
}

