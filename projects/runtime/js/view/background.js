var background = function (window) {
	'use strict';
	
	window.opspark = window.opspark || {};
	var draw = window.opspark.draw;
	var createjs = window.createjs;
	
	/*
	 * Create a background view for our game application
	 */
	window.opspark.makeBackground = function(app,ground) {
		/* Error Checking - DO NOT DELETE */
		if(!app) {
			throw new Error("Invaid app argument");
		}
		if(!ground || typeof(ground.y) == 'undefined') {
			throw new Error("Invalid ground argument");
		}
		
		// useful variables
		var canvasWidth = app.canvas.width;
		var canvasHeight = app.canvas.height;
		var groundY = ground.y;
		
		// container which will be returned
		var background;
		
		// ANIMATION VARIABLES HERE:
		var Custodiss;
		var buildings = [];
		var voidflower;
		var voidflower2;
		var voidflower3;
		var bulb;
	 
		// called at the start of game and whenever the page is resized
		// add objects for display in background. draws each image added to the background once
		function render() {
			background.removeAllChildren();

			// TODO: 2 - Part 2
			// this fills the background with a obnoxious yellow
			// you should modify this to suit your game
			var backgroundFill = draw.bitmap('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/252670/3149e1489531161eafa02be80c28d135901a4912.jpg');
			background.addChild(backgroundFill);
			
		
			
			// TODO: 5 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
			'for(var i=0;i<5;++i) {'
				'var buildingHeight = 300*Math.random();'
				"var building = draw.rect(75,buildingHeight,'LightGray','Black',1);"
				'building.x = canvasWidth*i*Math.random();'
				'building.y = groundY-buildingHeight;'
				'background.addChild(building);'
				'buildings.push(building);'
			'}'
			
			// the flowers replace the buildings!
			
			// TODO 4: Part 1 - Add a tree
			Custodiss = draw.bitmap('Custodiss.png');
			Custodiss.x = 1500;
			Custodiss.y = 65;
			Custodiss.scaleX = 2.5;
			Custodiss.scaleY = 2.5;
			background.addChild(Custodiss);
			
			voidflower = draw.bitmap('Voidflower.png');
			voidflower.x = 350;
			voidflower.y = 100;
			voidflower.scaleX = 3;
			voidflower.scaleY = 3;
			background.addChild(voidflower);
			
			voidflower2 = draw.bitmap('Void flower open.png');
			voidflower2.x = 1950;
			voidflower2.y = 90;
			voidflower2.scaleX = 3;
			voidflower2.scaleY = 3;
			background.addChild(voidflower2);
			
			voidflower3 = draw.bitmap('Void flower open2.png');
			voidflower3.x = 1050;
			voidflower3.y = 90;
			voidflower3.scaleX = 3;
			voidflower3.scaleY = 3;
			background.addChild(voidflower3);
			
			
			bulb = draw.bitmap('mandakkar.png');
			bulb.x = 700;
			bulb.y = 100;
			bulb.scaleX = .7;
			bulb.scaleY = .7;
			background.addChild(bulb);			
			
			
			
		} // end of render function - DO NOT DELETE
		
		
		// Perform background animation
		// called on each timer "tick" - 60 times per second
		function update() {
			// useful variables
			var canvasWidth = app.canvas.width;
			var canvasHeight = app.canvas.height;
			var groundY = ground.y;
			
			// TODO 4: Part 2 - Move the tree!
			Custodiss.x = Custodiss.x - 1;
			if(Custodiss.x < -1000) {
			Custodiss.x = canvasWidth;
}
			voidflower.x = voidflower.x - 1;
			if(voidflower.x < -700) {
			voidflower.x = canvasWidth;
}
			voidflower2.x = voidflower2.x - 1;
			if(voidflower2.x < -900) {
			voidflower2.x = canvasWidth;
			
}			voidflower3.x = voidflower3.x - 1;
			if(voidflower3.x < -800) {
			voidflower3.x = canvasWidth;
}
			bulb.x = bulb.x - 1;
			if(bulb.x < -700) {
			bulb.x = canvasWidth;
}

			
			// TODO 5: Part 2 - Parallax
			
			for (var i = 0; i < buildings.length; i++) {
			var building = buildings[i];
			building.x = building.x - 1;
				if(building.x < -200) {
				building.x = canvasWidth;
				}
			}

		} // end of update function - DO NOT DELETE
		
		
		
		/* Make a createjs Container for the background and let it know about the render and upate functions*/
		background = new createjs.Container();
		background.resize = render;
		background.update = update;
		
		/* make the background able to respond to resizing and timer updates*/
		app.addResizeable(background);
		app.addUpdateable(background);
		
		/* render and return the background */
		render();
		return background;
	};
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
	(typeof process.versions.node !== 'undefined')) {
	// here, export any references you need for tests //
	module.exports = background;
}
