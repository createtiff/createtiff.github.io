var cloudiness; //Cloudiness, %

//////////LONDON
$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=2643743&units=metric&APPID=188e55f89ae698f5c272ba31302b4705', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){

            cloudiness = results.clouds.all;
            
            myWeatherInterpretation();
            }
        });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        

        //JUST SEEING IF THE VALUES COME THROUGH
        
        $('#london').append('cloudiness: ' + cloudiness + '</br>'); 

        //

        if(cloudiness >= 0 && cloudiness < 13 ) {
        $('body').append('<div class="london-cloudiness-1"></div>');
        }

        if(cloudiness >= 13 && cloudiness < 16 ) {
        $('body').append('<div class="london-cloudiness-2"></div>');
        }

        if(cloudiness >= 16 && cloudiness < 19 ) {
        $('body').append('<div class="london-cloudiness-3"></div>');
        }

        if(cloudiness >= 19 && cloudiness < 22 ) {
        $('body').append('<div class="london-cloudiness-4"></div>');
        }

        if(cloudiness >= 22 && cloudiness < 25 ) {
        $('body').append('<div class="london-cloudiness-5"></div>');
        }

        if(cloudiness >= 25 && cloudiness < 28 ) {
        $('body').append('<div class="london-cloudiness-6"></div>');
        }

        if(cloudiness >= 28 && cloudiness < 31 ) {
        $('body').append('<div class="london-cloudiness-7"></div>');
        }

        if(cloudiness >= 31 && cloudiness < 34 ) {
        $('body').append('<div class="london-cloudiness-8"></div>');
        }

        if(cloudiness >= 34 && cloudiness < 37 ) {
        $('body').append('<div class="london-cloudiness-9"></div>');
        }

        if(cloudiness >= 37 && cloudiness < 40 ) {
        $('body').append('<div class="london-cloudiness-10"></div>');
        }

        if(cloudiness >= 40 && cloudiness < 43 ) {
        $('body').append('<div class="london-cloudiness-11"></div>');
        }

        if(cloudiness >= 43 && cloudiness < 46 ) {
        $('body').append('<div class="london-cloudiness-12"></div>');
        }

        if(cloudiness >= 46 && cloudiness < 49 ) {
        $('body').append('<div class="london-cloudiness-13"></div>');
        }

        if(cloudiness >= 49 && cloudiness < 52 ) {
        $('body').append('<div class="london-cloudiness-14"></div>');
        }

        if(cloudiness >= 52 && cloudiness < 55 ) {
        $('body').append('<div class="london-cloudiness-15"></div>');
        }

        if(cloudiness >= 55 && cloudiness < 58 ) {
        $('body').append('<div class="london-cloudiness-16"></div>');
        }

        if(cloudiness >= 58 && cloudiness < 61 ) {
        $('body').append('<div class="london-cloudiness-17"></div>');
        }

        if(cloudiness >= 61 && cloudiness < 64 ) {
        $('body').append('<div class="london-cloudiness-18"></div>');
        }

        if(cloudiness >= 64 && cloudiness < 67 ) {
        $('body').append('<div class="london-cloudiness-19"></div>');
        }

        if(cloudiness >= 67 && cloudiness < 70 ) {
        $('body').append('<div class="london-cloudiness-20"></div>');
        }

        if(cloudiness >= 70 && cloudiness < 73 ) {
        $('body').append('<div class="london-cloudiness-21"></div>');
        }

        if(cloudiness >= 73 && cloudiness < 76 ) {
        $('body').append('<div class="london-cloudiness-22"></div>');
        }

        if(cloudiness >= 76 && cloudiness < 79 ) {
        $('body').append('<div class="london-cloudiness-23"></div>');
        }

        if(cloudiness >= 79 && cloudiness < 82 ) {
        $('body').append('<div class="london-cloudiness-24"></div>');
        }

        if(cloudiness >= 82 && cloudiness < 85 ) {
        $('body').append('<div class="london-cloudiness-25"></div>');
        }

        if(cloudiness >= 85 && cloudiness < 88 ) {
        $('body').append('<div class="london-cloudiness-26"></div>');
        }

        if(cloudiness >= 88 && cloudiness < 91 ) {
        $('body').append('<div class="london-cloudiness-27"></div>');
        }

        if(cloudiness >= 91 && cloudiness < 94 ) {
        $('body').append('<div class="london-cloudiness-28"></div>');
        }

        if(cloudiness >= 94 && cloudiness < 97 ) {
        $('body').append('<div class="london-cloudiness-29"></div>');
        }

        if(cloudiness >= 97 && cloudiness <= 100 ) {
        $('body').append('<div class="london-cloudiness-30"></div>');
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

            cloudiness = results.clouds.all;

            myWeatherInterpretation();
            }
        });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH

        $('#newyork').append('cloudiness: ' + cloudiness + '</br>'); 

        //

                if(cloudiness >= 0 && cloudiness < 13 ) {
        $('body').append('<div class="newyork-cloudiness-1"></div>');
        }

        if(cloudiness >= 13 && cloudiness < 16 ) {
        $('body').append('<div class="newyork-cloudiness-2"></div>');
        }

        if(cloudiness >= 16 && cloudiness < 19 ) {
        $('body').append('<div class="newyork-cloudiness-3"></div>');
        }

        if(cloudiness >= 19 && cloudiness < 22 ) {
        $('body').append('<div class="newyork-cloudiness-4"></div>');
        }

        if(cloudiness >= 22 && cloudiness < 25 ) {
        $('body').append('<div class="newyork-cloudiness-5"></div>');
        }

        if(cloudiness >= 25 && cloudiness < 28 ) {
        $('body').append('<div class="newyork-cloudiness-6"></div>');
        }

        if(cloudiness >= 28 && cloudiness < 31 ) {
        $('body').append('<div class="newyork-cloudiness-7"></div>');
        }

        if(cloudiness >= 31 && cloudiness < 34 ) {
        $('body').append('<div class="newyork-cloudiness-8"></div>');
        }

        if(cloudiness >= 34 && cloudiness < 37 ) {
        $('body').append('<div class="newyork-cloudiness-9"></div>');
        }

        if(cloudiness >= 37 && cloudiness < 40 ) {
        $('body').append('<div class="newyork-cloudiness-10"></div>');
        }

        if(cloudiness >= 40 && cloudiness < 43 ) {
        $('body').append('<div class="newyork-cloudiness-11"></div>');
        }

        if(cloudiness >= 43 && cloudiness < 46 ) {
        $('body').append('<div class="newyork-cloudiness-12"></div>');
        }

        if(cloudiness >= 46 && cloudiness < 49 ) {
        $('body').append('<div class="newyork-cloudiness-13"></div>');
        }

        if(cloudiness >= 49 && cloudiness < 52 ) {
        $('body').append('<div class="newyork-cloudiness-14"></div>');
        }

        if(cloudiness >= 52 && cloudiness < 55 ) {
        $('body').append('<div class="newyork-cloudiness-15"></div>');
        }

        if(cloudiness >= 55 && cloudiness < 58 ) {
        $('body').append('<div class="newyork-cloudiness-16"></div>');
        }

        if(cloudiness >= 58 && cloudiness < 61 ) {
        $('body').append('<div class="newyork-cloudiness-17"></div>');
        }

        if(cloudiness >= 61 && cloudiness < 64 ) {
        $('body').append('<div class="newyork-cloudiness-18"></div>');
        }

        if(cloudiness >= 64 && cloudiness < 67 ) {
        $('body').append('<div class="newyork-cloudiness-19"></div>');
        }

        if(cloudiness >= 67 && cloudiness < 70 ) {
        $('body').append('<div class="newyork-cloudiness-20"></div>');
        }

        if(cloudiness >= 70 && cloudiness < 73 ) {
        $('body').append('<div class="newyork-cloudiness-21"></div>');
        }

        if(cloudiness >= 73 && cloudiness < 76 ) {
        $('body').append('<div class="newyork-cloudiness-22"></div>');
        }

        if(cloudiness >= 76 && cloudiness < 79 ) {
        $('body').append('<div class="newyork-cloudiness-23"></div>');
        }

        if(cloudiness >= 79 && cloudiness < 82 ) {
        $('body').append('<div class="newyork-cloudiness-24"></div>');
        }

        if(cloudiness >= 82 && cloudiness < 85 ) {
        $('body').append('<div class="newyork-cloudiness-25"></div>');
        }

        if(cloudiness >= 85 && cloudiness < 88 ) {
        $('body').append('<div class="newyork-cloudiness-26"></div>');
        }

        if(cloudiness >= 88 && cloudiness < 91 ) {
        $('body').append('<div class="newyork-cloudiness-27"></div>');
        }

        if(cloudiness >= 91 && cloudiness < 94 ) {
        $('body').append('<div class="newyork-cloudiness-28"></div>');
        }

        if(cloudiness >= 94 && cloudiness < 97 ) {
        $('body').append('<div class="newyork-cloudiness-29"></div>');
        }

        if(cloudiness >= 97 && cloudiness <= 100 ) {
        $('body').append('<div class="newyork-cloudiness-30"></div>');
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
            
            cloudiness = results.clouds.all;

            myWeatherInterpretation();
        }
    });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH
        
        $('#tokyo').append('cloudiness: ' + cloudiness + '</br>');
        
        //

                if(cloudiness >= 0 && cloudiness < 13 ) {
        $('body').append('<div class="tokyo-cloudiness-1"></div>');
        }

        if(cloudiness >= 13 && cloudiness < 16 ) {
        $('body').append('<div class="tokyo-cloudiness-2"></div>');
        }

        if(cloudiness >= 16 && cloudiness < 19 ) {
        $('body').append('<div class="tokyo-cloudiness-3"></div>');
        }

        if(cloudiness >= 19 && cloudiness < 22 ) {
        $('body').append('<div class="tokyo-cloudiness-4"></div>');
        }

        if(cloudiness >= 22 && cloudiness < 25 ) {
        $('body').append('<div class="tokyo-cloudiness-5"></div>');
        }

        if(cloudiness >= 25 && cloudiness < 28 ) {
        $('body').append('<div class="tokyo-cloudiness-6"></div>');
        }

        if(cloudiness >= 28 && cloudiness < 31 ) {
        $('body').append('<div class="tokyo-cloudiness-7"></div>');
        }

        if(cloudiness >= 31 && cloudiness < 34 ) {
        $('body').append('<div class="tokyo-cloudiness-8"></div>');
        }

        if(cloudiness >= 34 && cloudiness < 37 ) {
        $('body').append('<div class="tokyo-cloudiness-9"></div>');
        }

        if(cloudiness >= 37 && cloudiness < 40 ) {
        $('body').append('<div class="tokyo-cloudiness-10"></div>');
        }

        if(cloudiness >= 40 && cloudiness < 43 ) {
        $('body').append('<div class="tokyo-cloudiness-11"></div>');
        }

        if(cloudiness >= 43 && cloudiness < 46 ) {
        $('body').append('<div class="tokyo-cloudiness-12"></div>');
        }

        if(cloudiness >= 46 && cloudiness < 49 ) {
        $('body').append('<div class="tokyo-cloudiness-13"></div>');
        }

        if(cloudiness >= 49 && cloudiness < 52 ) {
        $('body').append('<div class="tokyo-cloudiness-14"></div>');
        }

        if(cloudiness >= 52 && cloudiness < 55 ) {
        $('body').append('<div class="tokyo-cloudiness-15"></div>');
        }

        if(cloudiness >= 55 && cloudiness < 58 ) {
        $('body').append('<div class="tokyo-cloudiness-16"></div>');
        }

        if(cloudiness >= 58 && cloudiness < 61 ) {
        $('body').append('<div class="tokyo-cloudiness-17"></div>');
        }

        if(cloudiness >= 61 && cloudiness < 64 ) {
        $('body').append('<div class="tokyo-cloudiness-18"></div>');
        }

        if(cloudiness >= 64 && cloudiness < 67 ) {
        $('body').append('<div class="tokyo-cloudiness-19"></div>');
        }

        if(cloudiness >= 67 && cloudiness < 70 ) {
        $('body').append('<div class="tokyo-cloudiness-20"></div>');
        }

        if(cloudiness >= 70 && cloudiness < 73 ) {
        $('body').append('<div class="tokyo-cloudiness-21"></div>');
        }

        if(cloudiness >= 73 && cloudiness < 76 ) {
        $('body').append('<div class="tokyo-cloudiness-22"></div>');
        }

        if(cloudiness >= 76 && cloudiness < 79 ) {
        $('body').append('<div class="tokyo-cloudiness-23"></div>');
        }

        if(cloudiness >= 79 && cloudiness < 82 ) {
        $('body').append('<div class="tokyo-cloudiness-24"></div>');
        }

        if(cloudiness >= 82 && cloudiness < 85 ) {
        $('body').append('<div class="tokyo-cloudiness-25"></div>');
        }

        if(cloudiness >= 85 && cloudiness < 88 ) {
        $('body').append('<div class="tokyo-cloudiness-26"></div>');
        }

        if(cloudiness >= 88 && cloudiness < 91 ) {
        $('body').append('<div class="tokyo-cloudiness-27"></div>');
        }

        if(cloudiness >= 91 && cloudiness < 94 ) {
        $('body').append('<div class="tokyo-cloudiness-28"></div>');
        }

        if(cloudiness >= 94 && cloudiness < 97 ) {
        $('body').append('<div class="tokyo-cloudiness-29"></div>');
        }

        if(cloudiness >= 97 && cloudiness <= 100 ) {
        $('body').append('<div class="tokyo-cloudiness-30"></div>');
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

            cloudiness = results.clouds.all;

            myWeatherInterpretation();
        }
    });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH
        
        $('#seoul').append('cloudiness: ' + cloudiness + '</br>');
        
        //
        
        if(cloudiness >= 0 && cloudiness < 13 ) {
        $('body').append('<div class="seoul-cloudiness-1"></div>');
        }

        if(cloudiness >= 13 && cloudiness < 16 ) {
        $('body').append('<div class="seoul-cloudiness-2"></div>');
        }

        if(cloudiness >= 16 && cloudiness < 19 ) {
        $('body').append('<div class="seoul-cloudiness-3"></div>');
        }

        if(cloudiness >= 19 && cloudiness < 22 ) {
        $('body').append('<div class="seoul-cloudiness-4"></div>');
        }

        if(cloudiness >= 22 && cloudiness < 25 ) {
        $('body').append('<div class="seoul-cloudiness-5"></div>');
        }

        if(cloudiness >= 25 && cloudiness < 28 ) {
        $('body').append('<div class="seoul-cloudiness-6"></div>');
        }

        if(cloudiness >= 28 && cloudiness < 31 ) {
        $('body').append('<div class="seoul-cloudiness-7"></div>');
        }

        if(cloudiness >= 31 && cloudiness < 34 ) {
        $('body').append('<div class="seoul-cloudiness-8"></div>');
        }

        if(cloudiness >= 34 && cloudiness < 37 ) {
        $('body').append('<div class="seoul-cloudiness-9"></div>');
        }

        if(cloudiness >= 37 && cloudiness < 40 ) {
        $('body').append('<div class="seoul-cloudiness-10"></div>');
        }

        if(cloudiness >= 40 && cloudiness < 43 ) {
        $('body').append('<div class="seoul-cloudiness-11"></div>');
        }

        if(cloudiness >= 43 && cloudiness < 46 ) {
        $('body').append('<div class="seoul-cloudiness-12"></div>');
        }

        if(cloudiness >= 46 && cloudiness < 49 ) {
        $('body').append('<div class="seoul-cloudiness-13"></div>');
        }

        if(cloudiness >= 49 && cloudiness < 52 ) {
        $('body').append('<div class="seoul-cloudiness-14"></div>');
        }

        if(cloudiness >= 52 && cloudiness < 55 ) {
        $('body').append('<div class="seoul-cloudiness-15"></div>');
        }

        if(cloudiness >= 55 && cloudiness < 58 ) {
        $('body').append('<div class="seoul-cloudiness-16"></div>');
        }

        if(cloudiness >= 58 && cloudiness < 61 ) {
        $('body').append('<div class="seoul-cloudiness-17"></div>');
        }

        if(cloudiness >= 61 && cloudiness < 64 ) {
        $('body').append('<div class="seoul-cloudiness-18"></div>');
        }

        if(cloudiness >= 64 && cloudiness < 67 ) {
        $('body').append('<div class="seoul-cloudiness-19"></div>');
        }

        if(cloudiness >= 67 && cloudiness < 70 ) {
        $('body').append('<div class="seoul-cloudiness-20"></div>');
        }

        if(cloudiness >= 70 && cloudiness < 73 ) {
        $('body').append('<div class="seoul-cloudiness-21"></div>');
        }

        if(cloudiness >= 73 && cloudiness < 76 ) {
        $('body').append('<div class="seoul-cloudiness-22"></div>');
        }

        if(cloudiness >= 76 && cloudiness < 79 ) {
        $('body').append('<div class="seoul-cloudiness-23"></div>');
        }

        if(cloudiness >= 79 && cloudiness < 82 ) {
        $('body').append('<div class="seoul-cloudiness-24"></div>');
        }

        if(cloudiness >= 82 && cloudiness < 85 ) {
        $('body').append('<div class="seoul-cloudiness-25"></div>');
        }

        if(cloudiness >= 85 && cloudiness < 88 ) {
        $('body').append('<div class="seoul-cloudiness-26"></div>');
        }

        if(cloudiness >= 88 && cloudiness < 91 ) {
        $('body').append('<div class="seoul-cloudiness-27"></div>');
        }

        if(cloudiness >= 91 && cloudiness < 94 ) {
        $('body').append('<div class="seoul-cloudiness-28"></div>');
        }

        if(cloudiness >= 94 && cloudiness < 97 ) {
        $('body').append('<div class="seoul-cloudiness-29"></div>');
        }

        if(cloudiness >= 97 && cloudiness <= 100 ) {
        $('body').append('<div class="seoul-cloudiness-30"></div>');
        }

        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   
});

