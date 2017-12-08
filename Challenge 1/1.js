jQuery(document).ready(function() {
	//console.log("Test");
	jQuery("#sol-app").html(
		"<p>Input String:</p><br><p>g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc dmp. bmgle gr gl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq rcvr gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu ynnjw ml rfc spj.</p><br><p>Solution String:</p><br><p>"
		);
	var inputStr="g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc dmp. bmgle gr gl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq rcvr gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu ynnjw ml rfc spj."
	var strTransform = function(char) {
		if((char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 88) || (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 120))
		char=String.fromCharCode(char.charCodeAt(0) + 2);
		else if(char.charCodeAt(0) === 89)
		char=String.fromCharCode(65);
		else if(char.charCodeAt(0) === 90)
		char=String.fromCharCode(66);
		else if(char.charCodeAt(0) === 121)
		char=String.fromCharCode(97);
		else if(char.charCodeAt(0) === 122)
		char=String.fromCharCode(98);
		jQuery("#sol-app").append(char);
	}
	inputStr.split("").forEach(strTransform);
	jQuery("#sol-app").append(
		"</p><br><p>URL string: map</p><br><p>URL String Transformed:</p><br><p>"
		);
	"map".split("").forEach(strTransform);
	jQuery("#sol-app").append("</p>")
});