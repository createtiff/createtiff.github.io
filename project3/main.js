alert("Welcome! Please view console on your browser.");
  
  var fullName = "Chanjoo Tiffany Park"
  var number = 88
  var stringNumber = "eightyeight"
  var admin = true
  var statement = fullName + admin

  console.log(fullName + number + stringNumber + admin + statement);

  console.log(44 + 44);
  console.log(77 + 11);
  console.log(80 + 8);
  console.log(11 * 8);
  console.log(22 * 4);

var country = ["Iceland", "Italy", "Hawaii", "Peru"]
  console.log(country[0]);
  console.log(country.length);

var time = "The current time is ";
var d = new Date().getHours() + ":" + new Date().getMinutes() + ".";
  console.log(time + d);

  console.log(new Date());

var currentHour = new Date().getHours();
  console.log(currentHour);
    if (currentHour == 11) {
      var msg = "It is 11 now."
    } else {
      var msg = "It is not 11 yet."
    };
  console.log(msg);


if (fullName.length - 2 <= 9)  {
  var response = "My name is relatively short."
} else if (fullName.length - 2 > 14) {
  var response = "My name is relatively long."
} else {
  var response = "My name is neither short nor long."
}

console.log(response);












