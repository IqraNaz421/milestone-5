// Function to create animated bubbles
function createBubble() {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.style.left = Math.random() * 100 + "vw";
    bubble.style.width = Math.random() * 20 + 10 + "px";
    bubble.style.height = bubble.style.width;
    bubble.style.animationDuration = Math.random() * 5 + 3 + "s";
    document.querySelector(".bubble-background").appendChild(bubble);

    // Remove bubble after animation completes
    setTimeout(() => {
        bubble.remove();
    }, 8000);
}

// Generate bubbles every half second
setInterval(createBubble, 400);

// Button functionality
// document.getElementById("viewResume").addEventListener("click", () => {
//     alert("View Resume clicked!");
// });

// document.getElementById("resumeBuilder").addEventListener("click", () => {
//     alert("Resume Builder clicked!");
// });



document.getElementById("viewResume").addEventListener("click", () => {
    // 'resume.html' ko apne actual resume page ke link se replace karein
    window.location.href = "resume.html"; 
});

document.getElementById("resumeBuilder").addEventListener("click", () => {
    // 'resume-builder.html' ko apne actual resume builder page ke link se replace karein
    window.location.href = "form.html"; 
});
