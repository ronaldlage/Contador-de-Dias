var segundos = 1000
var minutos = segundos * 60
var horas = minutos * 60
var dia = horas * 24
var ano = dia * 365

var mes = ano / 12

function contarDias(){
    var imprime = window.document.getElementById('output-dados')
    var dataIni = window.document.getElementById('data-ini').value
    var dataFim = window.document.getElementById('data-fim').value
    var diff
    var diasCorridos
    var mesCorridos
    var anosCorridos


    if(validarCampos(dataIni, dataFim) == false){
        window.alert(`Vefique os campos e tente novamente`)
    }else{
        dataIni = Date.parse(dataIni) //convertendo uma string com data em milisegundos desde 1° Janeiro de 1970
        dataFim = Date.parse(dataFim)
    
        diff = dataFim - dataIni //cálculo para pegar a diferença em milisegundos entre as datas
    
        diasCorridos = diff / dia //cálculo para converter a diferença em dias
        mesCorridos = Math.trunc(diff / mes) //cálculo para converter a diferença em meses (Math.trunc pega o valor inteiro, ignorando as casas decimais)
        anosCorridos = Math.trunc(diff / ano) //cálculo para converter a diferença em anos
        
        console.log(`Dias: ${diasCorridos}`)
        console.log(`Meses: ${mesCorridos}`)
        console.log(`Anos: ${anosCorridos}`)
        
        imprime.innerHTML = ''
        imprime.innerHTML += `Dias passados entre as datas: ${diasCorridos}<br>`
        imprime.innerHTML += `Meses passados entre as datas: ${mesCorridos}<br>`
        imprime.innerHTML += `Anos passados entre as datas: ${anosCorridos}`
    }
}

function validarCampos(value1, value2){
    if(value1.length > 10){
        return false
    }else if(value1 < 10){
        return false
    }else if(value2 > 10){
        return false
    }else if(value2 < 10){
        return false
    }else{
        return true
    }
}