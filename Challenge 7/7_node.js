//Author: Akash Singh

// Dependencies - 
// NPM dependency - 
//  > npm install png-js

const fs = require('fs');
const gm = require('gm').subClass({imageMagick: true});
const pngjs = require('png-js');

var imgFile = gm(__dirname + '/oxygen.png');

var imageSize = {
	x: 0,
	y: 0
};

imgFile.size((err, size) => {
	imageSize['x'] = size.width;
	imageSize['y'] = size.height;
	fileSizeReadComplete(imageSize);
});

var fileSizeReadComplete = function() {
	console.log("Image Size Data (used for calculations):");
	console.log("x: " + imageSize['x'] + " y: " + imageSize['y']);
	console.log("x * y = " + imageSize['x']*imageSize['y']);
}

pngjs.decode(__dirname + '/oxygen.png', (pixels) => {
	var colorData = new Array();
	for(var i=0, j=0; i<=pixels.length, j<=629*95; i+=4, j++) {
		colorData[j] = [(pixels[i]), (pixels[i+1]), (pixels[i+2]), (pixels[i+3])];
	}
	var colorDataMidRowRaw = [];
	//---------------------------------------------//
	//629 = image width, 95 = image height
	//so image has total 629 columns and 95 rows
	//47 = middle row of image (0.5 above the middle)
	//Since the gray scale boxes are taller than 1
	//pixel using row 45, 46, 47, 48, and so on will
	//fetch pixels from the middle gray scale row.
	//For loop continues for 629 times, fetching 
	//every pixel of 47th row
	//Each gray scale box has a width of 7 pixels
	//---------------------------------------------//
	for(var i=(629*47); i<=((629*47))+629; i+=7) {
		if(colorData[i][0] === colorData[i][1] && colorData[i][1] === colorData[i][2]){
			colorDataMidRowRaw[i] = colorData[i];
		}
	}
	var colorDataMidRow = [];
  	for(var i = 0; i < colorDataMidRowRaw.length; i++) {
	    if (colorDataMidRowRaw[i]) {
	      colorDataMidRow.push(colorDataMidRowRaw[i]);
	    }
  	}
  	var colorValueStr = "";
  	for(var i=0; i<=colorDataMidRow.length-1; i++) {
  		colorValueStr += String.fromCharCode(colorDataMidRow[i][0]);	//String has an ASCII code at the end
  	}
  	//Converting ascii code embedded in string to integer array
  	var asciiCodeArr = [];
  	var i = colorValueStr.lastIndexOf("[")+1;
  	while(i<colorValueStr.length) {
  		if(colorValueStr.charAt(i) === " " || colorValueStr.charAt(i) === ",") {
			i+=2;
			continue;
  		}
  		asciiCodeArr.push(parseInt(colorValueStr.substr(i, 3)));
  		i+=3
  	}
  	asciiCodeArr.splice(-1,1);
  	//Converting ascii code integer array back to string
  	var asciiCodeStr = "";
  	asciiCodeArr.forEach(ascii => {
  		asciiCodeStr += String.fromCharCode(ascii);
  	});
  	var finalString = colorValueStr.substr(0, colorValueStr.lastIndexOf("[")) + asciiCodeStr;
  	console.log("\nSolution String:\n" + finalString + "\n");

});