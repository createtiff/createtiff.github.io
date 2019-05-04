var humidity; //Humidity, %

//////////LONDON
$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=2643743&units=metric&APPID=188e55f89ae698f5c272ba31302b4705', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){

            name = results.name;
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;
            
            myWeatherInterpretation();
            }
        });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        

        //JUST SEEING IF THE VALUES COME THROUGH
        
    

        //

        if(humidity >= 0 && humidity < 44 ) {
        $('body').append('<div class="london-humdity-1"><div class="londoncircle"><a href="../london.html">LONDON</a></div></div>');
        }

        if(humidity >= 44 && humidity < 48 ) {
        $('body').append('<div class="london-humdity-2"><div class="londoncircle"><a href="../london.html">LONDON</a></div></div>');
        }

        if(humidity >= 48 && humidity < 52 ) {
        $('body').append('<div class="london-humdity-3"><div class="londoncircle"><a href="../london.html">LONDON</a></div></div>');
        }

        if(humidity >= 52 && humidity < 56 ) {
        $('body').append('<div class="london-humdity-4"><div class="londoncircle"><a href="../london.html">LONDON</a></div></div>');
        }

        if(humidity >= 56 && humidity < 60 ) {
        $('body').append('<div class="london-humdity-5"><div class="londoncircle"><a href="../london.html">LONDON</a></div></div>');
        }

        if(humidity >= 60 && humidity < 64 ) {
        $('body').append('<div class="london-humdity-6"><div class="londoncircle"><a href="../london.html">LONDON</a></div></div>');
        }

        if(humidity >= 64 && humidity < 68 ) {
        $('body').append('<div class="london-humdity-7"><div class="londoncircle"><a href="../london.html">LONDON</a></div></div>');
        }

        if(humidity >= 68 && humidity < 72 ) {
        $('body').append('<div class="london-humdity-8"><div class="londoncircle"><a href="../london.html">LONDON</a></div></div>');
        }

        if(humidity >= 72 && humidity < 76 ) {
        $('body').append('<div class="london-humdity-9"><div class="londoncircle"><a href="../london.html">LONDON</a></div></div>');
        }

        if(humidity >= 76 && humidity < 80 ) {
        $('body').append('<div class="london-humdity-10"><div class="londoncircle"><a href="../london.html">LONDON</a></div></div>');
        }

        if(humidity >= 80 && humidity < 84 ) {
        $('body').append('<div class="london-humdity-11"><div class="londoncircle"><a href="../london.html">LONDON</a></div></div>');
        }

        if(humidity >= 84 && humidity < 88 ) {
        $('body').append('<div class="london-humdity-12"><div class="londoncircle"><a href="../london.html">LONDON</a></div></div>');
        }

        if(humidity >= 88 && humidity < 92 ) {
        $('body').append('<div class="london-humdity-13"><div class="londoncircle"><a href="../london.html">LONDON</a></div></div>');
        }

        if(humidity >= 92 && humidity < 96 ) {
        $('body').append('<div class="london-humdity-14"><div class="londoncircle"><a href="../london.html">LONDON</a></div></div>');
        }

        if(humidity >= 96 && humidity <= 100 ) {
        $('body').append('<div class="london-humdity-15"><div class="londoncircle"><a href="../london.html">LONDON</a></div></div>');
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

            humidity = results.main.humidity;

            myWeatherInterpretation();
            }
        });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH

        $('#newyork').append('Humidity: ' + humidity + '</br>'); 

        //

        if(humidity >= 0 && humidity < 44 ) {
        $('body').append('<div class="newyork-humdity-1"><div class="newyorkcircle"><a href="../newyork.html">NEWYORK</a></div></div>');
        }

        if(humidity >= 44 && humidity < 48 ) {
        $('body').append('<div class="newyork-humdity-2"><div class="newyorkcircle"><a href="../newyork.html">NEWYORK</a></div></div>');
        }

        if(humidity >= 48 && humidity < 52 ) {
        $('body').append('<div class="newyork-humdity-3"><div class="newyorkcircle"><a href="../newyork.html">NEWYORK</a></div></div>');
        }

        if(humidity >= 52 && humidity < 56 ) {
        $('body').append('<div class="newyork-humdity-4"><div class="newyorkcircle"><a href="../newyork.html">NEWYORK</a></div></div>');
        }

        if(humidity >= 56 && humidity < 60 ) {
        $('body').append('<div class="newyork-humdity-5"><div class="newyorkcircle"><a href="../newyork.html">NEWYORK</a></div></div>');
        }

        if(humidity >= 60 && humidity < 64 ) {
        $('body').append('<div class="newyork-humdity-6"><div class="newyorkcircle"><a href="../newyork.html">NEWYORK</a></div></div>');
        }

        if(humidity >= 64 && humidity < 68 ) {
        $('body').append('<div class="newyork-humdity-7"><div class="newyorkcircle"><a href="../newyork.html">NEWYORK</a></div></div>');
        }

        if(humidity >= 68 && humidity < 72 ) {
        $('body').append('<div class="newyork-humdity-8"><div class="newyorkcircle"><a href="../newyork.html">NEWYORK</a></div></div>');
        }

        if(humidity >= 72 && humidity < 76 ) {
        $('body').append('<div class="newyork-humdity-9"><div class="newyorkcircle"><a href="../newyork.html">NEWYORK</a></div></div>');
        }

        if(humidity >= 76 && humidity < 80 ) {
        $('body').append('<div class="newyork-humdity-10"><div class="newyorkcircle"><a href="../newyork.html">NEWYORK</a></div></div>');
        }

        if(humidity >= 80 && humidity < 84 ) {
        $('body').append('<div class="newyork-humdity-11"><div class="newyorkcircle"><a href="../newyork.html">NEWYORK</a></div></div>');
        }

        if(humidity >= 84 && humidity < 88 ) {
        $('body').append('<div class="newyork-humdity-12"><div class="newyorkcircle"><a href="../newyork.html">NEWYORK</a></div></div>');
        }

        if(humidity >= 88 && humidity < 92 ) {
        $('body').append('<div class="newyork-humdity-13"><div class="newyorkcircle"><a href="../newyork.html">NEWYORK</a></div></div>');
        }

        if(humidity >= 92 && humidity < 96 ) {
        $('body').append('<div class="newyork-humdity-14"><div class="newyorkcircle"><a href="../newyork.html">NEWYORK</a></div></div>');
        }

        if(humidity >= 96 && humidity <= 100 ) {
        $('body').append('<div class="newyork-humdity-15"><div class="newyorkcircle"><a href="../newyork.html">NEWYORK</a></div></div>');
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
            
            humidity = results.main.humidity;

            myWeatherInterpretation();
        }
    });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH
        
        $('#tokyo').append('Humidity: ' + humidity + '</br>');
        
        //

        if(humidity >= 0 && humidity < 44 ) {
        $('body').append('<div class="tokyo-humdity-1"><div class="tokyocircle"><a href="../tokyo.html">TOKYO</a></div></div>');
        }

        if(humidity >= 44 && humidity < 48 ) {
        $('body').append('<div class="tokyo-humdity-2"><div class="tokyocircle"><a href="../tokyo.html">TOKYO</a></div></div>');
        }

        if(humidity >= 48 && humidity < 52 ) {
        $('body').append('<div class="tokyo-humdity-3"><div class="tokyocircle"><a href="../tokyo.html">TOKYO</a></div></div>');
        }

        if(humidity >= 52 && humidity < 56 ) {
        $('body').append('<div class="tokyo-humdity-4"><div class="tokyocircle"><a href="../tokyo.html">TOKYO</a></div></div>');
        }

        if(humidity >= 56 && humidity < 60 ) {
        $('body').append('<div class="tokyo-humdity-5"><div class="tokyocircle"><a href="../tokyo.html">TOKYO</a></div></div>');
        }

        if(humidity >= 60 && humidity < 64 ) {
        $('body').append('<div class="tokyo-humdity-6"><div class="tokyocircle"><a href="../tokyo.html">TOKYO</a></div></div>');
        }

        if(humidity >= 64 && humidity < 68 ) {
        $('body').append('<div class="tokyo-humdity-7"><div class="tokyocircle"><a href="../tokyo.html">TOKYO</a></div></div>');
        }

        if(humidity >= 68 && humidity < 72 ) {
        $('body').append('<div class="tokyo-humdity-8"><div class="tokyocircle"><a href="../tokyo.html">TOKYO</a></div></div>');
        }

        if(humidity >= 72 && humidity < 76 ) {
        $('body').append('<div class="tokyo-humdity-9"><div class="tokyocircle"><a href="../tokyo.html">TOKYO</a></div></div>');
        }

        if(humidity >= 76 && humidity < 80 ) {
        $('body').append('<div class="tokyo-humdity-10"><div class="tokyocircle"><a href="../tokyo.html">TOKYO</a></div></div>');
        }

        if(humidity >= 80 && humidity < 84 ) {
        $('body').append('<div class="tokyo-humdity-11"><div class="tokyocircle"><a href="../tokyo.html">TOKYO</a></div></div>');
        }

        if(humidity >= 84 && humidity < 88 ) {
        $('body').append('<div class="tokyo-humdity-12"><div class="tokyocircle"><a href="../tokyo.html">TOKYO</a></div></div>');
        }

        if(humidity >= 88 && humidity < 92 ) {
        $('body').append('<div class="tokyo-humdity-13"><div class="tokyocircle"><a href="../tokyo.html">TOKYO</a></div></div>');
        }

        if(humidity >= 92 && humidity < 96 ) {
        $('body').append('<div class="tokyo-humdity-14"><div class="tokyocircle"><a href="../tokyo.html">TOKYO</a></div></div>');
        }

        if(humidity >= 96 && humidity <= 100 ) {
        $('body').append('<div class="tokyo-humdity-15"><div class="tokyocircle"><a href="../tokyo.html">TOKYO</a></div></div>');
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

            humidity = results.main.humidity;

            myWeatherInterpretation();
        }
    });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH
        
        $('#seoul').append('Humidity: ' + humidity + '</br>');
        
        //

        if(humidity >= 0 && humidity < 44 ) {
        $('body').append('<div class="seoul-humdity-1"><div class="seoulcircle"><a href="../seoul.html">SEOUL</a></div></div>');
        }

        if(humidity >= 44 && humidity < 48 ) {
        $('body').append('<div class="seoul-humdity-2"><div class="seoulcircle"><a href="../seoul.html">SEOUL</a></div></div>');
        }

        if(humidity >= 48 && humidity < 52 ) {
        $('body').append('<div class="seoul-humdity-3"><div class="seoulcircle"><a href="../seoul.html">SEOUL</a></div></div>');
        }

        if(humidity >= 52 && humidity < 56 ) {
        $('body').append('<div class="seoul-humdity-4"><div class="seoulcircle"><a href="../seoul.html">SEOUL</a></div></div>');
        }

        if(humidity >= 56 && humidity < 60 ) {
        $('body').append('<div class="seoul-humdity-5"><div class="seoulcircle"><a href="../seoul.html">SEOUL</a></div></div>');
        }

        if(humidity >= 60 && humidity < 64 ) {
        $('body').append('<div class="seoul-humdity-6"><div class="seoulcircle"><a href="../seoul.html">SEOUL</a></div></div>');
        }

        if(humidity >= 64 && humidity < 68 ) {
        $('body').append('<div class="seoul-humdity-7"><div class="seoulcircle"><a href="../seoul.html">SEOUL</a></div></div>');
        }

        if(humidity >= 68 && humidity < 72 ) {
        $('body').append('<div class="seoul-humdity-8"><div class="seoulcircle"><a href="../seoul.html">SEOUL</a></div></div>');
        }

        if(humidity >= 72 && humidity < 76 ) {
        $('body').append('<div class="seoul-humdity-9"><div class="seoulcircle"><a href="../seoul.html">SEOUL</a></div></div>');
        }

        if(humidity >= 76 && humidity < 80 ) {
        $('body').append('<div class="seoul-humdity-10"><div class="seoulcircle"><a href="../seoul.html">SEOUL</a></div></div>');
        }

        if(humidity >= 80 && humidity < 84 ) {
        $('body').append('<div class="seoul-humdity-11"><div class="seoulcircle"><a href="../seoul.html">SEOUL</a></div></div>');
        }

        if(humidity >= 84 && humidity < 88 ) {
        $('body').append('<div class="seoul-humdity-12"><div class="seoulcircle"><a href="../seoul.html">SEOUL</a></div></div>');
        }

        if(humidity >= 88 && humidity < 92 ) {
        $('body').append('<div class="seoul-humdity-13"><div class="seoulcircle"><a href="../seoul.html">SEOUL</a></div></div>');
        }

        if(humidity >= 92 && humidity < 96 ) {
        $('body').append('<div class="seoul-humdity-14"><div class="seoulcircle"><a href="../seoul.html">SEOUL</a></div></div>');
        }

        if(humidity >= 96 && humidity <= 100 ) {
        $('body').append('<div class="seoul-humdity-15"><div class="seoulcircle"><a href="../seoul.html">SEOUL</a></div></div>');
        }

        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   
});