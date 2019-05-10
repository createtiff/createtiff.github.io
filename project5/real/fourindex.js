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
        
        $('#newyork').append('Humidity &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ' + humidity + '%' + '</br>');    
        $('#newyork').append('Cloudiness &nbsp; &nbsp; &nbsp; ' + cloudiness + '%' + '</br>');
        $('#newyork').append('Wind &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;' + windspeed + ' m/s' );
        $('#newyork').append(' ');
        $('#newyork').append(winddeg + '&deg;' + '</br>');
        $('#newyork').append('Temperature &nbsp;' + '&#x229a; ' + temp + '&#x2103;' + '</br>');
        $('#newyork').append('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ' + '&#x2295; ' + tempmax + '&#8451;' + '</br>');
        $('#newyork').append('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ' + '&#x2296; ' + tempmin + '&#x2103;' + '</br></br>');
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
        $('#london-humdity-11').append('Humidity &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ' + humidity + '%' + '</br>'); 
        $('#london-humdity-11').append(' ');      
        $('#london-humdity-11').append('Cloudiness &nbsp; &nbsp; &nbsp; ' + cloudiness + '%' + '</br>');
        $('#london-humdity-11').append('Wind &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;' + windspeed + ' m/s' );
        $('#london-humdity-11').append(' ');
        $('#london-humdity-11').append(winddeg + '&deg;' + '</br>');
        $('#london-humdity-11').append('Temperature &nbsp;' + '&#x229a; ' + temp + '&#x2103;' + '</br>');
        $('#london-humdity-11').append('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ' + '&#x2295; ' + tempmax + '&#8451;' + '</br>');
        $('#london-humdity-11').append(' ');
        $('#london-humdity-11').append('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ' + '&#x2296; ' + tempmin + '&#x2103;' + '</br></br>');
        $('#london-humdity-11').append(' ');
        

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
        $('#seoul').append('Humidity &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ' + humidity + '%' + '</br>'); 
        $('#seoul').append(' ');      
        $('#seoul').append('Cloudiness &nbsp; &nbsp; &nbsp; ' + cloudiness + '%' + '</br>');
        $('#seoul').append('Wind &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;' + windspeed + ' m/s' );
        $('#seoul').append(' ');
        $('#seoul').append(winddeg + '&deg;' + '</br>');
        $('#seoul').append('Temperature &nbsp;' + '&#x229a; ' + temp + '&#x2103;' + '</br>');
        $('#seoul').append('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ' + '&#x2295; ' + tempmax + '&#8451;' + '</br>');
        $('#seoul').append(' ');
        $('#seoul').append('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ' + '&#x2296; ' + tempmin + '&#x2103;' + '</br></br>');
        $('#seoul').append(' ');


    

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
        $('#tokyo').append('Humidity &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ' + humidity + '%' + '</br>');    
        $('#tokyo').append('Cloudiness &nbsp; &nbsp; &nbsp; ' + cloudiness + '%' + '</br>');
        $('#tokyo').append('Wind &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;' + windspeed + ' m/s' );
        $('#tokyo').append(' ');
        $('#tokyo').append(winddeg + '&deg;' + '</br>');
        $('#tokyo').append('Temperature &nbsp;' + '&#x229a; ' + temp + '&#x2103;' + '</br>');
        $('#tokyo').append('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ' + '&#x2295; ' + tempmax + '&#8451;' + '</br>');
        $('#tokyo').append('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ' + '&#x2296; ' + tempmin + '&#x2103;' + '</br></br>');
        //END OF MYWEATHERINTERPRETATION FUNCTION

        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   
});



$(document).ready(function(){
  $(".nametokyo").click(function(){
    $("#tokyo").toggle();
    });
});