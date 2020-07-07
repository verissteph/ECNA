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
      let volumedia = data.ticker.vol
      // esquema para conseguir quebrar a parte inteira e a parte decimal para o responsivo (Will)
      let volumedia_split = volumedia.split(".")
      // aqui acesso o h1 atraves de u id que adicionei no html
      let textoCotacao = document.getElementById("precobtcbrl")
      // Aqui eu passo a mesma informação para o responsivo ultilizando o mesmo procedimento
      let textoCotacaoR = document.getElementById("precobtcbrl-r")
      // Aqui acesso o em do volume transacional no dia (will)
      let textoVolume = document.getElementById("volume")
      let textoVolumeR = document.getElementById("volume-r")

      // Por ultimo eu adiciono esse elementos chamados na API pra dentro do texto
      textoCotacao.innerHTML = "R$" + parseFloat(ultimovalor).toFixed(2)
      // Aqui eu passo a mesma informação para o responsivo ultilizando o mesmo procedimento
      textoCotacaoR.innerHTML = "R$" + parseFloat(ultimovalor).toFixed(2)
      // Atribuição do valor da API no volume (will)
      textoVolume.innerHTML = "R$" + parseFloat(volumedia).toFixed(2)
      //Responsivo (will)
      textoVolumeR.innerHTML = "R$" + volumedia_split[0] + "<span>," + volumedia_split[1].substring(0,2) + "</span>"
      
  })
  //Adicionando trecho que verifica, em caso de erro no vínculo com a API, qual o tipo do erro (will)
  .catch(function(error){
    console.log(error)
  })
  // Ele faz a requisição na API a cada 1s
}, 1000)

// Aqui usei a api que tras os dados em dollar
setInterval(function(){
  fetch("https://api.binance.com/api/v1/ticker/24hr?symbol=BTCUSDT")
  .then(function(response){
      return response.json();
  })})
 
  .then(function(data){
      let ultimovalor = data.lastPrice
      let volumediausd = data.volume
      let volumediausd_split = volumediausd.split(".")
      let textoCotacaoUsd = document.getElementById("usd")
      let textoCotacaoUsdR = document.getElementById("usd-r")
      let textoVolumeDiaUsdR = document.getElementById("volumeusd-r")

      textoCotacaoUsd.innerHTML = "U$" + parseFloat(ultimovalor).toFixed(2)
      textoCotacaoUsdR.innerHTML = "U$" + parseFloat(ultimovalor).toFixed(2)
      textoVolumeDiaUsdR.innerHTML = "U$" + volumediausd_split[0] + "<span>," + volumediausd_split[1].substring(0,2) + "</span>"

  })
  .catch(function(error){
    console.log(error)
  }), 1000