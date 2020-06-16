const gitLink = document.querySelector('.git-link');
const itemA = document.querySelector('.li-1');

gsap.from(gitLink, {
  duration: 0.5, scale: 0, delay: 2, ease: "power1.inOut", 
});

gsap.from(itemA, {
  duration: 2, scale: 0.5, opacity: 0, delay: 0.3, ease: "elastic", force3D: true
});
