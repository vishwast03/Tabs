const btns = document.querySelectorAll('.btn');
const aboutSection = document.querySelector('.about');
const contents = document.querySelectorAll('.content');

aboutSection.addEventListener('click', e => {
    const id = e.target.dataset.id;
    if(id) {
        btns.forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');
        contents.forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(id).classList.add('active');
    }
});