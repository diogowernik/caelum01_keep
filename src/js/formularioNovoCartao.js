var formulario = $('.novoCartao');
formulario.submit (salvaCartao);

function salvaCartao (eventoClique){
    eventoClique.preventDefault();
    var campoConteudo = $('.novoCartao-conteudo', this);
    var digitado = campoConteudo.val().trim().replace(/\n/g,"<br/>");
    
    
    if (digitado) {
    controladorDeCartao.adiciona(digitado);
    $(document).trigger("precisaSincronizar");


//    novoCartao.insertAfter($(mural).children().first());
    
    
    
    campoConteudo.val("");
    campoConteudo.focus();
    }
}
    
