jQuery(document).ready(function() {
	//console.log("Test");
	jQuery("#sol-app").html(
		"<p>Input String:</p><br><p>g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc dmp. bmgle gr gl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq rcvr gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu ynnjw ml rfc spj.</p><br><p>Solution String:</p><br><p>"
		);
	var inputStr="g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc dmp. bmgle gr gl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq rcvr gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu ynnjw ml rfc spj."
	inputStr.split("").forEach((char) => {
		if(char != " ")
		char=String.fromCharCode(char.charCodeAt(0) + 2);
		jQuery("#sol-app").append(char);
	});
});