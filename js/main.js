// ===========================================
//      scroll-bar
// ===========================================
const rightScroll = document.querySelector('.right-scroll');
const aboutSection = document.querySelector('#timetabel-head');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        // aboutが画面に入ったら非表示
        if (entry.isIntersecting) {
            rightScroll.classList.add('is-hidden');
        } else {
            // aboutより上にいる間は表示
            if (entry.boundingClientRect.top > 0) {
                rightScroll.classList.remove('is-hidden');
            }
        }
    });
}, {
    threshold: 0
});

observer.observe(aboutSection);



// ===========================================
//      to-top
// ===========================================
const toTop = document.querySelector('.to-top');
const toTopTargetSection = document.querySelector('#day2');

const toTopObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            toTop.classList.add('is-show');
        } else if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
            toTop.classList.remove('is-show');
        }
    });
}, {
    threshold: 0,
    rootMargin: '-90% 0px 0px 0px'
});

toTopObserver.observe(toTopTargetSection);



// ===========================================
//      fadein
// ===========================================
const fadeinElements = document.querySelectorAll('.fadein');

const fadeinObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    rootMargin: '0px 0px -200px 0px'
});

fadeinElements.forEach(el => fadeinObserver.observe(el));