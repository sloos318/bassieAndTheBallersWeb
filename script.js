const aText = [
"C:/WEEKEND> start ballers.exe",
    "Launching Bassie and the Ballers...",
    "",
    "[ OK ] Bier kopen",
    "[ OK ] Baco kopen ",
    "[ OK ] Sleutel voor Roel klaarleggen",
    "[ OK ] Any's optellen",
    "[ OK ] David nu al barsmarten",
    "[ OK ] Sleutel scooter Joep verstoppen",
    "",
    "Scanning participants...",
    "> The Ballers........ ",
    "",
    "Loading...",
    "[####################] 100%",
    "",
    "Lever het slechte nieuws vertellen",
    "Peuke kope",
    "",
    "WARNING:",
    "Biertjes: 1000000",
    "Baco: 1000000",
    "",
    "Launching:",
    "- WC leiding verstevigen",
    "- Weinig slapen",
    "- Quote's app gereed houden",
    "- Barf zakje voor Syb meenemen",
    "",
    "Final check",
    "3...",
    "2...",
    "1...",
    "",
    ">>> WELKOM BIJ HET BASSIE AND THE BALLERS TEAM WEEKEND <<<",
    "",
    "SYSTEM STATUS:",
    "DRINKEN."
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