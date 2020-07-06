var burl = 'https://api.binance.com';
var query = '/api/v1/ticker/24hr';

query += '?symbol=BTCUSDT';

var url = burl + query;

console.log(url)

var ourRequest = new XMLHttpRequest();

ourRequest.open('GET',url,true);

/**
 * Tentando resolver o problema no git
 */

ourRequest.onload = function () {
  const obj = JSON.parse(ourRequest.responseText);
  var btcLastPrice = parseFloat(obj.lastPrice).toFixed(2);

  preco = document.getElementById('precobtcbrl')
  preco.innerHTML = 'R$' + (btcLastPrice * 5).toFixed(2)

  // console.log(ourRequest.responseText);
}

ourRequest.send()

setInterval(function() {
    ourRequest.open('GET',url,true);
    ourRequest.send()
}, 1000);