let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let vidas = 2;
let image;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}
function exibirVida() {
    let mensagemVida = vidas > 1 ? 'vidas' : ' vida';
    exibirTextoNaTela('.text_life', `Você tem: ${vidas} ${mensagemVida}`);
}
function fimDeJogo() {
    if (vidas == 0) {
        exibirTextoNaTela('p', 'Fim de jogo!');
        document.getElementById('chute').setAttribute('disabled', false);
        //Falta permitir que "Novo Jogo", seja acionado.
        document.getElementById('reset').removeAttribute('disabled');
    }

}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirVida();
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    let checarChute = parseInt(chute);
    if (chute !== checarChute.toString()) {
        alert('Por favor, insira apenas números inteiros.');
        return;
    }
    console.log(chute == numeroSecreto);
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
    if (chute == numeroSecreto) {
        document.getElementById('chute').setAttribute('disabled', false);
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reset').removeAttribute('disabled');

        mudarImagem();

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor!');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior!');
        }
        tentativas++;
        vidas--;
        exibirVida();
        fimDeJogo();
        mudarImagem();
        console.log('vidas', vidas);
        limparCampo();
    }
}
function mudarImagem() {
    let chute = document.querySelector('input').value;
    image = document.querySelector('.sideImage_image');
    if (chute == numeroSecreto) {
        let novoCaminhoDaImagem = '/img/Certo.png';
        image.src = novoCaminhoDaImagem;
    } else {
        let novoCaminhoDaImagem = 'img/errado.png';
        image.src = novoCaminhoDaImagem;
    }
    
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    vidas = 2;
    exibirMensagemInicial();
    document.getElementById('reset').setAttribute('disabled', true);
    document.getElementById('chute').removeAttribute('disabled');

    let novoCaminhoDaImagem = 'img/code.png';
        image.src = novoCaminhoDaImagem;
}