let mensagem = document.getElementById('msg');
let foto = document.getElementById('foto');

function carregar() {

    let data = new Date();

    let horas = data.getHours();

    let minutos = data.getMinutes();

    msg.innerHTML = `Agora são ${horas} horas e ${minutos} minutos`;


    if (horas >= 0 && horas < 12) {
        foto.src = './src/imagens/dia.png';


    } else if (horas >= 12 && horas < 18) {
        foto.src = './src/imagens/tarde.png';
        document.body.classList.add('tarde');

    } else {
        foto.src = './src/imagens/noite.png';
        document.body.classList.add('noite');

    }
};