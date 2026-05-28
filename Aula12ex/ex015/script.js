function carregar() {
  let msg = document.getElementById('msg');
  let foto = document.getElementById('imagem');
  let hora = new Date().getHours();

  msg.innerHTML = `Agora são ${hora} horas`;

  if (hora >= 0 && hora < 12) {
    // BOM DIA
    foto.src = '../manhã.jpg';
    document.body.style.background = '#025677';
  } else if (hora >= 12 && hora <= 18) {
    // BOA TARDE
    foto.src = '../tarde.jpg';
    document.body.style.background = '#FC9E58';
  } else {
    // BOA NOITE
    foto.src = '../noite.jpg';
    document.body.style.background = '#09203A';
  }
}
