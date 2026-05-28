function verificar() {
  let ano = new Date().getFullYear();

  let formAno = document.getElementById('txtano');
  let resposta = document.getElementById('res');

  let container = document.getElementById('container');

  if (formAno.value.length === 0 || formAno.value > ano) {
    alert('[ERRO] Verifique os dados e tente novamente');
  } else {
    let vsex = document.getElementsByName('sexo');
    let idade = ano - Number(formAno.value);

    let img = document.createElement('img');
    img.setAttribute('id', 'foto');

    let gen = '';
    if (vsex[0].checked) {
      gen = 'Homem';
      if (idade >= 0 && idade < 10) {
        //Criança
        img.src = './imagens/crianca-m.jpg';
      } else if (idade < 21) {
        //Jovem
        img.src = './imagens/young-m.jpg';
      } else if (idade < 51) {
        //Adulto
        img.src = './imagens/adult-m.jpg';
      } else {
        //IDOSO
        img.src = './imagens/old-m.jpg';
      }
    } else if (vsex[1].checked) {
      gen = 'Mulher';
      if (idade >= 0 && idade < 10) {
        //Criança
        img.src = './imagens/crianca-f.jpg';
      } else if (idade < 21) {
        //Jovem
        img.src = './imagens/young-f.jpg';
      } else if (idade < 51) {
        //Adulto
        img.src = './imagens/adult-f.jpg';
      } else {
        //IDOSO
        img.src = './imagens/old-f.jpg';
      }
    }

    resposta.textContent = `Verificamos ${gen} com ${idade} anos`;
    resposta.style.textAlign = 'center';
    container.appendChild(img);
  }
}
