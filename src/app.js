const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const rules = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"]
};

const jugar = (userChoice) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let resultado = "";
    let color = "";

    if (userChoice === computerChoice) {
        resultado = "Empate";
        color = "orange";
    } else if(rules[userChoice].includes(computerChoice)) {
        resultado = "Ganaste";
        color = "green";
    } else {
        resultado = "Perdiste";
        color = "red";
    }

    // Mostrar resultado en la página con color
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = `Tu elección: ${userChoice} | Computadora: ${computerChoice} → ${resultado}`;
    resultadoDiv.style.color = color;

    console.log(resultado, "| Computer:", computerChoice, "| You:", userChoice);
};

// Asignar evento a los botones
document.querySelectorAll("button[data-choice]").forEach(btn => {
    btn.addEventListener("click", () => {
        const choice = btn.dataset.choice;
        jugar(choice);
    });
});

