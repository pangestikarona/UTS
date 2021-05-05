
var city ="Jakarta";

$.getJSON(
    "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=4ee2d359e0a442e65c66e545b8d67e4b", 
    function(data){
        console.log(data);

        var icon = 
        "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        var temp = Math.floor(data.main.temp);
        var weather = data.weather[0].main;

        $('.icon').attr('src', icon);
        $('.temp').append(temp);
        $('.weather').append(weather);
    
});

