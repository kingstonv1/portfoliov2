async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      eleRef.append(letters[i]);
      i++
    }
    return;
}

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

document.addEventListener('DOMContentLoaded', async function() {
    await waitForMs('1500');
    typeSentence("Kingston;", document.getElementById('sentence'))
  });