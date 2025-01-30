document.addEventListener("DOMContentLoaded", () => {
    const lmProject = document.getElementById("lm-project");
    const bicciProject = document.getElementById("bicci-project");
    lmProject.style.opacity=0;
    bicciProject.style.opacity=0;

    function animateElement(element, fromX, toX) {
      element.style.opacity = 0;
      element.style.transform = `translateX(${fromX}%)`;
      element.style.transition = "transform 1s ease-out, opacity 2s ease-out"; // Define transition here
  
      // Trigger reflow (important!)
      element.offsetWidth;
  
      setTimeout(() => {
        element.style.opacity = 1;
        element.style.transform = `translateX(${toX}%)`;
      }, 500); // Delay before animation starts
    }
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
  
          if (target.id === "lm-project") {
              animateElement(target, -100, 0); // Slide from left
          } else if (target.id === "bicci-project") {
              animateElement(target, 100, 0); // Slide from right
          }
  
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.15 });
  
    observer.observe(lmProject);
    observer.observe(bicciProject);
  });