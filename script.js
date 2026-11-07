const assentos = document.querySelectorAll("img");

assentos.forEach(function(assento) {
    // Define o que acontece quando clicamos em uma poltrona
    assento.onclick = function() {

        let resposta = confirm("Deseja reservar esta poltrona?");

        if (resposta == true) {

            let nome = prompt("Digite seu nome:");
         // Verifica se o nome não está vazio e se a pessoa não cancelou
            if (nome != null && nome.trim() != "") {

             
                assento.src= "img/seatOcupado.png";
         // Mostra o nome digitado no espaço correspondente à poltrona
                  document.getElementById("nome-" + assento.id).textContent = nome;

                      // Impede que a poltrona seja reservada novamente
                assento.onclick = null;

                alert("Reserva confirmada para " + nome);
            }
        }
    }
});