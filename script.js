const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const sexoSelecionado = document.querySelector('input[name="sexo"]:checked');
    const sexo = sexoSelecionado ? sexoSelecionado.value : "";
    const interesses = [];
    const checkboxes = document.querySelectorAll('input[name="interesse[]"]:checked');
    const estado = document.getElementById("estado").value;
    const dataNascimento = document.getElementById("dataNascimento").value;

    checkboxes.forEach(function(checkboxe) {
        interesses.push(checkboxe.value);
    });

    const dadosFormulario = {
        nome: nome,
        email: email,
        senha: senha,
        dataNascimento: dataNascimento,
        sexo: sexo,
        interesses: interesses,
        estado: estado
    };

    console.log(dadosFormulario);

    fetch("http://localhost:3000/formulario", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosFormulario)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Resposta do servidor:", data);
    })
    .catch(error => {
        console.error("Erro:", error);
    })
});