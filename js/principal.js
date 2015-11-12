// mudar blocos p linhas

var botao = document.querySelector('#mudalayout');
var mural = document.querySelector('.mural')

botao.addEventListener('click', function() {
    mural.classList.toggle('mural--linhas');
});

botao.addEventListener('click', function() {
    if (mural.classList.contains("mural--linhas")) {
        botao.textContent='blocos';
    }
    else {
        botao.textContent="linhas";
        
    }
    
});

// Fim botao muda bloco p lista

// Botao remover
var botoesRemove = document.querySelectorAll(".opcoesDoCartao-remove");
for (var i=0; i<botoesRemove.length ; i++) {
    
   var botaoRemove = botoesRemove[i];
   botaoRemove.addEventListener('click',removeCartao);
   
}
function removeCartao() {
    var botao = this;
    var idCartao = botao.dataset.ref;
    var cartao = document.querySelector(idCartao);
    cartao.classList.add("cartao--some");
    
    setTimeout(removeEase , 500);
    
    function removeEase() {
       cartao.remove();
    
    }
    
//    document.querySelector(this.dataset.ref).remove();
}

// fim do Botao remover

// submit form

var formulario = document.querySelector ('.novoCartao');
formulario.addEventListener("submit", salvaCartao);

function salvaCartao (eventoClique){
    
    eventoClique.preventDefaut();
    
}

/*
var cartoes = document.querySelectorAll('.cartao');

for(var i = 1; i < cartoes.length; i++) {
    var cartao = cartoes[i];
    cartao.textContent = cartao.textContent.substring(0, 200) + "...";
}
*/


