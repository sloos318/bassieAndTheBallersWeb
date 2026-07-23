// Set up text to print, each item in array is a new line
const aText = [
    "C:/WEEKEND> start party.exe",
    "Launching...",
    "> starting Bassie and the Ballers weekend...",
    "",
    "[ OK ] Initializing systems...",
    "[ OK ] Loading playlist...",
    "[ OK ] Connecting speakers...",
    "[ OK ] Calibrating vibes...",
    "[ OK ] Syncing the squad...",
    "[ OK ] Checking snack reserves...",
    "[ OK ] Beverage levels: OPTIMAL",
    "[ OK ] Weekend mode: ENABLED",
    "",
    "Scanning participants...",
    "> The Ballers................ VERIFIED",
    "",
    "Loading activities...",
    "[####################] 100%",
    "",
    "Compiling inside jokes...",
    "Generating questionable decisions...",
    "Ignoring responsibilities...",
    "Activating sleep schedule override...",
    "",
    "WARNING:",
    "Productivity has been disabled.",
    "Common sense may become unavailable.",
    "",
    "Launching:",
    "- Good music",
    "- Late nights",
    "- Random adventures",
    "- Unnecessary competitions",
    "- Endless laughter",
    "",
    "Final system check...",
    "Energy....................... MAXIMUM",
    "Wallet....................... LOW",
    "Motivation to go home........ 0%",
    "",
    "3...",
    "2...",
    "1...",
    "",
    ">>> WELCOME TO BASSIE AND THE BALLERS WEEKEND <<<",
    "",
    "SYSTEM STATUS:",
    "HAVE FUN.",
    "GOOD LUCK.",
    "SURVIVE."
];

let iIndex = 0;
let iTextPos = 0;
let iArrLength = aText[0].length;
const iScrollAt = 20;

function typewriter() {

    // First 3 lines are slower
    const currentSpeed = iIndex < 3 ? 20 : 5;
    const lineDelay = iIndex < 3 ? 500 : 100;

    let sContents = "";
    let iRow = Math.max(0, iIndex - iScrollAt);

    const destination = document.getElementById("typedtext");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + "<br>";
    }

    destination.innerHTML =
        sContents +
        aText[iIndex].substring(0, iTextPos) +
        '<span class="cursor">█</span>';

    iTextPos++;

    if (iTextPos > iArrLength) {

        iTextPos = 0;
        iIndex++;

        if (iIndex < aText.length) {

            iArrLength = aText[iIndex].length;
            setTimeout(typewriter, lineDelay);

        } else {

            // Finished typing
            setTimeout(() => {

                // Instantly hide the terminal
                destination.style.display = "none";

                // Fade in the website
                document
                    .getElementById("main-content")
                    .classList.add("show");

            }, 2000);

        }

    } else {

        setTimeout(typewriter, currentSpeed);

    }
}

typewriter();
