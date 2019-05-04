var tempmax;

//////////LONDON
$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=2643743&units=metric&APPID=188e55f89ae698f5c272ba31302b4705', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){

            tempmax = results.main.temp_max;
            
            myWeatherInterpretation();
            }
        });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        

        //JUST SEEING IF THE VALUES COME THROUGH
        
        $('#london').append('tempmax: ' + tempmax + '</br>'); 

        //

        if(tempmax >= -20 && tempmax < -19 ) {
        $('body').append('<div class="london-tempmax-60"></div>');
        }

        if(tempmax >= -19 && tempmax < -18 ) {
        $('body').append('<div class="london-tempmax-59"></div>');
        }

        if(tempmax >= -18 && tempmax < -17 ) {
        $('body').append('<div class="london-tempmax-58"></div>');
        }

        if(tempmax >= -17 && tempmax < -16 ) {
        $('body').append('<div class="london-tempmax-57"></div>');
        }

        if(tempmax >= -16 && tempmax < -15 ) {
        $('body').append('<div class="london-tempmax-56"></div>');
        }

        if(tempmax >= -15 && tempmax < -14 ) {
        $('body').append('<div class="london-tempmax-55"></div>');
        }

        if(tempmax >= -14 && tempmax < -13 ) {
        $('body').append('<div class="london-tempmax-54"></div>');
        }

        if(tempmax >= -13 && tempmax < -12 ) {
        $('body').append('<div class="london-tempmax-53"></div>');
        }
        
        if(tempmax >= -12 && tempmax < -11 ) {
        $('body').append('<div class="london-tempmax-52"></div>');
        }
        
        if(tempmax >= -11 && tempmax < -10 ) {
        $('body').append('<div class="london-tempmax-51"></div>');
        }

        if(tempmax >= -10 && tempmax < -9 ) {
        $('body').append('<div class="london-tempmax-50"></div>');
        }

        if(tempmax >= -9 && tempmax < -8 ) {
        $('body').append('<div class="london-tempmax-49"></div>');
        }

        if(tempmax >= -8 && tempmax < -7 ) {
        $('body').append('<div class="london-tempmax-48"></div>');
        }

        if(tempmax >= -7 && tempmax < -6 ) {
        $('body').append('<div class="london-tempmax-47"></div>');
        }

        if(tempmax >= -6 && tempmax < -5 ) {
        $('body').append('<div class="london-tempmax-46"></div>');
        }

        if(tempmax >= -5 && tempmax < -4 ) {
        $('body').append('<div class="london-tempmax-45"></div>');
        }

        if(tempmax >= -4 && tempmax < -3 ) {
        $('body').append('<div class="london-tempmax-44"></div>');
        }

        if(tempmax >= -3 && tempmax < -2 ) {
        $('body').append('<div class="london-tempmax-43"></div>');
        }
        
        if(tempmax >= -2 && tempmax < -1 ) {
        $('body').append('<div class="london-tempmax-42"></div>');
        }
        
        if(tempmax >= -1 && tempmax < 0 ) {
        $('body').append('<div class="london-tempmax-41"></div>');
        }

        if(tempmax >= 0 && tempmax < 1 ) {
        $('body').append('<div class="london-tempmax-40"></div>');
        }

        if(tempmax >= 1 && tempmax < 2 ) {
        $('body').append('<div class="london-tempmax-39"></div>');
        }

        if(tempmax >= 2 && tempmax < 3 ) {
        $('body').append('<div class="london-tempmax-38"></div>');
        }

        if(tempmax >= 3 && tempmax < 4 ) {
        $('body').append('<div class="london-tempmax-37"></div>');
        }

        if(tempmax >= 4 && tempmax < 5 ) {
        $('body').append('<div class="london-tempmax-36"></div>');
        }

        if(tempmax >= 5 && tempmax < 6 ) {
        $('body').append('<div class="london-tempmax-35"></div>');
        }

        if(tempmax >= 6 && tempmax < 7 ) {
        $('body').append('<div class="london-tempmax-34"></div>');
        }

        if(tempmax >= 7 && tempmax < 8 ) {
        $('body').append('<div class="london-tempmax-33"></div>');
        }
        
        if(tempmax >= 8 && tempmax < 9 ) {
        $('body').append('<div class="london-tempmax-32"></div>');
        }
        
        if(tempmax >= 9 && tempmax < 10 ) {
        $('body').append('<div class="london-tempmax-31"></div>');
        }

        if(tempmax >= 10 && tempmax < 11 ) {
        $('body').append('<div class="london-tempmax-30"></div>');
        }

        if(tempmax >= 11 && tempmax < 12 ) {
        $('body').append('<div class="london-tempmax-29"></div>');
        }

        if(tempmax >= 12 && tempmax < 13 ) {
        $('body').append('<div class="london-tempmax-28"></div>');
        }

        if(tempmax >= 13 && tempmax < 14 ) {
        $('body').append('<div class="london-tempmax-27"></div>');
        }

        if(tempmax >= 14 && tempmax < 15 ) {
        $('body').append('<div class="london-tempmax-26"></div>');
        }

        if(tempmax >= 15 && tempmax < 16 ) {
        $('body').append('<div class="london-tempmax-25"></div>');
        }

        if(tempmax >= 16 && tempmax < 17 ) {
        $('body').append('<div class="london-tempmax-24"></div>');
        }

        if(tempmax >= 17 && tempmax < 18 ) {
        $('body').append('<div class="london-tempmax-23"></div>');
        }
        
        if(tempmax >= 18 && tempmax < 19 ) {
        $('body').append('<div class="london-tempmax-22"></div>');
        }
        
        if(tempmax >= 19 && tempmax < 20 ) {
        $('body').append('<div class="london-tempmax-21"></div>');
        }

        if(tempmax >= 20 && tempmax < 21 ) {
        $('body').append('<div class="london-tempmax-20"></div>');
        }

        if(tempmax >= 21 && tempmax < 22 ) {
        $('body').append('<div class="london-tempmax-19"></div>');
        }

        if(tempmax >= 22 && tempmax < 23 ) {
        $('body').append('<div class="london-tempmax-18"></div>');
        }

        if(tempmax >= 23 && tempmax < 24 ) {
        $('body').append('<div class="london-tempmax-17"></div>');
        }

        if(tempmax >= 24 && tempmax < 25 ) {
        $('body').append('<div class="london-tempmax-16"></div>');
        }

        if(tempmax >= 25 && tempmax < 26 ) {
        $('body').append('<div class="london-tempmax-15"></div>');
        }

        if(tempmax >= 26 && tempmax < 27 ) {
        $('body').append('<div class="london-tempmax-14"></div>');
        }

        if(tempmax >= 27 && tempmax < 28 ) {
        $('body').append('<div class="london-tempmax-13"></div>');
        }
        
        if(tempmax >= 28 && tempmax < 29 ) {
        $('body').append('<div class="london-tempmax-12"></div>');
        }
        
        if(tempmax >= 29 && tempmax < 30 ) {
        $('body').append('<div class="london-tempmax-11"></div>');
        }

        if(tempmax >= 30 && tempmax < 31 ) {
        $('body').append('<div class="london-tempmax-10"></div>');
        }

        if(tempmax >= 31 && tempmax < 32 ) {
        $('body').append('<div class="london-tempmax-9"></div>');
        }

        if(tempmax >= 32 && tempmax < 33 ) {
        $('body').append('<div class="london-tempmax-8"></div>');
        }

        if(tempmax >= 33 && tempmax < 34 ) {
        $('body').append('<div class="london-tempmax-7"></div>');
        }

        if(tempmax >= 34 && tempmax < 35 ) {
        $('body').append('<div class="london-tempmax-6"></div>');
        }

        if(tempmax >= 35 && tempmax < 36 ) {
        $('body').append('<div class="london-tempmax-5"></div>');
        }

        if(tempmax >= 36 && tempmax < 37 ) {
        $('body').append('<div class="london-tempmax-4"></div>');
        }

        if(tempmax >= 37 && tempmax < 38 ) {
        $('body').append('<div class="london-tempmax-3"></div>');
        }
        
        if(tempmax >= 38 && tempmax < 39 ) {
        $('body').append('<div class="london-tempmax-2"></div>');
        }
        
        if(tempmax >= 39 ) {
        $('body').append('<div class="london-tempmax-1"></div>');
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

            tempmax = results.main.temp_max;

            myWeatherInterpretation();
            }
        });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH

        $('#newyork').append('tempmax: ' + tempmax + '</br>'); 

        //

        if(tempmax >= -20 && tempmax < -19 ) {
        $('body').append('<div class="newyork-tempmax-60"></div>');
        }

        if(tempmax >= -19 && tempmax < -18 ) {
        $('body').append('<div class="newyork-tempmax-59"></div>');
        }

        if(tempmax >= -18 && tempmax < -17 ) {
        $('body').append('<div class="newyork-tempmax-58"></div>');
        }

        if(tempmax >= -17 && tempmax < -16 ) {
        $('body').append('<div class="newyork-tempmax-57"></div>');
        }

        if(tempmax >= -16 && tempmax < -15 ) {
        $('body').append('<div class="newyork-tempmax-56"></div>');
        }

        if(tempmax >= -15 && tempmax < -14 ) {
        $('body').append('<div class="newyork-tempmax-55"></div>');
        }

        if(tempmax >= -14 && tempmax < -13 ) {
        $('body').append('<div class="newyork-tempmax-54"></div>');
        }

        if(tempmax >= -13 && tempmax < -12 ) {
        $('body').append('<div class="newyork-tempmax-53"></div>');
        }
        
        if(tempmax >= -12 && tempmax < -11 ) {
        $('body').append('<div class="newyork-tempmax-52"></div>');
        }
        
        if(tempmax >= -11 && tempmax < -10 ) {
        $('body').append('<div class="newyork-tempmax-51"></div>');
        }

        if(tempmax >= -10 && tempmax < -9 ) {
        $('body').append('<div class="newyork-tempmax-50"></div>');
        }

        if(tempmax >= -9 && tempmax < -8 ) {
        $('body').append('<div class="newyork-tempmax-49"></div>');
        }

        if(tempmax >= -8 && tempmax < -7 ) {
        $('body').append('<div class="newyork-tempmax-48"></div>');
        }

        if(tempmax >= -7 && tempmax < -6 ) {
        $('body').append('<div class="newyork-tempmax-47"></div>');
        }

        if(tempmax >= -6 && tempmax < -5 ) {
        $('body').append('<div class="newyork-tempmax-46"></div>');
        }

        if(tempmax >= -5 && tempmax < -4 ) {
        $('body').append('<div class="newyork-tempmax-45"></div>');
        }

        if(tempmax >= -4 && tempmax < -3 ) {
        $('body').append('<div class="newyork-tempmax-44"></div>');
        }

        if(tempmax >= -3 && tempmax < -2 ) {
        $('body').append('<div class="newyork-tempmax-43"></div>');
        }
        
        if(tempmax >= -2 && tempmax < -1 ) {
        $('body').append('<div class="newyork-tempmax-42"></div>');
        }
        
        if(tempmax >= -1 && tempmax < 0 ) {
        $('body').append('<div class="newyork-tempmax-41"></div>');
        }

        if(tempmax >= 0 && tempmax < 1 ) {
        $('body').append('<div class="newyork-tempmax-40"></div>');
        }

        if(tempmax >= 1 && tempmax < 2 ) {
        $('body').append('<div class="newyork-tempmax-39"></div>');
        }

        if(tempmax >= 2 && tempmax < 3 ) {
        $('body').append('<div class="newyork-tempmax-38"></div>');
        }

        if(tempmax >= 3 && tempmax < 4 ) {
        $('body').append('<div class="newyork-tempmax-37"></div>');
        }

        if(tempmax >= 4 && tempmax < 5 ) {
        $('body').append('<div class="newyork-tempmax-36"></div>');
        }

        if(tempmax >= 5 && tempmax < 6 ) {
        $('body').append('<div class="newyork-tempmax-35"></div>');
        }

        if(tempmax >= 6 && tempmax < 7 ) {
        $('body').append('<div class="newyork-tempmax-34"></div>');
        }

        if(tempmax >= 7 && tempmax < 8 ) {
        $('body').append('<div class="newyork-tempmax-33"></div>');
        }
        
        if(tempmax >= 8 && tempmax < 9 ) {
        $('body').append('<div class="newyork-tempmax-32"></div>');
        }
        
        if(tempmax >= 9 && tempmax < 10 ) {
        $('body').append('<div class="newyork-tempmax-31"></div>');
        }

        if(tempmax >= 10 && tempmax < 11 ) {
        $('body').append('<div class="newyork-tempmax-30"></div>');
        }

        if(tempmax >= 11 && tempmax < 12 ) {
        $('body').append('<div class="newyork-tempmax-29"></div>');
        }

        if(tempmax >= 12 && tempmax < 13 ) {
        $('body').append('<div class="newyork-tempmax-28"></div>');
        }

        if(tempmax >= 13 && tempmax < 14 ) {
        $('body').append('<div class="newyork-tempmax-27"></div>');
        }

        if(tempmax >= 14 && tempmax < 15 ) {
        $('body').append('<div class="newyork-tempmax-26"></div>');
        }

        if(tempmax >= 15 && tempmax < 16 ) {
        $('body').append('<div class="newyork-tempmax-25"></div>');
        }

        if(tempmax >= 16 && tempmax < 17 ) {
        $('body').append('<div class="newyork-tempmax-24"></div>');
        }

        if(tempmax >= 17 && tempmax < 18 ) {
        $('body').append('<div class="newyork-tempmax-23"></div>');
        }
        
        if(tempmax >= 18 && tempmax < 19 ) {
        $('body').append('<div class="newyork-tempmax-22"></div>');
        }
        
        if(tempmax >= 19 && tempmax < 20 ) {
        $('body').append('<div class="newyork-tempmax-21"></div>');
        }

        if(tempmax >= 20 && tempmax < 21 ) {
        $('body').append('<div class="newyork-tempmax-20"></div>');
        }

        if(tempmax >= 21 && tempmax < 22 ) {
        $('body').append('<div class="newyork-tempmax-19"></div>');
        }

        if(tempmax >= 22 && tempmax < 23 ) {
        $('body').append('<div class="newyork-tempmax-18"></div>');
        }

        if(tempmax >= 23 && tempmax < 24 ) {
        $('body').append('<div class="newyork-tempmax-17"></div>');
        }

        if(tempmax >= 24 && tempmax < 25 ) {
        $('body').append('<div class="newyork-tempmax-16"></div>');
        }

        if(tempmax >= 25 && tempmax < 26 ) {
        $('body').append('<div class="newyork-tempmax-15"></div>');
        }

        if(tempmax >= 26 && tempmax < 27 ) {
        $('body').append('<div class="newyork-tempmax-14"></div>');
        }

        if(tempmax >= 27 && tempmax < 28 ) {
        $('body').append('<div class="newyork-tempmax-13"></div>');
        }
        
        if(tempmax >= 28 && tempmax < 29 ) {
        $('body').append('<div class="newyork-tempmax-12"></div>');
        }
        
        if(tempmax >= 29 && tempmax < 30 ) {
        $('body').append('<div class="newyork-tempmax-11"></div>');
        }

        if(tempmax >= 30 && tempmax < 31 ) {
        $('body').append('<div class="newyork-tempmax-10"></div>');
        }

        if(tempmax >= 31 && tempmax < 32 ) {
        $('body').append('<div class="newyork-tempmax-9"></div>');
        }

        if(tempmax >= 32 && tempmax < 33 ) {
        $('body').append('<div class="newyork-tempmax-8"></div>');
        }

        if(tempmax >= 33 && tempmax < 34 ) {
        $('body').append('<div class="newyork-tempmax-7"></div>');
        }

        if(tempmax >= 34 && tempmax < 35 ) {
        $('body').append('<div class="newyork-tempmax-6"></div>');
        }

        if(tempmax >= 35 && tempmax < 36 ) {
        $('body').append('<div class="newyork-tempmax-5"></div>');
        }

        if(tempmax >= 36 && tempmax < 37 ) {
        $('body').append('<div class="newyork-tempmax-4"></div>');
        }

        if(tempmax >= 37 && tempmax < 38 ) {
        $('body').append('<div class="newyork-tempmax-3"></div>');
        }
        
        if(tempmax >= 38 && tempmax < 39 ) {
        $('body').append('<div class="newyork-tempmax-2"></div>');
        }
        
        if(tempmax >= 39 ) {
        $('body').append('<div class="newyork-tempmax-1"></div>');
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
            
            tempmax = results.main.temp_max;

            myWeatherInterpretation();
        }
    });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH
        
        $('#tokyo').append('tempmax: ' + tempmax + '</br>');
        
        //

        if(tempmax >= -20 && tempmax < -19 ) {
        $('body').append('<div class="tokyo-tempmax-60"></div>');
        }

        if(tempmax >= -19 && tempmax < -18 ) {
        $('body').append('<div class="tokyo-tempmax-59"></div>');
        }

        if(tempmax >= -18 && tempmax < -17 ) {
        $('body').append('<div class="tokyo-tempmax-58"></div>');
        }

        if(tempmax >= -17 && tempmax < -16 ) {
        $('body').append('<div class="tokyo-tempmax-57"></div>');
        }

        if(tempmax >= -16 && tempmax < -15 ) {
        $('body').append('<div class="tokyo-tempmax-56"></div>');
        }

        if(tempmax >= -15 && tempmax < -14 ) {
        $('body').append('<div class="tokyo-tempmax-55"></div>');
        }

        if(tempmax >= -14 && tempmax < -13 ) {
        $('body').append('<div class="tokyo-tempmax-54"></div>');
        }

        if(tempmax >= -13 && tempmax < -12 ) {
        $('body').append('<div class="tokyo-tempmax-53"></div>');
        }
        
        if(tempmax >= -12 && tempmax < -11 ) {
        $('body').append('<div class="tokyo-tempmax-52"></div>');
        }
        
        if(tempmax >= -11 && tempmax < -10 ) {
        $('body').append('<div class="tokyo-tempmax-51"></div>');
        }

        if(tempmax >= -10 && tempmax < -9 ) {
        $('body').append('<div class="tokyo-tempmax-50"></div>');
        }

        if(tempmax >= -9 && tempmax < -8 ) {
        $('body').append('<div class="tokyo-tempmax-49"></div>');
        }

        if(tempmax >= -8 && tempmax < -7 ) {
        $('body').append('<div class="tokyo-tempmax-48"></div>');
        }

        if(tempmax >= -7 && tempmax < -6 ) {
        $('body').append('<div class="tokyo-tempmax-47"></div>');
        }

        if(tempmax >= -6 && tempmax < -5 ) {
        $('body').append('<div class="tokyo-tempmax-46"></div>');
        }

        if(tempmax >= -5 && tempmax < -4 ) {
        $('body').append('<div class="tokyo-tempmax-45"></div>');
        }

        if(tempmax >= -4 && tempmax < -3 ) {
        $('body').append('<div class="tokyo-tempmax-44"></div>');
        }

        if(tempmax >= -3 && tempmax < -2 ) {
        $('body').append('<div class="tokyo-tempmax-43"></div>');
        }
        
        if(tempmax >= -2 && tempmax < -1 ) {
        $('body').append('<div class="tokyo-tempmax-42"></div>');
        }
        
        if(tempmax >= -1 && tempmax < 0 ) {
        $('body').append('<div class="tokyo-tempmax-41"></div>');
        }

        if(tempmax >= 0 && tempmax < 1 ) {
        $('body').append('<div class="tokyo-tempmax-40"></div>');
        }

        if(tempmax >= 1 && tempmax < 2 ) {
        $('body').append('<div class="tokyo-tempmax-39"></div>');
        }

        if(tempmax >= 2 && tempmax < 3 ) {
        $('body').append('<div class="tokyo-tempmax-38"></div>');
        }

        if(tempmax >= 3 && tempmax < 4 ) {
        $('body').append('<div class="tokyo-tempmax-37"></div>');
        }

        if(tempmax >= 4 && tempmax < 5 ) {
        $('body').append('<div class="tokyo-tempmax-36"></div>');
        }

        if(tempmax >= 5 && tempmax < 6 ) {
        $('body').append('<div class="tokyo-tempmax-35"></div>');
        }

        if(tempmax >= 6 && tempmax < 7 ) {
        $('body').append('<div class="tokyo-tempmax-34"></div>');
        }

        if(tempmax >= 7 && tempmax < 8 ) {
        $('body').append('<div class="tokyo-tempmax-33"></div>');
        }
        
        if(tempmax >= 8 && tempmax < 9 ) {
        $('body').append('<div class="tokyo-tempmax-32"></div>');
        }
        
        if(tempmax >= 9 && tempmax < 10 ) {
        $('body').append('<div class="tokyo-tempmax-31"></div>');
        }

        if(tempmax >= 10 && tempmax < 11 ) {
        $('body').append('<div class="tokyo-tempmax-30"></div>');
        }

        if(tempmax >= 11 && tempmax < 12 ) {
        $('body').append('<div class="tokyo-tempmax-29"></div>');
        }

        if(tempmax >= 12 && tempmax < 13 ) {
        $('body').append('<div class="tokyo-tempmax-28"></div>');
        }

        if(tempmax >= 13 && tempmax < 14 ) {
        $('body').append('<div class="tokyo-tempmax-27"></div>');
        }

        if(tempmax >= 14 && tempmax < 15 ) {
        $('body').append('<div class="tokyo-tempmax-26"></div>');
        }

        if(tempmax >= 15 && tempmax < 16 ) {
        $('body').append('<div class="tokyo-tempmax-25"></div>');
        }

        if(tempmax >= 16 && tempmax < 17 ) {
        $('body').append('<div class="tokyo-tempmax-24"></div>');
        }

        if(tempmax >= 17 && tempmax < 18 ) {
        $('body').append('<div class="tokyo-tempmax-23"></div>');
        }
        
        if(tempmax >= 18 && tempmax < 19 ) {
        $('body').append('<div class="tokyo-tempmax-22"></div>');
        }
        
        if(tempmax >= 19 && tempmax < 20 ) {
        $('body').append('<div class="tokyo-tempmax-21"></div>');
        }

        if(tempmax >= 20 && tempmax < 21 ) {
        $('body').append('<div class="tokyo-tempmax-20"></div>');
        }

        if(tempmax >= 21 && tempmax < 22 ) {
        $('body').append('<div class="tokyo-tempmax-19"></div>');
        }

        if(tempmax >= 22 && tempmax < 23 ) {
        $('body').append('<div class="tokyo-tempmax-18"></div>');
        }

        if(tempmax >= 23 && tempmax < 24 ) {
        $('body').append('<div class="tokyo-tempmax-17"></div>');
        }

        if(tempmax >= 24 && tempmax < 25 ) {
        $('body').append('<div class="tokyo-tempmax-16"></div>');
        }

        if(tempmax >= 25 && tempmax < 26 ) {
        $('body').append('<div class="tokyo-tempmax-15"></div>');
        }

        if(tempmax >= 26 && tempmax < 27 ) {
        $('body').append('<div class="tokyo-tempmax-14"></div>');
        }

        if(tempmax >= 27 && tempmax < 28 ) {
        $('body').append('<div class="tokyo-tempmax-13"></div>');
        }
        
        if(tempmax >= 28 && tempmax < 29 ) {
        $('body').append('<div class="tokyo-tempmax-12"></div>');
        }
        
        if(tempmax >= 29 && tempmax < 30 ) {
        $('body').append('<div class="tokyo-tempmax-11"></div>');
        }

        if(tempmax >= 30 && tempmax < 31 ) {
        $('body').append('<div class="tokyo-tempmax-10"></div>');
        }

        if(tempmax >= 31 && tempmax < 32 ) {
        $('body').append('<div class="tokyo-tempmax-9"></div>');
        }

        if(tempmax >= 32 && tempmax < 33 ) {
        $('body').append('<div class="tokyo-tempmax-8"></div>');
        }

        if(tempmax >= 33 && tempmax < 34 ) {
        $('body').append('<div class="tokyo-tempmax-7"></div>');
        }

        if(tempmax >= 34 && tempmax < 35 ) {
        $('body').append('<div class="tokyo-tempmax-6"></div>');
        }

        if(tempmax >= 35 && tempmax < 36 ) {
        $('body').append('<div class="tokyo-tempmax-5"></div>');
        }

        if(tempmax >= 36 && tempmax < 37 ) {
        $('body').append('<div class="tokyo-tempmax-4"></div>');
        }

        if(tempmax >= 37 && tempmax < 38 ) {
        $('body').append('<div class="tokyo-tempmax-3"></div>');
        }
        
        if(tempmax >= 38 && tempmax < 39 ) {
        $('body').append('<div class="tokyo-tempmax-2"></div>');
        }
        
        if(tempmax >= 39 ) {
        $('body').append('<div class="tokyo-tempmax-1"></div>');
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

            tempmax = results.main.temp_max;

            myWeatherInterpretation();
        }
    });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH
        
        $('#seoul').append('tempmax: ' + tempmax + '</br>');
        
        //

        if(tempmax >= -20 && tempmax < -19 ) {
        $('body').append('<div class="seoul-tempmax-60"></div>');
        }

        if(tempmax >= -19 && tempmax < -18 ) {
        $('body').append('<div class="seoul-tempmax-59"></div>');
        }

        if(tempmax >= -18 && tempmax < -17 ) {
        $('body').append('<div class="seoul-tempmax-58"></div>');
        }

        if(tempmax >= -17 && tempmax < -16 ) {
        $('body').append('<div class="seoul-tempmax-57"></div>');
        }

        if(tempmax >= -16 && tempmax < -15 ) {
        $('body').append('<div class="seoul-tempmax-56"></div>');
        }

        if(tempmax >= -15 && tempmax < -14 ) {
        $('body').append('<div class="seoul-tempmax-55"></div>');
        }

        if(tempmax >= -14 && tempmax < -13 ) {
        $('body').append('<div class="seoul-tempmax-54"></div>');
        }

        if(tempmax >= -13 && tempmax < -12 ) {
        $('body').append('<div class="seoul-tempmax-53"></div>');
        }
        
        if(tempmax >= -12 && tempmax < -11 ) {
        $('body').append('<div class="seoul-tempmax-52"></div>');
        }
        
        if(tempmax >= -11 && tempmax < -10 ) {
        $('body').append('<div class="seoul-tempmax-51"></div>');
        }

        if(tempmax >= -10 && tempmax < -9 ) {
        $('body').append('<div class="seoul-tempmax-50"></div>');
        }

        if(tempmax >= -9 && tempmax < -8 ) {
        $('body').append('<div class="seoul-tempmax-49"></div>');
        }

        if(tempmax >= -8 && tempmax < -7 ) {
        $('body').append('<div class="seoul-tempmax-48"></div>');
        }

        if(tempmax >= -7 && tempmax < -6 ) {
        $('body').append('<div class="seoul-tempmax-47"></div>');
        }

        if(tempmax >= -6 && tempmax < -5 ) {
        $('body').append('<div class="seoul-tempmax-46"></div>');
        }

        if(tempmax >= -5 && tempmax < -4 ) {
        $('body').append('<div class="seoul-tempmax-45"></div>');
        }

        if(tempmax >= -4 && tempmax < -3 ) {
        $('body').append('<div class="seoul-tempmax-44"></div>');
        }

        if(tempmax >= -3 && tempmax < -2 ) {
        $('body').append('<div class="seoul-tempmax-43"></div>');
        }
        
        if(tempmax >= -2 && tempmax < -1 ) {
        $('body').append('<div class="seoul-tempmax-42"></div>');
        }
        
        if(tempmax >= -1 && tempmax < 0 ) {
        $('body').append('<div class="seoul-tempmax-41"></div>');
        }

        if(tempmax >= 0 && tempmax < 1 ) {
        $('body').append('<div class="seoul-tempmax-40"></div>');
        }

        if(tempmax >= 1 && tempmax < 2 ) {
        $('body').append('<div class="seoul-tempmax-39"></div>');
        }

        if(tempmax >= 2 && tempmax < 3 ) {
        $('body').append('<div class="seoul-tempmax-38"></div>');
        }

        if(tempmax >= 3 && tempmax < 4 ) {
        $('body').append('<div class="seoul-tempmax-37"></div>');
        }

        if(tempmax >= 4 && tempmax < 5 ) {
        $('body').append('<div class="seoul-tempmax-36"></div>');
        }

        if(tempmax >= 5 && tempmax < 6 ) {
        $('body').append('<div class="seoul-tempmax-35"></div>');
        }

        if(tempmax >= 6 && tempmax < 7 ) {
        $('body').append('<div class="seoul-tempmax-34"></div>');
        }

        if(tempmax >= 7 && tempmax < 8 ) {
        $('body').append('<div class="seoul-tempmax-33"></div>');
        }
        
        if(tempmax >= 8 && tempmax < 9 ) {
        $('body').append('<div class="seoul-tempmax-32"></div>');
        }
        
        if(tempmax >= 9 && tempmax < 10 ) {
        $('body').append('<div class="seoul-tempmax-31"></div>');
        }

        if(tempmax >= 10 && tempmax < 11 ) {
        $('body').append('<div class="seoul-tempmax-30"></div>');
        }

        if(tempmax >= 11 && tempmax < 12 ) {
        $('body').append('<div class="seoul-tempmax-29"></div>');
        }

        if(tempmax >= 12 && tempmax < 13 ) {
        $('body').append('<div class="seoul-tempmax-28"></div>');
        }

        if(tempmax >= 13 && tempmax < 14 ) {
        $('body').append('<div class="seoul-tempmax-27"></div>');
        }

        if(tempmax >= 14 && tempmax < 15 ) {
        $('body').append('<div class="seoul-tempmax-26"></div>');
        }

        if(tempmax >= 15 && tempmax < 16 ) {
        $('body').append('<div class="seoul-tempmax-25"></div>');
        }

        if(tempmax >= 16 && tempmax < 17 ) {
        $('body').append('<div class="seoul-tempmax-24"></div>');
        }

        if(tempmax >= 17 && tempmax < 18 ) {
        $('body').append('<div class="seoul-tempmax-23"></div>');
        }
        
        if(tempmax >= 18 && tempmax < 19 ) {
        $('body').append('<div class="seoul-tempmax-22"></div>');
        }
        
        if(tempmax >= 19 && tempmax < 20 ) {
        $('body').append('<div class="seoul-tempmax-21"></div>');
        }

        if(tempmax >= 20 && tempmax < 21 ) {
        $('body').append('<div class="seoul-tempmax-20"></div>');
        }

        if(tempmax >= 21 && tempmax < 22 ) {
        $('body').append('<div class="seoul-tempmax-19"></div>');
        }

        if(tempmax >= 22 && tempmax < 23 ) {
        $('body').append('<div class="seoul-tempmax-18"></div>');
        }

        if(tempmax >= 23 && tempmax < 24 ) {
        $('body').append('<div class="seoul-tempmax-17"></div>');
        }

        if(tempmax >= 24 && tempmax < 25 ) {
        $('body').append('<div class="seoul-tempmax-16"></div>');
        }

        if(tempmax >= 25 && tempmax < 26 ) {
        $('body').append('<div class="seoul-tempmax-15"></div>');
        }

        if(tempmax >= 26 && tempmax < 27 ) {
        $('body').append('<div class="seoul-tempmax-14"></div>');
        }

        if(tempmax >= 27 && tempmax < 28 ) {
        $('body').append('<div class="seoul-tempmax-13"></div>');
        }
        
        if(tempmax >= 28 && tempmax < 29 ) {
        $('body').append('<div class="seoul-tempmax-12"></div>');
        }
        
        if(tempmax >= 29 && tempmax < 30 ) {
        $('body').append('<div class="seoul-tempmax-11"></div>');
        }

        if(tempmax >= 30 && tempmax < 31 ) {
        $('body').append('<div class="seoul-tempmax-10"></div>');
        }

        if(tempmax >= 31 && tempmax < 32 ) {
        $('body').append('<div class="seoul-tempmax-9"></div>');
        }

        if(tempmax >= 32 && tempmax < 33 ) {
        $('body').append('<div class="seoul-tempmax-8"></div>');
        }

        if(tempmax >= 33 && tempmax < 34 ) {
        $('body').append('<div class="seoul-tempmax-7"></div>');
        }

        if(tempmax >= 34 && tempmax < 35 ) {
        $('body').append('<div class="seoul-tempmax-6"></div>');
        }

        if(tempmax >= 35 && tempmax < 36 ) {
        $('body').append('<div class="seoul-tempmax-5"></div>');
        }

        if(tempmax >= 36 && tempmax < 37 ) {
        $('body').append('<div class="seoul-tempmax-4"></div>');
        }

        if(tempmax >= 37 && tempmax < 38 ) {
        $('body').append('<div class="seoul-tempmax-3"></div>');
        }
        
        if(tempmax >= 38 && tempmax < 39 ) {
        $('body').append('<div class="seoul-tempmax-2"></div>');
        }
        
        if(tempmax >= 39 ) {
        $('body').append('<div class="seoul-tempmax-1"></div>');
        }

        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   
});

