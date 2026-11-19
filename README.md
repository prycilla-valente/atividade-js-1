# Atividade JS 1

## Tipos de Saída

### 1 - O que é um tipo de saída em JavaScript?

É a forma como o JavaScript apresenta um resultado ao usuário ou ao desenvolvedor, seja no console, em uma janela de aviso ou na própria página HTML.

### 2 - Cite e explique 3 tipos de saída diferentes em JS.

- **`alert()`**: abre uma janela com uma mensagem de alerta para o usuário.
- **`console.log()`**: exibe informações no console do navegador. Para acessá-lo, basta pressionar a tecla F12. É muito utilizado para testar e depurar códigos.
- **`document.write()`**: escreve um conteúdo diretamente na página HTML.

---

## Declarações, Sintaxe e Comentários

### 1 - Explique o que significa uma declaração em JavaScript.

Uma declaração em JavaScript é uma instrução escrita no código para realizar determinada ação, como criar uma variável, executar uma função ou realizar uma operação.

Geralmente, as instruções podem terminar com ponto e vírgula (`;`), embora ele não seja obrigatório em todos os casos.

### 2 - Qual a importância dos comentários no código?

Os comentários são importantes porque explicam o código para outras pessoas, facilitam a manutenção e permitem desativar trechos de código temporariamente.

A sintaxe dos comentários varia de acordo com a linguagem:

- **JavaScript:** `//` para comentários de uma linha e `/* */` para comentários de várias linhas.
- **CSS:** `/* */`.
- **HTML:** `<!-- -->`.

### 3 - Reescreva o código abaixo, adicionando comentários explicativos para cada linha:

```javascript
let idade = 25; // Cria a variável idade e atribui o valor 25.

console.log(idade); // Exibe o valor da variável idade no console.
```

### 4 - Corrija os erros de sintaxe no trecho abaixo:

**Código corrigido:**

```javascript
let nome = "Ana";
console.log(nome);
```

**Correções realizadas:**

- Adicionadas as aspas de fechamento em `"Ana"`.
- Adicionado o ponto e vírgula (`;`) ao final da declaração.
- Separado o `console.log(nome)` em uma nova linha.
- Corrigido o nome da variável dentro do `console.log()`.
