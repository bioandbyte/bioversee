
/* =========================================
   BIOVERSE — JAVASCRIPT
   ========================================= */


/* MOBILE NAVIGATION */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Close the menu after selecting a navigation link.
    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
            menuToggle.textContent = "☰";
        });
    });
}


/* AUTOMATIC COPYRIGHT YEAR */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* BIOLOGY QUIZ */

const quizOptions = document.querySelectorAll(".quiz-option");
const quizFeedback = document.getElementById("quizFeedback");
const quizReset = document.getElementById("quizReset");

let quizAnswered = false;

if (quizOptions.length > 0 && quizFeedback) {

    quizOptions.forEach(function (option) {

        option.addEventListener("click", function () {

            // Prevent selecting multiple answers.
            if (quizAnswered) {
                return;
            }

            quizAnswered = true;

            const isCorrect = option.dataset.answer === "true";

            if (isCorrect) {
                option.classList.add("correct");

                quizFeedback.textContent =
                    "Correct! The mitochondrion produces most of the ATP used by the cell. Great work!";
            } else {
                option.classList.add("wrong");

                quizFeedback.textContent =
                    "Not quite! The correct answer is B. Mitochondrion. It produces most of the cell's ATP.";
                
                // Highlight the correct answer.
                quizOptions.forEach(function (item) {
                    if (item.dataset.answer === "true") {
                        item.classList.add("correct");
                    }
                });
            }

            // Disable all answers after one selection.
            quizOptions.forEach(function (item) {
                item.disabled = true;
            });

        });

    });
}


/* RESET THE QUIZ */

if (quizReset) {

    quizReset.addEventListener("click", function () {

        quizAnswered = false;

        quizOptions.forEach(function (option) {
            option.classList.remove("correct", "wrong");
            option.disabled = false;
        });

        if (quizFeedback) {
            quizFeedback.textContent =
                "Select an answer to check your knowledge.";
        }

    });

}


/* SIMPLE SMOOTH NAVIGATION */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = link.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});


/* BIOVERSE INITIALIZATION */

document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to Bioverse!");
    console.log("Explore Life. Understand Science. Discover Possibilities.");
});
