// Busca o botão de verificar idade no HTML
let botaoVerificar = document.getElementById("verificar");

// Executa o código quando o botão for clicado
botaoVerificar.addEventListener("click", function() {

    // Pega a idade digitada pelo usuário
    let idade = Number(document.getElementById("idade").value);

    // Busca o local onde a mensagem será exibida
    let resultado = document.getElementById("resultado");

    // Verifica se o campo foi preenchido corretamente
    if (document.getElementById("idade").value === "") {
        resultado.textContent = "Digite sua idade.";
    }

    // Se a idade for 18 ou mais
    else if (idade >= 18) {
        resultado.textContent = "Entrada permitida!";
    }

    // Caso nenhuma condição anterior seja verdadeira
    else {
        resultado.textContent = "Entrada não permitida.";
    }
});


// Função que atualiza o relógio
function atualizarRelogio() {

    // Pega a data e a hora atuais do computador
    let agora = new Date();

    // Transforma o horário em texto
    let horario = agora.toLocaleTimeString("pt-BR");

    // Mostra o horário no HTML
    document.getElementById("relogio").textContent = horario;
}

// Executa a função uma vez por segundo
setInterval(atualizarRelogio, 1000);

// Mostra o horário assim que a página abrir
atualizarRelogio();


// Busca o botão de mudar o tema
let botaoTema = document.getElementById("tema");

// Executa quando o botão for clicado
botaoTema.addEventListener("click", function() {

    // Adiciona ou remove a classe "escuro" do body
    document.body.classList.toggle("escuro");
});