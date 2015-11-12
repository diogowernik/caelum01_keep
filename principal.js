var botao = document.querySelector("#mudaLayout");
var mural = document.querySelector(".mural");

botao.addEventListener("mousedown", function () {
    mural.classList.toggle("mural--linhas");
});

botao.addEventListener("mousedown", function(){
    if(mural.classList.contains("mural--linhas")){
       botao.textContent = "Blocos";
    } else{
       botao.textContent = "Linhas";
    }
});


var botoesRemove = document.querySelectorAll(".opcoesDoCartao-remove");

function removeCartao(){
    
    var botao = this;
    var idCartao = botao.dataset.rmv;
    var cartao = document.querySelector("#"+idCartao);
    cartao.classList.add("cartao--some");
   
    setTimeout(function(){
           cartao.remove();
    },400);
    
}

for(var i=0; i<botoesRemove.length;i++){
    var botaoRemove = botoesRemove[i];
    
    botaoRemove.addEventListener("click", removeCartao);
}

var formulario = document.querySelector(".novoCartao");
formulario.addEventListener("submit", salvaCartao);

function salvaCartao(evento){
    evento.preventDefault();
}

