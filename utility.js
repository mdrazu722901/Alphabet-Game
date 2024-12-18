document.getElementById("home-page-btn").addEventListener("click", function () {
    const homePageBtn = document.getElementById("homePage");
    homePageBtn.classList.add('hidden')

    const displaybtn = document.getElementById("display-part");
    displaybtn.classList.remove("hidden");
});

function alphabetGanaretFunctions() {
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    const spliteAlphabet = alphabets.split("");

    const ganarateNumber = Math.random() * 25;
    const intergerNumber = Math.round(ganarateNumber);
    const alphabet = spliteAlphabet[intergerNumber];
    return alphabet;
}




