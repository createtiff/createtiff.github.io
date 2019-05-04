var pressure; //Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa

//LONDON
$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=2643743&units=metric&APPID=188e55f89ae698f5c272ba31302b4705', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){

            pressure = results.main.pressure;
            
            myWeatherInterpretation();
            }
        });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        

        //JUST SEEING IF THE VALUES COME THROUGH
        
        $('#london').append('pressure: ' + pressure + '</br>'); 

        //

        if(pressure >= 0 && pressure < 44 ) {
        $('body').append('<div class="london-humdity-1"><div class="londoncircle"></div></div>');
        }

        if(pressure >= 44 && pressure < 48 ) {
        $('body').append('<div class="london-humdity-2"><div class="londoncircle"></div></div>');
        }

        if(pressure >= 48 && pressure < 52 ) {
        $('body').append('<div class="llondon-humdity-3"><div class="londoncircle"></div></div>');
        }

        if(pressure >= 52 && pressure < 56 ) {
        $('body').append('<div class="london-humdity-4"><div class="londoncircle"></div></div>');
        }

        if(pressure >= 56 && pressure < 60 ) {
        $('body').append('<div class="london-humdity-5"><div class="londoncircle"></div></div>');
        }

        if(pressure >= 60 && pressure < 64 ) {
        $('body').append('<div class="london-humdity-6"><div class="londoncircle"></div></div>');
        }

        if(pressure >= 64 && pressure < 68 ) {
        $('body').append('<div class="london-humdity-7"><div class="londoncircle"></div></div>');
        }

        if(pressure >= 68 && pressure < 72 ) {
        $('body').append('<div class="london-humdity-8"><div class="londoncircle"></div></div>');
        }

        if(pressure >= 72 && pressure < 76 ) {
        $('body').append('<div class="london-humdity-9"><div class="londoncircle"></div></div>');
        }

        if(pressure >= 76 && pressure < 80 ) {
        $('body').append('<div class="london-humdity-10"><div class="londoncircle"></div></div>');
        }

        if(pressure >= 80 && pressure < 84 ) {
        $('body').append('<div class="london-humdity-11"><div class="londoncircle"></div></div>');
        }

        if(pressure >= 84 && pressure < 88 ) {
        $('body').append('<div class="london-humdity-12"><div class="londoncircle"></div></div>');
        }

        if(pressure >= 88 && pressure < 92 ) {
        $('body').append('<div class="london-humdity-13"><div class="londoncircle"></div></div>');
        }

        if(pressure >= 92 && pressure < 96 ) {
        $('body').append('<div class="london-humdity-14"><div class="londoncircle"></div></div>');
        }

        if(pressure >= 96 && pressure <= 100 ) {
        $('body').append('<div class="london-humdity-15"><div class="londoncircle"></div></div>');
        }

        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   
});


//NEW YORK
$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=5128581&units=metric&APPID=188e55f89ae698f5c272ba31302b4705', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){

            pressure = results.main.pressure;

            myWeatherInterpretation();
            }
        });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH

        $('#newyork').append('pressure: ' + pressure + '</br>'); 

        //
     
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   
});




//SEOUL
$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1835848&units=metric&APPID=188e55f89ae698f5c272ba31302b4705', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){

            pressure = results.main.pressure;

            myWeatherInterpretation();
        }
    });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH
        
        $('#seoul').append('pressure: ' + pressure + '</br>');
        

        //

        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   


});

//TOKYO
$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1850147&units=metric&APPID=188e55f89ae698f5c272ba31302b4705', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            
            pressure = results.main.pressure;

            myWeatherInterpretation();
        }
    });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH
        
        $('#tokyo').append('pressure: ' + pressure + '</br>');
        
        //

        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   


});