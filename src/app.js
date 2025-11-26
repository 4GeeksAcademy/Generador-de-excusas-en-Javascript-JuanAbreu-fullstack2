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

/// me han recomendado hacer solo lo que se hacer por mi mismo! 

// he comentado que lo de los botones lo he hecho con inteligencia artificial y que me explicara lo que pasaba

// pero me han preguntado sobre una cosa y no he sabido responder 

// seguire sus consejos y la proxima vez no usare inteligencia artificial para agregar algo que no tengo claro