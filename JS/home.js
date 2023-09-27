    // SLIDE

    function slide(){
        var input1 = document.querySelector('label#label1')
        var input2 = document.querySelector('label#label2')
        var input3 = document.querySelector('label#label3')
        var input4 = document.querySelector('label#label4')
        var input5 = document.querySelector('label#label5')
        var input6 = document.querySelector('label#label6')

        var num = 1-1
        // EFEITO DE SLIDE
        function LoopingSlide(){
            num+=1
            if(num>6){
                num=1
            }
            const loopImagem = new Image()
            loopImagem.onload=function(){
            document.querySelector('div.PrimeiraCapa').style.backgroundImage=`url('${this.src}')`
            }
            loopImagem.src=`../IMAGENS/slide${num}.jpg`
        }

        setInterval(LoopingSlide,5000)

        // EFEITO DE INDENTIFICAÇÃO DE IMAGEM
        var num2=1-1
    
        function indentificador(){
            num2+=1
            if(num2>6){
                num2=1
            }
            document.getElementById(`input${num2}`).checked=true;
        }

        setInterval(indentificador,5000)

        document.addEventListener('click',function(event){
            const slide1 = input1.contains(event.target)
            if(slide1){
                const imagemSlide1 = new Image()
                imagemSlide1.onload=function(){
                    document.querySelector('div.PrimeiraCapa').style.backgroundImage=`url('${this.src}')`
                } 
                imagemSlide1.src=`../IMAGENS/slide1.jpg`
            }
        })

        document.addEventListener('click',function(event){
            const slide2 = input2.contains(event.target)
            if(slide2){
                const imagemSlide2 = new Image()
                imagemSlide2.onload=function(){
                    document.querySelector('div.PrimeiraCapa').style.backgroundImage=`url('${this.src}')`
                } 
                imagemSlide2.src=`../IMAGENS/slide2.jpg`
            }
        })

        document.addEventListener('click',function(event){
            const slide3 = input3.contains(event.target)
            if(slide3){
                const imagemSlide3 = new Image()
                imagemSlide3.onload=function(){
                    document.querySelector('div.PrimeiraCapa').style.backgroundImage=`url('${this.src}')`
                } 
                imagemSlide3.src=`../IMAGENS/slide3.jpg`
            }
        })

        document.addEventListener('click',function(event){
            const slide4 = input4.contains(event.target)
            if(slide4){
                const imagemSlide4 = new Image()
                imagemSlide4.onload=function(){
                    document.querySelector('div.PrimeiraCapa').style.backgroundImage=`url('${this.src}')`
                } 
                imagemSlide4.src=`../IMAGENS/slide4.jpg`
            }
        })

        document.addEventListener('click',function(event){
            const slide5 = input5.contains(event.target)
            if(slide5){
                const imagemSlide5 = new Image()
                imagemSlide5.onload=function(){
                    document.querySelector('div.PrimeiraCapa').style.backgroundImage=`url('${this.src}')`
                } 
                imagemSlide5.src=`../IMAGENS/slide5.jpg`
            }
        })

        document.addEventListener('click',function(event){
            const slide6 = input6.contains(event.target)
            if(slide6){
                const imagemSlide6 = new Image()
                imagemSlide6.onload=function(){
                    document.querySelector('div.PrimeiraCapa').style.backgroundImage=`url('${this.src}')`
                } 
                imagemSlide6.src=`../IMAGENS/slide6.jpg`
            }
        })
        
    }

    slide()

