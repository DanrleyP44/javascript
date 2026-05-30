function contar() {
  let start = Number(document.getElementById('iinicio').value);
  let end = Number(document.getElementById('ifim').value);
  let passo = Number(document.getElementById('ipasso').value);

  let resposta = document.getElementById('resp');
  resposta.textContent = ' ';

  if (start == ' ' || end == ' ') {
    alert('O formulário deve ser preenchido por completo');
  } else if (passo <= 0) {
    alert('Passo não pode ser 0 ou menor. Número 1 será usado');
    passo = 1;
    for (let c = start; c <= end; c += passo) {
      resposta.textContent += `👉${c}`;
      resposta.textContent += ' ';
    }
    resposta.textContent += '🏁';
  } else {
    for (let c = start; c <= end; c += passo) {
      resposta.textContent += `👉${c}`;
      resposta.textContent += ' ';
    }

    resposta.textContent += '🏁';
  }
}
