var burl = 'https://api.binance.com';
var query = '/api/v1/ticker/24hr';

query += '?symbol=BTCUSDT';

var url = burl + query;

var historicoPrecos = [];
// var historicoPrecos = [1, 2, 3, 4]

var segundos = []
// var segundos = ['a', 'b', 'c', 'd']


setInterval( () => {
  fetch(url)
  .then( (response) => {
    var resposta = response.json();
    return resposta;
  })
  .then((data) => {
    let preco = data.lastPrice;
    historicoPrecos.push(preco);
    segundos.push('');
    console.log(historicoPrecos)
    console.log(segundos)
  })
}, 1000);

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: segundos,
        datasets: [{
            label: 'Bitcoin - Dollar',
            backgroundColor: '#8C00FF',
            borderColor: 'rgb(0, 0, 0, 0.5)',
            data: historicoPrecos
        }]
    },
    // Configuration options go here
    options: { 
      scales: { 
        yAxes: [{ 
          ticks: { 
            beginAtZero: false 
          } 
        }] 
      } 
    } 
});

setInterval( () => {
  chart.update()
}, 1000);