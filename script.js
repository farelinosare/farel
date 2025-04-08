// Create floating hearts
function createHearts() {
    const container = document.querySelector('.hearts');
    const heartCount = 15;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 4}s`;
        heart.style.opacity = Math.random();
        container.appendChild(heart);
    }
}

// Make No button move randomly
function setupNoButton() {
    const noBtn = document.getElementById('no-btn');
    const container = document.querySelector('.container');
    
    noBtn.addEventListener('mouseover', () => {
        const containerRect = container.getBoundingClientRect();
        const maxX = containerRect.width - noBtn.offsetWidth;
        const maxY = containerRect.height - noBtn.offsetHeight;
        
        noBtn.style.left = `${Math.random() * maxX}px`;
        noBtn.style.top = `${Math.random() * maxY}px`;
    });

    // Prevent clicking the No button
    noBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert("Usaha yang bagus! Tapi Anda tidak bisa mengatakan TIDAK semudah itu!!");
    });
}

// Setup Yes button to navigate to schedule page
function setupYesButton() {
    document.getElementById('yes-btn').addEventListener('click', () => {
        window.location.href = 'schedule.html';
    });
}

// Initialize everything when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    createHearts();
    setupNoButton();
    setupYesButton();
});
