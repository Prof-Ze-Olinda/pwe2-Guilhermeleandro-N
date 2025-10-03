"use strict";

const botao = document.getElementById("startBtn");

botao.addEventListener("click", () => {
    // TODO: peça ao usuário seu nome usando prompt()
    let nome;
    nome = prompt("Qual é seu nome?", "");
    alert(nome);
    // TODO: peça o ano de nascimento e armazene em anoNascimento
    let anoNascimento = prompt('Você nasceu em que ano?', '');
    alert (anoNascimento);
    // Use uma variável para o ano atual
    let anoAtual = 2025;
    alert("Ano atual: " + anoAtual);
    // TODO: converta o ano de nascimento para número (parseInt)
    anoNascimento = parseInt(anoNascimento);
    // TODO: exiba com alert() uma frase: "Olá, NOME! Você tem X anos."
    alert('Olá, ' + nome + "! Você tem " + (anoAtual - anoNascimento) + " anos.");
    // TODO: use confirm() para perguntar se a idade está correta
    let confirmou = confirm("A idade está correta?");
    // Exiba no console a escolha do usuário (console.log ou console.warn)
    console.warn(confirmou)
    // Melhore o programa adicionando outros recursos
});
