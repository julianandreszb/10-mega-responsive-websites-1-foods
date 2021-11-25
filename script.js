const icons = document.querySelectorAll('.section-1-icons i');

console.debug(icons);

setInterval(() => {

    const icon = document.querySelector('.section-1-icons i.change');
    icon.classList.remove('change');

    if (icon.nextElementSibling) {
        icon.nextElementSibling.classList.add('change');
    } else {
        icons[0].classList.add('change');
    }
}, 2000);
