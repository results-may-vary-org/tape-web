const { animate, svg, stagger, createTimeline } = anime;

const tl = createTimeline();

tl.label('start')
  .add(svg.createDrawable('.svanim'), {
    draw: ['0 0', '0 1'],
    ease: 'inOutQuad',
    duration: 1800,
    delay: stagger(100),
    loop: false
  }, 'start')
  .add(['.svanim'], {fill: '#292524', duration: 200})
  .add(['.picture'], {opacity: [0, .5, 1]});

