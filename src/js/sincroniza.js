( function ($, controladorDeCartao) {
  "use strict";
  var usuario ="diogowernik@gmail.com"

// var userName = prompt("Crie um login ou digite um já existente!");
// if (userName) {
//     usuario = userName
// } else {
//     usuario = usuario
    
// }
// criar session para salvar os dados enquanto o user estiver usando a pagina!
// http://stackoverflow.com/questions/29986657/global-variable-usage-on-page-reload


var botaoSync = $("#sync").click(salvaDadosNoServidor);
$(document).on("precisaSincronizar", salvaDadosNoServidor);

function salvaDadosNoServidor(){
   

    botaoSync.removeClass("botaoSync--sincronizado").addClass("botaoSync--esperando");
    var cartoes = [];
    $(".cartao").each(function(){
        var pHTML = $(this).find(".cartao-conteudo").html();
        var corCartao = $(this).css("background-color");
        var cartao = {
            conteudo: pHTML,
            cor: corCartao            
        };
        cartoes.push(cartao);
     });
     
    var mural = {
        cartoes:cartoes,
        usuario: usuario
    }
    
$.ajax({
    url:"https://mongodb-diogowernik.c9users.io/cartoes/salvar",
    method:"POST",
    data:mural,
    success:function(resposta){
        console.log(resposta);
         botaoSync.addClass("botaoSync--sincronizado");
    },
    error: function(){
        botaoSync.addClass("botaoSync--deuRuim");
    },
    complete: function(){
        botaoSync.removeClass("botaoSync--esperando");
    }
    
});

}


$.getJSON("https://mongodb-diogowernik.c9users.io/cartoes/carregar?callback=?",
    {usuario: usuario},
    function(dados){
    $.each(dados.cartoes, function(){
    controladorDeCartao.adiciona(this.conteudo,this.cor);
    });
});

}) (jQuery, controladorDeCartao)