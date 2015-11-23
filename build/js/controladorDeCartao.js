// encapsulamento, module


var controladorDeCartao = (function() {
    
    function opcoesDeCoresDoCartao(idDoCartao) {
	var cores = [
		{ nome: "Padrão", codigo: "#EBEF40" },
		{ nome: "Importante", codigo: "#F05450" },
		{ nome: "Tarefa", codigo: "#92C4EC" },
		{ nome: "Inspiração", codigo: "#76EF40" }
	];

	var opcoesDeCor = $("<div>").addClass("opcoesDoCartao-cores");

	$.each(cores, function () {
		var cor = this;

		var idRadioCor = "cor" + cor.nome + "-" + idDoCartao;

		var radioCor = $("<input>")
		  //  .change(function(){
		        
		  //      var cartao = $(this).closest(".cartao")
		  //      cartao.css("background-color", $(this).val());
		  //      $(document).trigger("precisaSincronizar");
		  //  })
		    
			.addClass("opcoesDoCartao-radioCor")
			.val(cor.codigo)
			.attr({
				type: "radio",
				id: idRadioCor,
				name: "corDoCartao" + idDoCartao
			});

		var labelRadioCor = $("<label>")
			.addClass("opcoesDoCartao-opcao opcoesDoCartao-cor")
			.text(cor.nome)
			.css("color", cor.codigo)
			.attr("for", idRadioCor);

		opcoesDeCor.append(radioCor).append(labelRadioCor);
	});
   
    opcoesDeCor.change(function(evento){
        var origem = $(evento.target);
        if (origem.is(".opcoesDoCartao-radioCor")){
            var cartao = $(this).closest(".cartao");
		    cartao.css("background-color", origem.val());
		    $(document).trigger("precisaSincronizar");  
        }
    });
   
   
	return opcoesDeCor;
}

function removeCartao() {
    var botao = this;
    var idCartao = botao.dataset.ref;
    var cartao = document.querySelector(idCartao);
    cartao.classList.add("cartao--some");
    
    setTimeout(removeEase , 500);
    
    function removeEase() {
       cartao.remove();
       $(document).trigger("precisaSincronizar");
    }
    
//    document.querySelector(this.dataset.ref).remove();
}

// fim do Botao remover


function decideTipoCartao (digitado) {
    
    var quebras = digitado.split("<br/>").length;
    var letras = digitado.length;
    var semQuebras = digitado.replace(/<br\/>/g," ")
    var palavras = semQuebras.split(' ');
    var maiorPalavra = ""
    
    for (var i=0; i < palavras.length ; i++){
        
        var palavra = palavras[i];
        if (palavra.length > maiorPalavra.length) {
            maiorPalavra=palavra;
        }
        
    }
}

function adicionaCartao(digitado, cor) {
    var numCartoes   = $('.cartao').length + 1;
    var idNovoCartao = 'cartao_' + numCartoes;
    var conteudoNovoCartao = $('<p>').addClass('cartao-conteudo').html(digitado).attr("contenteditable",true).blur(function () { $(document).trigger("precisaSincronizar")});
    var botaoRemove = $('<button>', {class:'opcoesDoCartao-opcao opcoesDoCartao-remove'}).text('Remover').click(removeCartao).attr('data-ref', '#'+idNovoCartao);
    var opcoesDeCor = opcoesDeCoresDoCartao(idNovoCartao);
    var opcoesDoCartao = $('<div>',{class:'opcoesDoCartao'}).append(botaoRemove).append(opcoesDeCor);
    var novoCartao = $('<div>', {class:"cartao"}).css("background-color", cor).append(opcoesDoCartao).append(conteudoNovoCartao).attr('id', idNovoCartao );
    novoCartao.prependTo(".mural");
}
return {
    adiciona : adicionaCartao
};


})();