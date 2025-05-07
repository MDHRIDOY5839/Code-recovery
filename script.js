document.querySelectorAll('.navigation .list').forEach((item, index) => {
    item.addEventListener('click', function () {
        document.querySelector('.navigation .list.active').classList.remove('active');
        item.classList.add('active');
        const indicator = document.querySelector('.indicator');
        indicator.style.transform = `translateX(${index * 80}px)`;
        indicator.classList.add('bounce');
        setTimeout(() => {
            indicator.classList.remove('bounce');
        }, 500); 
    });
});
