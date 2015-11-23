// Busca - IIFE variáveis locais

(function ($){

$("#busca").on("input",function(){
              var pesquisa =   $(this).val().trim();
              var regex = new RegExp(pesquisa, "i") ;
    
   $(".cartao")
   .hide()
   .filter(function(){
      var textoparagrafo =  $(this).find(".cartao-conteudo").text();
      return regex.test(textoparagrafo);
    })
   .show();
    
});

})(jQuery);