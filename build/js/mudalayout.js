// mudar blocos p linhas

function variaveis () {
   var botao = document.querySelector('#mudalayout');
   var mural = document.querySelector('.mural');
   
   
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

}
variaveis();





// Fim botao muda bloco p lista