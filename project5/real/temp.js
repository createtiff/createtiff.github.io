var temp; //Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit. 

//////////LONDON
$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=2643743&units=metric&APPID=188e55f89ae698f5c272ba31302b4705', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){

            temp = results.main.temp;
            
            myWeatherInterpretation();
            }
        });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        

        //JUST SEEING IF THE VALUES COME THROUGH
        
        $('#london').append('temp: ' + temp + '</br>'); 

        //

        if(temp >= -20 && temp < -19 ) {
        $('body').append('<div class="london-temp-60"></div>');
        }

        if(temp >= -19 && temp < -18 ) {
        $('body').append('<div class="london-temp-59"></div>');
        }

        if(temp >= -18 && temp < -17 ) {
        $('body').append('<div class="london-temp-58"></div>');
        }

        if(temp >= -17 && temp < -16 ) {
        $('body').append('<div class="london-temp-57"></div>');
        }

        if(temp >= -16 && temp < -15 ) {
        $('body').append('<div class="london-temp-56"></div>');
        }

        if(temp >= -15 && temp < -14 ) {
        $('body').append('<div class="london-temp-55"></div>');
        }

        if(temp >= -14 && temp < -13 ) {
        $('body').append('<div class="london-temp-54"></div>');
        }

        if(temp >= -13 && temp < -12 ) {
        $('body').append('<div class="london-temp-53"></div>');
        }
        
        if(temp >= -12 && temp < -11 ) {
        $('body').append('<div class="london-temp-52"></div>');
        }
        
        if(temp >= -11 && temp < -10 ) {
        $('body').append('<div class="london-temp-51"></div>');
        }

        if(temp >= -10 && temp < -9 ) {
        $('body').append('<div class="london-temp-50"></div>');
        }

        if(temp >= -9 && temp < -8 ) {
        $('body').append('<div class="london-temp-49"></div>');
        }

        if(temp >= -8 && temp < -7 ) {
        $('body').append('<div class="london-temp-48"></div>');
        }

        if(temp >= -7 && temp < -6 ) {
        $('body').append('<div class="london-temp-47"></div>');
        }

        if(temp >= -6 && temp < -5 ) {
        $('body').append('<div class="london-temp-46"></div>');
        }

        if(temp >= -5 && temp < -4 ) {
        $('body').append('<div class="london-temp-45"></div>');
        }

        if(temp >= -4 && temp < -3 ) {
        $('body').append('<div class="london-temp-44"></div>');
        }

        if(temp >= -3 && temp < -2 ) {
        $('body').append('<div class="london-temp-43"></div>');
        }
        
        if(temp >= -2 && temp < -1 ) {
        $('body').append('<div class="london-temp-42"></div>');
        }
        
        if(temp >= -1 && temp < 0 ) {
        $('body').append('<div class="london-temp-41"></div>');
        }

        if(temp >= 0 && temp < 1 ) {
        $('body').append('<div class="london-temp-40"></div>');
        }

        if(temp >= 1 && temp < 2 ) {
        $('body').append('<div class="london-temp-39"></div>');
        }

        if(temp >= 2 && temp < 3 ) {
        $('body').append('<div class="london-temp-38"></div>');
        }

        if(temp >= 3 && temp < 4 ) {
        $('body').append('<div class="london-temp-37"></div>');
        }

        if(temp >= 4 && temp < 5 ) {
        $('body').append('<div class="london-temp-36"></div>');
        }

        if(temp >= 5 && temp < 6 ) {
        $('body').append('<div class="london-temp-35"></div>');
        }

        if(temp >= 6 && temp < 7 ) {
        $('body').append('<div class="london-temp-34"></div>');
        }

        if(temp >= 7 && temp < 8 ) {
        $('body').append('<div class="london-temp-33"></div>');
        }
        
        if(temp >= 8 && temp < 9 ) {
        $('body').append('<div class="london-temp-32"></div>');
        }
        
        if(temp >= 9 && temp < 10 ) {
        $('body').append('<div class="london-temp-31"></div>');
        }

        if(temp >= 10 && temp < 11 ) {
        $('body').append('<div class="london-temp-30"></div>');
        }

        if(temp >= 11 && temp < 12 ) {
        $('body').append('<div class="london-temp-29"></div>');
        }

        if(temp >= 12 && temp < 13 ) {
        $('body').append('<div class="london-temp-28"></div>');
        }

        if(temp >= 13 && temp < 14 ) {
        $('body').append('<div class="london-temp-27"></div>');
        }

        if(temp >= 14 && temp < 15 ) {
        $('body').append('<div class="london-temp-26"></div>');
        }

        if(temp >= 15 && temp < 16 ) {
        $('body').append('<div class="london-temp-25"></div>');
        }

        if(temp >= 16 && temp < 17 ) {
        $('body').append('<div class="london-temp-24"></div>');
        }

        if(temp >= 17 && temp < 18 ) {
        $('body').append('<div class="london-temp-23"></div>');
        }
        
        if(temp >= 18 && temp < 19 ) {
        $('body').append('<div class="london-temp-22"></div>');
        }
        
        if(temp >= 19 && temp < 20 ) {
        $('body').append('<div class="london-temp-21"></div>');
        }

        if(temp >= 20 && temp < 21 ) {
        $('body').append('<div class="london-temp-20"></div>');
        }

        if(temp >= 21 && temp < 22 ) {
        $('body').append('<div class="london-temp-19"></div>');
        }

        if(temp >= 22 && temp < 23 ) {
        $('body').append('<div class="london-temp-18"></div>');
        }

        if(temp >= 23 && temp < 24 ) {
        $('body').append('<div class="london-temp-17"></div>');
        }

        if(temp >= 24 && temp < 25 ) {
        $('body').append('<div class="london-temp-16"></div>');
        }

        if(temp >= 25 && temp < 26 ) {
        $('body').append('<div class="london-temp-15"></div>');
        }

        if(temp >= 26 && temp < 27 ) {
        $('body').append('<div class="london-temp-14"></div>');
        }

        if(temp >= 27 && temp < 28 ) {
        $('body').append('<div class="london-temp-13"></div>');
        }
        
        if(temp >= 28 && temp < 29 ) {
        $('body').append('<div class="london-temp-12"></div>');
        }
        
        if(temp >= 29 && temp < 30 ) {
        $('body').append('<div class="london-temp-11"></div>');
        }

        if(temp >= 30 && temp < 31 ) {
        $('body').append('<div class="london-temp-10"></div>');
        }

        if(temp >= 31 && temp < 32 ) {
        $('body').append('<div class="london-temp-9"></div>');
        }

        if(temp >= 32 && temp < 33 ) {
        $('body').append('<div class="london-temp-8"></div>');
        }

        if(temp >= 33 && temp < 34 ) {
        $('body').append('<div class="london-temp-7"></div>');
        }

        if(temp >= 34 && temp < 35 ) {
        $('body').append('<div class="london-temp-6"></div>');
        }

        if(temp >= 35 && temp < 36 ) {
        $('body').append('<div class="london-temp-5"></div>');
        }

        if(temp >= 36 && temp < 37 ) {
        $('body').append('<div class="london-temp-4"></div>');
        }

        if(temp >= 37 && temp < 38 ) {
        $('body').append('<div class="london-temp-3"></div>');
        }
        
        if(temp >= 38 && temp < 39 ) {
        $('body').append('<div class="london-temp-2"></div>');
        }
        
        if(temp >= 39 ) {
        $('body').append('<div class="london-temp-1"></div>');
        }

        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   
});


//////////NEW YORK
$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=5128581&units=metric&APPID=188e55f89ae698f5c272ba31302b4705', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){

            temp = results.main.temp;

            myWeatherInterpretation();
            }
        });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH

        $('#newyork').append('temp: ' + temp + '</br>'); 

        //

        if(temp >= -20 && temp < -19 ) {
        $('body').append('<div class="newyork-temp-60"></div>');
        }

        if(temp >= -19 && temp < -18 ) {
        $('body').append('<div class="newyork-temp-59"></div>');
        }

        if(temp >= -18 && temp < -17 ) {
        $('body').append('<div class="newyork-temp-58"></div>');
        }

        if(temp >= -17 && temp < -16 ) {
        $('body').append('<div class="newyork-temp-57"></div>');
        }

        if(temp >= -16 && temp < -15 ) {
        $('body').append('<div class="newyork-temp-56"></div>');
        }

        if(temp >= -15 && temp < -14 ) {
        $('body').append('<div class="newyork-temp-55"></div>');
        }

        if(temp >= -14 && temp < -13 ) {
        $('body').append('<div class="newyork-temp-54"></div>');
        }

        if(temp >= -13 && temp < -12 ) {
        $('body').append('<div class="newyork-temp-53"></div>');
        }
        
        if(temp >= -12 && temp < -11 ) {
        $('body').append('<div class="newyork-temp-52"></div>');
        }
        
        if(temp >= -11 && temp < -10 ) {
        $('body').append('<div class="newyork-temp-51"></div>');
        }

        if(temp >= -10 && temp < -9 ) {
        $('body').append('<div class="newyork-temp-50"></div>');
        }

        if(temp >= -9 && temp < -8 ) {
        $('body').append('<div class="newyork-temp-49"></div>');
        }

        if(temp >= -8 && temp < -7 ) {
        $('body').append('<div class="newyork-temp-48"></div>');
        }

        if(temp >= -7 && temp < -6 ) {
        $('body').append('<div class="newyork-temp-47"></div>');
        }

        if(temp >= -6 && temp < -5 ) {
        $('body').append('<div class="newyork-temp-46"></div>');
        }

        if(temp >= -5 && temp < -4 ) {
        $('body').append('<div class="newyork-temp-45"></div>');
        }

        if(temp >= -4 && temp < -3 ) {
        $('body').append('<div class="newyork-temp-44"></div>');
        }

        if(temp >= -3 && temp < -2 ) {
        $('body').append('<div class="newyork-temp-43"></div>');
        }
        
        if(temp >= -2 && temp < -1 ) {
        $('body').append('<div class="newyork-temp-42"></div>');
        }
        
        if(temp >= -1 && temp < 0 ) {
        $('body').append('<div class="newyork-temp-41"></div>');
        }

        if(temp >= 0 && temp < 1 ) {
        $('body').append('<div class="newyork-temp-40"></div>');
        }

        if(temp >= 1 && temp < 2 ) {
        $('body').append('<div class="newyork-temp-39"></div>');
        }

        if(temp >= 2 && temp < 3 ) {
        $('body').append('<div class="newyork-temp-38"></div>');
        }

        if(temp >= 3 && temp < 4 ) {
        $('body').append('<div class="newyork-temp-37"></div>');
        }

        if(temp >= 4 && temp < 5 ) {
        $('body').append('<div class="newyork-temp-36"></div>');
        }

        if(temp >= 5 && temp < 6 ) {
        $('body').append('<div class="newyork-temp-35"></div>');
        }

        if(temp >= 6 && temp < 7 ) {
        $('body').append('<div class="newyork-temp-34"></div>');
        }

        if(temp >= 7 && temp < 8 ) {
        $('body').append('<div class="newyork-temp-33"></div>');
        }
        
        if(temp >= 8 && temp < 9 ) {
        $('body').append('<div class="newyork-temp-32"></div>');
        }
        
        if(temp >= 9 && temp < 10 ) {
        $('body').append('<div class="newyork-temp-31"></div>');
        }

        if(temp >= 10 && temp < 11 ) {
        $('body').append('<div class="newyork-temp-30"></div>');
        }

        if(temp >= 11 && temp < 12 ) {
        $('body').append('<div class="newyork-temp-29"></div>');
        }

        if(temp >= 12 && temp < 13 ) {
        $('body').append('<div class="newyork-temp-28"></div>');
        }

        if(temp >= 13 && temp < 14 ) {
        $('body').append('<div class="newyork-temp-27"></div>');
        }

        if(temp >= 14 && temp < 15 ) {
        $('body').append('<div class="newyork-temp-26"></div>');
        }

        if(temp >= 15 && temp < 16 ) {
        $('body').append('<div class="newyork-temp-25"></div>');
        }

        if(temp >= 16 && temp < 17 ) {
        $('body').append('<div class="newyork-temp-24"></div>');
        }

        if(temp >= 17 && temp < 18 ) {
        $('body').append('<div class="newyork-temp-23"></div>');
        }
        
        if(temp >= 18 && temp < 19 ) {
        $('body').append('<div class="newyork-temp-22"></div>');
        }
        
        if(temp >= 19 && temp < 20 ) {
        $('body').append('<div class="newyork-temp-21"></div>');
        }

        if(temp >= 20 && temp < 21 ) {
        $('body').append('<div class="newyork-temp-20"></div>');
        }

        if(temp >= 21 && temp < 22 ) {
        $('body').append('<div class="newyork-temp-19"></div>');
        }

        if(temp >= 22 && temp < 23 ) {
        $('body').append('<div class="newyork-temp-18"></div>');
        }

        if(temp >= 23 && temp < 24 ) {
        $('body').append('<div class="newyork-temp-17"></div>');
        }

        if(temp >= 24 && temp < 25 ) {
        $('body').append('<div class="newyork-temp-16"></div>');
        }

        if(temp >= 25 && temp < 26 ) {
        $('body').append('<div class="newyork-temp-15"></div>');
        }

        if(temp >= 26 && temp < 27 ) {
        $('body').append('<div class="newyork-temp-14"></div>');
        }

        if(temp >= 27 && temp < 28 ) {
        $('body').append('<div class="newyork-temp-13"></div>');
        }
        
        if(temp >= 28 && temp < 29 ) {
        $('body').append('<div class="newyork-temp-12"></div>');
        }
        
        if(temp >= 29 && temp < 30 ) {
        $('body').append('<div class="newyork-temp-11"></div>');
        }

        if(temp >= 30 && temp < 31 ) {
        $('body').append('<div class="newyork-temp-10"></div>');
        }

        if(temp >= 31 && temp < 32 ) {
        $('body').append('<div class="newyork-temp-9"></div>');
        }

        if(temp >= 32 && temp < 33 ) {
        $('body').append('<div class="newyork-temp-8"></div>');
        }

        if(temp >= 33 && temp < 34 ) {
        $('body').append('<div class="newyork-temp-7"></div>');
        }

        if(temp >= 34 && temp < 35 ) {
        $('body').append('<div class="newyork-temp-6"></div>');
        }

        if(temp >= 35 && temp < 36 ) {
        $('body').append('<div class="newyork-temp-5"></div>');
        }

        if(temp >= 36 && temp < 37 ) {
        $('body').append('<div class="newyork-temp-4"></div>');
        }

        if(temp >= 37 && temp < 38 ) {
        $('body').append('<div class="newyork-temp-3"></div>');
        }
        
        if(temp >= 38 && temp < 39 ) {
        $('body').append('<div class="newyork-temp-2"></div>');
        }
        
        if(temp >= 39 ) {
        $('body').append('<div class="newyork-temp-1"></div>');
        }

     
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   
});


//////////TOKYO
$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1850147&units=metric&APPID=188e55f89ae698f5c272ba31302b4705', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            
            temp = results.main.temp;

            myWeatherInterpretation();
        }
    });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH
        
        $('#tokyo').append('temp: ' + temp + '</br>');
        
        //

        if(temp >= -20 && temp < -19 ) {
        $('body').append('<div class="tokyo-temp-60"></div>');
        }

        if(temp >= -19 && temp < -18 ) {
        $('body').append('<div class="tokyo-temp-59"></div>');
        }

        if(temp >= -18 && temp < -17 ) {
        $('body').append('<div class="tokyo-temp-58"></div>');
        }

        if(temp >= -17 && temp < -16 ) {
        $('body').append('<div class="tokyo-temp-57"></div>');
        }

        if(temp >= -16 && temp < -15 ) {
        $('body').append('<div class="tokyo-temp-56"></div>');
        }

        if(temp >= -15 && temp < -14 ) {
        $('body').append('<div class="tokyo-temp-55"></div>');
        }

        if(temp >= -14 && temp < -13 ) {
        $('body').append('<div class="tokyo-temp-54"></div>');
        }

        if(temp >= -13 && temp < -12 ) {
        $('body').append('<div class="tokyo-temp-53"></div>');
        }
        
        if(temp >= -12 && temp < -11 ) {
        $('body').append('<div class="tokyo-temp-52"></div>');
        }
        
        if(temp >= -11 && temp < -10 ) {
        $('body').append('<div class="tokyo-temp-51"></div>');
        }

        if(temp >= -10 && temp < -9 ) {
        $('body').append('<div class="tokyo-temp-50"></div>');
        }

        if(temp >= -9 && temp < -8 ) {
        $('body').append('<div class="tokyo-temp-49"></div>');
        }

        if(temp >= -8 && temp < -7 ) {
        $('body').append('<div class="tokyo-temp-48"></div>');
        }

        if(temp >= -7 && temp < -6 ) {
        $('body').append('<div class="tokyo-temp-47"></div>');
        }

        if(temp >= -6 && temp < -5 ) {
        $('body').append('<div class="tokyo-temp-46"></div>');
        }

        if(temp >= -5 && temp < -4 ) {
        $('body').append('<div class="tokyo-temp-45"></div>');
        }

        if(temp >= -4 && temp < -3 ) {
        $('body').append('<div class="tokyo-temp-44"></div>');
        }

        if(temp >= -3 && temp < -2 ) {
        $('body').append('<div class="tokyo-temp-43"></div>');
        }
        
        if(temp >= -2 && temp < -1 ) {
        $('body').append('<div class="tokyo-temp-42"></div>');
        }
        
        if(temp >= -1 && temp < 0 ) {
        $('body').append('<div class="tokyo-temp-41"></div>');
        }

        if(temp >= 0 && temp < 1 ) {
        $('body').append('<div class="tokyo-temp-40"></div>');
        }

        if(temp >= 1 && temp < 2 ) {
        $('body').append('<div class="tokyo-temp-39"></div>');
        }

        if(temp >= 2 && temp < 3 ) {
        $('body').append('<div class="tokyo-temp-38"></div>');
        }

        if(temp >= 3 && temp < 4 ) {
        $('body').append('<div class="tokyo-temp-37"></div>');
        }

        if(temp >= 4 && temp < 5 ) {
        $('body').append('<div class="tokyo-temp-36"></div>');
        }

        if(temp >= 5 && temp < 6 ) {
        $('body').append('<div class="tokyo-temp-35"></div>');
        }

        if(temp >= 6 && temp < 7 ) {
        $('body').append('<div class="tokyo-temp-34"></div>');
        }

        if(temp >= 7 && temp < 8 ) {
        $('body').append('<div class="tokyo-temp-33"></div>');
        }
        
        if(temp >= 8 && temp < 9 ) {
        $('body').append('<div class="tokyo-temp-32"></div>');
        }
        
        if(temp >= 9 && temp < 10 ) {
        $('body').append('<div class="tokyo-temp-31"></div>');
        }

        if(temp >= 10 && temp < 11 ) {
        $('body').append('<div class="tokyo-temp-30"></div>');
        }

        if(temp >= 11 && temp < 12 ) {
        $('body').append('<div class="tokyo-temp-29"></div>');
        }

        if(temp >= 12 && temp < 13 ) {
        $('body').append('<div class="tokyo-temp-28"></div>');
        }

        if(temp >= 13 && temp < 14 ) {
        $('body').append('<div class="tokyo-temp-27"></div>');
        }

        if(temp >= 14 && temp < 15 ) {
        $('body').append('<div class="tokyo-temp-26"></div>');
        }

        if(temp >= 15 && temp < 16 ) {
        $('body').append('<div class="tokyo-temp-25"></div>');
        }

        if(temp >= 16 && temp < 17 ) {
        $('body').append('<div class="tokyo-temp-24"></div>');
        }

        if(temp >= 17 && temp < 18 ) {
        $('body').append('<div class="tokyo-temp-23"></div>');
        }
        
        if(temp >= 18 && temp < 19 ) {
        $('body').append('<div class="tokyo-temp-22"></div>');
        }
        
        if(temp >= 19 && temp < 20 ) {
        $('body').append('<div class="tokyo-temp-21"></div>');
        }

        if(temp >= 20 && temp < 21 ) {
        $('body').append('<div class="tokyo-temp-20"></div>');
        }

        if(temp >= 21 && temp < 22 ) {
        $('body').append('<div class="tokyo-temp-19"></div>');
        }

        if(temp >= 22 && temp < 23 ) {
        $('body').append('<div class="tokyo-temp-18"></div>');
        }

        if(temp >= 23 && temp < 24 ) {
        $('body').append('<div class="tokyo-temp-17"></div>');
        }

        if(temp >= 24 && temp < 25 ) {
        $('body').append('<div class="tokyo-temp-16"></div>');
        }

        if(temp >= 25 && temp < 26 ) {
        $('body').append('<div class="tokyo-temp-15"></div>');
        }

        if(temp >= 26 && temp < 27 ) {
        $('body').append('<div class="tokyo-temp-14"></div>');
        }

        if(temp >= 27 && temp < 28 ) {
        $('body').append('<div class="tokyo-temp-13"></div>');
        }
        
        if(temp >= 28 && temp < 29 ) {
        $('body').append('<div class="tokyo-temp-12"></div>');
        }
        
        if(temp >= 29 && temp < 30 ) {
        $('body').append('<div class="tokyo-temp-11"></div>');
        }

        if(temp >= 30 && temp < 31 ) {
        $('body').append('<div class="tokyo-temp-10"></div>');
        }

        if(temp >= 31 && temp < 32 ) {
        $('body').append('<div class="tokyo-temp-9"></div>');
        }

        if(temp >= 32 && temp < 33 ) {
        $('body').append('<div class="tokyo-temp-8"></div>');
        }

        if(temp >= 33 && temp < 34 ) {
        $('body').append('<div class="tokyo-temp-7"></div>');
        }

        if(temp >= 34 && temp < 35 ) {
        $('body').append('<div class="tokyo-temp-6"></div>');
        }

        if(temp >= 35 && temp < 36 ) {
        $('body').append('<div class="tokyo-temp-5"></div>');
        }

        if(temp >= 36 && temp < 37 ) {
        $('body').append('<div class="tokyo-temp-4"></div>');
        }

        if(temp >= 37 && temp < 38 ) {
        $('body').append('<div class="tokyo-temp-3"></div>');
        }
        
        if(temp >= 38 && temp < 39 ) {
        $('body').append('<div class="tokyo-temp-2"></div>');
        }
        
        if(temp >= 39 ) {
        $('body').append('<div class="tokyo-temp-1"></div>');
        }

        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   
});


//////////SEOUL
$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1835848&units=metric&APPID=188e55f89ae698f5c272ba31302b4705', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){

            temp = results.main.temp;

            myWeatherInterpretation();
        }
    });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH
        
        $('#seoul').append('temp: ' + temp + '</br>');
        

        //

        if(temp >= -20 && temp < -19 ) {
        $('body').append('<div class="seoul-temp-60"></div>');
        }

        if(temp >= -19 && temp < -18 ) {
        $('body').append('<div class="seoul-temp-59"></div>');
        }

        if(temp >= -18 && temp < -17 ) {
        $('body').append('<div class="seoul-temp-58"></div>');
        }

        if(temp >= -17 && temp < -16 ) {
        $('body').append('<div class="seoul-temp-57"></div>');
        }

        if(temp >= -16 && temp < -15 ) {
        $('body').append('<div class="seoul-temp-56"></div>');
        }

        if(temp >= -15 && temp < -14 ) {
        $('body').append('<div class="seoul-temp-55"></div>');
        }

        if(temp >= -14 && temp < -13 ) {
        $('body').append('<div class="seoul-temp-54"></div>');
        }

        if(temp >= -13 && temp < -12 ) {
        $('body').append('<div class="seoul-temp-53"></div>');
        }
        
        if(temp >= -12 && temp < -11 ) {
        $('body').append('<div class="seoul-temp-52"></div>');
        }
        
        if(temp >= -11 && temp < -10 ) {
        $('body').append('<div class="seoul-temp-51"></div>');
        }

        if(temp >= -10 && temp < -9 ) {
        $('body').append('<div class="seoul-temp-50"></div>');
        }

        if(temp >= -9 && temp < -8 ) {
        $('body').append('<div class="seoul-temp-49"></div>');
        }

        if(temp >= -8 && temp < -7 ) {
        $('body').append('<div class="seoul-temp-48"></div>');
        }

        if(temp >= -7 && temp < -6 ) {
        $('body').append('<div class="seoul-temp-47"></div>');
        }

        if(temp >= -6 && temp < -5 ) {
        $('body').append('<div class="seoul-temp-46"></div>');
        }

        if(temp >= -5 && temp < -4 ) {
        $('body').append('<div class="seoul-temp-45"></div>');
        }

        if(temp >= -4 && temp < -3 ) {
        $('body').append('<div class="seoul-temp-44"></div>');
        }

        if(temp >= -3 && temp < -2 ) {
        $('body').append('<div class="seoul-temp-43"></div>');
        }
        
        if(temp >= -2 && temp < -1 ) {
        $('body').append('<div class="seoul-temp-42"></div>');
        }
        
        if(temp >= -1 && temp < 0 ) {
        $('body').append('<div class="seoul-temp-41"></div>');
        }

        if(temp >= 0 && temp < 1 ) {
        $('body').append('<div class="seoul-temp-40"></div>');
        }

        if(temp >= 1 && temp < 2 ) {
        $('body').append('<div class="seoul-temp-39"></div>');
        }

        if(temp >= 2 && temp < 3 ) {
        $('body').append('<div class="seoul-temp-38"></div>');
        }

        if(temp >= 3 && temp < 4 ) {
        $('body').append('<div class="seoul-temp-37"></div>');
        }

        if(temp >= 4 && temp < 5 ) {
        $('body').append('<div class="seoul-temp-36"></div>');
        }

        if(temp >= 5 && temp < 6 ) {
        $('body').append('<div class="seoul-temp-35"></div>');
        }

        if(temp >= 6 && temp < 7 ) {
        $('body').append('<div class="seoul-temp-34"></div>');
        }

        if(temp >= 7 && temp < 8 ) {
        $('body').append('<div class="seoul-temp-33"></div>');
        }
        
        if(temp >= 8 && temp < 9 ) {
        $('body').append('<div class="seoul-temp-32"></div>');
        }
        
        if(temp >= 9 && temp < 10 ) {
        $('body').append('<div class="seoul-temp-31"></div>');
        }

        if(temp >= 10 && temp < 11 ) {
        $('body').append('<div class="seoul-temp-30"></div>');
        }

        if(temp >= 11 && temp < 12 ) {
        $('body').append('<div class="seoul-temp-29"></div>');
        }

        if(temp >= 12 && temp < 13 ) {
        $('body').append('<div class="seoul-temp-28"></div>');
        }

        if(temp >= 13 && temp < 14 ) {
        $('body').append('<div class="seoul-temp-27"></div>');
        }

        if(temp >= 14 && temp < 15 ) {
        $('body').append('<div class="seoul-temp-26"></div>');
        }

        if(temp >= 15 && temp < 16 ) {
        $('body').append('<div class="seoul-temp-25"></div>');
        }

        if(temp >= 16 && temp < 17 ) {
        $('body').append('<div class="seoul-temp-24"></div>');
        }

        if(temp >= 17 && temp < 18 ) {
        $('body').append('<div class="seoul-temp-23"></div>');
        }
        
        if(temp >= 18 && temp < 19 ) {
        $('body').append('<div class="seoul-temp-22"></div>');
        }
        
        if(temp >= 19 && temp < 20 ) {
        $('body').append('<div class="seoul-temp-21"></div>');
        }

        if(temp >= 20 && temp < 21 ) {
        $('body').append('<div class="seoul-temp-20"></div>');
        }

        if(temp >= 21 && temp < 22 ) {
        $('body').append('<div class="seoul-temp-19"></div>');
        }

        if(temp >= 22 && temp < 23 ) {
        $('body').append('<div class="seoul-temp-18"></div>');
        }

        if(temp >= 23 && temp < 24 ) {
        $('body').append('<div class="seoul-temp-17"></div>');
        }

        if(temp >= 24 && temp < 25 ) {
        $('body').append('<div class="seoul-temp-16"></div>');
        }

        if(temp >= 25 && temp < 26 ) {
        $('body').append('<div class="seoul-temp-15"></div>');
        }

        if(temp >= 26 && temp < 27 ) {
        $('body').append('<div class="seoul-temp-14"></div>');
        }

        if(temp >= 27 && temp < 28 ) {
        $('body').append('<div class="seoul-temp-13"></div>');
        }
        
        if(temp >= 28 && temp < 29 ) {
        $('body').append('<div class="seoul-temp-12"></div>');
        }
        
        if(temp >= 29 && temp < 30 ) {
        $('body').append('<div class="seoul-temp-11"></div>');
        }

        if(temp >= 30 && temp < 31 ) {
        $('body').append('<div class="seoul-temp-10"></div>');
        }

        if(temp >= 31 && temp < 32 ) {
        $('body').append('<div class="seoul-temp-9"></div>');
        }

        if(temp >= 32 && temp < 33 ) {
        $('body').append('<div class="seoul-temp-8"></div>');
        }

        if(temp >= 33 && temp < 34 ) {
        $('body').append('<div class="seoul-temp-7"></div>');
        }

        if(temp >= 34 && temp < 35 ) {
        $('body').append('<div class="seoul-temp-6"></div>');
        }

        if(temp >= 35 && temp < 36 ) {
        $('body').append('<div class="seoul-temp-5"></div>');
        }

        if(temp >= 36 && temp < 37 ) {
        $('body').append('<div class="seoul-temp-4"></div>');
        }

        if(temp >= 37 && temp < 38 ) {
        $('body').append('<div class="seoul-temp-3"></div>');
        }
        
        if(temp >= 38 && temp < 39 ) {
        $('body').append('<div class="seoul-temp-2"></div>');
        }
        
        if(temp >= 39 ) {
        $('body').append('<div class="seoul-temp-1"></div>');
        }

        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   
});

