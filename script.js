function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector("#textano")
    var res = document.querySelector("#res")
    if(fano.value.length == 0 || fano.value > ano){
        alert("Verifique os dados e tente novamente")
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && 15){
                // criança 
                img.setAttribute('src', 'fotobebe-h.png')
            }else if(idade < 21){
                // jovem
                img.setAttribute('src', 'fotojovem-h.png')
           }else if (idade > 50){
                // adulto
                img.setAttribute('src', 'fotoidoso-h.png')
           }
        }else if (fsex[1].checked){
            gênero = 'Mulher'
        if(idade >= 0 && 15){
            // criança
            img.setAttribute('src', 'fotobebe-m.png')
        }else if(idade < 21){
            // jovem
            img.setAttribute('src', 'fotojovem-m.png')
       }else if (idade > 50){
            // adulto
            img.setAttribute('src', 'fotoidoso-m.png')
       }
       }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos <strong>${gênero}</strong> com <strong>${idade}</strong> anos.`
        res.appendChild(img)
    }
    
}
        
        