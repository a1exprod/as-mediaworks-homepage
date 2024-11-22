document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(TextPlugin);

    function typewriterAnimation() {
        gsap.to(".gsap-typewriter", {
            duration: 1,
            text: "Webdevelopment & Graphic Design",
            ease: "ease-out",
            delay: 1,
            onComplete: function() {
                setTimeout(() => {
                    gsap.to(".gsap-typewriter", {
                        duration: 1,
                        text: "<span class='color-white'>Mediaworks",
                        ease: "ease-out",
                        onComplete: typewriterAnimation // Startet die Schleife erneut
                    });
                }, 1000); // Pause, bevor der Text zurückgesetzt wird
            }
        });
    }

    typewriterAnimation();
});
