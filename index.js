document.getElementById("home-page-btn").addEventListener("click", function () {
    continueGame();
});


function continueGame() {
    const alphabet = alphabetGanaretFunctions();

    document.getElementById("display-alphabet").innerText = alphabet;
    alphabetButton(alphabet)
};



function alphabetButton(alphabet) {
    document.getElementById(alphabet).style.backgroundColor = "red";
}



// ========= code start ===============

document.addEventListener("keyup", clickedKey)
function clickedKey(event) {

    let display = document.getElementById("display-alphabet");
    let displayAlphabet = display.innerText;

    if (event.key === displayAlphabet) {
        continueGame()
        document.getElementById(event.key).style.backgroundColor = "";

        let score = document.getElementById("score").innerText;
        let score2 = parseInt(score);
        let updateNumber = score2 + 1;
        let scoreSet = document.getElementById("score").innerText = updateNumber;

        const finalScore = document.getElementById("FinalScore").innerText = updateNumber;

    }
    else {
        console.log("wrong key press");
        alert("Clicked Wrong Button");

        const life = document.getElementById("life").innerText;
        const life2 = parseInt(life) - 1;

        const lifeSet = document.getElementById("life").innerText = life2;


        if (life2 == 0) {
            const displayPart = document.getElementById("display-part");
            displayPart.classList.add("hidden");
            const scoreBoard = document.getElementById("scoreBoard").classList.remove("hidden")
        }
    }

}

// ===========
const playNow = document.getElementById("playNow").addEventListener("click", function(){
    console.log("click paly now")
    document.getElementById("display-part").classList.remove("hidden");
    document.getElementById("scoreBoard").classList.add("hidden");
})


