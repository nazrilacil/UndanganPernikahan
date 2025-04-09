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