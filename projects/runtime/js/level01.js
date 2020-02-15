var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Legend of Hallebot: Journey Through the Shadow Realm",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY - 100},
                { "type": "sawblade", "x": 700, "y": groundY - 100},
                { "type": "sawblade", "x": 1000, "y": groundY - 100},
                { "type": "sawblade", "x": 1300, "y": groundY - 100},
                { "type": "spiketrap", "x": 500, "y": groundY - 50},
                { "type": "spiketrap", "x": 900, "y": groundY - 50}, 
                { "type": "spiketrap", "x": 1200, "y": groundY - 50},
                { "type": "spiketrap", "x": 1600, "y": groundY - 50}, 
                { "type": "enemy", "x": 1200, "y": groundY - 50},    
                { "type": "reward", "x": 1200, "y": groundY - 50},  
   
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
        
        function createSawBlade(x, y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
        
            game.addGameItem(sawBladeHitZone);
        
            var obstacleImage = draw.bitmap('img/sawblade.png');
            sawBladeHitZone.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
        }
            
            var enemy =  game.createGameItem('enemy',25);
            var terrorbeak = draw.bitmap('img/Terrorbeak (1).png');
            terrorbeak.x = -85;
            terrorbeak.y = -240;
            enemy.addChild(terrorbeak);
            
            enemy.x = 1500;
            enemy.y = groundY-50;
            
            game.addGameItem(enemy);       
            enemy.velocityX = -1;
            
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-30);
                enemy.fadeOut();
            };
            enemy.onProjectileCollision = function() {
                game.increaseScore(50);
                enemy.fadeOut();
            };                

        

        for (var key = 0; key < levelData.gameItems.length; key++) {
            var gameItemObject = levelData.gameItems[key];
                if (gameItemObject.type === 'sawblade'){
                    createSawBlade(gameItemObject.x, gameItemObject.y);
                    
            }
                if (gameItemObject.type === 'spiketrap'){
                    createSpikeTrap(gameItemObject.x, gameItemObject.y);
                    
            };           

            
    function createSpikeTrap(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
        
            game.addGameItem(sawBladeHitZone);
        
            var obstacleImage = draw.bitmap('https://vignette.wikia.nocookie.net/dont-starve-game/images/9/95/Bramble_Trap.png/revision/latest/top-crop/width/360/height/450?cb=20190208165141');
            sawBladeHitZone.addChild(obstacleImage);
            obstacleImage.x = -35;
            obstacleImage.y = -25;     
            obstacleImage.scaleX = .2
            obstacleImage.scaleY = .2
            
            };
            


    // code to do something with each element
        };
    function createReward() {
        var reward =  game.createGameItem('reward',25);
        var masterSword = draw.bitmap('https://art.pixilart.com/f5c730da7b564ae.png');
        masterSword.x = -85;
        masterSword.y = -25;
        reward.addChild(masterSword);
        reward.x = 400;
        reward.y = groundY-50;
        game.addGameItem(reward);
    
        reward.velocityX = 1;
    
        reward.onPlayerCollision = function() {
        game.increaseScore(500);
        reward.fadeOut();
};
}

        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
