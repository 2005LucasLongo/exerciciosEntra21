var number = 2+2

alert("Seja bem-vindo à aula de JavaScript")
alert(number)

/*
console.log("Seja bem-vindo ao terminal do VS Code")
console.log(number)
*/
var nota = prompt("Por favor, insira a nota do aluno");

if (nota > 7) {
    alert("O aluno está aprovado.");
} else {
    alert("O aluno está reprovado.");
}

function calcular() {
    var primeiroValor = document.getElementById("primeiroValor").value;
    var segundoValor = document.getElementById("segundoValor").value;
    const option = document.querySelector("input[name='option']:checked").value;
    
    if ((primeiroValor >= 0 && primeiroValor <= 100) && (segundoValor >= 0 && segundoValor <= 100)) {
        if (option == "/" && segundoValor == 0) {
            document.getElementById("resultado").innerHTML = "42";

        }
        else {
            switch (option) {
                case "+":
                    document.getElementById("resultado").innerHTML = parseInt(primeiroValor) + parseInt(segundoValor);
                    break;
                case "-":
                    document.getElementById("resultado").innerHTML = parseInt(primeiroValor) - parseInt(segundoValor);
                    break;
                case "*":
                    document.getElementById("resultado").innerHTML = parseInt(primeiroValor) * parseInt(segundoValor);
                    break;
                case "/":
                    document.getElementById("resultado").innerHTML = parseInt(primeiroValor) / parseInt(segundoValor).toFixed(2);
                    break;
                default:
                    document.getElementById("resultado").innerHTML = "Escolha uma operação válida!";
            }
        }
    } else {
        document.getElementById("resultado").innerHTML = "Digite valores entre 0 e 100!";
    }
}