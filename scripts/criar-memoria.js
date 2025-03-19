document.querySelector('.btn-criar').addEventListener('click', function(event){
    event.preventDefault(); //não quer que suma com as infromações após enviar o formulário quando o usuário der o clique 

    //pega a div que contém todas as imagens. 
    let caixaDeImagens = document.querySelector('.img-container');
    
    //Pega as imagens e conta quantas tem.
    let imagens = caixaDeImagens.querySelectorAll('img'); //querSelectorAll vai pegar todas as imagens

    console.log(imagens);

    if (imagens.length === 0) {
        let cxAlerta = document.getElementById('cx-alerta');
        cxAlerta.style.display = 'block'; //como se eu tivesse tirando o display none, que deixava oculto - agora irá mostrar o alerta
    }
})