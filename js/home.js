// Nesta parte eu uso set interval para atulizar a rquisições
// Api que tras dados em Real
setInterval(function(){
  // No fetch eu passo o link da api
  fetch("https://www.mercadobitcoin.net/api/BTC/ticker/")
  .then(function(response){
      return response.json();
  })
  .then(function(data){
      // aqui acesso dos dados da api e passo para uma variavel
      let ultimovalor = data.ticker.last
      // aqui acesso o h1 atraves de u id que adicionei no html
      let textoCotacao = document.getElementById("precobtcbrl")
      // Aqui eu passo a mesma informação para o responsivo ultilizando o mesmo procedimento
      let textoCotacaoR = document.getElementById("precobtcbrl-r")

      // Por ultimo eu adiciono esse elementos chamados na API pra dentro do texto
      textoCotacao.innerHTML = "R$" + parseFloat(ultimovalor).toFixed(2)
      // Aqui eu passo a mesma informação para o responsivo ultilizando o mesmo procedimento
      textoCotacaoR.innerHTML = "R$" + parseFloat(ultimovalor).toFixed(2)
  })
  // Ele faz a requisição na API a cada 1s
}, 1000)

