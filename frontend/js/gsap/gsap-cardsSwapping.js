document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".item");
    const color = gsap.utils.interpolate(["orange", "purple"]);
    const map = gsap.utils.mapRange(0, items.length, 0, 1);
    const offset = 30;

    gsap.set(items, {
        backgroundColor: (index) => color(map(index)),
        x: (index) => offset * index,
        y: (index) => -offset * index,
        zIndex: (index) => items.length - index
    });

    function diagonalLoop(items) {
        let totalItems = items.length;
        let currentItem = 0;

        function updatePositions() {
            for (let i = 0; i < totalItems; i++) {
                let itemIndex = (currentItem + i) % totalItems;
                let item = items[itemIndex];
                gsap.to(item, {
                    duration: 0.8,
                    x: offset * i,
                    y: -offset * i,
                    zIndex: totalItems - i,
                    scale: 1,
                    opacity: 1,
                    ease: "power2.out"
                });
            }
        }

        function moveToNext() {
            currentItem = (currentItem + 1) % totalItems;
            updatePositions();
        }

        setInterval(moveToNext, 2000);
        updatePositions();
    }

    diagonalLoop(items);
});
