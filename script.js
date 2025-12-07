/* Main Script for OACH-py Portfolio */

document.addEventListener('DOMContentLoaded', () => {
    updateTime();
    setInterval(updateTime, 1000);

    // Typing effect for the main title
    const titleElement = document.getElementById('typing-title');
    if (titleElement) {
        const text = titleElement.innerText;
        titleElement.innerText = '';
        typeWriter(titleElement, text, 0);
    }

    // Check Status simulation
    simulateSystemCheck();
});

function updateTime() {
    const timeDisplay = document.getElementById('time-display');
    if (timeDisplay) {
        const now = new Date();
        timeDisplay.innerText = now.toISOString().replace('T', ' ').substring(0, 19);
    }
}

function typeWriter(element, text, i) {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        setTimeout(() => typeWriter(element, text, i + 1), 50);
    } else {
        // Remove cursor blink class if we had one, or keep it blinking at the end
        element.style.borderRight = "none";
    }
}

function simulateSystemCheck() {
    const statusDot = document.getElementById('status-dot');
    const statusText = document.getElementById('status-text');

    if (statusDot && statusText) {
        // Simple visual blink or status update
        setInterval(() => {
            statusDot.style.opacity = (statusDot.style.opacity == '0.5' ? '1' : '0.5');
        }, 800);
    }
}
