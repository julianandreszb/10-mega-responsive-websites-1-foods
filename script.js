document.querySelector('.menu').addEventListener('click', () => {
    document.querySelectorAll('.target').forEach((element) => {
        element.classList.toggle('change');
    });
});
const icons = document.querySelectorAll('.section-1-icons i');

setInterval(() => {
    const activeIcon = document.querySelector('.section-1-icons i.active');
    const nextIcon = activeIcon.nextElementSibling;

    activeIcon.classList.remove('active');

    if (nextIcon) {
        nextIcon.classList.add('active');
    } else {
        icons[0].classList.add('active');
    }
}, 2000);
