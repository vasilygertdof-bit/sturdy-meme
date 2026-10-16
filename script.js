function speak(text) {
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    console.warn("Синтез речи не поддерживается этим браузером.");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ru-RU";
  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
}
document.querySelectorAll(".answer-card").forEach((card) => {
  card.addEventListener("click", () => speak(card.dataset.speech));
});
