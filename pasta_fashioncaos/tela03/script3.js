document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        
        const quantidade = document.querySelector("input[name='Quantidade']").value;
        const criacao = document.querySelector("input[name='criação']").value;
        const votacao = document.querySelector("input[name='votação']").value;

        
        if (!["5", "6", "7", "8", "9", "10"].includes(quantidade)) {
            alert("Por favor, escolha uma quantidade de jogadores válida.");
            return;
        }

        if (!["3 min", "5 min", "7 min", "10 min"].includes(criacao)) {
            alert("Por favor, escolha um tempo de criação válido.");
            return;
        }

        if (!["20 segundos", "30 segundos", "1 min"].includes(votacao)) {
            alert("Por favor, escolha um tempo de votação válido.");
            return;
        }

        
        if (
            ["5", "6", "7", "8", "9", "10"].includes(quantidade) &&
            ["3 min", "5 min", "7 min", "10 min"].includes(criacao) &&
            ["20 segundos", "30 segundos", "1 min"].includes(votacao)
        ) {
            
            alert(
                "Sala criada com sucesso!\nQuantidade de jogadores: " +
                quantidade +
                "\nTempo para criação: " +
                criacao +
                "\nTempo para votação: " +
                votacao
            );

            
            window.location.href = "tela4.html"; 
        }

        
        form.reset();
    });
});
