
document.getElementById('cadastrar').addEventListener('click',function(event){
    
    function validacaoNome(){
        const Nome = document.getElementById('inputName').value
        const alerta1 = document.querySelector('h4.alerta1')
        const inputNome = Nome.length
        
        if(inputNome < 5 ){
            alerta1.innerHTML='Nome Invalido!'
            alerta1.style.fontSize='12px'
            alerta1.style.background='#f93707'
            alerta1.style.color='white'
            alerta1.style.height='30px'
            alerta1.style.borderRadius='5px'
            alerta1.style.textAlign='center'
            alerta1.style.lineHeight='30px'
            alerta1.style.border='2px solid darkred'
        }else if(inputNome > 5){
            alerta1.innerHTML=''
            alerta1.style.fontSize=''
            alerta1.style.background=''
            alerta1.style.color=''
            alerta1.style.height=''
            alerta1.style.borderRadius=''
            alerta1.style.textAlign=''
            alerta1.style.lineHeight=''
            alerta1.style.border='' 
        }
    }
    
    validacaoNome()
    
    function validacaoSobrenome(){
        const Sobrenome = document.getElementById('inputSobrenome').value
        const inputSobrenome = Sobrenome.length
        const alerta2 = document.querySelector('h4.alerta2')

        if(inputSobrenome < 5 ){
            alerta2.innerHTML='Sobrenome Invalido!'
            alerta2.style.fontSize='12px'
            alerta2.style.background='#f93707'
            alerta2.style.color='white'
            alerta2.style.height='30px'
            alerta2.style.borderRadius='5px'
            alerta2.style.textAlign='center'
            alerta2.style.lineHeight='30px'
            alerta2.style.border='2px solid darkred'
        }else if(inputSobrenome > 5){
            alerta2.innerHTML=''
            alerta2.style.fontSize=''
            alerta2.style.background=''
            alerta2.style.color=''
            alerta2.style.height=''
            alerta2.style.borderRadius=''
            alerta2.style.textAlign=''
            alerta2.style.lineHeight=''
            alerta2.style.border=''        
        }
    }

    validacaoSobrenome()


    function validacaoEmail(){
        const Email = document.getElementById('inputE-mail').value
        const inputEmail = Email.length
        const alerta3 = document.querySelector('h4.alerta3')

        if(inputEmail < 10 ){
            alerta3.innerHTML='E-mail Invalido!'
            alerta3.style.fontSize='12px'
            alerta3.style.background='#f93707'
            alerta3.style.color='white'
            alerta3.style.height='30px'
            alerta3.style.borderRadius='5px'
            alerta3.style.textAlign='center'
            alerta3.style.lineHeight='30px'
            alerta3.style.border='2px solid darkred'
        }else if(inputEmail > 5){
            alerta3.innerHTML=''
            alerta3.style.fontSize=''
            alerta3.style.background=''
            alerta3.style.color=''
            alerta3.style.height=''
            alerta3.style.borderRadius=''
            alerta3.style.textAlign=''
            alerta3.style.lineHeight=''
            alerta3.style.border=''
        }
    }

    validacaoEmail()

    function validacaoSenha(){
        const Senha = document.getElementById('inputSenha').value
        const inputSenha = Senha.length
        const alerta4 = document.querySelector('h4.alerta4')


        if(inputSenha > 10){
            alerta4.innerHTML=''
            alerta4.style.fontSize=''
            alerta4.style.background=''
            alerta4.style.color=''
            alerta4.style.height=''
            alerta4.style.borderRadius=''
            alerta4.style.textAlign=''
            alerta4.style.lineHeight=''
            alerta4.style.border=''        
        }
        else if(inputSenha <10 ){
            alerta4.innerHTML='Senha Fraca!'
            alerta4.style.fontSize='12px'
            alerta4.style.background='#f93707'
            alerta4.style.color='white'
            alerta4.style.height='30px'
            alerta4.style.borderRadius='5px'
            alerta4.style.textAlign='center'
            alerta4.style.lineHeight='30px'
            alerta4.style.border='2px solid darkred'
        }
    }

    validacaoSenha()

    function validacaoConfirmacao(){
        const Confirmação = document.getElementById('inputConfirmacao').value
        const Senha = document.getElementById('inputSenha').value
        const inputSenha = Senha.length
        const inputConfirmacao = Confirmação.length;
        const alerta5 = document.querySelector('h4.alerta5')

        if(Confirmação !== Senha){
            alerta5.innerHTML=' As Senhas não são as mesmas!'
            alerta5.style.fontSize='12px'
            alerta5.style.background='#f93707'
            alerta5.style.color='white'
            alerta5.style.height='30px'
            alerta5.style.borderRadius='5px'
            alerta5.style.textAlign='center'
            alerta5.style.lineHeight='30px'
            alerta5.style.border='2px solid darkred'
        }
        else{
            alerta5.innerHTML=''
            alerta5.style.fontSize=''
            alerta5.style.background=''
            alerta5.style.color=''
            alerta5.style.height=''
            alerta5.style.borderRadius=''
            alerta5.style.textAlign=''
            alerta5.style.lineHeight=''
            alerta5.style.border=''       
        }
    }

    validacaoConfirmacao()
    
})


