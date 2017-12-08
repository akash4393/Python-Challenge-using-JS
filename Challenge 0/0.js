jQuery(document).ready(function() {
	//console.log("Test");
	jQuery('#sol-app').html(
			"<p>Please tell me you did not get here by looking for the solution!</p>"
		);
	var x = Math.pow(2, 38);
	var htmlStr=`<br><p>Solution:</p><br><p>${x}</p>`
	console.log(htmlStr);
	jQuery("#sol-app").append(htmlStr);
});