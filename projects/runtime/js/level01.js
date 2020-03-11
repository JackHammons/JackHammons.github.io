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
            "name": "Legend of Hallebot and Born: Void's Call",
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
                
                { "type": "enemy", "x": 1400, "y": groundY - 25},    
                { "type": "enemy", "x": 2000, "y": groundY - 25},   
                { "type": "enemy", "x": 3200, "y": groundY - 25},                    
                { "type": "enemy2", "x": 2300, "y": groundY - 65},  
                { "type": "enemy2", "x": 1700, "y": groundY - 65},                 
                { "type": "enemy2", "x": 2800, "y": groundY - 65},                 
                { "type": "enemy3", "x": 3900, "y": groundY - 70},    
                { "type": "enemy4", "x": 4200, "y": groundY - 35},       
                { "type": "enemy4", "x": 7000, "y": groundY - 35},
                { "type": "enemy5", "x": 1000, "y": groundY}, 
                { "type": "enemy5", "x": 3100, "y": groundY},                 
                { "type": "friend", "x": 15, "y": groundY - 170},  
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
        
        for (var key = 0; key < levelData.gameItems.length; key++) {
            var gameItemObject = levelData.gameItems[key];
                if (gameItemObject.type === 'sawblade'){
                    createSawBlade(gameItemObject.x, gameItemObject.y);
                }
                
                if (gameItemObject.type === 'enemy'){
                    createEnemy(gameItemObject.x, gameItemObject.y);
                }
                if (gameItemObject.type === 'enemy2'){
                    createEnemy2(gameItemObject.x, gameItemObject.y);
                }
                if (gameItemObject.type === 'enemy3'){
                    createEnemy3(gameItemObject.x, gameItemObject.y);
                }
                if (gameItemObject.type === 'enemy4'){
                    createEnemy4(gameItemObject.x, gameItemObject.y);
                }
                if (gameItemObject.type === 'enemy5'){
                    createEnemy5(gameItemObject.x, gameItemObject.y);
                }
                if (gameItemObject.type === 'friend'){
                    createFriend(gameItemObject.x, gameItemObject.y);
                }
        };    
            
        function createEnemy (x,y) {
            var enemy =  game.createGameItem('enemy',25);
            var blaster = draw.bitmap('shyphoninth (2).png');
            blaster.x = -85;
            blaster.y = -100;
            enemy.addChild(blaster);
            
            enemy.x = x;
            enemy.y = y;
            
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
        }
        
        

        function createEnemy2 (x, y) {    
            var enemy2 =  game.createGameItem('enemy2',25);
            var crawl = draw.bitmap('crawlaggar.png');
            crawl.x = -85;
            crawl.y = -100;
            enemy2.addChild(crawl);
            
            enemy2.x = x;
            enemy2.y = y;
            
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
        }
        
        function createEnemy3 (x, y) {
            var enemy3 =  game.createGameItem('enemy3',95);
            var thevoid = draw.bitmap('the Void (2).png');
            thevoid.x = -265;
            thevoid.y = -350;
            thevoid.scaleX = 3.5;
            thevoid.scaleY = 3.5;
            enemy3.addChild(thevoid);
            
            enemy3.x = x;
            enemy3.y = y;
            
            game.addGameItem(enemy3);       
            enemy3.velocityX = -1;
            
            enemy3.onPlayerCollision = function() {
                game.changeIntegrity(-10000);
            };
        }
        
        //ASCEND THROUGH THE VOID! THAT'S YOUR REWARD!!!//
        
        function createEnemy4 (x,y) {
            var enemy4 =  game.createGameItem('enemy4',25);
            var snail = draw.bitmap('klimeth (2).png');
            snail.x = -195;
            snail.y = -240;
            snail.scaleX = 2.5;
            snail.scaleY = 2.5;
            enemy4.addChild(snail);
            
            enemy4.x = x;
            enemy4.y = y;
            
            game.addGameItem(enemy4);       
            enemy4.velocityX = -4;
            
            enemy4.onPlayerCollision = function() {
                game.changeIntegrity(-30);
                enemy4.fadeOut();
            };
            enemy4.onProjectileCollision = function() {
                game.increaseScore(50);
                enemy4.fadeOut();
            }; 
        }
        function createEnemy5 (x,y) {
            var enemy5 =  game.createGameItem('enemy5',15);
            var trap = draw.bitmap('skelegoth (3).png');
            trap.x = -255;
            trap.y = -160;
            enemy5.addChild(trap);
            
            enemy5.x = x;
            enemy5.y = y;
            
            game.addGameItem(enemy5);       
            enemy5.velocityX = -1;
            
            enemy5.onPlayerCollision = function() {
                game.changeIntegrity(-90);
                enemy5.fadeOut();
            };
        }    
        
        function createFriend (x,y) {   
            var friend =  game.createGameItem('friend',25);
            var born = draw.bitmap('Born.png');
            born.scaleX = 3;
            born.scaleY = 3;
            friend.addChild(born);
            
            friend.x = x;
            friend.y = y;
            
            game.addGameItem(friend);       
            friend.velocityX = 0;
        }


        

    // code to do something with each element
        };
    }
        // DO NOT EDIT CODE BELOW HERE
    


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
