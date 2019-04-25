//THESE ARE THE VARIABLES WE WILL USE
var windspeed; //Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
var winddeg; //Wind direction, degrees (meteorological)
var temp; //Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit. 
var tempmin;
var temp;
var pressure; //Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
var humidity; //Humidity, %
var weathertext; //Group of weather parameters (Rain, Snow, Extreme etc.)
var weatherdescription; //Weather condition within the group
var cloudiness; //Cloudiness, %
var name


//LONDON
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
            temp = results.main.temp_max;
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
        $('#london').append('temp: ' + temp + '</br>');
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

        if(cloudiness >= 0 && cloudiness < 10 ) {
        $('body').append('<div class="ld_circle1-1"></div>');
        }

        if(cloudiness >= 10 && cloudiness < 20 ) {
        $('body').append('<div class="ld_circle1-2"></div>');
        }

        if(cloudiness >= 20 && cloudiness < 30 ) {
        $('body').append('<div class="ld_circle1-3"></div>');
        }
    
        if(cloudiness >= 30 && cloudiness < 40 ) {
        $('body').append('<div class="ld_circle1-4"></div>');
        }

        if(cloudiness >= 40 && cloudiness < 50 ) {
        $('body').append('<div class="ld_circle1-5"></div>');
        }

        if(cloudiness >= 50 && cloudiness < 60 ) {
        $('body').append('<div class="ld_circle1-6"></div>');
        }

        if(cloudiness >= 60 && cloudiness < 70 ) {
        $('body').append('<div class="ld_circle1-7"></div>');
        }

        if(cloudiness >= 70 && cloudiness < 80 ) {
        $('body').append('<div class="ld_circle1-8"></div>');
        }

        if(cloudiness >= 80 && cloudiness < 90 ) {
        $('body').append('<div class="ld_circle1-9"></div>');
        }

        if(cloudiness >= 90 && cloudiness <= 100 ) {
        $('body').append('<div class="ld_circle1-10"></div>');
        }

        //

        if(humidity >= 0 && humidity < 10 ) {
        $('body').append('<div class="ld_circle2-1"></div>');
        }

        if(humidity >= 10 && humidity < 20 ) {
        $('body').append('<div class="ld_circle2-2"></div>');
        }

        if(humidity >= 20 && humidity < 30 ) {
        $('body').append('<div class="ld_circle2-3"></div>');
        }

        if(humidity >= 30 && humidity < 40 ) {
        $('body').append('<div class="ld_circle2-4"></div>');
        }

        if(humidity >= 40 && humidity < 50 ) {
        $('body').append('<div class="ld_circle2-5"></div>');
        }

        if(humidity >= 50 && humidity < 60 ) {
        $('body').append('<div class="ld_circle2-6"></div>');
        }

        if(humidity >= 60 && humidity < 70 ) {
        $('body').append('<div class="ld_circle2-7"></div>');
        }

        if(humidity >= 70 && humidity < 80 ) {
        $('body').append('<div class="ld_circle2-8"></div>');
        }

        if(humidity >= 80 && humidity < 90 ) {
        $('body').append('<div class="ld_circle2-9"></div>');
        }

        if(humidity >= 90 && humidity <= 100 ) {
        $('body').append('<div class="ld_circle2-10"></div>');
        }

        //

        if(pressure >= 990 && pressure < 994 ) {
        $('body').append('<div class="ld_circle3-1"></div>');
        }

        if(pressure >= 994 && pressure < 998 ) {
        $('body').append('<div class="ld_circle3-2"></div>');
        }

        if(pressure >= 998 && pressure < 1002 ) {
        $('body').append('<div class="ld_circle3-3"></div>');
        }

        if(pressure >= 1002 && pressure < 1006 ) {
        $('body').append('<div class="ld_circle3-4"></div>');
        }

        if(pressure >= 1006 && pressure < 1010 ) {
        $('body').append('<div class="ld_circle3-5"></div>');
        }

        if(pressure >= 1010 && pressure < 1014 ) {
        $('body').append('<div class="ld_circle3-6"></div>');
        }

        if(pressure >= 1014 && pressure < 1018 ) {
        $('body').append('<div class="ld_circle3-7"></div>');
        }

        if(pressure >= 1018 && pressure < 1022 ) {
        $('body').append('<div class="ld_circle3-8"></div>');
        }

        if(pressure >= 1022 && pressure < 1026 ) {
        $('body').append('<div class="ld_circle3-9"></div>');
        }

        if(pressure >= 1026 && pressure <= 1030 ) {
        $('body').append('<div class="ld_circle3-10"></div>');
        }

        //

        if(windspeed >= 0 && windspeed < 1 ) {
        $('body').append('<div class="ld_circle4-1"></div>');
        }

        if(windspeed >= 1 && windspeed < 2 ) {
        $('body').append('<div class="ld_circle4-2"></div>');
        }

        if(windspeed >= 2 && windspeed < 3 ) {
        $('body').append('<div class="ld_circle4-3"></div>');
        }

        if(windspeed >= 3 && windspeed < 4 ) {
        $('body').append('<div class="ld_circle4-4"></div>');
        }

        if(windspeed >= 4 && windspeed < 5 ) {
        $('body').append('<div class="ld_circle4-5"></div>');
        }

        if(windspeed >= 5 && windspeed < 7 ) {
        $('body').append('<div class="ld_circle4-6"></div>');
        }

        if(windspeed >= 7 && windspeed < 10 ) {
        $('body').append('<div class="ld_circle4-7"></div>');
        }

        if(windspeed >= 10 && windspeed < 13 ) {
        $('body').append('<div class="ld_circle4-8"></div>');
        }

        if(windspeed >= 13 && windspeed < 16 ) {
        $('body').append('<div class="ld_circle4-9"></div>');
        }

        if(windspeed >= 16 && windspeed < 19 ) {
        $('body').append('<div class="ld_circle4-10"></div>');
        }

        if(windspeed >= 19 && windspeed < 21 ) {
        $('body').append('<div class="ld_circle4-11"></div>');
        }

        if(windspeed >= 21 && windspeed < 24 ) {
        $('body').append('<div class="ld_circle4-12"></div>');
        }

        if(windspeed >= 24 && windspeed < 27 ) {
        $('body').append('<div class="ld_circle4-13"></div>');
        }

        if(windspeed >= 27 && windspeed <= 30 ) {
        $('body').append('<div class="ld_circle4-14"></div>');
        }

        //
        





        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   
});


//NEW YORK
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
            temp = results.main.temp_max;
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
        $('#newyork').append('temp: ' + temp + '</br>');
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

        if(cloudiness >= 0 && cloudiness < 10 ) {
        $('body').append('<div class="ny_circle1-1"></div>');
        }

        if(cloudiness >= 10 && cloudiness < 20 ) {
        $('body').append('<div class="ny_circle1-2"></div>');
        }

        if(cloudiness >= 20 && cloudiness < 30 ) {
        $('body').append('<div class="ny_circle1-3"></div>');
        }
    
        if(cloudiness >= 30 && cloudiness < 40 ) {
        $('body').append('<div class="ny_circle1-4"></div>');
        }

        if(cloudiness >= 40 && cloudiness < 50 ) {
        $('body').append('<div class="ny_circle1-5"></div>');
        }

        if(cloudiness >= 50 && cloudiness < 60 ) {
        $('body').append('<div class="ny_circle1-6"></div>');
        }

        if(cloudiness >= 60 && cloudiness < 70 ) {
        $('body').append('<div class="ny_circle1-7"></div>');
        }

        if(cloudiness >= 70 && cloudiness < 80 ) {
        $('body').append('<div class="ny_circle1-8"></div>');
        }

        if(cloudiness >= 80 && cloudiness < 90 ) {
        $('body').append('<div class="ny_circle1-9"></div>');
        }

        if(cloudiness >= 90 && cloudiness <= 100 ) {
        $('body').append('<div class="ny_circle1-10"></div>');
        }

        //

        if(humidity >= 0 && humidity < 10 ) {
        $('body').append('<div class="ny_circle2-1"></div>');
        }

        if(humidity >= 10 && humidity < 20 ) {
        $('body').append('<div class="ny_circle2-2"></div>');
        }

        if(humidity >= 20 && humidity < 30 ) {
        $('body').append('<div class="ny_circle2-3"></div>');
        }

        if(humidity >= 30 && humidity < 40 ) {
        $('body').append('<div class="ny_circle2-4"></div>');
        }

        if(humidity >= 40 && humidity < 50 ) {
        $('body').append('<div class="ny_circle2-5"></div>');
        }

        if(humidity >= 50 && humidity < 60 ) {
        $('body').append('<div class="ny_circle2-6"></div>');
        }

        if(humidity >= 60 && humidity < 70 ) {
        $('body').append('<div class="ny_circle2-7"></div>');
        }

        if(humidity >= 70 && humidity < 80 ) {
        $('body').append('<div class="ny_circle2-8"></div>');
        }

        if(humidity >= 80 && humidity < 90 ) {
        $('body').append('<div class="ny_circle2-9"></div>');
        }

        if(humidity >= 90 && humidity <= 100 ) {
        $('body').append('<div class="ny_circle2-10"></div>');
        }

        //

        if(pressure >= 990 && pressure < 994 ) {
        $('body').append('<div class="ny_circle3-1"></div>');
        }

        if(pressure >= 994 && pressure < 998 ) {
        $('body').append('<div class="ny_circle3-2"></div>');
        }

        if(pressure >= 998 && pressure < 1002 ) {
        $('body').append('<div class="ny_circle3-3"></div>');
        }

        if(pressure >= 1002 && pressure < 1006 ) {
        $('body').append('<div class="ny_circle3-4"></div>');
        }

        if(pressure >= 1006 && pressure < 1010 ) {
        $('body').append('<div class="ny_circle3-5"></div>');
        }

        if(pressure >= 1010 && pressure < 1014 ) {
        $('body').append('<div class="ny_circle3-6"></div>');
        }

        if(pressure >= 1014 && pressure < 1018 ) {
        $('body').append('<div class="ny_circle3-7"></div>');
        }

        if(pressure >= 1018 && pressure < 1022 ) {
        $('body').append('<div class="ny_circle3-8"></div>');
        }

        if(pressure >= 1022 && pressure < 1026 ) {
        $('body').append('<div class="ny_circle3-9"></div>');
        }

        if(pressure >= 1026 && pressure <= 1030 ) {
        $('body').append('<div class="ny_circle3-10"></div>');
        }

        //

        if(windspeed >= 0 && windspeed < 1 ) {
        $('body').append('<div class="ny_circle4-1"></div>');
        }

        if(windspeed >= 1 && windspeed < 2 ) {
        $('body').append('<div class="ny_circle4-2"></div>');
        }

        if(windspeed >= 2 && windspeed < 3 ) {
        $('body').append('<div class="ny_circle4-3"></div>');
        }

        if(windspeed >= 3 && windspeed < 4 ) {
        $('body').append('<div class="ny_circle4-4"></div>');
        }

        if(windspeed >= 4 && windspeed < 5 ) {
        $('body').append('<div class="ny_circle4-5"></div>');
        }

        if(windspeed >= 5 && windspeed < 7 ) {
        $('body').append('<div class="ny_circle4-6"></div>');
        }

        if(windspeed >= 7 && windspeed < 10 ) {
        $('body').append('<div class="ny_circle4-7"></div>');
        }

        if(windspeed >= 10 && windspeed < 13 ) {
        $('body').append('<div class="ny_circle4-8"></div>');
        }

        if(windspeed >= 13 && windspeed < 16 ) {
        $('body').append('<div class="ny_circle4-9"></div>');
        }

        if(windspeed >= 16 && windspeed < 19 ) {
        $('body').append('<div class="ny_circle4-10"></div>');
        }

        if(windspeed >= 19 && windspeed < 21 ) {
        $('body').append('<div class="ny_circle4-11"></div>');
        }

        if(windspeed >= 21 && windspeed < 24 ) {
        $('body').append('<div class="ny_circle4-12"></div>');
        }

        if(windspeed >= 24 && windspeed < 27 ) {
        $('body').append('<div class="ny_circle4-13"></div>');
        }

        if(windspeed >= 27 && windspeed <= 30 ) {
        $('body').append('<div class="ny_circle4-14"></div>');
        }

        //

        if(tempmax >= 0 && tempmax < 2 ) {
        $('body').append('');
        }

        if(tempmax >= 2 && tempmax < 4 ) {
        $('body').append('');
        }

        if(tempmax >= 4 && tempmax < 6 ) {
        $('body').append('');
        }

        if(tempmax >= 6 && tempmax < 8 ) {
        $('body').append('');
        }

        if(tempmax >= 8 && tempmax < 10 ) {
        $('body').append('');
        }

        if(tempmax >= 10 && tempmax < 12 ) {
        $('body').append('');
        }

        if(tempmax >= 12 && tempmax < 14 ) {
        $('body').append('');
        }

        if(tempmax >= 14 && tempmax < 16 ) {
        $('body').append('');
        }

        if(tempmax >= 16 && tempmax < 18 ) {
        $('body').append('');
        }

        if(tempmax >= 18 && tempmax < 20 ) {
        $('body').append('');
        }

        if(tempmax >= 20 && tempmax < 22 ) {
        $('body').append('');
        }

        if(tempmax >= 22 && tempmax < 24 ) {
        $('body').append('');
        }

        if(tempmax >= 24 && tempmax < 26 ) {
        $('body').append('');
        }

        if(tempmax >= 26 && tempmax < 28 ) {
        $('body').append('');
        }

        if(tempmax >= 28 && tempmax < 30 ) {
        $('body').append('');
        }

        if(tempmax >= 30 && tempmax < 32 ) {
        $('body').append('');
        }

        if(tempmax >= 34 && tempmax < 36 ) {
        $('body').append('');
        }

        if(tempmax >= 36 && tempmax < 38 ) {
        $('body').append('');
        }

        if(tempmax >= 38 && tempmax < 40 ) {
        $('body').append('');
        }

        //

        if(tempmin >= 0 && tempmin < 2 ) {
        $('body').append('');
        }

        if(tempmin >= 2 && tempmin < 4 ) {
        $('body').append('');
        }

        if(tempmin >= 4 && tempmin < 6 ) {
        $('body').append('');
        }

        if(tempmin >= 6 && tempmin < 8 ) {
        $('body').append('');
        }

        if(tempmin >= 8 && tempmin < 10 ) {
        $('body').append('');
        }

        if(tempmin >= 10 && tempmin < 12 ) {
        $('body').append('');
        }

        if(tempmin >= 12 && tempmin < 14 ) {
        $('body').append('');
        }

        if(tempmin >= 14 && tempmin < 16 ) {
        $('body').append('<p style="color:green;>');
        }

        if(tempmin >= 16 && tempmin < 18 ) {
        $('body').append('');
        }

        if(tempmin >= 18 && tempmin < 20 ) {
        $('body').append('');
        }

        if(tempmin >= 20 && tempmin < 22 ) {
        $('body').append('');
        }

        if(tempmin >= 22 && tempmin < 24 ) {
        $('body').append('');
        }

        if(tempmin >= 24 && tempmin < 26 ) {
        $('body').append('');
        }

        if(tempmin >= 26 && tempmin < 28 ) {
        $('body').append('');
        }

        if(tempmin >= 28 && tempmin < 30 ) {
        $('body').append('');
        }

        if(tempmin >= 30 && tempmin < 32 ) {
        $('body').append('');
        }

        if(tempmin >= 34 && tempmin < 36 ) {
        $('body').append('');
        }

        if(tempmin >= 36 && tempmin < 38 ) {
        $('body').append('');
        }

        if(tempmin >= 38 && tempmin < 40 ) {
        $('body').append('');
        }

        //

        if(temp >= 0 && temp < 2 ) {
        $('body').append('');
        }

        if(temp >= 2 && temp < 4 ) {
        $('body').append('');
        }

        if(temp >= 4 && temp < 6 ) {
        $('body').append('');
        }

        if(temp >= 6 && temp < 8 ) {
        $('body').append('');
        }

        if(temp >= 8 && temp < 10 ) {
        $('body').append('');
        }

        if(temp >= 10 && temp < 12 ) {
        $('body').append('');
        }

        if(temp >= 12 && temp < 14 ) {
        $('body').append('');
        }

        if(temp >= 14 && temp < 16 ) {
        $('body').append('');
        }

        if(temp >= 16 && temp < 18 ) {
        $('body').append('');
        }

        if(temp >= 18 && temp < 20 ) {
        $('body').append('');
        }

        if(temp >= 20 && temp < 22 ) {
        $('body').append('');
        }

        if(temp >= 22 && temp < 24 ) {
        $('body').append('');
        }

        if(temp >= 24 && temp < 26 ) {
        $('body').append('');
        }

        if(temp >= 26 && temp < 28 ) {
        $('body').append('');
        }

        if(temp >= 28 && temp < 30 ) {
        $('body').append('');
        }

        if(temp >= 30 && temp < 32 ) {
        $('body').append('');
        }

        if(temp >= 34 && temp < 36 ) {
        $('body').append('');
        }

        if(temp >= 36 && temp < 38 ) {
        $('body').append('');
        }

        if(temp >= 38 && temp < 40 ) {
        $('body').append('');
        }

        //END OF MYWEATHERINTERPRETATION FUNCTION


    }   


});


//SEOUL
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
            temp = results.main.temp_max;
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
        $('#seoul').append('temp: ' + temp + '</br>');
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

//TOKYO
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
            temp = results.main.temp_max;
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
        $('#tokyo').append('temp: ' + temp + '</br>');
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