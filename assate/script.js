const search = document.querySelector(".searchBox button")
//var api ="https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=3623f28106c0768d3dd0c0c773617d27"
//console.log(api)
const APIkey = "3623f28106c0768d3dd0c0c773617d27";
//var geoapi = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=3623f28106c0768d3dd0c0c773617d27";
//console.log(geoapi)







search.addEventListener("click", () => {
    const city = document.querySelector(".searchBox input").value;
    if(city !== "") {
        geo(city);
    }
})

function geo(city) {
    var geoapi = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=3623f28106c0768d3dd0c0c773617d27`;
        // return
        fetch(geoapi).then( function(response){
            return response.json()
        })
        .then(function (data) {
            console.log(data [0])
            getWeather(data [0])
        })
        
}


function getWeather(location) {
    var { lat, lon} = location;
    console.log(lat, lon)
    var city = location.name
    let apiurl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}&units=imperial`
   
    fetch(apiurl).then( function(response){
        return response.json()
    })
    .then(function (data) {
        console.log(data)

        for (let i = 0; i < 5 ; i++) {
            var temp = document.querySelector(`#temp${i+1}`);
            var wind = document.querySelector(`#wind${i+1}`);
            var humid = document.querySelector(`#humid${i+1}`);
            var icon = document.querySelector(`#icon${i+1}`);
            var uvi = document.querySelector(`#uvi${i+1}`);
            temp.textContent = data.list[i*8].main.temp;
            wind.textContent = data.list[i*8].wind.speed;
            humid.textContent = data.list[i*8].main.humidity;
            //icon.textContent = data.list[i*8].main
            //uvi.textContent = data.list[i*8].main.;
         
         }
    
    })
  
    
}
