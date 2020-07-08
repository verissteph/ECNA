// Nesta parte eu uso set interval para atulizar a rquisições
// API que tras a cotacao do dolar para reais
setInterval(function(){
  fetch("https://economia.awesomeapi.com.br/all/USD-BRL")
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    let cotacaoUsdBrl = data.USD.high
    let cotacao = cotacaoUsdBrl
    let cotacaoUsd = document.getElementById("cotacaoUsd")
    cotacaoUsd.innerHTML = parseFloat(cotacao)
    //console.log(cotacao)
  })
  .catch(function(error){
    console.log(error)
  })
},1000)


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
      let valorMaxFinal = data.ticker.high
      let valorMinFinal = data.ticker.low

      // aqui acesso o h1 atraves de u id que adicionei no html
      let textoCotacao = document.getElementById("precobtcbrl")
      // Aqui eu passo a mesma informação para o responsivo ultilizando o mesmo procedimento
      let textoCotacaoR = document.getElementById("precobtcbrl-r")
      
      //valor maximo na variação - ellen
      let maximoValor = document.querySelector('#maisAlto')
       maximoValor.innerText = "R$" + parseFloat(valorMaxFinal).toFixed(2);
      
       //valor minimo na variação - ellen
      let minimoValor = document.querySelector('#maisBaixo')
      minimoValor.innerHTML = "R$" + parseFloat(valorMinFinal).toFixed(2);

      // Por ultimo eu adiciono esse elementos chamados na API pra dentro do texto
      textoCotacao.innerHTML = "R$" + parseFloat(ultimovalor).toFixed(2)
      // Aqui eu passo a mesma informação para o responsivo ultilizando o mesmo procedimento
      textoCotacaoR.innerHTML = "R$" + parseFloat(ultimovalor).toFixed(2)         
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
  })
  .then(function(data){
      let ultimovalor = data.lastPrice
      let volumediausd = data.volume
      // esquema para conseguir quebrar a parte inteira e a parte decimal para o responsivo (Will)
      let volumediausd_split = volumediausd.split(".")
      let textoCotacaoUsd = document.getElementById("usd")
      let textoCotacaoUsdR = document.getElementById("usd-r")
      // Aqui acesso as tags do volume transacional no dia (will)
      let textoVolumeDiaUsdR = document.getElementById("volumeusd-r")
      let textoVolume = document.getElementById("volume")
      let textoVolumeR = document.getElementById("volume-r")
      let cotacaoUsd2 = document.getElementById("cotacaoUsd").innerText
      let volumeReais = parseFloat(cotacaoUsd2)*parseFloat(volumediausd)
      //console.log(volumeReais)
      // esquema para conseguir quebrar a parte inteira e a parte decimal para o responsivo (Will)
      let volumeReais_str = volumeReais.toString().split(".")
      //console.log(volumeReais_str)

      textoCotacaoUsd.innerHTML = "U$" + parseFloat(ultimovalor).toFixed(2)
      textoCotacaoUsdR.innerHTML = "U$" + parseFloat(ultimovalor).toFixed(2)
      textoVolumeDiaUsdR.innerHTML = "U$" + volumediausd_split[0] + "<span>," + volumediausd_split[1].substring(0,2) + "</span>"
      // Atribuição do valor da API no volume (will)
      textoVolume.innerHTML = "R$" + volumeReais.toFixed(2)
      //Responsivo (will)
      textoVolumeR.innerHTML = "R$" + volumeReais_str[0] + "<span>," + volumeReais_str[1].substring(0,2) + "</span>"

  })
  .catch(function(error){
    console.log(error);
  })
}, 1000)

