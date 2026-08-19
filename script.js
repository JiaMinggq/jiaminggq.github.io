/* =========================================
   BIRTHDAY WEBSITE FOR YAYA
========================================= */


/* =========================================
   ELEMENTS
========================================= */

const intro = document.getElementById("intro");
const passwordScreen = document.getElementById("passwordScreen");
const unlockScreen = document.getElementById("unlockScreen");
const letterScreen = document.getElementById("letterScreen");

const enterBtn = document.getElementById("enterBtn");
const unlockBtn = document.getElementById("unlockBtn");

const passwordInput = document.getElementById("passwordInput");
const passwordMessage = document.getElementById("passwordMessage");

const passwordCard = document.querySelector(".password-card");


/* =========================================
   PASSWORD
========================================= */

const correctPassword = "bengbeng";


/* =========================================
   SCREEN TRANSITION
========================================= */

function changeScreen(currentScreen, nextScreen) {

    currentScreen.classList.remove("active");

    setTimeout(() => {
        nextScreen.classList.add("active");
    }, 700);
}


/* =========================================
   ENTER BUTTON
========================================= */

enterBtn.addEventListener("click", () => {

    changeScreen(intro, passwordScreen);

    setTimeout(() => {
        passwordInput.focus();
    }, 1000);

});


/* =========================================
   UNLOCK FUNCTION
========================================= */

function checkPassword() {

    const enteredPassword =
        passwordInput.value.trim().toLowerCase();


    /* Correct */

    if (enteredPassword === correctPassword) {

        passwordMessage.textContent =
            "You remembered. 💙";

        passwordMessage.style.opacity = "1";

        setTimeout(() => {

            changeScreen(
                passwordScreen,
                unlockScreen
            );

        }, 900);


        setTimeout(() => {

            unlockScreen.classList.remove("active");

            setTimeout(() => {

                letterScreen.classList.add("active");

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }, 700);

        }, 4200);


    }


    /* Wrong */

    else {

        passwordMessage.textContent =
            "Hmm... that's not it. Try again. ♡";

        passwordCard.classList.remove("shake");

        /* Restart animation */

        void passwordCard.offsetWidth;

        passwordCard.classList.add("shake");

        passwordInput.value = "";

        passwordInput.focus();

    }

}


/* =========================================
   UNLOCK BUTTON
========================================= */

unlockBtn.addEventListener("click", checkPassword);


/* =========================================
   ENTER KEY
========================================= */

passwordInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        checkPassword();
    }

});


/* =========================================
   CREATE EXTRA FLOATING PARTICLES
========================================= */

const background = document.querySelector(".background");

function createParticle() {

    const particle = document.createElement("span");

    particle.textContent = "✦";

    particle.style.position = "absolute";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.top =
        Math.random() * 100 + "%";

    particle.style.color = "#b9ddf5";

    particle.style.opacity =
        Math.random() * 0.5 + 0.1;

    particle.style.fontSize =
        Math.random() * 8 + 5 + "px";

    particle.style.pointerEvents = "none";

    particle.style.animation =
        `particleFloat ${Math.random() * 8 + 8}s ease-in-out infinite`;

    background.appendChild(particle);

}


/* Create particles */

for (let i = 0; i < 30; i++) {
    createParticle();
}


/* =========================================
   PARTICLE ANIMATION
========================================= */

const particleStyle = document.createElement("style");

particleStyle.textContent = `

@keyframes particleFloat {

    0% {
        transform: translateY(0) translateX(0);
        opacity: 0.1;
    }

    50% {
        transform:
            translateY(-40px)
            translateX(20px);

        opacity: 0.7;
    }

    100% {
        transform:
            translateY(0)
            translateX(0);

        opacity: 0.1;
    }

}

`;

document.head.appendChild(particleStyle);