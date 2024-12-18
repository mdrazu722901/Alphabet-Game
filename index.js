document.getElementById("home-page-btn").addEventListener("click", function () {
    continueGame();
});

function continueGame(){
const alphabet = alphabetGanaretFunctions();

document.getElementById("display-alphabet").innerText = alphabet;
alphabetButton(alphabet)
};


function alphabetButton(alphabet){
    document.getElementById(alphabet).style.backgroundColor = "red";
}