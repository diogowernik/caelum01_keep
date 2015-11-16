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

var formulario = $('.novoCartao');
formulario.submit (salvaCartao);

function salvaCartao (eventoClique){
    eventoClique.preventDefault();
    var campoConteudo = $('.novoCartao-conteudo', this);
    var digitado = campoConteudo.val().trim();
    
    
    if (digitado) {
        
    var numCartoes   = $('.cartao').length + 1;
    var idNovoCartao = 'cartao_' + numCartoes;
    var conteudoNovoCartao = $('<p>').addClass('cartao-conteudo').text(digitado);
    var botaoRemove = $('<button>', {class:'opcoesDoCartao-opcao opcoesDoCartao-remove'}).text('Remover').click(removeCartao).attr('data-ref', '#'+idNovoCartao);
    var opcoesDoCartao = $('<div>',{class:'opcoesDoCartao'}).append(botaoRemove)
    var novoCartao = $('<div>', {class:"cartao"}).append(opcoesDoCartao).append(conteudoNovoCartao).attr('id', idNovoCartao );
    
// Como inserir primeiro? E se não tiver nenhum cartão? Email do professor para dúvidas e dar acesso ao meu projeto!



novoCartao.prependTo(".mural");

//    novoCartao.insertAfter($(mural).children().first());
    
    
    
    campoConteudo.val("");
    campoConteudo.focus();
    }
}



/*
var cartoes = document.querySelectorAll('.cartao');

for(var i = 1; i < cartoes.length; i++) {
    var cartao = cartoes[i];
    cartao.textContent = cartao.textContent.substring(0, 200) + "...";
}
*/


