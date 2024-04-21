const com_guess = document.getElementById("com_guess")
const p_guess = document.getElementById("p_guess")
const score = document.getElementById("score")
function g(c) {
    score.textContent = ""
    com_guess.textContent = ""
    const d = c.value
    p_guess.textContent = d
    setTimeout(guess, 2000);
    
}

const arr = ["🪨", "📃", "✂️"]
function guess() {
    const arr_val = arr[Math.floor(Math.random() * 3)]
    com_guess.textContent = arr_val
    setTimeout(check, 2000);
}

function check(){
    if(com_guess.innerHTML == p_guess.innerHTML ){
        score.textContent = "tie!"
    } else if(p_guess.innerHTML == "✂️" && com_guess.innerHTML == "📃"){
        score.textContent = "You win!"
    } else if(p_guess.innerHTML == "📃" && com_guess.innerHTML == "🪨"){
        score.textContent = "You win!"
    } else if (p_guess.innerHTML == "🪨" && com_guess.innerHTML == "✂️"){
        score.textContent = "You win!"
    } else {
        score.textContent = `You lost!`
    }
}
