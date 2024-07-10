var lista = []

function adicionar(){
    var numero = document.getElementById('txtnum')
    var listanum = document.getElementById('listanum')
    var n = Number(numero.value)

    if(n >=1 && n <=100 && lista.indexOf(n) == -1){
        //adiciona o numero na lista e exibe no selector
        lista.push(n)
        var opcao = document.createElement('option')
        opcao.text = `Valor ${numero.value} adicionado`
        listanum.appendChild(opcao)
        document.getElementById('resultado').innerHTML = ""
  
        
    }else{
        //erro
        window.alert("[ERRO] O número inserido é inválido!")
    }
    numero.value=''
    numero.focus()
    

}

function calcularmaiorvalor(lista){
    return Math.max.apply(null, lista);
}

function calcularmenorvalor(lista){
    return Math.min.apply(null, lista);
}

function somar(lista){
    var total = 0
    for (var num in lista){
        total += Number(lista[num])
    }
    return total
}

function calcularmedia(lista){
    var media = 0
    var total = 0
    for(var num in lista){
        total += Number(lista[num])
    }
    return media = total/lista.length
}

function calcular(){
    var resultado = document.getElementById('resultado')
    //executando os calculos
    if (lista.length > 0 ){
    var tamanhodalista = lista.length
    var maior = calcularmaiorvalor(lista)
    var menor = calcularmenorvalor(lista)
    var soma = somar(lista)
    var media = calcularmedia(lista)

    resultado.innerHTML = `Tamanho da lista: ${tamanhodalista} <br>`
    resultado.innerHTML += ` Maior Valor: ${maior} <br>`
    resultado.innerHTML += ` Menor Valor: ${menor} <br>`
    resultado.innerHTML += ` A soma dos valores da lista é: ${soma} <br>`
    resultado.innerHTML += ` A média dos valores da lista é: ${media.toFixed(2).replace('.',',')} <br>`
    } else{
        //erro
        window.alert("Digite um número para finalizar")
    }

}

function limpar(){
    lista = []
    document.getElementById('txtnum').value = ""
    document.getElementById('listanum').innerHTML = ""
    document.getElementById('resultado').innerHTML = ""
    document.getElementById('txtnum').focus()

    
}

