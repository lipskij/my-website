const sections = document.querySelectorAll('section');
const buble = document.querySelector('.buble');

const options = { // nav scrooling indicator
  threshold: 0.8
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
  });
}

sections.forEach(section => {
  observer.observe(section);
});


// add animation on crool down to animate text