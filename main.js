function verificar(){
    let data = new Date;
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano');
    let res = document.getElementById('res');

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Confira os dados e tente novamente');
    } else {
        let fsex = document.getElementsByName('radsex');
        let idade = ano - Number(fano.value);
        let genero = '';
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade < 5){
                //bebe
                img.setAttribute('src', './media/bebe-att.png')
            } else if (idade < 10){
                //crianças
                img.setAttribute('src', './media/crianças-att.png')
            } else if (idade < 21){
                //adolescente
                img.setAttribute('src', './media/homem-jovem-att.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', './media/homem-adulto-att.png')
            } else {
                //velho
                img.setAttribute('src', './media/homem-velho-att.png')
            }
        } else if (fsex[1].checked){
            genero = 'mulher'
            if(idade >= 0 && idade <5){
                //bebe
                img.setAttribute('src', './media/bebe-att.png')
            } else if (idade < 10){
                //crianças
                img.setAttribute('src', './media/crianças-att.png')
            }else if (idade < 21){
                //adolescente
                img.setAttribute('src', './media/mulher-jovem-att.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', './media/mulher-adulta-att.png')
            } else {
                //velho
                img.setAttribute('src', './media/mulher-velha-att.png')
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `<p>Detectado ${genero} com ${idade}</p>`;
        res.appendChild(img);
    }
    
}