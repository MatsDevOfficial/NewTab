document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a');
    const rocket = document.getElementById('rocket');
    const pageWrapper = document.getElementById('page-wrapper');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetUrl = link.href;

            // Start animations
            rocket.classList.add('launch');
            pageWrapper.classList.add('fly-up');

            // Wait for animation to finish before navigating
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 1200); // Wait slightly less than the 1.5s animation so the page doesn't hang blank for too long
        });
    });

    // Clock
    const clockTime = document.getElementById('clock-time');
    const clockDate = document.getElementById('clock-date');

    function updateClock() {
        const now = new Date();

        const timeString = now.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

        const dateString = now.toLocaleDateString([], {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        if (clockTime) clockTime.textContent = timeString;
        if (clockDate) clockDate.textContent = dateString;
    }

    updateClock();
    setInterval(updateClock, 1000);
});
