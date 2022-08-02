 var placa = document.getElementById('placa')
  var cpf = document.getElementById('CPF')
  var cpfAl = document.getElementById('cpfael')
  var telefones = document.getElementById('numeroAle')
  var NT = document.getElementById('numerodeTelefone')
  var cp = document.getElementById('cpfssss')
  var vp = document.getElementById('validarPlaca')
  var vc = document.getElementById('valorCPF')
  var vtl = document.getElementById('valortelefone')
  var Vcp = document.getElementById('ValorCPF')
  var DDD = document.getElementById('ddd')



  function placas( plaquinha){
    plaquinha = placa.value
    if(plaquinha.length == 0 ){
      vp.style.color = 'red'
      vp.innerHTML = 'Placa inválida'
    }else{
    if(plaquinha.length != 7 ){
      vp.style.color = 'red'
    vp.innerHTML = 'Placa inválida! Falta caracteres.'
    }else{
        const letrinhas = /^[a-z A-Z]{3}[0-9]{4}$/
        const letrinhasSul = /^[a-z A-Z]{3}[0-9]{1}[a-z A-Z]{1}[0-9]{2}$/
      if(letrinhas.test(plaquinha)){
        vp.style.color= 'green'
       vp.innerHTML = 'Placa Válida'
      }else if(letrinhasSul.test(plaquinha)){
        vp.style.color= 'green'
        vp.innerHTML = 'Placa Válida'
      }else{
        vp.style.color = 'red'
       vp.innerHTML = 'Erro'
      }
        
    }
  }
}

function cpfss(cpfzinho){
  cpfzinho = cpf.value
  cpfzinho = cpfzinho.replace(".", "")
  cpfzinho = cpfzinho.replace(".", "")
  cpfzinho = cpfzinho.replace("-", "")
  cpfzinho = cpfzinho.replace("/", "")

  if(cpfzinho.length == 0){
    vc.innerHTML += 'Erro. Insira um CPF'
  }else{
  if(cpfzinho.length !== 11 ){
    vc.innerHTML += 'Erro. Insira um CPF válido'
  }else{
     if(cpfzinho == '00000000000' || cpfzinho == '11111111111' || cpfzinho == '22222222222' || cpfzinho == '33333333333' || cpfzinho == '44444444444' || cpfzinho == '55555555555' || cpfzinho =='66666666666' || cpfzinho == '77777777777' || cpfzinho == '88888888888' || cpfzinho == '99999999999' ){
      vc.innerHTML += 'Erro. Por favor, insira um CPF válido'
     }else{
      var soma = 0
      soma = soma + (parseInt(cpfzinho.substring(0, 1))) * 10
      soma = soma + (parseInt(cpfzinho.substring(1, 2))) * 9
      soma = soma + (parseInt(cpfzinho.substring(2, 3))) * 8
      soma = soma + (parseInt(cpfzinho.substring(3, 4))) * 7
      soma = soma + (parseInt(cpfzinho.substring(4, 5))) * 6
      soma = soma + (parseInt(cpfzinho.substring(5, 6))) * 5
      soma = soma + (parseInt(cpfzinho.substring(6, 7))) * 4
      soma = soma + (parseInt(cpfzinho.substring(7, 8))) * 3
      soma = soma + (parseInt(cpfzinho.substring(8, 9))) * 2
     }
      var resto1 = (soma * 10) % 11
    if ((resto1 == 10) || (resto1 == 11)) {
        resto1 = 0
    }
        var soma = 0
        soma = soma + (parseInt(cpfzinho.substring(0, 1))) * 11
        soma = soma + (parseInt(cpfzinho.substring(1, 2))) * 10
        soma = soma + (parseInt(cpfzinho.substring(2, 3))) * 9
        soma = soma + (parseInt(cpfzinho.substring(3, 4))) * 8
        soma = soma + (parseInt(cpfzinho.substring(4, 5))) * 7
        soma = soma + (parseInt(cpfzinho.substring(5, 6))) * 6
        soma = soma + (parseInt(cpfzinho.substring(6, 7))) * 5
    soma = soma + (parseInt(cpfzinho.substring(7, 8))) * 4
    soma = soma + (parseInt(cpfzinho.substring(8, 9))) * 3
soma = soma + (parseInt(cpfzinho.substring(9, 10))) * 2
var resto2 = (soma * 10) % 11

    if ((resto2 == 10) || (resto2 == 11)) {
        resto2 = 0
    }
    if (
        (resto1 == (parseInt(cpfzinho.substring(9, 10)))) && (resto2 == (parseInt(cpfzinho.substring(10, 11))))) {
          vc.style.color = 'green'
          return vc.innerHTML = "CPF válido"
        
    } else {
      vc.style.color = 'red'
        return vc.innerHTML = "CPF inválido"
        

    }

}
  } 

  } 

//      //Gerar numeros de telefone alearoerio
     function telefone(ddd, qtd){
      qtd = NT.value
       ddd = DDD.value
    var d = 9
        for(var j = 0; j<qtd; j++){
          var telefone = Math.floor(Math.random() *  (9999 - 1000 + 1)) + 1000
          var telefone1 = Math.floor(Math.random() *  (9999 - 1000 + 1)) + 1000
          vtl.innerHTML +=`(${ddd}) ${d} ${telefone}-${telefone1}\n`  
    }
        }
  
   function gerarCPF(QTD){
    QTD = cp.value
         let cpfs = new Array()
      for(var k = 0; k <QTD; k++){
      Tcpf1 = Math.floor(Math.random()* (999 - 100 + 1))+100
      Tcpf2 = Math.floor(Math.random()* (999 - 100 + 1))+100
      Tcpf3 = Math.floor(Math.random()* (999 - 100 + 1))+100
      var digi = Math.floor(Math.random()*(99 - 10 + 1))+10
      Vcp.innerHTML += `${Tcpf1}.${Tcpf2}.${Tcpf3}-${digi}` + "\n"
      }
      
    }
    

       
    //}
//     
//     let temp = Math.floor(Math.random() * 999999999).toString().padStart(9, '0')
//     let d1 = 0, d2=0

//     for(let i =0; i<9;i++){
//       d1+= temp[i] * (i+1)
//       d2+= temp[i] * i

//     } 
//     d1%=11
//     if(d1 == 10) d1 =0

// d2+=d1 *9
// d2%=11
// if(d2 ==10) d2 =0

// temp += d1 + '' + d2
// cpfs.push(temp)
//   }

  //
   
  

    function limpar(){
      var solta = document.getElementById('solta')
      //agora aqui vê primeiro se não é vazio
      if (placa.value != ''){
          placa.value = ''
          placa.focus()
          vp.value = null
      }
      
      if (cpf.value != ''){
        cpf.value = ''
        cpf.focus()
        vc.value = null
    }

     if (NT.value != ''){
      NT.value = ''
      NT.focus()
      vtl.value = null
  }

     if (cp.value != ''){
    cp.value = ''
    cp.focus()
    Vcp.value = null
    
}
  }
   
  
   
    
   



 
//  function placa(){
//  var placa = 'abc1234'
// /var cpf = '12345678901'
// // if(placa.length == 0 || cpf.length ==0){
// //     console.log('ERRO')
// // }else{
// //     if(placa.length != 7  && cpf.length != 11){
// //         console.log('Preste atenção, falta caracteres')
// //     }else{
// //         console.log('Blz, mano. Isso ai.')
// //     }
// // }
// // }

// var letrasPlacas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
// var numerosPlacas = '1234567890'
// var tamanhoplacaLetras = 3
// var  tamanhoplacaNumeros = 4
// for(var i = 0; i<tamanhoplacaLetras; i++){
//   for(var j = 0; j <tamanhoplacaNumeros; j++){
//     var letras = letrasPlacas.charAt(Math.floor(Math.random() *  letrasPlacas.length))
//     var numeros = numerosPlacas.charAt(Math.floor(Math.random() *  numerosPlacas.length))
   
//     }
//     console.log(letras + numeros)
// }
// console.log(numeros)
