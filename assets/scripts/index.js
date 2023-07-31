"use strict";
// Set up of querySelector.
const $ = (selector) => document.querySelector(selector);
// Modal-function for "PLAY GAME".
$("#playGame").addEventListener("click", () => {
    let x = $("#playerName");
    if (x.value == "") {
        // Giving the user a warning.
        $("#message").textContent = "Required Field"
        return;
    } else {
        localStorage.playerName = $("#playerName").value;
        console.log("eee", localStorage.playerName)
        // If a passes then redirected to the game page.
        window.location.assign("/sky_raider.html");

    }
    console.log("peace");
});
