// ELEMENTS
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const music = document.getElementById("music");
const photos = document.querySelector(".photos");

let clicks = 0;

// NO button escapes only on hover (smooth & stays nearby)
noBtn.addEventListener("mouseenter", () => {
    const x = Math.random() * 160 - 80;
    const y = Math.random() * 100 - 50;

    noBtn.style.transition = "transform 0.2s ease";
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Typing effect function
function typeText(text, element, speed = 50) {
    element.innerText = "";
    let i = 0;

    const typing = setInterval(() => {
        element.innerText += text.charAt(i);
        i++;

        if (i === text.length) {
            clearInterval(typing);
        }
    }, speed);
}

// YES button logic
yesBtn.addEventListener("click", () => {
    clicks++;

    // First click
    if (clicks === 1) {
        yesBtn.innerText = "I know you love me 😏";

        // Disable NO button after first YES
        noBtn.disabled = true;
        noBtn.style.opacity = "0.5";

        if (music) {
            music.currentTime = 0;
            music.volume = 1;
            music.play().catch(() => {});
        }
    }

    // Second click
    else if (clicks === 2) {
        yesBtn.style.display = "none";
        noBtn.style.display = "none";

        // Typing romantic message
        typeText(
            "After all my mistakes, you still love me ❤️",
            message,
            60
        );

        // Show photos correctly
        if (photos) {
            photos.style.display = "flex";
        }

        // Smooth scroll to message
        message.scrollIntoView({ behavior: "smooth" });
    }
});
