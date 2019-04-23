console.log("hello world");
document.write("hello world");

//$('#box1').append('Hola Mundo!');
//$('#box1').after('Hola Mundo!');
//$('#box1').prepend('Hola Mundo!');
//$('#box1').before('Hola Mundo!');

$('#box1').append('<p class="newstyle">Hola Mundo!</p>');

$('#box1').html("box A")

/*var num = 8;
$('#box1').html("box"+num)*/

/*$('#box1').css({
  "background-color":"yellow","font-size":"60px"
})*/

//$('#box1').hide();
//$('#box1').fadeOut();

$('#box1').on("click",function(){
  $('#box1').html ("hello")
})

$('#box1').css({
  "background-color":"yellow","font-size":"60px"
})

$('#box1').on("click",function(){
  $('#box1').addClass('rotate')
})

$('#box1').on("dbclick")

