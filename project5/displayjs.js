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



$(document).ready(function(){


//LONDON
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
        $('#name').append('Name: ' + name + '</br>');
        $('#london').append(' ');
        $('#london').append('</br>');
        $('#london').append(' ');
        $('#london').append('Weathertext: ' + weathertext + '</br>');
        $('#london').append(' ');
        $('#london').append('Weatherdescription: ' + weatherdescription + '</br>');
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
        $('#london').append('Pressure: ' + pressure + '</br>');
        $('#london').append(' ');
        $('#london').append('Humidity: ' + humidity + '</br>'); 
        $('#london').append(' ');      
        $('#london').append('Cloudiness: ' + cloudiness + '</br>');
        
    

        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   


});



$(document).ready(function(){

//NEW YORK

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
        $('#name').append('Name: ' + name + '</br>');
        $('#newyork').append(' ');
        $('#newyork').append('</br>');
        $('#newyork').append(' ');
        $('#newyork').append('Weathertext: ' + weathertext + '</br>');
        $('#newyork').append(' ');
        $('#newyork').append('Weatherdescription: ' + weatherdescription + '</br>');
        $('#newyork').append(' ');
        $('#newyork').append('Temp: ' + temp + '</br>');
        $('#newyork').append(' ');
        $('#newyork').append('Tempmin: ' + tempmin + '</br>');
        $('#newyork').append(' ');
        $('#newyork').append('Tempmax: ' + tempmax + '</br>');
        $('#newyork').append(' ');
        $('#newyork').append('Windspeed: ' + windspeed + '</br>');
        $('#newyork').append(' ');
        $('#newyork').append('Winddeg: ' + winddeg + '</br>');
        $('#newyork').append(' ');
        $('#newyork').append('Pressure: ' + pressure + '</br>');
        $('#newyork').append(' ');
        $('#newyork').append('Humidity: ' + humidity + '</br>'); 
        $('#newyork').append(' ');      
        $('#newyork').append('Cloudiness: ' + cloudiness + '</br>');

        if(cloudiness >= 0 && cloudiness < 20 ) {
        $('body').append('<div class="ny-circle1"><div class="ny-circle1-1"><div class="ny-circle1-2"></div></div></div>');
        }
        
        if(cloudiness >= 0 && cloudiness < 20 ) {
        $('body').append('<div class="ny-circle1"><div class="ny-circle1-1"><div class="ny-circle1-2"></div></div></div>');
        }
    

        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   


});


$(document).ready(function(){


//SEOUL
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
        $('#name').append('Name: ' + name + '</br>');
        $('#seoul').append('');
        $('#seoul').append('</br>');
        $('#seoul').append(' ');
        $('#seoul').append('Weathertext: ' + weathertext + '</br>');
        $('#seoul').append(' ');
        $('#seoul').append('Weatherdescription: ' + weatherdescription + '</br>');
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
        $('#seoul').append('Pressure: ' + pressure + '</br>');
        $('#seoul').append(' ');
        $('#seoul').append('Humidity: ' + humidity + '</br>');
        $('#seoul').append(' ');   
        $('#seoul').append('Cloudiness: ' + cloudiness + '</br>');


    

        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   


});


$(document).ready(function(){


//TOKYO
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
        $('#name').append('Name: ' + name + '</br>');
        $('#tokyo').append(" ");
        $('#tokyo').append('</br>');
        $('#tokyo').append(" ");
        $('#tokyo').append('Weathertext: ' + weathertext + '</br>');
        $('#tokyo').append(" ");
        $('#tokyo').append('Weatherdescription: ' + weatherdescription + '</br>');
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
        $('#tokyo').append('Pressure: ' + pressure + '</br>');
        $('#tokyo').append(" ");
        $('#tokyo').append('Humidity: ' + humidity + '</br>');
        $('#tokyo').append(" ");  
        $('#tokyo').append('Cloudiness: ' + cloudiness + '</br>');

    

        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   


});