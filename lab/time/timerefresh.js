
var m = new Date().getMinutes();
var hr = new Date().getHours();
var s = new Date().getSeconds();
var day = new Date().getDay();
var date = new Date().getDate();


console.log(m);
console.log(hr);
console.log(s);
console.log(day);
console.log(date);

//


function display_c(){
var refresh=1000; // Refresh rate in milli seconds
  mytime = setTimeout('display_ct()',refresh)


}

function display_ct() {

var hour = new Date().getHours();
var min = new Date().getMinutes();
 
		$('head').append(hour);
        $('head').append(' : ');
        $('head').append(min);

        if(hour == 10 ) {
        $('body').append('<div class="h-10"></div>');
        }
   if(hour == 11) {
        $('body').append('<div class="h-11"></div>');
        }
        if(min <= 60 ) {
        $('body').append('<div class="m-60"></div>');
        }

        


display_c();

}

display_ct();




