function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique as informações e tente novamente.')
    } else {
        // window.alert('OK')
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `Idade Calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'imagem')
        img.setAttribute('width', '500px')

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // CRIANÇA
                img.setAttribute('src', './app/img/homem-crianca.jpg')
            } else if (idade < 21){
                // JOVEM
                img.setAttribute('src', './app/img/homem-jovem.jpg')
            } else if (idade < 50){
                // ADULTO
                img.setAttribute('src', './app/img/homem-adulto.jpg')
            } else {
                // IDOSO
                img.setAttribute('src', './app/img/homem-velho.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // CRIANÇA
                img.setAttribute('src', './app/img/mulher-crianca.jpg')
            } else if (idade < 21){
                // JOVEM
                img.setAttribute('src', './app/img/mulher-jovem.jpg')
            } else if (idade < 50){
                // ADULTO
                img.setAttribute('src', './app/img/mulher-adulto.jpg')
            } else {
                // IDOSO
                img.setAttribute('src', './app/img/mulher-velha.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}