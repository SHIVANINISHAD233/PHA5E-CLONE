window.addEventListener('load', () => {
    // Preloader Fade Out
    document.getElementById('pre-loader').classList.add('hidden');
});

document.addEventListener('DOMContentLoaded', () => {
    // GSAP Animations for page load
    gsap.from('.dynamic-title', {
        opacity: 0,
        y: -50,
        duration: 1.5,
        ease: 'power2.out',
    });

    gsap.to('.animated-blocks .block', {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        stagger: 0.3,
        ease: 'power2.inOut',
    });

    // Scroll-triggered animations
    gsap.utils.toArray(".section-title").forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 100,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            }
        });
    });

    // ScrollTrigger for video section animation
    gsap.from("#video-section iframe", {
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
        scrollTrigger: {
            trigger: "#video-section",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        }
    });
});