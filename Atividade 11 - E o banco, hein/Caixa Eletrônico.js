var array = {
    dinheiro: [],
    dinheiro1: [],
	dinheiro2: [],
    saldo: []
}
var operacao = ''
		var nome = prompt("Qual o seu nome? ");
        alert("Olá " + nome + " é um prazer ter você por aqui!");

		var saldo = 10000.00; //Float
		
		function inicio() {
            
			var escolha = parseInt(prompt('Selecione uma opção 1.) Saldo 2.) Extrato 3.) Saque 4.) Depósito 5.) Transferência 6.)Sair'));

			switch(escolha){
        case 1:
            senha()
            ver_saldo()
            break
        case 2:
            senha()
            ver_extrato()
            break
        case 3:
            senha()
            fazer_saque()
            break
        case 4:
            fazer_deposito()
            break
        case 5:
            senha()
            transferencia()
            break
        case 6:
            sair()
            break
        default:
            erro()

    }
		}		
		function senha(){
    var password = parseInt(window.prompt(`Digite sua senha`))
    if(password == 3589 ){
        alert(`Senha correta`)
    }else{
        alert(`Senha incorreta, Digite ela novamente.`)
        senha()
    }
}

		function ver_saldo() {
			alert('Seu saldo atualizado é: ' + saldo);
			inicio();
		}

		function fazer_deposito() {
			var deposito = parseFloat(prompt('Qual o valor para depósito?'));
			// Not a Number -> Isso é um não-número?
			if (isNaN(deposito) || deposito === '') {
				alert('Por favor, informe um número!');
				fazer_deposito();
			} else if (deposito<= 0){
				not(); 

			}else {
				saldo = saldo + deposito;
                //saldo += deposito; 
				operacao = '+ deposito'
               array.dinheiro.push(deposito)
               array.saldo.push(saldo)
				ver_saldo();
			}
		}

		function fazer_saque() {
			var saque = parseFloat(prompt('Qual o valor para saque?'));
			if (isNaN(saque) || saque === '') {
				alert('Por favor, informe um número:');
				fazer_saque();
			} else if (saque > saldo || saque<= 0){
				not(); 
			} else  {
				saldo -= saque;
	           array.dinheiro1.push(saque)
               array.saldo.push(saldo)
			   ver_saldo();
			}
			}

			function ver_extrato(){
        
		alert("Depósitos: " + array.dinheiro)
		alert("Saques: " + "-"+array.dinheiro1)
		alert("Transferências: " + "-"+array.dinheiro2)
		alert("Saldo: " + array.saldo)
			}


function transferencia(){
	var transferencia = parseFloat(prompt("Quanto quer transferir? "))
	if (isNaN(transferencia) || transferencia === ''){
		alert("Por favor, informe um número: ")
		transferencia()
	}else if(transferencia > saldo || transferencia <=0){
		not()
	}else{
		saldo -= transferencia;
		array.dinheiro2.push(transferencia)
               array.saldo.push(saldo)
ver_saldo();
	}

	function contaa(){
	var conta = parseInt(prompt("Conta para realizar a transferência"))
    if (isNaN(conta) || conta === ''){
        alert("Dados incorretos")
        not()
        contaa()
    }else{
        fazer_transferencia()
    }
}
}


function not(){
	alert("Operação não autorizada")
	inicio();
}
		function erro() {
			alert('Por favor, informe um número entre 1 e 6');
			inicio();
		}

		function sair() {
			var confirma = confirm('Você deseja sair?');
			if (confirma) {
				alert(nome+ ", foi um prazer ter você por aqui!")
				window.close();
			} else {
                
				inicio();
			}
		}

		inicio();