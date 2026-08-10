const aText = [
    "C:/WEEKEND> start party.exe",
    "Launching Bassie and the Ballers...",
    "",
    "[ OK ] Initializing systems...",
    "[ OK ] Loading playlist...",
    "[ OK ] Syncing the squad...",
    "[ OK ] Snack reserves: READY",
    "[ OK ] Beverages: OPTIMAL",
    "[ OK ] Weekend mode: ENABLED",
    "",
    "Scanning participants...",
    "> The Ballers........ VERIFIED",
    "",
    "Loading activities...",
    "[####################] 100%",
    "",
    "Compiling inside jokes...",
    "Generating bad decisions...",
    "Disabling responsibilities...",
    "",
    "WARNING:",
    "Productivity: OFF",
    "Common sense: UNAVAILABLE",
    "",
    "Launching:",
    "- Good music",
    "- Late nights",
    "- Random adventures",
    "- Unnecessary competitions",
    "- Endless laughter",
    "",
    "Final system check...",
    "Energy................ MAXIMUM",
    "Wallet................ LOW",
    "Motivation to go home. 0%",
    "",
    "3...",
    "2...",
    "1...",
    "",
    ">>> WELCOME TO BASSIE AND THE BALLERS WEEKEND <<<",
    "",
    "SYSTEM STATUS:",
    "HAVE FUN.",
    "SURVIVE."
];

let iIndex = 0;
let iTextPos = 0;
let iArrLength = aText[0].length;

function typewriter() {

    const currentSpeed = iIndex < 3 ? 20 : 5;
    const lineDelay = iIndex < 3 ? 500 : 100;

    const destination = document.getElementById("typedtext");

    let sContents = "";

    // Add all previously completed lines
    for (let i = 0; i < iIndex; i++) {
        sContents += aText[i] + "<br>";
    }

    // Add the current line being typed
    sContents +=
        aText[iIndex].substring(0, iTextPos) +
        '<span class="cursor">█</span>';

    destination.innerHTML = sContents;

    // Automatically scroll to the newest line
    destination.scrollTop = destination.scrollHeight;

    iTextPos++;

    // Current line is finished
    if (iTextPos > iArrLength) {

        iTextPos = 0;
        iIndex++;

        // There are still lines left
        if (iIndex < aText.length) {

            iArrLength = aText[iIndex].length;

            setTimeout(typewriter, lineDelay);

        } else {

            // Finished typing everything
            setTimeout(() => {

                destination.style.display = "none";

                document
                    .getElementById("main-content")
                    .classList.add("show");

                // Start hint countdown
                startHintTimer();

            }, 2000);
        }

    } else {

        // Continue typing current line
        setTimeout(typewriter, currentSpeed);
    }
}

typewriter();