//Tipos de saída em JavaScript
//Exibe mensagem no console
const mensagem = "Olá, mundo!";
console.log(mensagem);

//Exibe mensagem em um alerta
const name = "Olá! Meu nome é Prycilla Valente."; 
alert(name);

//Exibe mensagem no próprio HTML
const texto = "Você completou a Parte 1!";
document.write(texto);

//Declarações, Sintaxe e Comentários
let idade = 25; //Cria a variável idade e atribui o valor 25.
console.log(idade); //Exibe o valor da variável idade no console.

//Código corrigido
let nome = "Ana";
console.log(nome); //Exibe o valor da variável nome no console.

// Variáveis 
const nomeCompleto = "Prycilla Valente";
let minhaIdade = 37;
let cidade = "Rio de Janeiro";
console.log(nomeCompleto); //Exibe o valor da variável nomeCompleto no console.
console.log(minhaIdade); //Exibe o valor da variável idade no console.
console.log(cidade); //Exibe o valor da variável cidade no console.

// Operadores aritméticos
const a = 10;
const b = 5;
console.log(a + b); // Adição
console.log(a - b); // Subtração
console.log(a * b); // Multiplicação
console.log(a / b); // Divisão
console.log(a % b); // Módulo (resto da divisão)
console.log(a ** b); // Exponenciação (a elevado a b)

// Operadores de comparação
const x = 25;
const y = 5; 
console.log("São iguais? " + (x == y)); // Igualdade
console.log("São diferentes? " + (x != y)); // Desigualdade

if (x === y) {
    console.log("Os números são iguais.");
} else {
    console.log("Os números são diferentes.");
}

// Operadores lógicos
const numero = 30;

// Maior que 10 E menor que 50
console.log("Entre 10 e 50?", numero > 10 && numero < 50);   // true

// Menor que 5 OU maior que 20
console.log("Menor que 5 ou maior que 20?", numero < 5 || numero > 20);   // true

