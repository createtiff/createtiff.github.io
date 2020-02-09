$(document).ready(function(){

	var bodyColorArray = ['palevioletred','yellowgreen','darkseagreen','mediumaquamarine','orange','lightcoral','paleturquoise','cadet blue','khaki','darkkhaki','palegoldenrod','powderblue','rosybrown','lavender','thistle','plum','mediumslateblue','lavenderblush','mistyrose']
	var randomBodyColor = bodyColorArray[Math.floor(Math.random()*bodyColorArray.length)]
	$('body').css('background-color', randomBodyColor)
	$('#backgroundcolorresult').css('color', randomBodyColor)
	$('#backgroundcolorresult').text(randomBodyColor)

	var colorArray = ['cornflowerblue','crimson','teal','mediumseagreen','mediumvioletred','olive','darkolivegreen','seagreen','darkseagreen','royalblue','darkmagenta','purple','indigo','darkslateblue','firebrick']
	var randomColor = colorArray[Math.floor(Math.random()*colorArray.length)]
	$('#box').css('background-color', randomColor)
	$('#squarecolorresult').css('color', randomColor)
	$('#squarecolorresult').text(randomColor)

	var heightArray = ['30vw','31vw','32vw','33vw','34vw','35vw','36vw','37vw','38vw','39vw','40vw']
	var randomHeight = heightArray[Math.floor(Math.random()*heightArray.length)]
	$('#box').css('height', randomHeight)

	var widthArray = ['35vw','36vw','37vw','38vw','39vw','40vw','41vw','42vw','43vw','44vw','45vw']
	var randomWidth = widthArray[Math.floor(Math.random()*widthArray.length)]
	$('#box').css('width', randomWidth)

	var radiusArray = ['10vw','11vw','12vw','13vw','14vw','15vw','16vw','17vw','18vw','19vw','20vw']
	var randomRadius = radiusArray[Math.floor(Math.random()*radiusArray.length)]
	$('#box').css('border-radius', randomRadius)

	var blurArray = ['blur(0.5vw)', 'blur(0.6vw)', 'blur(0.7vw)', 'blur(0.8vw)', 'blur(0.9vw)','blur(1vw)', 'blur(2vw)', 'blur(3vw)', 'blur(4vw)', 'blur(5vw)']
	var randomBlur = blurArray[Math.floor(Math.random()*blurArray.length)]
	$('#box').css('filter', randomBlur)

	var colorShadowArray = ['cornflowerblue','crimson','teal','mediumseagreen','mediumvioletred','olive','darkolivegreen','seagreen','darkseagreen','royalblue','darkmagenta','purple','indigo','darkslateblue','firebrick']
	var randomShadowColor = colorShadowArray[Math.floor(Math.random()*colorShadowArray.length)]
	$('#shadowbox').css('background-color', randomShadowColor)
	$('#squareshadowcolorresult').css('color', randomShadowColor)
	$('#squareshadowcolorresult').text(randomShadowColor)

	var shadowBlurArray = ['blur(5vw)', 'blur(6vw)','blur(7vw)', 'blur(8vw)','blur(9vw)', 'blur(10vw)']
	var randomShadowBlur = shadowBlurArray[Math.floor(Math.random()*shadowBlurArray.length)]
	$('#shadowbox').css('filter', randomShadowBlur)

	var shadowHeightArray = ['40vw','41vw','42vw','43vw','44vw','45vw','46vw','47vw','48vw','49vw','50vw']
	var randomShadowHeight = shadowHeightArray[Math.floor(Math.random()*shadowHeightArray.length)]
	$('#shadowbox').css('height', randomShadowHeight)

	var shadowWidthArray = ['46vw','47vw','48vw','49vw','50vw','51vw','52vw','53vw','54vw','55vw']
	var randomShadowWidth = shadowWidthArray[Math.floor(Math.random()*shadowWidthArray.length)]
	$('#shadowbox').css('width', randomShadowWidth)

	var shadowRadiusArray = ['0vw','20vw','21vw','22vw','23vw','24vw','25vw','26vw','27vw','28vw','29vw','30vw']
	var randomShadowRadius = shadowRadiusArray[Math.floor(Math.random()*shadowRadiusArray.length)]
	$('#shadowbox').css('border-radius', randomShadowRadius)

	var faces = ['AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH', ' II', 'JJ', 'KK', 'LL', 'MM', 'NN', 'OO', 'PP', 'QQ', 'RR', 'SS', 'TT', 'UU', 'VV', 'WW', 'XX', 'YY', 'ZZ', '11', '22', '3 3', '44', '55', '66', '77', '88', '99', '0 0', '! !', '? ?', '; ;', '//', '@@', '##', '$$', '%%', '^^', '&&', '* *', ") (", '©©', '--', '++', '==', "' '", ' " "', '~~', '` `', '> <', '>>', '< <', "¶¶", 'ºº', ' °°', '÷÷', 'øø', 'ΘΘ', 'ΔΔ', 'ΛΛ', 'ΦΦ', 'ㄱㄱ', 'ㄴㄴ', 'ㄷㄷ', 'ㄹㄹ', 'ㅁㅁ', 'ㅂㅂ', 'ㅅㅅ', 'ㅇㅇ', 'ㅈㅈ', 'ㅊㅊ', 'ㅋㅋ', 'ㅌㅌ', 'ㅍㅍ', 'ㅎㅎ', 'ㅜㅜ', 'ㅠㅠ', 'ㅗㅗ', 'ㅛㅛ', 'ㅡㅡ', 'ㅣㅣ', '♠♠', '♣♣', '♥♥', '♦♦', '◊◊', '⊕⊕', '⊗⊗', '≈≈', '≡≡', '∴∴',  '∞∞', '∂∂', 'ØØ', '××', '日日', 'ŸŸ', 'ΓΓ', 'ΠΠ', 'ΩΩ', 'ββ', 'θθ', 'σσ', '⊥⊥','¿¿','@@','##','%%','^^','&&','**','ºº','°°','••','¤¤','⊕⊕','⊗⊗','©©','®®','øø','∅∅','ØØ','--','++','==','""','~~','≈≈','≡≡','∴∴','∞∞','``',')(','><','〉〈','∠∠','««','¶¶','÷÷','∇∇','ΔΔ','ΛΛ','ΦΦ','φφ','εε','ηη','∀∀','××','ŸŸ','ΓΓ','ΠΠ','∏∏','∩∩','∪∪','ΩΩ','ββ','ÞÞ','θθ','ΘΘ','σσ','ζζ','δδ','ϑϑ','∂∂','√√','⊥⊥','ΞΞ','ΨΨ','ψψ','ϖϖ','§§','ÞÞ','ƒƒ','∫∫','ΣΣ','∑∑','∈∈','∉∉','∋∋','∃∃','ΨΨ','§§','††','‡‡','⊄⊄','⊆⊆','⊇⊇','⊂⊂','⊃⊃','⇔⇔','⇓⇓','⇒⇒','⇑⇑','⇐⇐','↔↔','↓ ↓','↑↑','→←','™™','ℵℵ','‰‰','$$','¢¢','₵₵','€€','₡₡','¥¥','££','₤₤','₹₹','₩₩','฿฿','₫₫','₪₪','₿₿','₠₠','₢₢','₣₣','₴₴','₳₳','ɱɱ','ŁŁ','₱₱','元元','৳৳','₦₦','₴₴','₺₺','₽₽','₾₾','лл','₲₲','₥₥','◯◯','◮◮','◭◭','◬◬','◫◫','⊟⊟','◪◪','◩◩','◨◨','◧◧','◦◦','◡◡','◠◠','◟◟','◞◞','◝◝','◜◜','◚◚','◙◙','◘◘','⌻⌻','⊡⊡','⊠⊠','⊞⊞','◗◗','◖◖','◕◕','◔◔','◓◓','◒◒','◑◑','◐◐','●●','◎◎','◍◍','◌◌','○○','◊◊','◉◉','⌾⌾','◈◈','◇◇','◆◆','◅◅','◄◄','◃◃','◂◂','◁◁','◀◀','▿▿','▾▾','▽▽','▼▼','▻▻','►►','▹▹','▸▸','▷▷','▶▶','▵▵','▴▴','△△','▲▲','▱▱','▰▰','▯▯','▮▮','▭▭','▬▬','▫▫','▪▪','▩▩','▨▨','▧▧','▦▦','▥▥','▤▤','▣▣','▢▢','□□','■■','⎔⎔','❏❏','❐❐','❑❑','❒❒','⌖⌖','⌬⌬','⌽⌽','⌭⌭','⌘⌘','⌑⌑','⌗⌗','⌇⌇','⌼⌼','⌁⌁','⌓⌓','⌔⌔','⌕⌕','⌥⌥','⌦⌦','⌫⌫','⍂⍂','☼☼','☀☀','♩♩','♪♪','♫♫','♬♬','♭♭','♮♮','♯♯','❖❖','✈✈','♨♨','♲♲','☭☭','☯☯','♔♔','♕♕','♚♚','♛♛','∢∢','♡♡','♢♢','♤♤','♧♧','✢✢','✥✥','✦✦','✧✧','❂❂','❉❉','✱✱','✰✰','✲✲','✴✴','✵✵','✶✶','✷✷','✸✸','❇❇','✩✩','✪✪','✫✫','✬✬','✭✭','✹✹','✺✺','✻✻','✼✼','❈❈','✳✳','⁑⁑','⁂⁂'] 
	var randomFace = faces[Math.floor(Math.random()*faces.length)]
	$('#boticon').text(randomFace)

	var textColorArray = ['palevioletred','yellowgreen','darkseagreen','mediumaquamarine','orange','lightcoral','paleturquoise','cadet blue','khaki','darkkhaki','palegoldenrod','powderblue','rosybrown','lavender','thistle','plum','orchid','mediumslateblue','lavenderblush','mistyrose','aliceblue','mintcream','honeydew','snow']
	var randomTextColor = textColorArray[Math.floor(Math.random()*textColorArray.length)]
	$('#boticon').css('color', randomTextColor)
	$('#textcolorresult').css('color', randomTextColor)
	$('#textcolorresult').text(randomTextColor)

	var mouth = ['_', '__', '◡', '‿', 'ᴗ', 'ᴗ'] 
	var randomMouth = mouth[Math.floor(Math.random()*mouth.length)]
	$('#mouth').text(randomMouth)

	var mouthColorArray = ['palevioletred','yellowgreen','darkseagreen','mediumaquamarine','orange','lightcoral','paleturquoise','cadet blue','khaki','darkkhaki','palegoldenrod','powderblue','rosybrown','lavender','thistle','plum','orchid','mediumslateblue','lavenderblush','mistyrose','aliceblue','mintcream','honeydew','snow']
	var randomMouthColor = mouthColorArray[Math.floor(Math.random()*mouthColorArray.length)]
	$('#mouth').css('color', randomMouthColor)
	$('#mouthcolorresult').css('color', randomMouthColor)
	$('#mouthcolorresult').text(randomMouthColor)




})


function myFunction() {
  var x = document.getElementById("resultbox");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}