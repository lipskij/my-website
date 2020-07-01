const sections = document.querySelectorAll('section');
const buble = document.querySelector('.buble');

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 300
}); // smooth scrool cross browsers

gsap.registerPlugin(MotionPathPlugin); // paper plane animation

const tween = gsap.timeline();

gsap.to('.paper-plane', {
  duration: 3,
  ease:"power1.inOut",
  motionPath: {
    path: [
      { x: 400, y: 100, scale: 0 } ,
      { x: 650, y: -100, scale: 0 } ,
      { x: 350, y: -50, scale: 1 } ,
      { x: 600, y: 150, scale: 1 } ,
      { x: window.innerWidth, y: -100, scale: 0 },
    ],
    curviness: 1.3,
    autoRotate: true
  }
});

const options = { // nav scrooling indicator
  threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach(entry => {
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const coords = activeAnchor.getBoundingClientRect();
    const directions = {
      height: coords.height,
      width: coords.width,
      left: coords.left
    };
    if (entry.isIntersecting) {
      buble.style.setProperty('left', `${directions.left}px`);
      buble.style.setProperty('width', `${directions.width}px`);
      buble.style.setProperty('height', `${directions.height}px`);
    }
    if (entry.isIntersecting) {
      gsap.to('.paper-plane', {
        duration: 5,
        ease:"power1.inOut",
        motionPath: {
          path: [
            { x: 400, y: 50, scale: 0 } ,
            { x: 650, y: -100, scale: 1 } ,
            { x: 350, y: -50, scale: 1 } ,
            { x: 600, y: 150, scale: 1 } ,
            { x: window.innerWidth, y: -100, scale: 0 },
          ],
          curviness: 1.3,
          autoRotate: true
        }
      });
    }
  });
}

sections.forEach(section => {
  observer.observe(section);
});
