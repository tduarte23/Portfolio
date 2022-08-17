const meuNome = document.querySelector('.meu-nome');
const fName = meuNome.innerHTML;
const botaoVerMais = document.querySelector('button');
const habilidades = document.querySelectorAll('.escondido');
const node = document.querySelector('#fundo')
meuNome.innerHTML='';

function typeWriter (nome) {
    console.log(meuNome);
    setTimeout( () => {
        const meuNomeF = nome.split('');
        console.log(meuNomeF)
        meuNome.innerHTML='';
        meuNomeF.forEach( (letra, index) => {
            setTimeout(function (){
                meuNome.innerHTML += letra;
            }, 150 * index)
        })}, 1500)
    
}
function helo(){
    console.log('oi');
}