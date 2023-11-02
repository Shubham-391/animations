const elements = document.querySelectorAll('.box');
const options = {
    root: null,
    rootMargin: '0px',
    threshold: .4
}
const callbacks = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-up');
        }
    });
}
let observer = new IntersectionObserver(callbacks, options);
elements.forEach(element => {
    observer.observe(element);
});