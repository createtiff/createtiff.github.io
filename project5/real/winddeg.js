var winddeg; //Wind direction, degrees (meteorological)

//////////LONDON
$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=2643743&units=metric&APPID=188e55f89ae698f5c272ba31302b4705', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){

            winddeg = results.wind.deg;
            
            myWeatherInterpretation();
            }
        });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        

        //JUST SEEING IF THE VALUES COME THROUGH
        
        $('#london').append('winddeg: ' + winddeg + '</br>'); 

        //

        if(winddeg >= 0 && winddeg < 8 ) {
        $('body').append('<div class="london-winddeg-1"></div>');
        }

        if(winddeg >= 8 && winddeg < 16 ) {
        $('body').append('<div class="london-winddeg-2"></div>');
        }

        if(winddeg >= 16 && winddeg < 24 ) {
        $('body').append('<div class="london-winddeg-3"></div>');
        }

        if(winddeg >= 24 && winddeg < 32 ) {
        $('body').append('<div class="london-winddeg-4"></div>');
        }

        if(winddeg >= 32 && winddeg < 40 ) {
        $('body').append('<div class="london-winddeg-5"></div>');
        }

        if(winddeg >= 40 && winddeg < 48 ) {
        $('body').append('<div class="london-winddeg-6"></div>');
        }

        if(winddeg >= 48 && winddeg < 56 ) {
        $('body').append('<div class="london-winddeg-7"></div>');
        }

        if(winddeg >= 56 && winddeg < 64 ) {
        $('body').append('<div class="london-winddeg-8"></div>');
        }

        if(winddeg >= 64 && winddeg < 72 ) {
        $('body').append('<div class="london-winddeg-9"></div>');
        }

        if(winddeg >= 72 && winddeg < 80 ) {
        $('body').append('<div class="london-winddeg-10"></div>');
        }

        if(winddeg >= 80 && winddeg < 88 ) {
        $('body').append('<div class="london-winddeg-11"></div>');
        }

        if(winddeg >= 88 && winddeg < 96 ) {
        $('body').append('<div class="london-winddeg-12"></div>');
        }

        if(winddeg >= 96 && winddeg < 104 ) {
        $('body').append('<div class="london-winddeg-13"></div>');
        }

        if(winddeg >= 104 && winddeg < 112 ) {
        $('body').append('<div class="london-winddeg-14"></div>');
        }

        if(winddeg >= 112 && winddeg < 120 ) {
        $('body').append('<div class="london-winddeg-15"></div>');
        }

        if(winddeg >= 120 && winddeg < 128 ) {
        $('body').append('<div class="london-winddeg-16"></div>');
        }

        if(winddeg >= 128 && winddeg < 136 ) {
        $('body').append('<div class="london-winddeg-17"></div>');
        }

        if(winddeg >= 136 && winddeg < 144 ) {
        $('body').append('<div class="london-winddeg-18"></div>');
        }

        if(winddeg >= 144 && winddeg < 152 ) {
        $('body').append('<div class="london-winddeg-19"></div>');
        }

        if(winddeg >= 152 && winddeg < 160 ) {
        $('body').append('<div class="london-winddeg-20"></div>');
        }

        if(winddeg >= 160 && winddeg < 168 ) {
        $('body').append('<div class="london-winddeg-21"></div>');
        }

        if(winddeg >= 168 && winddeg < 176 ) {
        $('body').append('<div class="london-winddeg-22"></div>');
        }

        if(winddeg >= 176 && winddeg < 184 ) {
        $('body').append('<div class="london-winddeg-23"></div>');
        }

        if(winddeg >= 184 && winddeg < 192 ) {
        $('body').append('<div class="london-winddeg-24"></div>');
        }

        if(winddeg >= 192 && winddeg < 200 ) {
        $('body').append('<div class="london-winddeg-25"></div>');
        }

        if(winddeg >= 200 && winddeg < 208 ) {
        $('body').append('<div class="london-winddeg-26"></div>');
        }

        if(winddeg >= 208 && winddeg < 216 ) {
        $('body').append('<div class="london-winddeg-27"></div>');
        }

        if(winddeg >= 216 && winddeg < 224 ) {
        $('body').append('<div class="london-winddeg-28"></div>');
        }

        if(winddeg >= 224 && winddeg < 232 ) {
        $('body').append('<div class="london-winddeg-29"></div>');
        }

        if(winddeg >= 232 && winddeg < 240 ) {
        $('body').append('<div class="london-winddeg-30"></div>');
        }

        if(winddeg >= 240 && winddeg < 248 ) {
        $('body').append('<div class="london-winddeg-31"></div>');
        }

        if(winddeg >= 248 && winddeg < 256 ) {
        $('body').append('<div class="london-winddeg-32"></div>');
        }

        if(winddeg >= 256 && winddeg < 264 ) {
        $('body').append('<div class="london-winddeg-33"></div>');
        }

        if(winddeg >= 264 && winddeg < 272 ) {
        $('body').append('<div class="london-winddeg-34"></div>');
        }

        if(winddeg >= 272 && winddeg < 280 ) {
        $('body').append('<div class="london-winddeg-35"></div>');
        }

        if(winddeg >= 280 && winddeg < 288 ) {
        $('body').append('<div class="london-winddeg-36"></div>');
        }

        if(winddeg >= 288 && winddeg < 296 ) {
        $('body').append('<div class="london-winddeg-37"></div>');
        }

        if(winddeg >= 296 && winddeg < 304 ) {
        $('body').append('<div class="london-winddeg-38"></div>');
        }

        if(winddeg >= 304 && winddeg < 312 ) {
        $('body').append('<div class="london-winddeg-39"></div>');
        }

        if(winddeg >= 312 && winddeg < 320 ) {
        $('body').append('<div class="london-winddeg-40"></div>');
        }

        if(winddeg >= 320 && winddeg < 328 ) {
        $('body').append('<div class="london-winddeg-41"></div>');
        }

        if(winddeg >= 328 && winddeg < 336 ) {
        $('body').append('<div class="london-winddeg-42"></div>');
        }

        if(winddeg >= 336 && winddeg < 344 ) {
        $('body').append('<div class="london-winddeg-43"></div>');
        }

        if(winddeg >= 344 && winddeg < 352 ) {
        $('body').append('<div class="london-winddeg-44"></div>');
        }

        if(winddeg >= 352 && winddeg <= 360 ) {
        $('body').append('<div class="london-winddeg-45"></div>');
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

            winddeg = results.wind.deg;

            myWeatherInterpretation();
            }
        });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH

        $('#newyork').append('winddeg: ' + winddeg + '</br>'); 

        //
                if(winddeg >= 0 && winddeg < 8 ) {
        $('body').append('<div class="newyork-winddeg-1"></div>');
        }

        if(winddeg >= 8 && winddeg < 16 ) {
        $('body').append('<div class="newyork-winddeg-2"></div>');
        }

        if(winddeg >= 16 && winddeg < 24 ) {
        $('body').append('<div class="newyork-winddeg-3"></div>');
        }

        if(winddeg >= 24 && winddeg < 32 ) {
        $('body').append('<div class="newyork-winddeg-4"></div>');
        }

        if(winddeg >= 32 && winddeg < 40 ) {
        $('body').append('<div class="newyork-winddeg-5"></div>');
        }

        if(winddeg >= 40 && winddeg < 48 ) {
        $('body').append('<div class="newyork-winddeg-6"></div>');
        }

        if(winddeg >= 48 && winddeg < 56 ) {
        $('body').append('<div class="newyork-winddeg-7"></div>');
        }

        if(winddeg >= 56 && winddeg < 64 ) {
        $('body').append('<div class="newyork-winddeg-8"></div>');
        }

        if(winddeg >= 64 && winddeg < 72 ) {
        $('body').append('<div class="newyork-winddeg-9"></div>');
        }

        if(winddeg >= 72 && winddeg < 80 ) {
        $('body').append('<div class="newyork-winddeg-10"></div>');
        }

        if(winddeg >= 80 && winddeg < 88 ) {
        $('body').append('<div class="newyork-winddeg-11"></div>');
        }

        if(winddeg >= 88 && winddeg < 96 ) {
        $('body').append('<div class="newyork-winddeg-12"></div>');
        }

        if(winddeg >= 96 && winddeg < 104 ) {
        $('body').append('<div class="newyork-winddeg-13"></div>');
        }

        if(winddeg >= 104 && winddeg < 112 ) {
        $('body').append('<div class="newyork-winddeg-14"></div>');
        }

        if(winddeg >= 112 && winddeg < 120 ) {
        $('body').append('<div class="newyork-winddeg-15"></div>');
        }

        if(winddeg >= 120 && winddeg < 128 ) {
        $('body').append('<div class="newyork-winddeg-16"></div>');
        }

        if(winddeg >= 128 && winddeg < 136 ) {
        $('body').append('<div class="newyork-winddeg-17"></div>');
        }

        if(winddeg >= 136 && winddeg < 144 ) {
        $('body').append('<div class="newyork-winddeg-18"></div>');
        }

        if(winddeg >= 144 && winddeg < 152 ) {
        $('body').append('<div class="newyork-winddeg-19"></div>');
        }

        if(winddeg >= 152 && winddeg < 160 ) {
        $('body').append('<div class="newyork-winddeg-20"></div>');
        }

        if(winddeg >= 160 && winddeg < 168 ) {
        $('body').append('<div class="newyork-winddeg-21"></div>');
        }

        if(winddeg >= 168 && winddeg < 176 ) {
        $('body').append('<div class="newyork-winddeg-22"></div>');
        }

        if(winddeg >= 176 && winddeg < 184 ) {
        $('body').append('<div class="newyork-winddeg-23"></div>');
        }

        if(winddeg >= 184 && winddeg < 192 ) {
        $('body').append('<div class="newyork-winddeg-24"></div>');
        }

        if(winddeg >= 192 && winddeg < 200 ) {
        $('body').append('<div class="newyork-winddeg-25"></div>');
        }

        if(winddeg >= 200 && winddeg < 208 ) {
        $('body').append('<div class="newyork-winddeg-26"></div>');
        }

        if(winddeg >= 208 && winddeg < 216 ) {
        $('body').append('<div class="newyork-winddeg-27"></div>');
        }

        if(winddeg >= 216 && winddeg < 224 ) {
        $('body').append('<div class="newyork-winddeg-28"></div>');
        }

        if(winddeg >= 224 && winddeg < 232 ) {
        $('body').append('<div class="newyork-winddeg-29"></div>');
        }

        if(winddeg >= 232 && winddeg < 240 ) {
        $('body').append('<div class="newyork-winddeg-30"></div>');
        }

        if(winddeg >= 240 && winddeg < 248 ) {
        $('body').append('<div class="newyork-winddeg-31"></div>');
        }

        if(winddeg >= 248 && winddeg < 256 ) {
        $('body').append('<div class="newyork-winddeg-32"></div>');
        }

        if(winddeg >= 256 && winddeg < 264 ) {
        $('body').append('<div class="newyork-winddeg-33"></div>');
        }

        if(winddeg >= 264 && winddeg < 272 ) {
        $('body').append('<div class="newyork-winddeg-34"></div>');
        }

        if(winddeg >= 272 && winddeg < 280 ) {
        $('body').append('<div class="newyork-winddeg-35"></div>');
        }

        if(winddeg >= 280 && winddeg < 288 ) {
        $('body').append('<div class="newyork-winddeg-36"></div>');
        }

        if(winddeg >= 288 && winddeg < 296 ) {
        $('body').append('<div class="newyork-winddeg-37"></div>');
        }

        if(winddeg >= 296 && winddeg < 304 ) {
        $('body').append('<div class="newyork-winddeg-38"></div>');
        }

        if(winddeg >= 304 && winddeg < 312 ) {
        $('body').append('<div class="newyork-winddeg-39"></div>');
        }

        if(winddeg >= 312 && winddeg < 320 ) {
        $('body').append('<div class="newyork-winddeg-40"></div>');
        }

        if(winddeg >= 320 && winddeg < 328 ) {
        $('body').append('<div class="newyork-winddeg-41"></div>');
        }

        if(winddeg >= 328 && winddeg < 336 ) {
        $('body').append('<div class="newyork-winddeg-42"></div>');
        }

        if(winddeg >= 336 && winddeg < 344 ) {
        $('body').append('<div class="newyork-winddeg-43"></div>');
        }

        if(winddeg >= 344 && winddeg < 352 ) {
        $('body').append('<div class="newyork-winddeg-44"></div>');
        }

        if(winddeg >= 352 && winddeg <= 360 ) {
        $('body').append('<div class="newyork-winddeg-45"></div>');
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
            
            winddeg = results.wind.deg;

            myWeatherInterpretation();
        }
    });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH
        
        $('#tokyo').append('winddeg: ' + winddeg + '</br>');
        
        //

        if(winddeg >= 0 && winddeg < 8 ) {
        $('body').append('<div class="tokyo-winddeg-1"></div>');
        }

        if(winddeg >= 8 && winddeg < 16 ) {
        $('body').append('<div class="tokyo-winddeg-2"></div>');
        }

        if(winddeg >= 16 && winddeg < 24 ) {
        $('body').append('<div class="tokyo-winddeg-3"></div>');
        }

        if(winddeg >= 24 && winddeg < 32 ) {
        $('body').append('<div class="tokyo-winddeg-4"></div>');
        }

        if(winddeg >= 32 && winddeg < 40 ) {
        $('body').append('<div class="tokyo-winddeg-5"></div>');
        }

        if(winddeg >= 40 && winddeg < 48 ) {
        $('body').append('<div class="tokyo-winddeg-6"></div>');
        }

        if(winddeg >= 48 && winddeg < 56 ) {
        $('body').append('<div class="tokyo-winddeg-7"></div>');
        }

        if(winddeg >= 56 && winddeg < 64 ) {
        $('body').append('<div class="tokyo-winddeg-8"></div>');
        }

        if(winddeg >= 64 && winddeg < 72 ) {
        $('body').append('<div class="tokyo-winddeg-9"></div>');
        }

        if(winddeg >= 72 && winddeg < 80 ) {
        $('body').append('<div class="tokyo-winddeg-10"></div>');
        }

        if(winddeg >= 80 && winddeg < 88 ) {
        $('body').append('<div class="tokyo-winddeg-11"></div>');
        }

        if(winddeg >= 88 && winddeg < 96 ) {
        $('body').append('<div class="tokyo-winddeg-12"></div>');
        }

        if(winddeg >= 96 && winddeg < 104 ) {
        $('body').append('<div class="tokyo-winddeg-13"></div>');
        }

        if(winddeg >= 104 && winddeg < 112 ) {
        $('body').append('<div class="tokyo-winddeg-14"></div>');
        }

        if(winddeg >= 112 && winddeg < 120 ) {
        $('body').append('<div class="tokyo-winddeg-15"></div>');
        }

        if(winddeg >= 120 && winddeg < 128 ) {
        $('body').append('<div class="tokyo-winddeg-16"></div>');
        }

        if(winddeg >= 128 && winddeg < 136 ) {
        $('body').append('<div class="tokyo-winddeg-17"></div>');
        }

        if(winddeg >= 136 && winddeg < 144 ) {
        $('body').append('<div class="tokyo-winddeg-18"></div>');
        }

        if(winddeg >= 144 && winddeg < 152 ) {
        $('body').append('<div class="tokyo-winddeg-19"></div>');
        }

        if(winddeg >= 152 && winddeg < 160 ) {
        $('body').append('<div class="tokyo-winddeg-20"></div>');
        }

        if(winddeg >= 160 && winddeg < 168 ) {
        $('body').append('<div class="tokyo-winddeg-21"></div>');
        }

        if(winddeg >= 168 && winddeg < 176 ) {
        $('body').append('<div class="tokyo-winddeg-22"></div>');
        }

        if(winddeg >= 176 && winddeg < 184 ) {
        $('body').append('<div class="tokyo-winddeg-23"></div>');
        }

        if(winddeg >= 184 && winddeg < 192 ) {
        $('body').append('<div class="tokyo-winddeg-24"></div>');
        }

        if(winddeg >= 192 && winddeg < 200 ) {
        $('body').append('<div class="tokyo-winddeg-25"></div>');
        }

        if(winddeg >= 200 && winddeg < 208 ) {
        $('body').append('<div class="tokyo-winddeg-26"></div>');
        }

        if(winddeg >= 208 && winddeg < 216 ) {
        $('body').append('<div class="tokyo-winddeg-27"></div>');
        }

        if(winddeg >= 216 && winddeg < 224 ) {
        $('body').append('<div class="tokyo-winddeg-28"></div>');
        }

        if(winddeg >= 224 && winddeg < 232 ) {
        $('body').append('<div class="tokyo-winddeg-29"></div>');
        }

        if(winddeg >= 232 && winddeg < 240 ) {
        $('body').append('<div class="tokyo-winddeg-30"></div>');
        }

        if(winddeg >= 240 && winddeg < 248 ) {
        $('body').append('<div class="tokyo-winddeg-31"></div>');
        }

        if(winddeg >= 248 && winddeg < 256 ) {
        $('body').append('<div class="tokyo-winddeg-32"></div>');
        }

        if(winddeg >= 256 && winddeg < 264 ) {
        $('body').append('<div class="tokyo-winddeg-33"></div>');
        }

        if(winddeg >= 264 && winddeg < 272 ) {
        $('body').append('<div class="tokyo-winddeg-34"></div>');
        }

        if(winddeg >= 272 && winddeg < 280 ) {
        $('body').append('<div class="tokyo-winddeg-35"></div>');
        }

        if(winddeg >= 280 && winddeg < 288 ) {
        $('body').append('<div class="tokyo-winddeg-36"></div>');
        }

        if(winddeg >= 288 && winddeg < 296 ) {
        $('body').append('<div class="tokyo-winddeg-37"></div>');
        }

        if(winddeg >= 296 && winddeg < 304 ) {
        $('body').append('<div class="tokyo-winddeg-38"></div>');
        }

        if(winddeg >= 304 && winddeg < 312 ) {
        $('body').append('<div class="tokyo-winddeg-39"></div>');
        }

        if(winddeg >= 312 && winddeg < 320 ) {
        $('body').append('<div class="tokyo-winddeg-40"></div>');
        }

        if(winddeg >= 320 && winddeg < 328 ) {
        $('body').append('<div class="tokyo-winddeg-41"></div>');
        }

        if(winddeg >= 328 && winddeg < 336 ) {
        $('body').append('<div class="tokyo-winddeg-42"></div>');
        }

        if(winddeg >= 336 && winddeg < 344 ) {
        $('body').append('<div class="tokyo-winddeg-43"></div>');
        }

        if(winddeg >= 344 && winddeg < 352 ) {
        $('body').append('<div class="tokyo-winddeg-44"></div>');
        }

        if(winddeg >= 352 && winddeg <= 360 ) {
        $('body').append('<div class="tokyo-winddeg-45"></div>');
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

            winddeg = results.wind.deg;

            myWeatherInterpretation();
        }
    });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH
        
        $('#seoul').append('winddeg: ' + winddeg + '</br>');
        
        //
        if(winddeg >= 0 && winddeg < 8 ) {
        $('body').append('<div class="seoul-winddeg-1"></div>');
        }

        if(winddeg >= 8 && winddeg < 16 ) {
        $('body').append('<div class="seoul-winddeg-2"></div>');
        }

        if(winddeg >= 16 && winddeg < 24 ) {
        $('body').append('<div class="seoul-winddeg-3"></div>');
        }

        if(winddeg >= 24 && winddeg < 32 ) {
        $('body').append('<div class="seoul-winddeg-4"></div>');
        }

        if(winddeg >= 32 && winddeg < 40 ) {
        $('body').append('<div class="seoul-winddeg-5"></div>');
        }

        if(winddeg >= 40 && winddeg < 48 ) {
        $('body').append('<div class="seoul-winddeg-6"></div>');
        }

        if(winddeg >= 48 && winddeg < 56 ) {
        $('body').append('<div class="seoul-winddeg-7"></div>');
        }

        if(winddeg >= 56 && winddeg < 64 ) {
        $('body').append('<div class="seoul-winddeg-8"></div>');
        }

        if(winddeg >= 64 && winddeg < 72 ) {
        $('body').append('<div class="seoul-winddeg-9"></div>');
        }

        if(winddeg >= 72 && winddeg < 80 ) {
        $('body').append('<div class="seoul-winddeg-10"></div>');
        }

        if(winddeg >= 80 && winddeg < 88 ) {
        $('body').append('<div class="seoul-winddeg-11"></div>');
        }

        if(winddeg >= 88 && winddeg < 96 ) {
        $('body').append('<div class="seoul-winddeg-12"></div>');
        }

        if(winddeg >= 96 && winddeg < 104 ) {
        $('body').append('<div class="seoul-winddeg-13"></div>');
        }

        if(winddeg >= 104 && winddeg < 112 ) {
        $('body').append('<div class="seoul-winddeg-14"></div>');
        }

        if(winddeg >= 112 && winddeg < 120 ) {
        $('body').append('<div class="seoul-winddeg-15"></div>');
        }

        if(winddeg >= 120 && winddeg < 128 ) {
        $('body').append('<div class="seoul-winddeg-16"></div>');
        }

        if(winddeg >= 128 && winddeg < 136 ) {
        $('body').append('<div class="seoul-winddeg-17"></div>');
        }

        if(winddeg >= 136 && winddeg < 144 ) {
        $('body').append('<div class="seoul-winddeg-18"></div>');
        }

        if(winddeg >= 144 && winddeg < 152 ) {
        $('body').append('<div class="seoul-winddeg-19"></div>');
        }

        if(winddeg >= 152 && winddeg < 160 ) {
        $('body').append('<div class="seoul-winddeg-20"></div>');
        }

        if(winddeg >= 160 && winddeg < 168 ) {
        $('body').append('<div class="seoul-winddeg-21"></div>');
        }

        if(winddeg >= 168 && winddeg < 176 ) {
        $('body').append('<div class="seoul-winddeg-22"></div>');
        }

        if(winddeg >= 176 && winddeg < 184 ) {
        $('body').append('<div class="seoul-winddeg-23"></div>');
        }

        if(winddeg >= 184 && winddeg < 192 ) {
        $('body').append('<div class="seoul-winddeg-24"></div>');
        }

        if(winddeg >= 192 && winddeg < 200 ) {
        $('body').append('<div class="seoul-winddeg-25"></div>');
        }

        if(winddeg >= 200 && winddeg < 208 ) {
        $('body').append('<div class="seoul-winddeg-26"></div>');
        }

        if(winddeg >= 208 && winddeg < 216 ) {
        $('body').append('<div class="seoul-winddeg-27"></div>');
        }

        if(winddeg >= 216 && winddeg < 224 ) {
        $('body').append('<div class="seoul-winddeg-28"></div>');
        }

        if(winddeg >= 224 && winddeg < 232 ) {
        $('body').append('<div class="seoul-winddeg-29"></div>');
        }

        if(winddeg >= 232 && winddeg < 240 ) {
        $('body').append('<div class="seoul-winddeg-30"></div>');
        }

        if(winddeg >= 240 && winddeg < 248 ) {
        $('body').append('<div class="seoul-winddeg-31"></div>');
        }

        if(winddeg >= 248 && winddeg < 256 ) {
        $('body').append('<div class="seoul-winddeg-32"></div>');
        }

        if(winddeg >= 256 && winddeg < 264 ) {
        $('body').append('<div class="seoul-winddeg-33"></div>');
        }

        if(winddeg >= 264 && winddeg < 272 ) {
        $('body').append('<div class="seoul-winddeg-34"></div>');
        }

        if(winddeg >= 272 && winddeg < 280 ) {
        $('body').append('<div class="seoul-winddeg-35"></div>');
        }

        if(winddeg >= 280 && winddeg < 288 ) {
        $('body').append('<div class="seoul-winddeg-36"></div>');
        }

        if(winddeg >= 288 && winddeg < 296 ) {
        $('body').append('<div class="seoul-winddeg-37"></div>');
        }

        if(winddeg >= 296 && winddeg < 304 ) {
        $('body').append('<div class="seoul-winddeg-38"></div>');
        }

        if(winddeg >= 304 && winddeg < 312 ) {
        $('body').append('<div class="seoul-winddeg-39"></div>');
        }

        if(winddeg >= 312 && winddeg < 320 ) {
        $('body').append('<div class="seoul-winddeg-40"></div>');
        }

        if(winddeg >= 320 && winddeg < 328 ) {
        $('body').append('<div class="seoul-winddeg-41"></div>');
        }

        if(winddeg >= 328 && winddeg < 336 ) {
        $('body').append('<div class="seoul-winddeg-42"></div>');
        }

        if(winddeg >= 336 && winddeg < 344 ) {
        $('body').append('<div class="seoul-winddeg-43"></div>');
        }

        if(winddeg >= 344 && winddeg < 352 ) {
        $('body').append('<div class="seoul-winddeg-44"></div>');
        }

        if(winddeg >= 352 && winddeg <= 360 ) {
        $('body').append('<div class="seoul-winddeg-45"></div>');
        }

        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   


});

