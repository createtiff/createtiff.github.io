var humidity; //Humidity, %

//////////LONDON
$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=2643743&units=metric&APPID=188e55f89ae698f5c272ba31302b4705', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){

            londonhumidity = results.main.humidity;
            londoncloudiness = results.clouds.all;
            londonwindspeed = results.wind.speed;
            londonwinddeg = results.wind.deg;
            londontemp = results.main.temp;
            londontempmax = results.main.temp_max;
            londontempmin = results.main.temp_min; 

            
            myWeatherInterpretation();
            }
        });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        

        //JUST SEEING IF THE VALUES COME THROUGH
        
    

        //

        if(londonhumidity >= 0 && londonhumidity < 44 ) {
        $('body').append('<div class="london-humdity-1"><div class="londoncircle-1"><a href="../london.html">LONDON</a></div></div>');
        }

        if(londonhumidity >= 44 && londonhumidity < 48 ) {
        $('body').append('<div class="london-humdity-2"><div class="londoncircle-2"><a href="../london.html">LONDON</a></div></div>');
        }

        if(londonhumidity >= 48 && londonhumidity < 52 ) {
        $('body').append('<div class="london-humdity-3"><div class="londoncircle-3"><a href="../london.html">LONDON</a></div></div>');
        }

        if(londonhumidity >= 52 && londonhumidity < 56 ) {
        $('body').append('<div class="london-humdity-4"><div class="londoncircle-4"><a href="../london.html">LONDON</a></div></div>');
        }

        if(londonhumidity >= 56 && londonhumidity < 60 ) {
        $('body').append('<div class="london-humdity-5"><div class="londoncircle-5"><a href="../london.html">LONDON</a></div></div>');
        }

        if(londonhumidity >= 60 && londonhumidity < 64 ) {
        $('body').append('<div class="london-humdity-6"><div class="londoncircle-6"><a href="../london.html">LONDON</a></div></div>');
        }

        if(londonhumidity >= 64 && londonhumidity < 68 ) {
        $('body').append('<div class="london-humdity-7"><div class="londoncircle-7"><a href="../london.html">LONDON</a></div></div>');
        }

        if(londonhumidity >= 68 && londonhumidity < 72 ) {
        $('body').append('<div class="london-humdity-8"><div class="londoncircle-8"><a href="../london.html">LONDON</a></div></div>');
        }

        if(londonhumidity >= 72 && londonhumidity < 76 ) {
        $('body').append('<div class="london-humdity-9"><div class="londoncircle-9"><a href="../london.html">LONDON</a></div></div>');
        }

        if(londonhumidity >= 76 && londonhumidity < 80 ) {
        $('body').append('<div class="london-humdity-10"><div class="londoncircle-10"><a href="../london.html">LONDON</a></div></div>');
        }

        if(londonhumidity >= 80 && londonhumidity < 84 ) {
        $('body').append('<div class="london-humdity-11"><div class="londoncircle-11"><a href="../london.html">LONDON</a></div></div>');
        }

        if(londonhumidity >= 84 && londonhumidity < 88 ) {
        $('body').append('<div class="london-humdity-12"><div class="londoncircle-12"><a href="../london.html">LONDON</a></div></div>');
        }

        if(londonhumidity >= 88 && londonhumidity < 92 ) {
        $('body').append('<div class="london-humdity-13"><div class="londoncircle-13"><a href="../london.html">LONDON</a></div></div>');
        }

        if(londonhumidity >= 92 && londonhumidity < 96 ) {
        $('body').append('<div class="london-humdity-14"><div class="londoncircle-14"><a href="../london.html">LONDON</a></div></div>');
        }

        if(londonhumidity >= 96 && londonhumidity <= 100 ) {
        $('body').append('<div class="london-humdity-15"><div class="londoncircle-15"><a href="../london.html">LONDON</a></div></div>');
        }

        $(".londoncircle-1").on("click", function() {
            console.log("london clicked"); 
            $(".london-humdity-1").toggleClass("biggerlondon-1");         
        });

        $(".londoncircle-2").on("click", function() {
            console.log("london clicked"); 
            $(".london-humdity-2").toggleClass("biggerlondon-2");         
        });

        $(".londoncircle-3").on("click", function() {
            console.log("london clicked"); 
            $(".london-humdity-3").toggleClass("biggerlondon-3");         
        });
        
        $(".londoncircle-4").on("click", function() {
            console.log("london clicked"); 
            $(".london-humdity-4").toggleClass("biggerlondon-4");         
        });

        $(".londoncircle-5").on("click", function() {
            console.log("london clicked"); 
            $(".london-humdity-5").toggleClass("biggerlondon-5");         
        });

        $(".londoncircle-6").on("click", function() {
            console.log("london clicked"); 
            $(".london-humdity-6").toggleClass("biggerlondon-6");         
        });

        $(".londoncircle-7").on("click", function() {
            console.log("london clicked"); 
            $(".london-humdity-7").toggleClass("biggerlondon-7");         
        });
        
        $(".londoncircle-8").on("click", function() {
            console.log("london clicked"); 
            $(".london-humdity-8").toggleClass("biggerlondon-8");         
        });

        $(".londoncircle-9").on("click", function() {
            console.log("london clicked"); 
            $(".london-humdity-9").toggleClass("biggerlondon-9");         
        });

        $(".londoncircle-10").on("click", function() {
            console.log("london clicked"); 
            $(".london-humdity-10").toggleClass("biggerlondon-10");         
        });

        $(".londoncircle-11").on("click", function() {
            console.log("london clicked"); 
            $(".london-humdity-11").toggleClass("biggerlondon-11");         
        });
        
        $(".londoncircle-12").on("click", function() {
            console.log("london clicked"); 
            $(".london-humdity-12").toggleClass("biggerlondon-12");         
        });

        $(".londoncircle-13").on("click", function() {
            console.log("london clicked"); 
            $(".london-humdity-13").toggleClass("biggerlondon-13");         
        });

        $(".londoncircle-14").on("click", function() {
            console.log("london clicked"); 
            $(".london-humdity-14").toggleClass("biggerlondon-14");         
        });



        $(".londoncircle-15").on("click", function() {
            console.log("london clicked"); 
            $(".london-humdity-15").toggleClass("biggerlondon-15");         
        });



        $(".londoncircle-1").on("click", function() {             
            var x = document.getElementById("biggerlondontext-1");
                x.innerText = (londonhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               londoncloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               londonwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               londonwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               londontemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               londontempmax + '*C' + ' MAX TEMP'+ '\n' +
                               londontempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".londoncircle-2").on("click", function() {             
            var x = document.getElementById("biggerlondontext-2");
                x.innerText = (londonhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               londoncloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               londonwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               londonwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               londontemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               londontempmax + '*C' + ' MAX TEMP'+ '\n' +
                               londontempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });
        
        $(".londoncircle-3").on("click", function() {             
            var x = document.getElementById("biggerlondontext-3");
                x.innerText = (londonhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               londoncloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               londonwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               londonwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               londontemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               londontempmax + '*C' + ' MAX TEMP'+ '\n' +
                               londontempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".londoncircle-4").on("click", function() {             
            var x = document.getElementById("biggerlondontext-4");
                x.innerText = (londonhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               londoncloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               londonwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               londonwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               londontemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               londontempmax + '*C' + ' MAX TEMP'+ '\n' +
                               londontempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".londoncircle-5").on("click", function() {             
            var x = document.getElementById("biggerlondontext-5");
                x.innerText = (londonhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               londoncloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               londonwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               londonwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               londontemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               londontempmax + '*C' + ' MAX TEMP'+ '\n' +
                               londontempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });
        
        $(".londoncircle-6").on("click", function() {             
            var x = document.getElementById("biggerlondontext-6");
                x.innerText = (londonhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               londoncloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               londonwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               londonwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               londontemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               londontempmax + '*C' + ' MAX TEMP'+ '\n' +
                               londontempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".londoncircle-7").on("click", function() {             
            var x = document.getElementById("biggerlondontext-7");
                x.innerText = (londonhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               londoncloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               londonwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               londonwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               londontemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               londontempmax + '*C' + ' MAX TEMP'+ '\n' +
                               londontempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".londoncircle-8").on("click", function() {             
            var x = document.getElementById("biggerlondontext-8");
                x.innerText = (londonhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               londoncloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               londonwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               londonwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               londontemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               londontempmax + '*C' + ' MAX TEMP'+ '\n' +
                               londontempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });
        
        $(".londoncircle-9").on("click", function() {             
            var x = document.getElementById("biggerlondontext-9");
                x.innerText = (londonhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               londoncloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               londonwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               londonwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               londontemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               londontempmax + '*C' + ' MAX TEMP'+ '\n' +
                               londontempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".londoncircle-10").on("click", function() {             
            var x = document.getElementById("biggerlondontext-10");
                x.innerText = (londonhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               londoncloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               londonwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               londonwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               londontemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               londontempmax + '*C' + ' MAX TEMP'+ '\n' +
                               londontempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".londoncircle-11").on("click", function() {             
            var x = document.getElementById("biggerlondontext-11");
                x.innerText = (londonhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               londoncloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               londonwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               londonwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               londontemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               londontempmax + '*C' + ' MAX TEMP'+ '\n' +
                               londontempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });
        
        $(".londoncircle-12").on("click", function() {             
            var x = document.getElementById("biggerlondontext-12");
                x.innerText = (londonhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               londoncloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               londonwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               londonwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               londontemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               londontempmax + '*C' + ' MAX TEMP'+ '\n' +
                               londontempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".londoncircle-13").on("click", function() {             
            var x = document.getElementById("biggerlondontext-13");
                x.innerText = (londonhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               londoncloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               londonwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               londonwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               londontemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               londontempmax + '*C' + ' MAX TEMP'+ '\n' +
                               londontempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".londoncircle-14").on("click", function() {             
            var x = document.getElementById("biggerlondontext-14");
                x.innerText = (londonhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               londoncloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               londonwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               londonwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               londontemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               londontempmax + '*C' + ' MAX TEMP'+ '\n' +
                               londontempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });
        
        $(".londoncircle-15").on("click", function() {             
            var x = document.getElementById("biggerlondontext-15");
                x.innerText = (londonhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               londoncloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               londonwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               londonwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               londontemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               londontempmax + '*C' + ' MAX TEMP'+ '\n' +
                               londontempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   
});



//////////NEW YORK
$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=5128581&units=metric&APPID=188e55f89ae698f5c272ba31302b4705', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){

            newyorkhumidity = results.main.humidity;
            newyorkcloudiness = results.clouds.all;
            newyorkwindspeed = results.wind.speed;
            newyorkwinddeg = results.wind.deg;
            newyorktemp = results.main.temp;
            newyorktempmax = results.main.temp_max;
            newyorktempmin = results.main.temp_min; 

            myWeatherInterpretation();
            }
        });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH

        $('#newyork').append('Humidity: ' + humidity + '</br>'); 

        //

        if(newyorkhumidity >= 0 && newyorkhumidity < 44 ) {
        $('body').append('<div class="newyork-humdity-1"><div class="newyorkcircle-1"><a href="../newyork.html">NEWYORK</a></div></div>');
        }

        if(newyorkhumidity >= 44 && newyorkhumidity < 48 ) {
        $('body').append('<div class="newyork-humdity-2"><div class="newyorkcircle-2"><a href="../newyork.html">NEWYORK</a></div></div>');
        }

        if(newyorkhumidity >= 48 && newyorkhumidity < 52 ) {
        $('body').append('<div class="newyork-humdity-3"><div class="newyorkcircle-3"><a href="../newyork.html">NEWYORK</a></div></div>');
        }

        if(newyorkhumidity >= 52 && newyorkhumidity < 56 ) {
        $('body').append('<div class="newyork-humdity-4"><div class="newyorkcircle-4"><a href="../newyork.html">NEWYORK</a></div></div>');
        }

        if(newyorkhumidity >= 56 && newyorkhumidity < 60 ) {
        $('body').append('<div class="newyork-humdity-5"><div class="newyorkcircle-5"><a href="../newyork.html">NEWYORK</a></div></div>');
        }

        if(newyorkhumidity >= 60 && newyorkhumidity < 64 ) {
        $('body').append('<div class="newyork-humdity-6"><div class="newyorkcircle-6"><a href="../newyork.html">NEWYORK</a></div></div>');
        }

        if(newyorkhumidity >= 64 && newyorkhumidity < 68 ) {
        $('body').append('<div class="newyork-humdity-7"><div class="newyorkcircle-7"><a href="../newyork.html">NEWYORK</a></div></div>');
        }

        if(newyorkhumidity >= 68 && newyorkhumidity < 72 ) {
        $('body').append('<div class="newyork-humdity-8"><div class="newyorkcircle-8"><a href="../newyork.html">NEWYORK</a></div></div>');
        }

        if(newyorkhumidity >= 72 && newyorkhumidity < 76 ) {
        $('body').append('<div class="newyork-humdity-9"><div class="newyorkcircle-9"><a href="../newyork.html">NEWYORK</a></div></div>');
        }

        if(newyorkhumidity >= 76 && newyorkhumidity < 80 ) {
        $('body').append('<div class="newyork-humdity-10"><div class="newyorkcircle-10"><a href="../newyork.html">NEWYORK</a></div></div>');
        }

        if(newyorkhumidity >= 80 && newyorkhumidity < 84 ) {
        $('body').append('<div class="newyork-humdity-11"><div class="newyorkcircle-11"><a href="../newyork.html">NEWYORK</a></div></div>');
        }

        if(newyorkhumidity >= 84 && newyorkhumidity < 88 ) {
        $('body').append('<div class="newyork-humdity-12"><div class="newyorkcircle-12"><a href="../newyork.html">NEWYORK</a></div></div>');
        }

        if(newyorkhumidity >= 88 && newyorkhumidity < 92 ) {
        $('body').append('<div class="newyork-humdity-13"><div class="newyorkcircle-13"><a href="../newyork.html">NEWYORK</a></div></div>');
        }

        if(newyorkhumidity >= 92 && newyorkhumidity < 96 ) {
        $('body').append('<div class="newyork-humdity-14"><div class="newyorkcircle-14"><a href="../newyork.html">NEWYORK</a></div></div>');
        }

        if(newyorkhumidity >= 96 && newyorkhumidity <= 100 ) {
        $('body').append('<div class="newyork-humdity-15"><div class="newyorkcircle-15"><a href="../newyork.html">NEWYORK</a></div></div>');
        }

        $(".newyorkcircle-1").on("click", function() {
            console.log("newyork clicked"); 
            $(".newyork-humdity-1").toggleClass("biggernewyork-1");         
        });

        $(".newyorkcircle-2").on("click", function() {
            console.log("newyork clicked"); 
            $(".newyork-humdity-2").toggleClass("biggernewyork-2");         
        });

        $(".newyorkcircle-3").on("click", function() {
            console.log("newyork clicked"); 
            $(".newyork-humdity-3").toggleClass("biggernewyork-3");         
        });
        
        $(".newyorkcircle-4").on("click", function() {
            console.log("newyork clicked"); 
            $(".newyork-humdity-4").toggleClass("biggernewyork-4");         
        });

        $(".newyorkcircle-5").on("click", function() {
            console.log("newyork clicked"); 
            $(".newyork-humdity-5").toggleClass("biggernewyork-5");         
        });

        $(".newyorkcircle-6").on("click", function() {
            console.log("newyork clicked"); 
            $(".newyork-humdity-6").toggleClass("biggernewyork-6");         
        });

        $(".newyorkcircle-7").on("click", function() {
            console.log("newyork clicked"); 
            $(".newyork-humdity-7").toggleClass("biggernewyork-7");         
        });
        
        $(".newyorkcircle-8").on("click", function() {
            console.log("newyork clicked"); 
            $(".newyork-humdity-8").toggleClass("biggernewyork-8");         
        });

        $(".newyorkcircle-9").on("click", function() {
            console.log("newyork clicked"); 
            $(".newyork-humdity-9").toggleClass("biggernewyork-9");         
        });

        $(".newyorkcircle-10").on("click", function() {
            console.log("newyork clicked"); 
            $(".newyork-humdity-10").toggleClass("biggernewyork-10");         
        });

        $(".newyorkcircle-11").on("click", function() {
            console.log("newyork clicked"); 
            $(".newyork-humdity-11").toggleClass("biggernewyork-11");         
        });
        
        $(".newyorkcircle-12").on("click", function() {
            console.log("newyork clicked"); 
            $(".newyork-humdity-12").toggleClass("biggernewyork-12");         
        });

        $(".newyorkcircle-13").on("click", function() {
            console.log("newyork clicked"); 
            $(".newyork-humdity-13").toggleClass("biggernewyork-13");         
        });

        $(".newyorkcircle-14").on("click", function() {
            console.log("newyork clicked"); 
            $(".newyork-humdity-14").toggleClass("biggernewyork-14");         
        });



        $(".newyorkcircle-15").on("click", function() {
            console.log("newyork clicked"); 
            $(".newyork-humdity-15").toggleClass("biggernewyork-15");         
        });



        $(".newyorkcircle-1").on("click", function() {             
            var x = document.getElementById("biggernewyorktext-1");
                x.innerText = (newyorkhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               newyorkcloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               newyorkwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               newyorkwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               newyorktemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               newyorktempmax + '*C' + ' MAX TEMP'+ '\n' +
                               newyorktempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".newyorkcircle-2").on("click", function() {             
            var x = document.getElementById("biggernewyorktext-2");
                x.innerText = (newyorkhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               newyorkcloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               newyorkwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               newyorkwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               newyorktemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               newyorktempmax + '*C' + ' MAX TEMP'+ '\n' +
                               newyorktempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });
        
        $(".newyorkcircle-3").on("click", function() {             
            var x = document.getElementById("biggernewyorktext-3");
                x.innerText = (newyorkhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               newyorkcloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               newyorkwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               newyorkwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               newyorktemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               newyorktempmax + '*C' + ' MAX TEMP'+ '\n' +
                               newyorktempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".newyorkcircle-4").on("click", function() {             
            var x = document.getElementById("biggernewyorktext-4");
                x.innerText = (newyorkhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               newyorkcloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               newyorkwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               newyorkwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               newyorktemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               newyorktempmax + '*C' + ' MAX TEMP'+ '\n' +
                               newyorktempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".newyorkcircle-5").on("click", function() {             
            var x = document.getElementById("biggernewyorktext-5");
                x.innerText = (newyorkhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               newyorkcloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               newyorkwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               newyorkwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               newyorktemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               newyorktempmax + '*C' + ' MAX TEMP'+ '\n' +
                               newyorktempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });
        
        $(".newyorkcircle-6").on("click", function() {             
            var x = document.getElementById("biggernewyorktext-6");
                x.innerText = (newyorkhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               newyorkcloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               newyorkwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               newyorkwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               newyorktemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               newyorktempmax + '*C' + ' MAX TEMP'+ '\n' +
                               newyorktempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".newyorkcircle-7").on("click", function() {             
            var x = document.getElementById("biggernewyorktext-7");
                x.innerText = (newyorkhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               newyorkcloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               newyorkwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               newyorkwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               newyorktemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               newyorktempmax + '*C' + ' MAX TEMP'+ '\n' +
                               newyorktempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".newyorkcircle-8").on("click", function() {             
            var x = document.getElementById("biggernewyorktext-8");
                x.innerText = (newyorkhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               newyorkcloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               newyorkwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               newyorkwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               newyorktemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               newyorktempmax + '*C' + ' MAX TEMP'+ '\n' +
                               newyorktempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });
        
        $(".newyorkcircle-9").on("click", function() {             
            var x = document.getElementById("biggernewyorktext-9");
                x.innerText = (newyorkhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               newyorkcloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               newyorkwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               newyorkwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               newyorktemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               newyorktempmax + '*C' + ' MAX TEMP'+ '\n' +
                               newyorktempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".newyorkcircle-10").on("click", function() {             
            var x = document.getElementById("biggernewyorktext-10");
                x.innerText = (newyorkhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               newyorkcloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               newyorkwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               newyorkwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               newyorktemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               newyorktempmax + '*C' + ' MAX TEMP'+ '\n' +
                               newyorktempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".newyorkcircle-11").on("click", function() {             
            var x = document.getElementById("biggernewyorktext-11");
                x.innerText = (newyorkhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               newyorkcloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               newyorkwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               newyorkwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               newyorktemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               newyorktempmax + '*C' + ' MAX TEMP'+ '\n' +
                               newyorktempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });
        
        $(".newyorkcircle-12").on("click", function() {             
            var x = document.getElementById("biggernewyorktext-12");
                x.innerText = (newyorkhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               newyorkcloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               newyorkwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               newyorkwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               newyorktemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               newyorktempmax + '*C' + ' MAX TEMP'+ '\n' +
                               newyorktempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".newyorkcircle-13").on("click", function() {             
            var x = document.getElementById("biggernewyorktext-13");
                x.innerText = (newyorkhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               newyorkcloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               newyorkwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               newyorkwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               newyorktemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               newyorktempmax + '*C' + ' MAX TEMP'+ '\n' +
                               newyorktempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".newyorkcircle-14").on("click", function() {             
            var x = document.getElementById("biggernewyorktext-14");
                x.innerText = (newyorkhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               newyorkcloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               newyorkwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               newyorkwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               newyorktemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               newyorktempmax + '*C' + ' MAX TEMP'+ '\n' +
                               newyorktempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });
        
        $(".newyorkcircle-15").on("click", function() {             
            var x = document.getElementById("biggernewyorktext-15");
                x.innerText = (newyorkhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               newyorkcloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               newyorkwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               newyorkwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               newyorktemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               newyorktempmax + '*C' + ' MAX TEMP'+ '\n' +
                               newyorktempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   
});



//////////TOKYO
$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1850147&units=metric&APPID=188e55f89ae698f5c272ba31302b4705', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            
            tokyohumidity = results.main.humidity;
            tokyocloudiness = results.clouds.all;
            tokyowindspeed = results.wind.speed;
            tokyowinddeg = results.wind.deg;
            tokyotemp = results.main.temp;
            tokyotempmax = results.main.temp_max;
            tokyotempmin = results.main.temp_min; 


            myWeatherInterpretation();
        }
    });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH
        
        $('#tokyo').append('Humidity: ' + humidity + '</br>');
        
        //

        if(tokyohumidity >= 0 && tokyohumidity < 44 ) {
        $('body').append('<div class="tokyo-humdity-1"><div class="tokyocircle-1"><a href="../tokyo.html">TOKYO</a></div></div>');
        }

        if(tokyohumidity >= 44 && tokyohumidity < 48 ) {
        $('body').append('<div class="tokyo-humdity-2"><div class="tokyocircle-2"><a href="../tokyo.html">TOKYO</a></div></div>');
        }

        if(tokyohumidity >= 48 && tokyohumidity < 52 ) {
        $('body').append('<div class="tokyo-humdity-3"><div class="tokyocircle-3"><a href="../tokyo.html">TOKYO</a></div></div>');
        }

        if(tokyohumidity >= 52 && tokyohumidity < 56 ) {
        $('body').append('<div class="tokyo-humdity-4"><div class="tokyocircle-4"><a href="../tokyo.html">TOKYO</a></div></div>');
        }

        if(tokyohumidity >= 56 && tokyohumidity < 60 ) {
        $('body').append('<div class="tokyo-humdity-5"><div class="tokyocircle-5"><a href="../tokyo.html">TOKYO</a></div></div>');
        }

        if(tokyohumidity >= 60 && tokyohumidity < 64 ) {
        $('body').append('<div class="tokyo-humdity-6"><div class="tokyocircle-6"><a href="../tokyo.html">TOKYO</a></div></div>');
        }

        if(tokyohumidity >= 64 && tokyohumidity < 68 ) {
        $('body').append('<div class="tokyo-humdity-7"><div class="tokyocircle-7"><a href="../tokyo.html">TOKYO</a></div></div>');
        }

        if(tokyohumidity >= 68 && tokyohumidity < 72 ) {
        $('body').append('<div class="tokyo-humdity-8"><div class="tokyocircle-8"><a href="../tokyo.html">TOKYO</a></div></div>');
        }

        if(tokyohumidity >= 72 && tokyohumidity < 76 ) {
        $('body').append('<div class="tokyo-humdity-9"><div class="tokyocircle-9"><a href="../tokyo.html">TOKYO</a></div></div>');
        }

        if(tokyohumidity >= 76 && tokyohumidity < 80 ) {
        $('body').append('<div class="tokyo-humdity-10"><div class="tokyocircle-10"><a href="../tokyo.html">TOKYO</a></div></div>');
        }

        if(tokyohumidity >= 80 && tokyohumidity < 84 ) {
        $('body').append('<div class="tokyo-humdity-11"><div class="tokyocircle-11"><a href="../tokyo.html">TOKYO</a></div></div>');
        }

        if(tokyohumidity >= 84 && tokyohumidity < 88 ) {
        $('body').append('<div class="tokyo-humdity-12"><div class="tokyocircle-12"><a href="../tokyo.html">TOKYO</a></div></div>');
        }

        if(tokyohumidity >= 88 && tokyohumidity < 92 ) {
        $('body').append('<div class="tokyo-humdity-13"><div class="tokyocircle-13"><a href="../tokyo.html">TOKYO</a></div></div>');
        }

        if(tokyohumidity >= 92 && tokyohumidity < 96 ) {
        $('body').append('<div class="tokyo-humdity-14"><div class="tokyocircle-14"><a href="../tokyo.html">TOKYO</a></div></div>');
        }

        if(tokyohumidity >= 96 && tokyohumidity <= 100 ) {
        $('body').append('<div class="tokyo-humdity-15"><div class="tokyocircle-15"><a href="../tokyo.html">TOKYO</a></div></div>');
        }

        $(".tokyocircle-1").on("click", function() {
            console.log("tokyo clicked"); 
            $(".tokyo-humdity-1").toggleClass("biggertokyo-1");         
        });

        $(".tokyocircle-2").on("click", function() {
            console.log("tokyo clicked"); 
            $(".tokyo-humdity-2").toggleClass("biggertokyo-2");         
        });

        $(".tokyocircle-3").on("click", function() {
            console.log("tokyo clicked"); 
            $(".tokyo-humdity-3").toggleClass("biggertokyo-3");         
        });
        
        $(".tokyocircle-4").on("click", function() {
            console.log("tokyo clicked"); 
            $(".tokyo-humdity-4").toggleClass("biggertokyo-4");         
        });

        $(".tokyocircle-5").on("click", function() {
            console.log("tokyo clicked"); 
            $(".tokyo-humdity-5").toggleClass("biggertokyo-5");         
        });

        $(".tokyocircle-6").on("click", function() {
            console.log("tokyo clicked"); 
            $(".tokyo-humdity-6").toggleClass("biggertokyo-6");         
        });

        $(".tokyocircle-7").on("click", function() {
            console.log("tokyo clicked"); 
            $(".tokyo-humdity-7").toggleClass("biggertokyo-7");         
        });
        
        $(".tokyocircle-8").on("click", function() {
            console.log("tokyo clicked"); 
            $(".tokyo-humdity-8").toggleClass("biggertokyo-8");         
        });

        $(".tokyocircle-9").on("click", function() {
            console.log("tokyo clicked"); 
            $(".tokyo-humdity-9").toggleClass("biggertokyo-9");         
        });

        $(".tokyocircle-10").on("click", function() {
            console.log("tokyo clicked"); 
            $(".tokyo-humdity-10").toggleClass("biggertokyo-10");         
        });

        $(".tokyocircle-11").on("click", function() {
            console.log("tokyo clicked"); 
            $(".tokyo-humdity-11").toggleClass("biggertokyo-11");         
        });
        
        $(".tokyocircle-12").on("click", function() {
            console.log("tokyo clicked"); 
            $(".tokyo-humdity-12").toggleClass("biggertokyo-12");         
        });

        $(".tokyocircle-13").on("click", function() {
            console.log("tokyo clicked"); 
            $(".tokyo-humdity-13").toggleClass("biggertokyo-13");         
        });

        $(".tokyocircle-14").on("click", function() {
            console.log("tokyo clicked"); 
            $(".tokyo-humdity-14").toggleClass("biggertokyo-14");         
        });



        $(".tokyocircle-15").on("click", function() {
            console.log("tokyo clicked"); 
            $(".tokyo-humdity-15").toggleClass("biggertokyo-15");         
        });



        $(".tokyocircle-1").on("click", function() {             
            var x = document.getElementById("biggertokyotext-1");
                x.innerText = (tokyohumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               tokyocloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               tokyowindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               tokyowinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               tokyotemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               tokyotempmax + '*C' + ' MAX TEMP'+ '\n' +
                               tokyotempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".tokyocircle-2").on("click", function() {             
            var x = document.getElementById("biggertokyotext-2");
                x.innerText = (tokyohumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               tokyocloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               tokyowindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               tokyowinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               tokyotemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               tokyotempmax + '*C' + ' MAX TEMP'+ '\n' +
                               tokyotempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });
        
        $(".tokyocircle-3").on("click", function() {             
            var x = document.getElementById("biggertokyotext-3");
                x.innerText = (tokyohumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               tokyocloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               tokyowindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               tokyowinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               tokyotemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               tokyotempmax + '*C' + ' MAX TEMP'+ '\n' +
                               tokyotempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".tokyocircle-4").on("click", function() {             
            var x = document.getElementById("biggertokyotext-4");
                x.innerText = (tokyohumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               tokyocloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               tokyowindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               tokyowinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               tokyotemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               tokyotempmax + '*C' + ' MAX TEMP'+ '\n' +
                               tokyotempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".tokyocircle-5").on("click", function() {             
            var x = document.getElementById("biggertokyotext-5");
                x.innerText = (tokyohumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               tokyocloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               tokyowindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               tokyowinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               tokyotemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               tokyotempmax + '*C' + ' MAX TEMP'+ '\n' +
                               tokyotempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });
        
        $(".tokyocircle-6").on("click", function() {             
            var x = document.getElementById("biggertokyotext-6");
                x.innerText = (tokyohumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               tokyocloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               tokyowindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               tokyowinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               tokyotemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               tokyotempmax + '*C' + ' MAX TEMP'+ '\n' +
                               tokyotempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".tokyocircle-7").on("click", function() {             
            var x = document.getElementById("biggertokyotext-7");
                x.innerText = (tokyohumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               tokyocloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               tokyowindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               tokyowinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               tokyotemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               tokyotempmax + '*C' + ' MAX TEMP'+ '\n' +
                               tokyotempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".tokyocircle-8").on("click", function() {             
            var x = document.getElementById("biggertokyotext-8");
                x.innerText = (tokyohumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               tokyocloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               tokyowindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               tokyowinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               tokyotemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               tokyotempmax + '*C' + ' MAX TEMP'+ '\n' +
                               tokyotempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });
        
        $(".tokyocircle-9").on("click", function() {             
            var x = document.getElementById("biggertokyotext-9");
                x.innerText = (tokyohumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               tokyocloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               tokyowindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               tokyowinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               tokyotemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               tokyotempmax + '*C' + ' MAX TEMP'+ '\n' +
                               tokyotempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".tokyocircle-10").on("click", function() {             
            var x = document.getElementById("biggertokyotext-10");
                x.innerText = (tokyohumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               tokyocloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               tokyowindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               tokyowinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               tokyotemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               tokyotempmax + '*C' + ' MAX TEMP'+ '\n' +
                               tokyotempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".tokyocircle-11").on("click", function() {             
            var x = document.getElementById("biggertokyotext-11");
                x.innerText = (tokyohumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               tokyocloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               tokyowindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               tokyowinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               tokyotemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               tokyotempmax + '*C' + ' MAX TEMP'+ '\n' +
                               tokyotempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });
        
        $(".tokyocircle-12").on("click", function() {             
            var x = document.getElementById("biggertokyotext-12");
                x.innerText = (tokyohumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               tokyocloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               tokyowindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               tokyowinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               tokyotemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               tokyotempmax + '*C' + ' MAX TEMP'+ '\n' +
                               tokyotempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".tokyocircle-13").on("click", function() {             
            var x = document.getElementById("biggertokyotext-13");
                x.innerText = (tokyohumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               tokyocloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               tokyowindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               tokyowinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               tokyotemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               tokyotempmax + '*C' + ' MAX TEMP'+ '\n' +
                               tokyotempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".tokyocircle-14").on("click", function() {             
            var x = document.getElementById("biggertokyotext-14");
                x.innerText = (tokyohumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               tokyocloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               tokyowindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               tokyowinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               tokyotemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               tokyotempmax + '*C' + ' MAX TEMP'+ '\n' +
                               tokyotempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });
        
        $(".tokyocircle-15").on("click", function() {             
            var x = document.getElementById("biggertokyotext-15");
                x.innerText = (tokyohumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               tokyocloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               tokyowindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               tokyowinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               tokyotemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               tokyotempmax + '*C' + ' MAX TEMP'+ '\n' +
                               tokyotempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   
});




//////////SEOUL
$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1835848&units=metric&APPID=188e55f89ae698f5c272ba31302b4705', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){

            seoulhumidity = results.main.humidity;
            seoulcloudiness = results.clouds.all;
            seoulwindspeed = results.wind.speed;
            seoulwinddeg = results.wind.deg;
            seoultemp = results.main.temp;
            seoultempmax = results.main.temp_max;
            seoultempmin = results.main.temp_min; 


            myWeatherInterpretation();
        }
    });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH
        
        $('#seoul').append('Humidity: ' + humidity + '</br>');
        
        //

        if(seoulhumidity >= 0 && seoulhumidity < 44 ) {
        $('body').append('<div class="seoul-humdity-1"><div class="seoulcircle-1"><a href="../seoul.html">SEOUL</a></div></div>');
        }

        if(seoulhumidity >= 44 && seoulhumidity < 48 ) {
        $('body').append('<div class="seoul-humdity-2"><div class="seoulcircle-2"><a href="../seoul.html">SEOUL</a></div></div>');
        }

        if(seoulhumidity >= 48 && seoulhumidity < 52 ) {
        $('body').append('<div class="seoul-humdity-3"><div class="seoulcircle-3"><a href="../seoul.html">SEOUL</a></div></div>');
        }

        if(seoulhumidity >= 52 && seoulhumidity < 56 ) {
        $('body').append('<div class="seoul-humdity-4"><div class="seoulcircle-4"><a href="../seoul.html">SEOUL</a></div></div>');
        }

        if(seoulhumidity >= 56 && seoulhumidity < 60 ) {
        $('body').append('<div class="seoul-humdity-5"><div class="seoulcircle-5"><a href="../seoul.html">SEOUL</a></div></div>');
        }

        if(seoulhumidity >= 60 && seoulhumidity < 64 ) {
        $('body').append('<div class="seoul-humdity-6"><div class="seoulcircle-6"><a href="../seoul.html">SEOUL</a></div></div>');
        }

        if(seoulhumidity >= 64 && seoulhumidity < 68 ) {
        $('body').append('<div class="seoul-humdity-7"><div class="seoulcircle-7"><a href="../seoul.html">SEOUL</a></div></div>');
        }

        if(seoulhumidity >= 68 && seoulhumidity < 72 ) {
        $('body').append('<div class="seoul-humdity-8"><div class="seoulcircle-8"><a href="../seoul.html">SEOUL</a></div></div>');
        }

        if(seoulhumidity >= 72 && seoulhumidity < 76 ) {
        $('body').append('<div class="seoul-humdity-9"><div class="seoulcircle-9"><a href="../seoul.html">SEOUL</a></div></div>');
        }

        if(seoulhumidity >= 76 && seoulhumidity < 80 ) {
        $('body').append('<div class="seoul-humdity-10"><div class="seoulcircle-10"><a href="../seoul.html">SEOUL</a></div></div>');
        }

        if(seoulhumidity >= 80 && seoulhumidity < 84 ) {
        $('body').append('<div class="seoul-humdity-11"><div class="seoulcircle-11"><a href="../seoul.html">SEOUL</a></div></div>');
        }

        if(seoulhumidity >= 84 && seoulhumidity < 88 ) {
        $('body').append('<div class="seoul-humdity-12"><div class="seoulcircle-12"><a href="../seoul.html">SEOUL</a></div></div>');
        }

        if(seoulhumidity >= 88 && seoulhumidity < 92 ) {
        $('body').append('<div class="seoul-humdity-13"><div class="seoulcircle-13"><a href="../seoul.html">SEOUL</a></div></div>');
        }

        if(seoulhumidity >= 92 && seoulhumidity < 96 ) {
        $('body').append('<div class="seoul-humdity-14"><div class="seoulcircle-14"><a href="../seoul.html">SEOUL</a></div></div>');
        }

        if(seoulhumidity >= 96 && seoulhumidity <= 100 ) {
        $('body').append('<div class="seoul-humdity-15"><div class="seoulcircle-15"><a href="../seoul.html">SEOUL</a></div></div>');
        }

        $(".seoulcircle-1").on("click", function() {
            console.log("seoul clicked"); 
            $(".seoul-humdity-1").toggleClass("biggerseoul-1");         
        });

        $(".seoulcircle-2").on("click", function() {
            console.log("seoul clicked"); 
            $(".seoul-humdity-2").toggleClass("biggerseoul-2");         
        });

        $(".seoulcircle-3").on("click", function() {
            console.log("seoul clicked"); 
            $(".seoul-humdity-3").toggleClass("biggerseoul-3");         
        });
        
        $(".seoulcircle-4").on("click", function() {
            console.log("seoul clicked"); 
            $(".seoul-humdity-4").toggleClass("biggerseoul-4");         
        });

        $(".seoulcircle-5").on("click", function() {
            console.log("seoul clicked"); 
            $(".seoul-humdity-5").toggleClass("biggerseoul-5");         
        });

        $(".seoulcircle-6").on("click", function() {
            console.log("seoul clicked"); 
            $(".seoul-humdity-6").toggleClass("biggerseoul-6");         
        });

        $(".seoulcircle-7").on("click", function() {
            console.log("seoul clicked"); 
            $(".seoul-humdity-7").toggleClass("biggerseoul-7");         
        });
        
        $(".seoulcircle-8").on("click", function() {
            console.log("seoul clicked"); 
            $(".seoul-humdity-8").toggleClass("biggerseoul-8");         
        });

        $(".seoulcircle-9").on("click", function() {
            console.log("seoul clicked"); 
            $(".seoul-humdity-9").toggleClass("biggerseoul-9");         
        });

        $(".seoulcircle-10").on("click", function() {
            console.log("seoul clicked"); 
            $(".seoul-humdity-10").toggleClass("biggerseoul-10");         
        });

        $(".seoulcircle-11").on("click", function() {
            console.log("seoul clicked"); 
            $(".seoul-humdity-11").toggleClass("biggerseoul-11");         
        });
        
        $(".seoulcircle-12").on("click", function() {
            console.log("seoul clicked"); 
            $(".seoul-humdity-12").toggleClass("biggerseoul-12");         
        });

        $(".seoulcircle-13").on("click", function() {
            console.log("seoul clicked"); 
            $(".seoul-humdity-13").toggleClass("biggerseoul-13");         
        });

        $(".seoulcircle-14").on("click", function() {
            console.log("seoul clicked"); 
            $(".seoul-humdity-14").toggleClass("biggerseoul-14");         
        });



        $(".seoulcircle-15").on("click", function() {
            console.log("seoul clicked"); 
            $(".seoul-humdity-15").toggleClass("biggerseoul-15");         
        });



        $(".seoulcircle-1").on("click", function() {             
            var x = document.getElementById("biggerseoultext-1");
                x.innerText = (seoulhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               seoulcloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               seoulwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               seoulwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               seoultemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               seoultempmax + '*C' + ' MAX TEMP'+ '\n' +
                               seoultempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".seoulcircle-2").on("click", function() {             
            var x = document.getElementById("biggerseoultext-2");
                x.innerText = (seoulhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               seoulcloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               seoulwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               seoulwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               seoultemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               seoultempmax + '*C' + ' MAX TEMP'+ '\n' +
                               seoultempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });
        
        $(".seoulcircle-3").on("click", function() {             
            var x = document.getElementById("biggerseoultext-3");
                x.innerText = (seoulhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               seoulcloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               seoulwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               seoulwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               seoultemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               seoultempmax + '*C' + ' MAX TEMP'+ '\n' +
                               seoultempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".seoulcircle-4").on("click", function() {             
            var x = document.getElementById("biggerseoultext-4");
                x.innerText = (seoulhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               seoulcloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               seoulwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               seoulwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               seoultemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               seoultempmax + '*C' + ' MAX TEMP'+ '\n' +
                               seoultempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".seoulcircle-5").on("click", function() {             
            var x = document.getElementById("biggerseoultext-5");
                x.innerText = (seoulhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               seoulcloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               seoulwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               seoulwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               seoultemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               seoultempmax + '*C' + ' MAX TEMP'+ '\n' +
                               seoultempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });
        
        $(".seoulcircle-6").on("click", function() {             
            var x = document.getElementById("biggerseoultext-6");
                x.innerText = (seoulhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               seoulcloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               seoulwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               seoulwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               seoultemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               seoultempmax + '*C' + ' MAX TEMP'+ '\n' +
                               seoultempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".seoulcircle-7").on("click", function() {             
            var x = document.getElementById("biggerseoultext-7");
                x.innerText = (seoulhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               seoulcloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               seoulwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               seoulwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               seoultemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               seoultempmax + '*C' + ' MAX TEMP'+ '\n' +
                               seoultempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".seoulcircle-8").on("click", function() {             
            var x = document.getElementById("biggerseoultext-8");
                x.innerText = (seoulhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               seoulcloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               seoulwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               seoulwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               seoultemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               seoultempmax + '*C' + ' MAX TEMP'+ '\n' +
                               seoultempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });
        
        $(".seoulcircle-9").on("click", function() {             
            var x = document.getElementById("biggerseoultext-9");
                x.innerText = (seoulhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               seoulcloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               seoulwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               seoulwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               seoultemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               seoultempmax + '*C' + ' MAX TEMP'+ '\n' +
                               seoultempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".seoulcircle-10").on("click", function() {             
            var x = document.getElementById("biggerseoultext-10");
                x.innerText = (seoulhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               seoulcloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               seoulwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               seoulwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               seoultemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               seoultempmax + '*C' + ' MAX TEMP'+ '\n' +
                               seoultempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".seoulcircle-11").on("click", function() {             
            var x = document.getElementById("biggerseoultext-11");
                x.innerText = (seoulhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               seoulcloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               seoulwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               seoulwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               seoultemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               seoultempmax + '*C' + ' MAX TEMP'+ '\n' +
                               seoultempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });
        
        $(".seoulcircle-12").on("click", function() {             
            var x = document.getElementById("biggerseoultext-12");
                x.innerText = (seoulhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               seoulcloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               seoulwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               seoulwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               seoultemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               seoultempmax + '*C' + ' MAX TEMP'+ '\n' +
                               seoultempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".seoulcircle-13").on("click", function() {             
            var x = document.getElementById("biggerseoultext-13");
                x.innerText = (seoulhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               seoulcloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               seoulwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               seoulwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               seoultemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               seoultempmax + '*C' + ' MAX TEMP'+ '\n' +
                               seoultempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        $(".seoulcircle-14").on("click", function() {             
            var x = document.getElementById("biggerseoultext-14");
                x.innerText = (seoulhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               seoulcloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               seoulwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               seoulwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               seoultemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               seoultempmax + '*C' + ' MAX TEMP'+ '\n' +
                               seoultempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });
        
        $(".seoulcircle-15").on("click", function() {             
            var x = document.getElementById("biggerseoultext-15");
                x.innerText = (seoulhumidity  + '% ' + 'HUMIDITY ' + '\n' + 
                               seoulcloudiness + '% ' + 'CLOUDINESS ' + '\n' +
                               seoulwindspeed  + 'm/s ' + 'WIND SPEED ' + '\n' + 
                               seoulwinddeg + '* ' + '  WIND DEGREE ' + '\n' + '\n' + 
                               seoultemp + '*C' + ' CURRENT TEMP'+ '\n' +
                               seoultempmax + '*C' + ' MAX TEMP'+ '\n' +
                               seoultempmin + '*C' + ' MIN TEMP'+ '\n'
                               );
                if (x.style.display === "block") {
                x.style.display = "none";
                } else {
                x.style.display = "block";
                }   
          });

        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   
});