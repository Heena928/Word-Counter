let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let con = document.getElementById("wordsContainer");
let input = document.getElementById("userInput");
let error = document.getElementById("errorMsg");

let btn = document.getElementById("addBtn");

function type(char) {
    let random = Math.ceil(Math.random() * 30) + "px";
    let span = document.createElement("span");

    span.textContent = char;
    span.style.fontSize = random;
    span.classList.add("m-2");
    con.appendChild(span);
}
for (let char of wordCloud) {
    type(char);
}

function create() {
    let inputValue = input.value;
    if (inputValue !== "") {
        inputValue.value = "";
        error.textContent = "";
        type(inputValue);
    } else {
        error.textContent = "please enter a word";
    }
}