$(document).ready(function(){

	var bodyColorArray = ['palevioletred','yellowgreen','darkseagreen','mediumaquamarine','orange','lightcoral','paleturquoise','cadet blue','khaki','darkkhaki','palegoldenrod','powderblue','rosybrown','lavender','thistle','plum','mediumslateblue','lavenderblush','mistyrose','aliceblue','mintcream','honeydew','snow']
	var randomBodyColor = bodyColorArray[Math.floor(Math.random()*bodyColorArray.length)]
	$('body').css('background-color', randomBodyColor)

	var colorArray = ['palevioletred','yellowgreen','darkseagreen','mediumaquamarine','orange','lightcoral','paleturquoise','cadet blue','khaki','darkkhaki','palegoldenrod','powderblue','rosybrown','lavender','thistle','plum','orchid','mediumslateblue','lavenderblush','mistyrose','aliceblue','mintcream','honeydew','snow']
	var randomColor = colorArray[Math.floor(Math.random()*colorArray.length)]
	$('a').css('background-color', randomColor)

	var colorHoverArray = ['palevioletred','yellowgreen','darkseagreen','mediumaquamarine','orange','lightcoral','paleturquoise','cadet blue','khaki','darkkhaki','palegoldenrod','powderblue','rosybrown','lavender','thistle','plum','orchid','mediumslateblue','lavenderblush','mistyrose','aliceblue','mintcream','honeydew','snow']
	var randomBorderColor = colorHoverArray[Math.floor(Math.random()*colorArray.length)]
	$('a').css('border-color', randomBorderColor)

	var textColorArray = ['palevioletred','yellowgreen','darkseagreen','mediumaquamarine','orange','lightcoral','paleturquoise','cadet blue','khaki','darkkhaki','palegoldenrod','powderblue','rosybrown','lavender','thistle','plum','orchid','mediumslateblue','lavenderblush','mistyrose','aliceblue','mintcream','honeydew','snow']
	var randomTextColor = textColorArray[Math.floor(Math.random()*colorArray.length)]
	$('a').css('color', randomTextColor)

})



