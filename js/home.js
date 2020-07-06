var burl = 'https://api.binance.com';
var query = '/api/v1/ticker/24hr';

query += '?symbol=BTCUSDT';

var url = burl + query;

var ourRequest = new XMLHttpRequest();

ourRequest.open('GET',url,true);

ourRequest.onload = function () {
  const obj = JSON.parse(ourRequest.responseText);
  var btcLastPrice = parseFloat(obj.lastPrice).toFixed(2);

  // preco

  let preco = document.getElementById("precobtcbrl")
  preco.innerHTML = 'R$' + (btcLastPrice * 5.35).toFixed(2)
  
  let precoRespontivo = document.getElementById('precobtcbrl-r')
  precoRespontivo.innerHTML = 'R$' + (btcLastPrice * 5.35).toFixed(2)

  let precoUsd = document.getElementById('usd')
  precoUsd.innerHTML = 'U$' + btcLastPrice

  // Mais alto

  var precoMaisAlto = parseFloat(obj.highPrice).toFixed(2);

  let MaisAlto = document.getElementById("maisAlto")
  MaisAlto.innerHTML = 'R$' + (precoMaisAlto * 5.35).toFixed(2)

  let MaisAltoR = document.getElementById("maisAlto-r")
  MaisAltoR.innerHTML = 'R$' + (precoMaisAlto * 5.35).toFixed(2)

  // Mais Baixo

  var precoMaisBaixo = parseFloat(obj.lowPrice).toFixed(2);
  
  let MaisBaixo = document.getElementById("maisBaixo")
  MaisBaixo.innerHTML = 'R$' + (precoMaisBaixo * 5.35).toFixed(2)

  let MaisBaixoR = document.getElementById("maisBaixo-r")
  MaisBaixoR.innerHTML = 'R$' + (precoMaisBaixo * 5.35).toFixed(2)

  // volume    
  var volume = parseFloat(obj.volume).toFixed(2);
  
  let volumeElemeto = document.getElementById("volume")
  volumeElemeto.innerHTML = 'U$' + volume
  
  let volumeElemetoR = document.getElementById("volume-r")
  volumeElemetoR.innerHTML = 'U$' + volume

}

ourRequest.send()

setInterval(function() {
    ourRequest.open('GET',url,true);
    ourRequest.send()
}, 1000);