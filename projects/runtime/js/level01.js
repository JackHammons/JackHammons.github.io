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
            "name": "Legend of Hallebot: Journey Through the Void",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 550, "y": groundY},                
                { "type": "sawblade", "x": 700, "y": groundY - 120},
                { "type": "sawblade", "x": 800, "y": groundY},
                { "type": "sawblade", "x": 1000, "y": groundY - 120},
                { "type": "sawblade", "x": 1150, "y": groundY},   
                
                { "type": "sawblade", "x": 2550, "y": groundY},                
                { "type": "sawblade", "x": 2700, "y": groundY - 120},
                { "type": "sawblade", "x": 2800, "y": groundY},
                { "type": "sawblade", "x": 3000, "y": groundY},
                { "type": "sawblade", "x": 3150, "y": groundY - 120},                  
                
                { "type": "sawblade", "x": 3550, "y": groundY},                
                { "type": "sawblade", "x": 3700, "y": groundY},
                { "type": "sawblade", "x": 3800, "y": groundY - 120},
                { "type": "sawblade", "x": 4000, "y": groundY},
                { "type": "sawblade", "x": 4150, "y": groundY - 120},               
                
                { "type": "sawblade", "x": 5400, "y": groundY},
                { "type": "sawblade", "x": 5550, "y": groundY},                
                { "type": "sawblade", "x": 5700, "y": groundY - 120},
                { "type": "sawblade", "x": 5800, "y": groundY},
                { "type": "sawblade", "x": 6000, "y": groundY - 120},
                
                { "type": "enemy", "x": 1200, "y": groundY - 50},    
                { "type": "enemya", "x": 1200, "y": groundY - 50},   
                { "type": "enemyb", "x": 1200, "y": groundY - 50},                    
                { "type": "enemy2", "x": 1200, "y": groundY - 50},  
                { "type": "enemy2a", "x": 1200, "y": groundY - 50},                 
                { "type": "enemy2b", "x": 1200, "y": groundY - 50},                 
                { "type": "enemy3", "x": 1200, "y": groundY - 50},    
                { "type": "friend", "x": 1200, "y": groundY - 50},  
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        
        function createSawBlade(x, y) {
            var hitZoneSize = 30;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;

        
            game.addGameItem(sawBladeHitZone);
        
            var obstacleImage = draw.bitmap('void razors.png');
            sawBladeHitZone.addChild(obstacleImage);
            obstacleImage.scaleX = .5;
			obstacleImage.scaleY = .5;
            obstacleImage.x = -35;
            obstacleImage.y = -35;
        }
            
            var enemy =  game.createGameItem('enemy',25);
            var blaster = draw.bitmap('shyphoninth (2).png');
            blaster.x = -85;
            blaster.y = -100;
            enemy.addChild(blaster);
            
            enemy.x = 2000;
            enemy.y = groundY - 25;
            
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
            
            var enemya =  game.createGameItem('enemya',25);
            var blastera = draw.bitmap('shyphoninth (2).png');
            blastera.x = -85;
            blastera.y = -100;
            enemya.addChild(blastera);
            
            enemya.x = 3200;
            enemya.y = groundY - 25;
            
            game.addGameItem(enemya);       
            enemya.velocityX = -1;
            
            enemya.onPlayerCollision = function() {
                game.changeIntegrity(-30);
                enemya.fadeOut();
            };
            enemya.onProjectileCollision = function() {
                game.increaseScore(50);
                enemya.fadeOut();
            };    
            
            var enemyb =  game.createGameItem('enemyb',25);
            var blasterb = draw.bitmap('shyphoninth (2).png');
            blasterb.x = -85;
            blasterb.y = -100;
            enemyb.addChild(blasterb);
            
            enemyb.x = 4500;
            enemyb.y = groundY - 25;
            
            game.addGameItem(enemyb);       
            enemyb.velocityX = -1;
            
            enemyb.onPlayerCollision = function() {
                game.changeIntegrity(-30);
                enemyb.fadeOut();
            };
            enemya.onProjectileCollision = function() {
                game.increaseScore(50);
                enemya.fadeOut();
            };            
            
            var enemy2 =  game.createGameItem('enemy2',25);
            var crawl = draw.bitmap('crawlaggar.png');
            crawl.x = -85;
            crawl.y = -100;
            enemy2.addChild(crawl);
            
            enemy2.x = 1200;
            enemy2.y = groundY - 65;
            
            game.addGameItem(enemy2);       
            enemy2.velocityX = -1;
            
            enemy2.onPlayerCollision = function() {
                game.changeIntegrity(-30);
                enemy2.fadeOut();
            };
            enemy2.onProjectileCollision = function() {
                game.increaseScore(50);
                enemy2.fadeOut();
            };                
            
            var enemy2a =  game.createGameItem('enemy2a',25);
            var crawla = draw.bitmap('crawlaggar.png');
            crawla.x = -85;
            crawla.y = -100;
            enemy2a.addChild(crawla);
            
            enemy2a.x = 1800;
            enemy2a.y = groundY - 65;
            
            game.addGameItem(enemy2a);       
            enemy2a.velocityX = -1;
            
            enemy2a.onPlayerCollision = function() {
                game.changeIntegrity(-30);
                enemy2a.fadeOut();
            };
            enemy2a.onProjectileCollision = function() {
                game.increaseScore(50);
                enemy2a.fadeOut();
            };
            
              var enemy2b =  game.createGameItem('enemy2',25);
            var crawlb = draw.bitmap('crawlaggar.png');
            crawlb.x = -85;
            crawlb.y = -100;
            enemy2b.addChild(crawlb);
            
            enemy2b.x = 2500;
            enemy2b.y = groundY - 65;
            
            game.addGameItem(enemy2b);       
            enemy2b.velocityX = -1;
            
            enemy2b.onPlayerCollision = function() {
                game.changeIntegrity(-30);
                enemy2b.fadeOut();
            };
            enemy2b.onProjectileCollision = function() {
                game.increaseScore(50);
                enemy2b.fadeOut();
            };                      
            
            var enemy3 =  game.createGameItem('enemy3',25);
            var thevoid = draw.bitmap('the Void (2).png');
            thevoid.x = -185;
            thevoid.y = -350;
            thevoid.scaleX = 2.8;
            thevoid.scaleY = 2.8;
            enemy3.addChild(thevoid);
            
            enemy3.x = 4000;
            enemy3.y = groundY - 15;
            
            game.addGameItem(enemy3);       
            enemy3.velocityX = -1;
            
            enemy3.onPlayerCollision = function() {
                game.changeIntegrity(-10000);
                enemy.fadeOut();
            };
            enemy3.onProjectileCollision = function() {
                game.increaseScore(50);
                enemy.fadeOut();
            }; 
            
            var friend =  game.createGameItem('friend',25);
            var born = draw.bitmap('Born.png');
            born.scaleX = 3;
            born.scaleY = 3;
            friend.addChild(born);
            
            friend.x = 15;
            friend.y = groundY - 170;
            
            game.addGameItem(friend);       
            friend.velocityX = 0;
        

        for (var key = 0; key < levelData.gameItems.length; key++) {
            var gameItemObject = levelData.gameItems[key];
                if (gameItemObject.type === 'sawblade'){
                    createSawBlade(gameItemObject.x, gameItemObject.y);
                    
            }

    // code to do something with each element
        };

        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
