// Hint image paths
const hints = [
    "./images/hint1.png",
    "./images/hint2.png",
    "./images/hint3.png"
];

// Unlock dates
const unlockDates = [
    null, // Hint 1 is always unlocked
    new Date("2026-09-03T12:00:00"),
    new Date("2026-09-05T12:00:00")
];

// Elements
const hintButtons = document.querySelectorAll(".hint-button");
const popup = document.querySelector(".hint-popup");
const hintImage = popup.querySelector("img");
const closeButton = popup.querySelector(".close");
const timerElement = document.getElementById("timer");

// Unlock hints based on the current date
function updateHints() {
    const now = new Date();

    hintButtons.forEach((button, index) => {

        // Hint 1 is always unlocked
        if (index === 0) {
            button.disabled = false;

            // Remove lock icon if there is one
            const lockIcon = button.querySelector("svg");
            if (lockIcon) {
                lockIcon.remove();
            }

            return;
        }

        if (now >= unlockDates[index]) {

            // Only animate the first time it unlocks
            if (button.disabled) {
                button.disabled = false;

                const lockIcon = button.querySelector("svg");

                if (lockIcon) {
                    lockIcon.style.transition = "opacity 0.4s";
                    lockIcon.style.opacity = "0";

                    setTimeout(() => {
                        lockIcon.remove();
                    }, 400);
                }
            } else {
                // If already unlocked (e.g. after refresh), just remove the lock
                const lockIcon = button.querySelector("svg");
                if (lockIcon) {
                    lockIcon.remove();
                }
            }

        } else {
            button.disabled = true;
        }
    });
}

// Update countdown
function updateCountdown() {
    updateHints();

    const now = new Date();

    // Find the next unlock date (skip Hint 1)
    const nextDate = unlockDates.find((date, index) =>
        index > 0 && date > now
    );

    if (!nextDate) {
        timerElement.textContent = "All hints unlocked!";
        return;
    }

    const diff = nextDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    timerElement.innerHTML = `
    <div class="timer">
        <div>Next hint in:</div>
        <div class="countdown">${days}d ${hours}h ${minutes}m ${seconds}s</div>
    </div>
    `;
}

// Open popup
hintButtons.forEach((button, index) => {
    button.addEventListener("click", () => {

        if (button.disabled) return;

        hintImage.src = hints[index];
        hintImage.alt = `Hint ${index + 1}`;

        popup.classList.add("show");
    });
});

// Close popup
closeButton.addEventListener("click", () => {
    popup.classList.remove("show");
});

// Initialize
function startHintTimer() {

    timerElement.style.display = "block";

    updateCountdown();
    setInterval(updateCountdown, 1000);

}

console.log("Now:", new Date());
console.log("Unlock:", unlockDates[1]);
console.log("Difference (hours):", (unlockDates[1] - new Date()) / 1000 / 60 / 60);