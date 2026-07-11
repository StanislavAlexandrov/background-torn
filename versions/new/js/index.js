const reveal = document.querySelector('[data-reveal]');

if (reveal) {
    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
    const smoothStep = (value) => value * value * (3 - 2 * value);

    let frame = 0;

    const setProgress = () => {
        frame = 0;

        const travel = Math.max(reveal.offsetHeight - window.innerHeight, 1);
        const progress = clamp(-reveal.getBoundingClientRect().top / travel, 0, 1);
        const eased = smoothStep(progress);

        reveal.style.setProperty('--progress', eased.toFixed(4));
        reveal.style.setProperty('--tear-x', `${(7 + eased * 76).toFixed(2)}%`);
        reveal.style.setProperty('--gray', `${(eased * 92).toFixed(2)}%`);
        reveal.style.setProperty('--overlay-opacity', (0.08 + eased * 0.92).toFixed(3));
        reveal.style.setProperty('--edge-opacity', (0.18 + eased * 0.68).toFixed(3));
        reveal.style.setProperty('--base-scale', (1.035 + eased * 0.025).toFixed(4));
        reveal.style.setProperty('--torn-scale', (1.06 - eased * 0.025).toFixed(4));
        reveal.style.setProperty('--parallax', `${((0.5 - eased) * 2.2).toFixed(2)}vw`);
    };

    const requestUpdate = () => {
        if (frame) {
            return;
        }

        frame = window.requestAnimationFrame(setProgress);
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    window.addEventListener('orientationchange', requestUpdate);

    setProgress();
}
