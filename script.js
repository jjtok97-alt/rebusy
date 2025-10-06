function checkAnswer() {
    const correctPassword = "kot"; // wpisz tu swoje hasło
    const userInput = document.getElementById("answer").value.trim().toLowerCase();
    const result = document.getElementById("result");

    if (userInput === correctPassword) {
        result.style.color = "green";
        result.textContent = "🎉 Gratulacje! To poprawna odpowiedź!";
    } else {
        result.style.color = "red";
        result.textContent = "❌ Niestety, spróbuj jeszcze raz.";
    }
}
