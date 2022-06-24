function carregar() {
    var msg = window.document.getElementById('msg');
    var foto = window.document.getElementById('imagem') 
    var hora = new Date();
    var agora = hora.getHours();
    msg.innerHTML = `Agora são ${agora} horas.`
    if (agora >= 0 && agora <= 12) {
        foto.src = './assets/manha.png'
        document.body.style.background = '#d1aa18'
    } else if (agora > 12 && agora <= 18) {
        foto.src = './assets/tarde.png'
        document.body.style.background = '#c74b3d'
    } else {
        foto.src = './assets/noite.png'
        document.body.style.background = '#081c1d'
    }
}
