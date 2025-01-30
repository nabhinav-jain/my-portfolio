    const lmProject = document.getElementById("lm-project");
    const bicciProject = document.getElementById("bicci-project");

    function animateElement(element, fromX) {
        

        const animation = element.animate([
            {  transform: `translateX(${fromX}%)` }, 
            { opacity: 1, transform: "translateX(0%)" } 
        ], {
            duration: 1000, 
            easing: "ease-out",
            fill: "forwards" 
        });

        return animation;
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;

                if (target.id === "lm-project") {
                    animateElement(target, -100); 
                } else if (target.id === "bicci-project") {
                    animateElement(target, 100); 
                }

                observer.unobserve(target); 
            }
        });
    }, { threshold: 0.15 });

    observer.observe(lmProject);
    observer.observe(bicciProject);

