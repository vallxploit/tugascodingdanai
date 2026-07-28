document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Lucide Icons
    lucide.createIcons();

    // 2. Initialize Lenis for Smooth Scrolling
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing eksponensial halus
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 3. Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // 4. Hero Animations
    const heroTl = gsap.timeline();
    heroTl.to('.fade-up.stagger-1', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 })
          .to('.fade-up.stagger-2', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, "-=0.6")
          .to('.fade-up.stagger-3', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, "-=0.6")
          .to('.badge', { y: 0, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' }, "-=0.8");

    // 5. Scroll Animations (Fade Up Elements)
    gsap.utils.toArray('.fade-up:not(.stagger-1, .stagger-2, .stagger-3)').forEach(el => {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out"
        });
    });

    // 6. Timeline Line Progress Animation
    gsap.to('.timeline-progress', {
        scrollTrigger: {
            trigger: '.timeline',
            start: "top 50%",
            end: "bottom 80%",
            scrub: 1 // Link langsung ke scroll position
        },
        height: '100%',
        ease: "none"
    });

    // 7. Mouse Tracking Glow Effect on Cards (Glassmorphism Shine)
    const cards = document.querySelectorAll('.hover-glow');
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Set custom properties untuk diproses oleh CSS
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });

    // 8. Magnetic Button Interaction
    const magneticBtns = document.querySelectorAll('.magnetic-btn');
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const position = btn.getBoundingClientRect();
            const x = e.pageX - position.left - position.width / 2;
            const y = e.pageY - position.top - position.height / 2;

            // Gerakkan tombol seakan tertarik cursor
            gsap.to(btn, {
                x: x * 0.3,
                y: y * 0.5,
                duration: 0.5,
                ease: "power3.out"
            });
        });

        btn.addEventListener('mouseleave', () => {
            // Kembalikan posisi awal
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "elastic.out(1, 0.3)"
            });
        });
    });

    // 9. Flowchart Logic Animation (The Reveal Sequence)
    const fcTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".flowchart-container",
            start: "top 70%",
            end: "bottom 20%",
        }
    });

    // Animasi Node & Garis Flowchart berurutan (Sequencing)
    const nodes = document.querySelectorAll('.fc-node');
    const lines = document.querySelectorAll('.fc-line-fill');
    
    // Animate the first Node (START)
    fcTl.to(nodes[0], { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.5)" });

    // Loop through the primary linear path to animate line -> next node
    // Note: This logic assumes simple sequential dom ordering for visual effect
    let timeOffset = 0;
    
    gsap.utils.toArray('.fc-arrow .fc-line-fill').forEach((line, index) => {
        gsap.to(line, {
            scrollTrigger: {
                trigger: line.parentElement,
                start: "top 80%",
            },
            height: '100%',
            duration: 0.4,
            ease: "power2.inOut"
        });
    });

    gsap.utils.toArray('.fc-arrow-horizontal .fc-line-fill').forEach((line) => {
        gsap.to(line, {
            scrollTrigger: {
                trigger: line.parentElement,
                start: "top 80%",
            },
            width: window.innerWidth > 768 ? '100%' : '2px',
            height: window.innerWidth > 768 ? '100%' : '100%', // Handle mobile stacking
            duration: 0.4,
            ease: "power2.inOut"
        });
    });

    gsap.utils.toArray('.fc-node:not(:first-child)').forEach((node) => {
        gsap.to(node, {
            scrollTrigger: {
                trigger: node,
                start: "top 85%",
            },
            scale: 1, 
            opacity: 1, 
            duration: 0.5, 
            ease: "back.out(1.5)"
        });
    });
});