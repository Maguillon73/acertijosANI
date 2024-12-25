function checkStep(step, correctCode = null) {
  const input = document.getElementById(`input-${step}`).value;
  if (!correctCode || input.toUpperCase() === correctCode) {
      document.getElementById(`step-${step}`).classList.add('hidden');
      document.getElementById(`step-${step + 1}`).classList.remove('hidden');
  } else {
      alert('Código incorrecto. Intenta de nuevo.');
  }
}

function closePage() {
  alert('Gracias por jugar. ¡Feliz Navidad!');
  window.close();
}

