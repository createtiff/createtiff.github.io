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


        if(cloudiness >= 0 && cloudiness < 10 ) {
        $('body').append('<div class="sl_circle1-1"></div>');
        }

        if(cloudiness >= 10 && cloudiness < 20 ) {
        $('body').append('<div class="sl_circle1-2"></div>');
        }

        if(cloudiness >= 20 && cloudiness < 30 ) {
        $('body').append('<div class="sl_circle1-3"></div>');
        }
    
        if(cloudiness >= 30 && cloudiness < 40 ) {
        $('body').append('<div class="sl_circle1-4"></div>');
        }

        if(cloudiness >= 40 && cloudiness < 50 ) {
        $('body').append('<div class="sl_circle1-5"></div>');
        }

        if(cloudiness >= 50 && cloudiness < 60 ) {
        $('body').append('<div class="sl_circle1-6"></div>');
        }

        if(cloudiness >= 60 && cloudiness < 70 ) {
        $('body').append('<div class="sl_circle1-7"></div>');
        }

        if(cloudiness >= 70 && cloudiness < 80 ) {
        $('body').append('<div class="sl_circle1-8"></div>');
        }

        if(cloudiness >= 80 && cloudiness < 90 ) {
        $('body').append('<div class="sl_circle1-9"></div>');
        }

        if(cloudiness >= 90 && cloudiness <= 100 ) {
        $('body').append('<div class="sl_circle1-10"></div>');
        }

        //

        if(humidity >= 0 && humidity < 10 ) {
        $('body').append('<div class="sl_circle2-1"></div>');
        }

        if(humidity >= 10 && humidity < 20 ) {
        $('body').append('<div class="sl_circle2-2"></div>');
        }

        if(humidity >= 20 && humidity < 30 ) {
        $('body').append('<div class="sl_circle2-3"></div>');
        }

        if(humidity >= 30 && humidity < 40 ) {
        $('body').append('<div class="sl_circle2-4"></div>');
        }

        if(humidity >= 40 && humidity < 50 ) {
        $('body').append('<div class="sl_circle2-5"></div>');
        }

        if(humidity >= 50 && humidity < 60 ) {
        $('body').append('<div class="sl_circle2-6"></div>');
        }

        if(humidity >= 60 && humidity < 70 ) {
        $('body').append('<div class="sl_circle2-7"></div>');
        }

        if(humidity >= 70 && humidity < 80 ) {
        $('body').append('<div class="sl_circle2-8"></div>');
        }

        if(humidity >= 80 && humidity < 90 ) {
        $('body').append('<div class="sl_circle2-9"></div>');
        }

        if(humidity >= 90 && humidity <= 100 ) {
        $('body').append('<div class="sl_circle2-10"></div>');
        }

        //

        if(pressure >= 990 && pressure < 994 ) {
        $('body').append('<div class="sl_circle3-1"></div>');
        }

        if(pressure >= 994 && pressure < 998 ) {
        $('body').append('<div class="sl_circle3-2"></div>');
        }

        if(pressure >= 998 && pressure < 1002 ) {
        $('body').append('<div class="sl_circle3-3"></div>');
        }

        if(pressure >= 1002 && pressure < 1006 ) {
        $('body').append('<div class="sl_circle3-4"></div>');
        }

        if(pressure >= 1006 && pressure < 1010 ) {
        $('body').append('<div class="sl_circle3-5"></div>');
        }

        if(pressure >= 1010 && pressure < 1014 ) {
        $('body').append('<div class="sl_circle3-6"></div>');
        }

        if(pressure >= 1014 && pressure < 1018 ) {
        $('body').append('<div class="sl_circle3-7"></div>');
        }

        if(pressure >= 1018 && pressure < 1022 ) {
        $('body').append('<div class="sl_circle3-8"></div>');
        }

        if(pressure >= 1022 && pressure < 1026 ) {
        $('body').append('<div class="sl_circle3-9"></div>');
        }

        if(pressure >= 1026 && pressure <= 1030 ) {
        $('body').append('<div class="sl_circle3-10"></div>');
        }

        //

        if(windspeed >= 0 && windspeed < 1 ) {
        $('body').append('<div class="sl_circle4-1"></div>');
        }

        if(windspeed >= 1 && windspeed < 2 ) {
        $('body').append('<div class="sl_circle4-2"></div>');
        }

        if(windspeed >= 2 && windspeed < 3 ) {
        $('body').append('<div class="sl_circle4-3"></div>');
        }

        if(windspeed >= 3 && windspeed < 4 ) {
        $('body').append('<div class="sl_circle4-4"></div>');
        }

        if(windspeed >= 4 && windspeed < 5 ) {
        $('body').append('<div class="sl_circle4-5"></div>');
        }

        if(windspeed >= 5 && windspeed < 7 ) {
        $('body').append('<div class="sl_circle4-6"></div>');
        }

        if(windspeed >= 7 && windspeed < 10 ) {
        $('body').append('<div class="sl_circle4-7"></div>');
        }

        if(windspeed >= 10 && windspeed < 13 ) {
        $('body').append('<div class="sl_circle4-8"></div>');
        }

        if(windspeed >= 13 && windspeed < 16 ) {
        $('body').append('<div class="sl_circle4-9"></div>');
        }

        if(windspeed >= 16 && windspeed < 19 ) {
        $('body').append('<div class="sl_circle4-10"></div>');
        }

        if(windspeed >= 19 && windspeed < 21 ) {
        $('body').append('<div class="sl_circle4-11"></div>');
        }

        if(windspeed >= 21 && windspeed < 24 ) {
        $('body').append('<div class="sl_circle4-12"></div>');
        }

        if(windspeed >= 24 && windspeed < 27 ) {
        $('body').append('<div class="sl_circle4-13"></div>');
        }

        if(windspeed >= 27 && windspeed <= 30 ) {
        $('body').append('<div class="sl_circle4-14"></div>');
        }


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

        if(cloudiness >= 0 && cloudiness < 10 ) {
        $('body').append('<div class="tk_circle1-1"></div>');
        }

        if(cloudiness >= 10 && cloudiness < 20 ) {
        $('body').append('<div class="tk_circle1-2"></div>');
        }

        if(cloudiness >= 20 && cloudiness < 30 ) {
        $('body').append('<div class="tk_circle1-3"></div>');
        }
    
        if(cloudiness >= 30 && cloudiness < 40 ) {
        $('body').append('<div class="tk_circle1-4"></div>');
        }

        if(cloudiness >= 40 && cloudiness < 50 ) {
        $('body').append('<div class="tk_circle1-5"></div>');
        }

        if(cloudiness >= 50 && cloudiness < 60 ) {
        $('body').append('<div class="tk_circle1-6"></div>');
        }

        if(cloudiness >= 60 && cloudiness < 70 ) {
        $('body').append('<div class="tk_circle1-7"></div>');
        }

        if(cloudiness >= 70 && cloudiness < 80 ) {
        $('body').append('<div class="tk_circle1-8"></div>');
        }

        if(cloudiness >= 80 && cloudiness < 90 ) {
        $('body').append('<div class="tk_circle1-9"></div>');
        }

        if(cloudiness >= 90 && cloudiness <= 100 ) {
        $('body').append('<div class="tk_circle1-10"></div>');
        }

        //

        if(humidity >= 0 && humidity < 10 ) {
        $('body').append('<div class="tk_circle2-1"></div>');
        }

        if(humidity >= 10 && humidity < 20 ) {
        $('body').append('<div class="tk_circle2-2"></div>');
        }

        if(humidity >= 20 && humidity < 30 ) {
        $('body').append('<div class="tk_circle2-3"></div>');
        }

        if(humidity >= 30 && humidity < 40 ) {
        $('body').append('<div class="tk_circle2-4"></div>');
        }

        if(humidity >= 40 && humidity < 50 ) {
        $('body').append('<div class="tk_circle2-5"></div>');
        }

        if(humidity >= 50 && humidity < 60 ) {
        $('body').append('<div class="tk_circle2-6"></div>');
        }

        if(humidity >= 60 && humidity < 70 ) {
        $('body').append('<div class="tk_circle2-7"></div>');
        }

        if(humidity >= 70 && humidity < 80 ) {
        $('body').append('<div class="tk_circle2-8"></div>');
        }

        if(humidity >= 80 && humidity < 90 ) {
        $('body').append('<div class="tk_circle2-9"></div>');
        }

        if(humidity >= 90 && humidity <= 100 ) {
        $('body').append('<div class="tk_circle2-10"></div>');
        }

        //

        if(pressure >= 990 && pressure < 994 ) {
        $('body').append('<div class="tk_circle3-1"></div>');
        }

        if(pressure >= 994 && pressure < 998 ) {
        $('body').append('<div class="tk_circle3-2"></div>');
        }

        if(pressure >= 998 && pressure < 1002 ) {
        $('body').append('<div class="tk_circle3-3"></div>');
        }

        if(pressure >= 1002 && pressure < 1006 ) {
        $('body').append('<div class="tk_circle3-4"></div>');
        }

        if(pressure >= 1006 && pressure < 1010 ) {
        $('body').append('<div class="tk_circle3-5"></div>');
        }

        if(pressure >= 1010 && pressure < 1014 ) {
        $('body').append('<div class="tk_circle3-6"></div>');
        }

        if(pressure >= 1014 && pressure < 1018 ) {
        $('body').append('<div class="tk_circle3-7"></div>');
        }

        if(pressure >= 1018 && pressure < 1022 ) {
        $('body').append('<div class="tk_circle3-8"></div>');
        }

        if(pressure >= 1022 && pressure < 1026 ) {
        $('body').append('<div class="tk_circle3-9"></div>');
        }

        if(pressure >= 1026 && pressure <= 1030 ) {
        $('body').append('<div class="tk_circle3-10"></div>');
        }

        //

        if(windspeed >= 0 && windspeed < 1 ) {
        $('body').append('<div class="tk_circle4-1"></div>');
        }

        if(windspeed >= 1 && windspeed < 2 ) {
        $('body').append('<div class="tk_circle4-2"></div>');
        }

        if(windspeed >= 2 && windspeed < 3 ) {
        $('body').append('<div class="tk_circle4-3"></div>');
        }

        if(windspeed >= 3 && windspeed < 4 ) {
        $('body').append('<div class="tk_circle4-4"></div>');
        }

        if(windspeed >= 4 && windspeed < 5 ) {
        $('body').append('<div class="tk_circle4-5"></div>');
        }

        if(windspeed >= 5 && windspeed < 7 ) {
        $('body').append('<div class="tk_circle4-6"></div>');
        }

        if(windspeed >= 7 && windspeed < 10 ) {
        $('body').append('<div class="tk_circle4-7"></div>');
        }

        if(windspeed >= 10 && windspeed < 13 ) {
        $('body').append('<div class="tk_circle4-8"></div>');
        }

        if(windspeed >= 13 && windspeed < 16 ) {
        $('body').append('<div class="tk_circle4-9"></div>');
        }

        if(windspeed >= 16 && windspeed < 19 ) {
        $('body').append('<div class="tk_circle4-10"></div>');
        }

        if(windspeed >= 19 && windspeed < 21 ) {
        $('body').append('<div class="tk_circle4-11"></div>');
        }

        if(windspeed >= 21 && windspeed < 24 ) {
        $('body').append('<div class="tk_circle4-12"></div>');
        }

        if(windspeed >= 24 && windspeed < 27 ) {
        $('body').append('<div class="tk_circle4-13"></div>');
        }

        if(windspeed >= 27 && windspeed <= 30 ) {
        $('body').append('<div class="tk_circle4-14"></div>');
        }

        

        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   


});