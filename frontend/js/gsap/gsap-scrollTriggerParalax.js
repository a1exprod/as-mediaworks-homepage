document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    // Initial Setups
    gsap.set(".circle", { yPercent: -5 });
    gsap.set(".dotsBlue", { yPercent: 10 });
    gsap.set(".owlHorned", { yPercent: -20 });
    gsap.set(".clusterGreat", { yPercent: 5 });
    gsap.set(".triangle", { yPercent: 25, rotation: -90 });
    gsap.set(".dotsWhite", { yPercent: 10 });
    gsap.set(".owlBurrowing", { yPercent: -20 });
    gsap.set(".clusterBurrowing", { yPercent: 5 });

    // Great Horned Owl Animations
    gsap.to(".circle", {
        yPercent: 5,
        ease: "none",
        scrollTrigger: {
            trigger: ".clusterGreat",
            scrub: 1
        }
    });

    gsap.to(".dotsBlue", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
            trigger: ".clusterGreat",
            scrub: 1
        }
    });

    gsap.to(".owlHorned", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
            trigger: ".clusterGreat",
            scrub: 1
        }
    });

    gsap.to(".caption", {
        yPercent: 100,
        ease: "none",
        scrollTrigger: {
            trigger: ".clusterGreat",
            end: "bottom center",
            scrub: 1
        }
    });

    gsap.to(".clusterGreat", {
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
            trigger: ".clusterGreat",
            end: "bottom center",
            scrub: 1
        }
    });

    // Burrowing Owl Animations
    gsap.to(".triangle", {
        yPercent: -5,
        rotation: 40,
        ease: "none",
        scrollTrigger: {
            trigger: ".clusterBurrowing",
            scrub: 1
        }
    });

    gsap.to(".dotsWhite", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
            trigger: ".clusterBurrowing",
            scrub: 1
        }
    });

    gsap.to(".owlBurrowing", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
            trigger: ".clusterBurrowing",
            scrub: 1
        }
    });

    gsap.to(".captionBurrowing", {
        yPercent: 200,
        ease: "none",
        scrollTrigger: {
            trigger: ".clusterBurrowing",
            end: "bottom center",
            scrub: 1
        }
    });

    gsap.to(".clusterBurrowing", {
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
            trigger: ".clusterBurrowing",
            end: "bottom center",
            scrub: 1
        }
    });

    // Split Text Animations
    function setupSplits() {
        var SplitGreat = new SplitText(".titleGreathorned", { type: "words,chars" });
        gsap.from(SplitGreat.chars, {
            duration: 0.2,
            opacity: 0,
            y: 10,
            ease: "circ.out",
            stagger: 0.01,
            delay: 1,
            scrollTrigger: {
                trigger: ".titleGreathorned",
                start: "top 90%" // Animation startet, wenn das Element zu 10vh sichtbar wird
            }
        });

        var SplitBurrowing = new SplitText(".titleBurrowing", { type: "words,chars" });
        gsap.from(SplitBurrowing.chars, {
            duration: 0.8,
            opacity: 0,
            y: 10,
            ease: "circ.out",
            stagger: 0.02,
            scrollTrigger: {
                trigger: ".titleBurrowing",
                start: "top 90%",  // Animation startet bei 10vh
                end: "bottom center",
                scrub: 1
            }
        });
    }

    ScrollTrigger.addEventListener("refresh", setupSplits);
    setupSplits();
});
