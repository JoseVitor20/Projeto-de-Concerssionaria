    // ABRIR O MENU CLICANDO NO MENU ANBURGUER
    var menu = window.document.getElementById('abrir');
    menu.addEventListener('click',function(){
        document.querySelector('div.grupo-mobile2').style.width='350px'
    })

    // FECHAR O MENU CLICANDO NO X
    var fechar = window.document.getElementById('fechar')
    fechar.addEventListener('click',function(){
        document.querySelector('div.grupo-mobile2').style.width='0px'
    })

    
    // FECHAR O MENU CLICANDO FORA DO MENU
    document.addEventListener('click',function(event){
        const fecharMenu = document.querySelector('div.grupo-mobile2')
        const ativarMenu = fecharMenu.contains(event.target)
        if(!ativarMenu){
            fecharMenu.style.width='0px'
        }
    })

    // DEIXAR O MENU DESATIVADO QUANDO A TELA FOR REDIMENCIONADA
    window.addEventListener('resize',function(){

        if(this){
            document.querySelector('div.grupo-mobile2').style.width='0px'
        }

    })