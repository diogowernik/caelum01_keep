// pega info

$("#pegainfo").click(buscaDadosServidor);

function buscaDadosServidor() {

/*  $.ajax({
    url: "https://ceep.herokuapp.com/cartoes/instrucoes",
    dataType:"json",
    method:"GET",
    success:montaInstrucoes    
        });
      */
  $.getJSON("https://mongodb-diogowernik.c9users.io/cartoes/instrucoes", montaInstrucoes);
  
function montaInstrucoes(dados){
    
    $.each(dados.instrucoes, function(){
        controladorDeCartao.adiciona(this.conteudo, this.cor);
    });
    
    
}        
    
}