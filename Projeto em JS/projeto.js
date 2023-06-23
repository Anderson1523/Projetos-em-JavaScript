function imc (peso, altura) {
    console.log("Digite seu peso");
    peso = parseFloat.readLine(peso);
    altura = parseFloat.readLine(altura);
    return peso / (altura **2);

}

(imc <=20) ? "Abaixo do Peso" : (imc >=20 & imc<27) ? "Normal" : (imc >27 && imc <=30) ? "Acima do Peso" : (imc >=30 & imc<= 37) ? "Obesidade Nivel 1" : "";