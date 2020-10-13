
const calcular =  document.getElementById('calcular')


function imc(){
    const nome =  document.getElementById('nome')
    const altura =  document.getElementById('alt')
    const peso =  document.getElementById('peso')
    const resultado =  document.getElementById('resultado')

    if (nome !== '' && altura !== ' ' && peso !== '') {
        const valorImc = (peso/(altura * altura)).toFixed(2);
        resultado.textContent = valorImc;

        let classificacao = '';

        if (valorImc<18.5) {
            classificacao = 'abaixo do peso'
            
        }else if (valorImc<25){
            classificacao = 'co peso ideal'
        }else if (valorImc<30) {
            classificacao = 'levemente acima do peso'
            
        }
        resultado.textContent= `${nome} seu IMC é ${valorImc} e você ${classificacao}`
        
    }else{
        resultado.textContent = 'Preencha todos os campos'
    
    }


}

calcular.addEventListener('click' , imc);



