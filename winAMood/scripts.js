$(document).ready(function(){

	var bodyColorArray = ['palevioletred','yellowgreen','darkseagreen','mediumaquamarine','orange','lightcoral','paleturquoise','cadet blue','khaki','darkkhaki','palegoldenrod','powderblue','rosybrown','lavender','thistle','plum','mediumslateblue','lavenderblush','mistyrose','aliceblue','mintcream','honeydew','snow']
	var randomBodyColor = bodyColorArray[Math.floor(Math.random()*bodyColorArray.length)]
	$('body').css('background-color', randomBodyColor)

	var colorArray = ['cornflowerblue','crimson','teal','mediumseagreen','mediumvioletred','olive','darkolivegreen','seagreen','darkseagreen','royalblue','darkmagenta','purple','indigo','darkslateblue','firebrick']
	var randomColor = colorArray[Math.floor(Math.random()*colorArray.length)]
	$('a').css('color', randomColor)

	var colorHoverArray = ['palevioletred','yellowgreen','darkseagreen','mediumaquamarine','orange','lightcoral','paleturquoise','cadet blue','khaki','darkkhaki','palegoldenrod','powderblue','rosybrown','lavender','thistle','plum','orchid','mediumslateblue','lavenderblush','mistyrose','aliceblue','mintcream','honeydew','snow']
	var randomHoverColor = colorHoverArray[Math.floor(Math.random()*colorArray.length)]
	$('#click').css('color', randomHoverColor)

})



