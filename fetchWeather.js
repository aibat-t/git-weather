fetch('https://api.openweathermap.org/data/2.5/weather?id=1538317&appid=ec8053384f1bb6a280e54c7d8a399551')
    .then(function (resp) { 
        return resp.json() 
    })
    .then(function (data) {
        console.log(data);
        document.querySelector('.package-name').textContent = data.name;
        document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273.15) + '&deg;';
        document.querySelector('.disclaimer').textContent = data.weather[0].description;
        //http://openweathermap.org/img/wn/04d@2x.png
        document.querySelector('.features li').innerHTML = `<img src= "http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
        
    })
    .catch(function (){

    })
