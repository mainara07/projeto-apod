var btn = document.querySelector("#pesquisar")
var dataInserida = document.querySelector("#dataInserida")
var conteudo = document.querySelector("#conteudo")



btn.addEventListener ("click", function () {
    var data = dataInserida.value;
    var pedido = new XMLHttpRequest();
    pedido.open("GET",`https://api.nasa.gov/planetary/apod?api_key=lw0Fb38Efk7pxoN1l493h581fHJTPFFfQytjVMcW&date=${data}`)

    pedido.addEventListener ("load", function () {
        if (pedido.readyState == 4 && pedido.status ==200){
         var resposta = pedido.responseText;
            var dados = JSON.parse(resposta)
            console.log(dados)
         }
    var dataAtual = dados.date;
    var explicacao = dados.explanation;
    var imagem = dados.url;
    var titulo = dados.title;
    
    conteudo.innerHTML = 
    `
    <h1>${titulo}</h1>
    <img src="${imagem}" alt="">
    <p><strong> Explanation:</strong> ${explicacao}</p>
    `
    })
pedido.send()
})
