/*? no js js needed from me */
document.addEventListener('DOMContentLoaded', function() {

    simplyCountdown('.simply-countdown-cyber', {
        year: 2035,
        month: 12,
        day: 25,
        hours: 12,
        words: { 
            days: { root: 'hari', lambda: (root, n) => n > 1 ? root + '' : root },
            hours: { root: 'jam', lambda: (root, n) => n > 1 ? root + '' : root },
            minutes: { root: 'menit', lambda: (root, n) => n > 1 ? root + '' : root },
            seconds: { root: 'detik', lambda: (root, n) => n > 1 ? root + '' : root }}
    });
});

const offCanvas = document.querySelector('.offcanvas');
const stickyTop = document.querySelector('.sticky-top');

offCanvas.addEventListener('show.bs.offcanvas', function() {
    stickyTop.style.overflow = 'visible';
});

offCanvas.addEventListener('hidden.bs.offcanvas', function() {
    stickyTop.style.overflow = 'hidden';
});

const rootElement = document.querySelector(':root');

function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

	window.onscroll = function() {
		window.scrollTo(scrollTop, scrollLeft);
	}
	rootElement.style.scrollBehavior = 'auto';
}

function enableScroll() {
	window.onscroll = function() { }
	rootElement.style.scrollBehavior = 'smooth';
    localStorage.setItem('opened', 'true');
}
if(!localStorage.getItem('opened')) {
    disableScroll();
}
