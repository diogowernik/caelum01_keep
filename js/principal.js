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







var cartoes = document.querySelectorAll('.cartao');

for(var i = 1; i < cartoes.length; i++) {
    var cartao = cartoes[i];
    cartao.textContent = cartao.textContent.substring(0, 200) + "...";
}

