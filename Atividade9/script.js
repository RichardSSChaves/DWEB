// Função auxiliar 1: lê os três números digitados no HTML.
function lerTresNumeros() {
    let campo1 = document.getElementById("numero1").value;
    let campo2 = document.getElementById("numero2").value;
    let campo3 = document.getElementById("numero3").value;

    if (campo1.trim() === "" || campo2.trim() === "" || campo3.trim() === "") {
        alert("Preencha os três números.");
        return null;
    }

    return [Number(campo1), Number(campo2), Number(campo3)];
}

// Função auxiliar 2: mostra o resultado na página.
function mostrarResultado(id, mensagem) {
    document.getElementById(id).textContent = mensagem;
}

// Função 1: recebe três números e retorna o maior.
function funcao1() {
    let numeros = lerTresNumeros();
    if (numeros === null) return;

    let maior = numeros[0];
    if (numeros[1] > maior) maior = numeros[1];
    if (numeros[2] > maior) maior = numeros[2];

    mostrarResultado("resultado1", "Maior número: " + maior);
    return maior;
}

// Função 2: recebe três números e retorna a ordem crescente.
function funcao2() {
    let numeros = lerTresNumeros();
    if (numeros === null) return;

    let a = numeros[0];
    let b = numeros[1];
    let c = numeros[2];
    let troca;

    if (a > b) {
        troca = a;
        a = b;
        b = troca;
    }
    if (a > c) {
        troca = a;
        a = c;
        c = troca;
    }
    if (b > c) {
        troca = b;
        b = c;
        c = troca;
    }

    mostrarResultado("resultado2", "Ordem crescente: " + a + ", " + b + ", " + c);
    return [a, b, c];
}

// Função 3: verifica se o texto é palíndromo.
function funcao3() {
    let texto = document.getElementById("texto").value;
    let semEspacos = texto.toLowerCase().replace(/\s+/g, "");

    if (semEspacos === "") {
        mostrarResultado("resultado3", "Digite uma palavra ou frase.");
        return false;
    }

    let invertido = semEspacos.split("").reverse().join("");
    let palindromo = semEspacos === invertido;

    if (palindromo) {
        mostrarResultado("resultado3", "É um palíndromo!");
    } else {
        mostrarResultado("resultado3", "Não é um palíndromo.");
    }

    return palindromo;
}
