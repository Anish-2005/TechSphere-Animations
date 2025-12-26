// Animated SVG paths for hero section
const pathsContainer = document.querySelector('.animated-paths');
if (pathsContainer) {
    pathsContainer.innerHTML = `
    <svg width="100%" height="100%" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;">
        <path id="path1" d="M0,200 Q300,100 600,200 T1200,200" stroke="#38bdf8" stroke-width="6" fill="none"/>
        <path id="path2" d="M0,300 Q400,350 800,300 T1200,300" stroke="#fbbf24" stroke-width="4" fill="none"/>
    </svg>
    `;
    // Animate paths
    const animatePath = (path, duration, delay) => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
        setTimeout(() => {
            path.style.transition = `stroke-dashoffset ${duration}s cubic-bezier(.68,-0.55,.27,1.55)`;
            path.style.strokeDashoffset = '0';
        }, delay);
    };
    const path1 = document.getElementById('path1');
    const path2 = document.getElementById('path2');
    if (path1 && path2) {
        animatePath(path1, 2, 300);
        animatePath(path2, 2.5, 800);
    }
}
// Smooth scroll for nav links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
// Button animation
const exploreBtn = document.getElementById('explore-btn');
if (exploreBtn) {
    exploreBtn.addEventListener('mouseenter', () => {
        exploreBtn.style.background = 'linear-gradient(90deg, #fbbf24 0%, #38bdf8 100%)';
    });
    exploreBtn.addEventListener('mouseleave', () => {
        exploreBtn.style.background = 'linear-gradient(90deg, #38bdf8 0%, #fbbf24 100%)';
    });
    exploreBtn.addEventListener('click', () => {
        document.getElementById('requirements').scrollIntoView({ behavior: 'smooth' });
    });
}
