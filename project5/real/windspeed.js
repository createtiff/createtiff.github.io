var windspeed; //Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.

//////////LONDON
$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=2643743&units=metric&APPID=188e55f89ae698f5c272ba31302b4705', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){

            windspeed = results.wind.speed;
            
            myWeatherInterpretation();
            }
        });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        

        //JUST SEEING IF THE VALUES COME THROUGH
        
        $('#london').append('Windspeed: ' + windspeed + '</br>');

        //

        if(windspeed >= 0 && windspeed < 0.5 ) {
        $('body').append('<div class="london-windspeed-1"></div>');
        }

        if(windspeed >= 0.5 && windspeed < 1 ) {
        $('body').append('<div class="london-windspeed-2"></div>');
        }

        if(windspeed >= 1 && windspeed < 1.5 ) {
        $('body').append('<div class="london-windspeed-3"></div>');
        }

        if(windspeed >= 1.5 && windspeed < 2 ) {
        $('body').append('<div class="london-windspeed-4"></div>');
        }

        if(windspeed >= 2 && windspeed < 2.5 ) {
        $('body').append('<div class="london-windspeed-5"></div>');
        }

        if(windspeed >= 2.5 && windspeed < 3 ) {
        $('body').append('<div class="london-windspeed-6"></div>');
        }

        if(windspeed >= 3 && windspeed < 3.5 ) {
        $('body').append('<div class="london-windspeed-7"></div>');
        }

        if(windspeed >= 3.5 && windspeed < 4 ) {
        $('body').append('<div class="london-windspeed-8"></div>');
        }

        if(windspeed >= 4 && windspeed < 4.5 ) {
        $('body').append('<div class="london-windspeed-9"></div>');
        }

        if(windspeed >= 4.5 && windspeed < 5 ) {
        $('body').append('<div class="london-windspeed-10"></div>');
        }

        if(windspeed >= 5 && windspeed < 5.5 ) {
        $('body').append('<div class="london-windspeed-11"></div>');
        }

        if(windspeed >= 5.5 && windspeed < 6 ) {
        $('body').append('<div class="london-windspeed-12"></div>');
        }

        if(windspeed >= 6 && windspeed < 6.5 ) {
        $('body').append('<div class="london-windspeed-13"></div>');
        }

        if(windspeed >= 6.5 && windspeed < 7 ) {
        $('body').append('<div class="london-windspeed-14"></div>');
        }

        if(windspeed >= 7 && windspeed < 7.5 ) {
        $('body').append('<div class="london-windspeed-15"></div>');
        }

        if(windspeed >= 7.5 && windspeed < 8 ) {
        $('body').append('<div class="london-windspeed-16"></div>');
        }

        if(windspeed >= 8 && windspeed < 8.5 ) {
        $('body').append('<div class="london-windspeed-17"></div>');
        }

        if(windspeed >= 8.5 && windspeed < 9 ) {
        $('body').append('<div class="london-windspeed-18"></div>');
        }

        if(windspeed >= 9 && windspeed < 9.5 ) {
        $('body').append('<div class="london-windspeed-19"></div>');
        }

        if(windspeed >= 9.5 && windspeed < 10 ) {
        $('body').append('<div class="london-windspeed-20"></div>');
        }

        if(windspeed >= 10 && windspeed < 10.5 ) {
        $('body').append('<div class="london-windspeed-21"></div>');
        }

        if(windspeed >= 10.5 && windspeed < 11 ) {
        $('body').append('<div class="london-windspeed-22"></div>');
        }

        if(windspeed >= 11 && windspeed < 11.5 ) {
        $('body').append('<div class="london-windspeed-23"></div>');
        }

        if(windspeed >= 11.5 && windspeed < 12 ) {
        $('body').append('<div class="london-windspeed-24"></div>');
        }

        if(windspeed >= 12 && windspeed < 12.5 ) {
        $('body').append('<div class="london-windspeed-25"></div>');
        }

        if(windspeed >= 12.5 && windspeed < 13 ) {
        $('body').append('<div class="london-windspeed-26"></div>');
        }

        if(windspeed >= 13 && windspeed < 13.5 ) {
        $('body').append('<div class="london-windspeed-27"></div>');
        }

        if(windspeed >= 13.5 && windspeed < 14 ) {
        $('body').append('<div class="london-windspeed-28"></div>');
        }

        if(windspeed >= 14 && windspeed < 14.5 ) {
        $('body').append('<div class="london-windspeed-29"></div>');
        }

        if(windspeed >= 14.5 && windspeed < 15 ) {
        $('body').append('<div class="london-windspeed-30"></div>');
        }

        if(windspeed >= 15 && windspeed < 15.5 ) {
        $('body').append('<div class="london-windspeed-31"></div>');
        }

        if(windspeed >= 15.5 && windspeed < 16 ) {
        $('body').append('<div class="london-windspeed-32"></div>');
        }

        if(windspeed >= 16 && windspeed < 16.5 ) {
        $('body').append('<div class="london-windspeed-33"></div>');
        }

        if(windspeed >= 16.5 && windspeed < 17 ) {
        $('body').append('<div class="london-windspeed-34"></div>');
        }

        if(windspeed >= 17 && windspeed < 17.5 ) {
        $('body').append('<div class="london-windspeed-35"></div>');
        }

        if(windspeed >= 17.5 && windspeed < 18 ) {
        $('body').append('<div class="london-windspeed-36"></div>');
        }

        if(windspeed >= 18 && windspeed < 18.5 ) {
        $('body').append('<div class="london-windspeed-37"></div>');
        }

        if(windspeed >= 18.5 && windspeed < 19 ) {
        $('body').append('<div class="london-windspeed-38"></div>');
        }

        if(windspeed >= 19 && windspeed < 19.5 ) {
        $('body').append('<div class="london-windspeed-39"></div>');
        }

        if(windspeed >= 19.5 && windspeed < 20 ) {
        $('body').append('<div class="london-windspeed-40"></div>');
        }

        if(windspeed >= 20 && windspeed < 20.5 ) {
        $('body').append('<div class="london-windspeed-41"></div>');
        }

        if(windspeed >= 20.5 ) {
        $('body').append('<div class="london-windspeed-42"></div>');
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

            windspeed = results.wind.speed;

            myWeatherInterpretation();
            }
        });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH

        $('#newyork').append('Windspeed: ' + windspeed + '</br>'); 

        //

        if(windspeed >= 0 && windspeed < 0.5 ) {
        $('body').append('<div class="newyork-windspeed-1"></div>');
        }

        if(windspeed >= 0.5 && windspeed < 1 ) {
        $('body').append('<div class="newyork-windspeed-2"></div>');
        }

        if(windspeed >= 1 && windspeed < 1.5 ) {
        $('body').append('<div class="newyork-windspeed-3"></div>');
        }

        if(windspeed >= 1.5 && windspeed < 2 ) {
        $('body').append('<div class="newyork-windspeed-4"></div>');
        }

        if(windspeed >= 2 && windspeed < 2.5 ) {
        $('body').append('<div class="newyork-windspeed-5"></div>');
        }

        if(windspeed >= 2.5 && windspeed < 3 ) {
        $('body').append('<div class="newyork-windspeed-6"></div>');
        }

        if(windspeed >= 3 && windspeed < 3.5 ) {
        $('body').append('<div class="newyork-windspeed-7"></div>');
        }

        if(windspeed >= 3.5 && windspeed < 4 ) {
        $('body').append('<div class="newyork-windspeed-8"></div>');
        }

        if(windspeed >= 4 && windspeed < 4.5 ) {
        $('body').append('<div class="newyork-windspeed-9"></div>');
        }

        if(windspeed >= 4.5 && windspeed < 5 ) {
        $('body').append('<div class="newyork-windspeed-10"></div>');
        }

        if(windspeed >= 5 && windspeed < 5.5 ) {
        $('body').append('<div class="newyork-windspeed-11"></div>');
        }

        if(windspeed >= 5.5 && windspeed < 6 ) {
        $('body').append('<div class="newyork-windspeed-12"></div>');
        }

        if(windspeed >= 6 && windspeed < 6.5 ) {
        $('body').append('<div class="newyork-windspeed-13"></div>');
        }

        if(windspeed >= 6.5 && windspeed < 7 ) {
        $('body').append('<div class="newyork-windspeed-14"></div>');
        }

        if(windspeed >= 7 && windspeed < 7.5 ) {
        $('body').append('<div class="newyork-windspeed-15"></div>');
        }

        if(windspeed >= 7.5 && windspeed < 8 ) {
        $('body').append('<div class="newyork-windspeed-16"></div>');
        }

        if(windspeed >= 8 && windspeed < 8.5 ) {
        $('body').append('<div class="newyork-windspeed-17"></div>');
        }

        if(windspeed >= 8.5 && windspeed < 9 ) {
        $('body').append('<div class="newyork-windspeed-18"></div>');
        }

        if(windspeed >= 9 && windspeed < 9.5 ) {
        $('body').append('<div class="newyork-windspeed-19"></div>');
        }

        if(windspeed >= 9.5 && windspeed < 10 ) {
        $('body').append('<div class="newyork-windspeed-20"></div>');
        }

        if(windspeed >= 10 && windspeed < 10.5 ) {
        $('body').append('<div class="newyork-windspeed-21"></div>');
        }

        if(windspeed >= 10.5 && windspeed < 11 ) {
        $('body').append('<div class="newyork-windspeed-22"></div>');
        }

        if(windspeed >= 11 && windspeed < 11.5 ) {
        $('body').append('<div class="newyork-windspeed-23"></div>');
        }

        if(windspeed >= 11.5 && windspeed < 12 ) {
        $('body').append('<div class="newyork-windspeed-24"></div>');
        }

        if(windspeed >= 12 && windspeed < 12.5 ) {
        $('body').append('<div class="newyork-windspeed-25"></div>');
        }

        if(windspeed >= 12.5 && windspeed < 13 ) {
        $('body').append('<div class="newyork-windspeed-26"></div>');
        }

        if(windspeed >= 13 && windspeed < 13.5 ) {
        $('body').append('<div class="newyork-windspeed-27"></div>');
        }

        if(windspeed >= 13.5 && windspeed < 14 ) {
        $('body').append('<div class="newyork-windspeed-28"></div>');
        }

        if(windspeed >= 14 && windspeed < 14.5 ) {
        $('body').append('<div class="newyork-windspeed-29"></div>');
        }

        if(windspeed >= 14.5 && windspeed < 15 ) {
        $('body').append('<div class="newyork-windspeed-30"></div>');
        }

        if(windspeed >= 15 && windspeed < 15.5 ) {
        $('body').append('<div class="newyork-windspeed-31"></div>');
        }

        if(windspeed >= 15.5 && windspeed < 16 ) {
        $('body').append('<div class="newyork-windspeed-32"></div>');
        }

        if(windspeed >= 16 && windspeed < 16.5 ) {
        $('body').append('<div class="newyork-windspeed-33"></div>');
        }

        if(windspeed >= 16.5 && windspeed < 17 ) {
        $('body').append('<div class="newyork-windspeed-34"></div>');
        }

        if(windspeed >= 17 && windspeed < 17.5 ) {
        $('body').append('<div class="newyork-windspeed-35"></div>');
        }

        if(windspeed >= 17.5 && windspeed < 18 ) {
        $('body').append('<div class="newyork-windspeed-36"></div>');
        }

        if(windspeed >= 18 && windspeed < 18.5 ) {
        $('body').append('<div class="newyork-windspeed-37"></div>');
        }

        if(windspeed >= 18.5 && windspeed < 19 ) {
        $('body').append('<div class="newyork-windspeed-38"></div>');
        }

        if(windspeed >= 19 && windspeed < 19.5 ) {
        $('body').append('<div class="newyork-windspeed-39"></div>');
        }

        if(windspeed >= 19.5 && windspeed < 20 ) {
        $('body').append('<div class="newyork-windspeed-40"></div>');
        }

        if(windspeed >= 20 && windspeed < 20.5 ) {
        $('body').append('<div class="newyork-windspeed-41"></div>');
        }

        if(windspeed >= 20.5 ) {
        $('body').append('<div class="newyork-windspeed-42"></div>');
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
            
            windspeed = results.wind.speed;

            myWeatherInterpretation();
        }
    });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH
        
        $('#tokyo').append('Windspeed: ' + windspeed + '</br>');
        
        //

        if(windspeed >= 0 && windspeed < 0.5 ) {
        $('body').append('<div class="tokyo-windspeed-1"></div>');
        }

        if(windspeed >= 0.5 && windspeed < 1 ) {
        $('body').append('<div class="tokyo-windspeed-2"></div>');
        }

        if(windspeed >= 1 && windspeed < 1.5 ) {
        $('body').append('<div class="tokyo-windspeed-3"></div>');
        }

        if(windspeed >= 1.5 && windspeed < 2 ) {
        $('body').append('<div class="tokyo-windspeed-4"></div>');
        }

        if(windspeed >= 2 && windspeed < 2.5 ) {
        $('body').append('<div class="tokyo-windspeed-5"></div>');
        }

        if(windspeed >= 2.5 && windspeed < 3 ) {
        $('body').append('<div class="tokyo-windspeed-6"></div>');
        }

        if(windspeed >= 3 && windspeed < 3.5 ) {
        $('body').append('<div class="tokyo-windspeed-7"></div>');
        }

        if(windspeed >= 3.5 && windspeed < 4 ) {
        $('body').append('<div class="tokyo-windspeed-8"></div>');
        }

        if(windspeed >= 4 && windspeed < 4.5 ) {
        $('body').append('<div class="tokyo-windspeed-9"></div>');
        }

        if(windspeed >= 4.5 && windspeed < 5 ) {
        $('body').append('<div class="tokyo-windspeed-10"></div>');
        }

        if(windspeed >= 5 && windspeed < 5.5 ) {
        $('body').append('<div class="tokyo-windspeed-11"></div>');
        }

        if(windspeed >= 5.5 && windspeed < 6 ) {
        $('body').append('<div class="tokyo-windspeed-12"></div>');
        }

        if(windspeed >= 6 && windspeed < 6.5 ) {
        $('body').append('<div class="tokyo-windspeed-13"></div>');
        }

        if(windspeed >= 6.5 && windspeed < 7 ) {
        $('body').append('<div class="tokyo-windspeed-14"></div>');
        }

        if(windspeed >= 7 && windspeed < 7.5 ) {
        $('body').append('<div class="tokyo-windspeed-15"></div>');
        }

        if(windspeed >= 7.5 && windspeed < 8 ) {
        $('body').append('<div class="tokyo-windspeed-16"></div>');
        }

        if(windspeed >= 8 && windspeed < 8.5 ) {
        $('body').append('<div class="tokyo-windspeed-17"></div>');
        }

        if(windspeed >= 8.5 && windspeed < 9 ) {
        $('body').append('<div class="tokyo-windspeed-18"></div>');
        }

        if(windspeed >= 9 && windspeed < 9.5 ) {
        $('body').append('<div class="tokyo-windspeed-19"></div>');
        }

        if(windspeed >= 9.5 && windspeed < 10 ) {
        $('body').append('<div class="tokyo-windspeed-20"></div>');
        }

        if(windspeed >= 10 && windspeed < 10.5 ) {
        $('body').append('<div class="tokyo-windspeed-21"></div>');
        }

        if(windspeed >= 10.5 && windspeed < 11 ) {
        $('body').append('<div class="tokyo-windspeed-22"></div>');
        }

        if(windspeed >= 11 && windspeed < 11.5 ) {
        $('body').append('<div class="tokyo-windspeed-23"></div>');
        }

        if(windspeed >= 11.5 && windspeed < 12 ) {
        $('body').append('<div class="tokyo-windspeed-24"></div>');
        }

        if(windspeed >= 12 && windspeed < 12.5 ) {
        $('body').append('<div class="tokyo-windspeed-25"></div>');
        }

        if(windspeed >= 12.5 && windspeed < 13 ) {
        $('body').append('<div class="tokyo-windspeed-26"></div>');
        }

        if(windspeed >= 13 && windspeed < 13.5 ) {
        $('body').append('<div class="tokyo-windspeed-27"></div>');
        }

        if(windspeed >= 13.5 && windspeed < 14 ) {
        $('body').append('<div class="tokyo-windspeed-28"></div>');
        }

        if(windspeed >= 14 && windspeed < 14.5 ) {
        $('body').append('<div class="tokyo-windspeed-29"></div>');
        }

        if(windspeed >= 14.5 && windspeed < 15 ) {
        $('body').append('<div class="tokyo-windspeed-30"></div>');
        }

        if(windspeed >= 15 && windspeed < 15.5 ) {
        $('body').append('<div class="tokyo-windspeed-31"></div>');
        }

        if(windspeed >= 15.5 && windspeed < 16 ) {
        $('body').append('<div class="tokyo-windspeed-32"></div>');
        }

        if(windspeed >= 16 && windspeed < 16.5 ) {
        $('body').append('<div class="tokyo-windspeed-33"></div>');
        }

        if(windspeed >= 16.5 && windspeed < 17 ) {
        $('body').append('<div class="tokyo-windspeed-34"></div>');
        }

        if(windspeed >= 17 && windspeed < 17.5 ) {
        $('body').append('<div class="tokyo-windspeed-35"></div>');
        }

        if(windspeed >= 17.5 && windspeed < 18 ) {
        $('body').append('<div class="tokyo-windspeed-36"></div>');
        }

        if(windspeed >= 18 && windspeed < 18.5 ) {
        $('body').append('<div class="tokyo-windspeed-37"></div>');
        }

        if(windspeed >= 18.5 && windspeed < 19 ) {
        $('body').append('<div class="tokyo-windspeed-38"></div>');
        }

        if(windspeed >= 19 && windspeed < 19.5 ) {
        $('body').append('<div class="tokyo-windspeed-39"></div>');
        }

        if(windspeed >= 19.5 && windspeed < 20 ) {
        $('body').append('<div class="tokyo-windspeed-40"></div>');
        }

        if(windspeed >= 20 && windspeed < 20.5 ) {
        $('body').append('<div class="tokyo-windspeed-41"></div>');
        }

        if(windspeed >= 20.5 ) {
        $('body').append('<div class="tokyo-windspeed-42"></div>');
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

            windspeed = results.wind.speed;

            myWeatherInterpretation();
        }
    });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH
        
        $('#seoul').append('Windspeed: ' + windspeed + '</br>');

        //

        if(windspeed >= 0 && windspeed < 0.5 ) {
        $('body').append('<div class="seoul-windspeed-1"></div>');
        }

        if(windspeed >= 0.5 && windspeed < 1 ) {
        $('body').append('<div class="seoul-windspeed-2"></div>');
        }

        if(windspeed >= 1 && windspeed < 1.5 ) {
        $('body').append('<div class="seoul-windspeed-3"></div>');
        }

        if(windspeed >= 1.5 && windspeed < 2 ) {
        $('body').append('<div class="seoul-windspeed-4"></div>');
        }

        if(windspeed >= 2 && windspeed < 2.5 ) {
        $('body').append('<div class="seoul-windspeed-5"></div>');
        }

        if(windspeed >= 2.5 && windspeed < 3 ) {
        $('body').append('<div class="seoul-windspeed-6"></div>');
        }

        if(windspeed >= 3 && windspeed < 3.5 ) {
        $('body').append('<div class="seoul-windspeed-7"></div>');
        }

        if(windspeed >= 3.5 && windspeed < 4 ) {
        $('body').append('<div class="seoul-windspeed-8"></div>');
        }

        if(windspeed >= 4 && windspeed < 4.5 ) {
        $('body').append('<div class="seoul-windspeed-9"></div>');
        }

        if(windspeed >= 4.5 && windspeed < 5 ) {
        $('body').append('<div class="seoul-windspeed-10"></div>');
        }

        if(windspeed >= 5 && windspeed < 5.5 ) {
        $('body').append('<div class="seoul-windspeed-11"></div>');
        }

        if(windspeed >= 5.5 && windspeed < 6 ) {
        $('body').append('<div class="seoul-windspeed-12"></div>');
        }

        if(windspeed >= 6 && windspeed < 6.5 ) {
        $('body').append('<div class="seoul-windspeed-13"></div>');
        }

        if(windspeed >= 6.5 && windspeed < 7 ) {
        $('body').append('<div class="seoul-windspeed-14"></div>');
        }

        if(windspeed >= 7 && windspeed < 7.5 ) {
        $('body').append('<div class="seoul-windspeed-15"></div>');
        }

        if(windspeed >= 7.5 && windspeed < 8 ) {
        $('body').append('<div class="seoul-windspeed-16"></div>');
        }

        if(windspeed >= 8 && windspeed < 8.5 ) {
        $('body').append('<div class="seoul-windspeed-17"></div>');
        }

        if(windspeed >= 8.5 && windspeed < 9 ) {
        $('body').append('<div class="seoul-windspeed-18"></div>');
        }

        if(windspeed >= 9 && windspeed < 9.5 ) {
        $('body').append('<div class="seoul-windspeed-19"></div>');
        }

        if(windspeed >= 9.5 && windspeed < 10 ) {
        $('body').append('<div class="seoul-windspeed-20"></div>');
        }

        if(windspeed >= 10 && windspeed < 10.5 ) {
        $('body').append('<div class="seoul-windspeed-21"></div>');
        }

        if(windspeed >= 10.5 && windspeed < 11 ) {
        $('body').append('<div class="seoul-windspeed-22"></div>');
        }

        if(windspeed >= 11 && windspeed < 11.5 ) {
        $('body').append('<div class="seoul-windspeed-23"></div>');
        }

        if(windspeed >= 11.5 && windspeed < 12 ) {
        $('body').append('<div class="seoul-windspeed-24"></div>');
        }

        if(windspeed >= 12 && windspeed < 12.5 ) {
        $('body').append('<div class="seoul-windspeed-25"></div>');
        }

        if(windspeed >= 12.5 && windspeed < 13 ) {
        $('body').append('<div class="seoul-windspeed-26"></div>');
        }

        if(windspeed >= 13 && windspeed < 13.5 ) {
        $('body').append('<div class="seoul-windspeed-27"></div>');
        }

        if(windspeed >= 13.5 && windspeed < 14 ) {
        $('body').append('<div class="seoul-windspeed-28"></div>');
        }

        if(windspeed >= 14 && windspeed < 14.5 ) {
        $('body').append('<div class="seoul-windspeed-29"></div>');
        }

        if(windspeed >= 14.5 && windspeed < 15 ) {
        $('body').append('<div class="seoul-windspeed-30"></div>');
        }

        if(windspeed >= 15 && windspeed < 15.5 ) {
        $('body').append('<div class="seoul-windspeed-31"></div>');
        }

        if(windspeed >= 15.5 && windspeed < 16 ) {
        $('body').append('<div class="seoul-windspeed-32"></div>');
        }

        if(windspeed >= 16 && windspeed < 16.5 ) {
        $('body').append('<div class="seoul-windspeed-33"></div>');
        }

        if(windspeed >= 16.5 && windspeed < 17 ) {
        $('body').append('<div class="seoul-windspeed-34"></div>');
        }

        if(windspeed >= 17 && windspeed < 17.5 ) {
        $('body').append('<div class="seoul-windspeed-35"></div>');
        }

        if(windspeed >= 17.5 && windspeed < 18 ) {
        $('body').append('<div class="seoul-windspeed-36"></div>');
        }

        if(windspeed >= 18 && windspeed < 18.5 ) {
        $('body').append('<div class="seoul-windspeed-37"></div>');
        }

        if(windspeed >= 18.5 && windspeed < 19 ) {
        $('body').append('<div class="seoul-windspeed-38"></div>');
        }

        if(windspeed >= 19 && windspeed < 19.5 ) {
        $('body').append('<div class="seoul-windspeed-39"></div>');
        }

        if(windspeed >= 19.5 && windspeed < 20 ) {
        $('body').append('<div class="seoul-windspeed-40"></div>');
        }

        if(windspeed >= 20 && windspeed < 20.5 ) {
        $('body').append('<div class="seoul-windspeed-41"></div>');
        }

        if(windspeed >= 20.5 ) {
        $('body').append('<div class="seoul-windspeed-42"></div>');
        }

        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   
});
