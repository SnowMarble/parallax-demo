const image1 = document.getElementById('image-1');
const image2 = document.getElementById('image-2');
const image3 = document.getElementById('image-3');
const image4 = document.getElementById('image-4');
const image5 = document.getElementById('image-5');
const mainTitle = document.getElementById('main-title');
const snow = document.getElementById('snow');
window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    if (scroll > window.innerHeight)
        return;
    image1.style.top = `${scroll * 0.1}px`;
    image2.style.top = `${scroll * 0.4}px`;
    image2.style.filter = `blur(${scroll * 0.002}px)`;
    image3.style.top = `${scroll * 0.7}px`;
    image3.style.filter = `blur(${scroll * 0.005}px)`;
    image4.style.top = `${scroll * 0.9}px`;
    mainTitle.style.top = `calc(25% + ${scroll * 0.8}px)`;
    mainTitle.style.left = `calc(50% + ${scroll * -1.5}px)`;
    image5.style.top = `${scroll}px`;
    image5.style.filter = `brightness(${100 - (window.scrollY * 40) / window.innerHeight}%)`;
    snow.style.opacity = `${(scroll / window.innerHeight) * 0.1}`;
});
