//THESE ARE THE VARIABLES WE WILL USE
var windspeed; //Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
var winddeg; //Wind direction, degrees (meteorological)
var temp; //Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit. 
var tempmin;
var tempmax;
var pressure; //Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
var humidity; //Humidity, %
var weathertext; //Group of weather parameters (Rain, Snow, Extreme etc.)
var weatherdescription; //Weather condition within the group
var cloudiness; //Cloudiness, %
var name

/////NEW YORK

$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=5128581&units=metric&APPID=188e55f89ae698f5c272ba31302b4705', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            name = results.name;
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            tempc = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation();
            }
    });



    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH
        
        $('#newyork').append(weathertext + '</br>');
        $('#newyork').append(' ');
        $('#newyork').append('Temp in &#8451;: ' + tempc + '</br>');
        $('#newyork').append(' ');
        $('#newyork').append('Tempmin: ' + tempmin + '</br>');
        $('#newyork').append(' ');
        $('#newyork').append('Tempmax: ' + tempmax + '</br>');
        $('#newyork').append(' ');
        $('#newyork').append('Windspeed: ' + windspeed + '</br>');
        $('#newyork').append(' ');
        $('#newyork').append('Winddeg: ' + winddeg + '</br>');
        $('#newyork').append(' ');
        $('#newyork').append('Humidity: ' + humidity + '</br>'); 
        $('#newyork').append(' ');      
        $('#newyork').append('Cloudiness: ' + cloudiness + '</br>');
        //END OF MYWEATHERINTERPRETATION FUNCTION
        }   
});



/////LONDON

$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=2643743&units=metric&APPID=188e55f89ae698f5c272ba31302b4705', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            name = results.name;
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation();

        }
    });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        

        //JUST SEEING IF THE VALUES COME THROUGH
        $('#london').append(weathertext + '</br>');
        $('#london').append(' ');
        $('#london').append('Temp: ' + temp + '</br>');
        $('#london').append(' ');
        $('#london').append('Tempmin: ' + tempmin + '</br>');
        $('#london').append(' ');
        $('#london').append('Tempmax: ' + tempmax + '</br>');
        $('#london').append(' ');
        $('#london').append('Windspeed: ' + windspeed + '</br>');
        $('#london').append(' ');
        $('#london').append('Winddeg: ' + winddeg + '</br>');
        $('#london').append(' ');
        $('#london').append('Humidity: ' + humidity + '</br>'); 
        $('#london').append(' ');      
        $('#london').append('Cloudiness: ' + cloudiness + '</br>');

        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   


});

$(document).ready(function(){
  $(".namelondon").click(function(){
    $("#london").toggle();
    });
});


/////SEOUL
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1835848&units=metric&APPID=188e55f89ae698f5c272ba31302b4705', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            name = results.name;
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation();

        }
    });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH
        $('#seoul').append(weathertext + '</br>');
        $('#seoul').append(' ');
        $('#seoul').append('Temp: ' + temp + '</br>');
        $('#seoul').append(' ');
        $('#seoul').append('Tempmin: ' + tempmin + '</br>');
        $('#seoul').append(' ');
        $('#seoul').append('Tempmax: ' + tempmax + '</br>');
        $('#seoul').append(' ');
        $('#seoul').append('Windspeed: ' + windspeed + '</br>');
        $('#seoul').append(' ');
        $('#seoul').append('Winddeg: ' + winddeg + '</br>');
        $('#seoul').append(' ');
        $('#seoul').append('Humidity: ' + humidity + '</br>');
        $('#seoul').append(' ');   
        $('#seoul').append('Cloudiness: ' + cloudiness + '</br>');


    

        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   


});

$(document).ready(function(){
  $(".nameseoul").click(function(){
    $("#seoul").toggle();
    });
});


/////TOKYO
$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1850147&units=metric&APPID=188e55f89ae698f5c272ba31302b4705', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            name = results.name;
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation();

        }
    });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH
        $('#tokyo').append(weathertext + '</br>');
        $('#tokyo').append(" ");
        $('#tokyo').append('Temp: ' + temp + '</br>');
        $('#tokyo').append(" ");
        $('#tokyo').append('Tempmin: ' + tempmin + '</br>');
        $('#tokyo').append(" ");
        $('#tokyo').append('Tempmax: ' + tempmax + '</br>');
        $('#tokyo').append(" ");
        $('#tokyo').append('Windspeed: ' + windspeed + '</br>');
        $('#tokyo').append(" ");
        $('#tokyo').append('Winddeg: ' + winddeg + '</br>');
        $('#tokyo').append(" ");
        $('#tokyo').append('Humidity: ' + humidity + '</br>');
        $('#tokyo').append(" ");  
        $('#tokyo').append('Cloudiness: ' + cloudiness + '</br>');

        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   
});



$(document).ready(function(){
  $(".nametokyo").click(function(){
    $("#tokyo").toggle();
    });
});