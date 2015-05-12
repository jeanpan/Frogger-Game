// Enemies our player must avoid
var Enemy = function(row, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    
    this.x = -100;
    this.y = 60 + (row - 1) * 80;
    this.speed = speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    if (this.x > 500)
        this.x = -100;
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {

    this.x = 200;
    this.y = 380;
    this.score = 0;

    this.sprite = 'images/char-boy.png';

}

Player.prototype.update = function() {
    // if ( Math.round(this.y / 80) === 1 ) {
    //     this.score = this.score + 1;
    // }
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(key) { 

    if ( key === 'left' ) {
        if ( this.x > 0 ) {
            this.x = this.x - 100;
        }
    } else if ( key === 'right' ) {
        if ( this.x < 400 ) {
            this.x = this.x + 100;
        }
    } else if ( key === 'up' ) {
        if ( this.y > 60 ) {
            this.y = this.y - 80;
        }
    } else if ( key === 'down') {
        if ( this.y < 380 ) {
            this.y = this.y + 80;
        } 
    }
}

Player.prototype.reset = function() {
    this.x = 200;
    this.y = 380;
    this.score = 0;    
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
allEnemies[0] = new Enemy(1, 300);
allEnemies[1] = new Enemy(2, 200);
allEnemies[2] = new Enemy(3, 150);
allEnemies[3] = new Enemy(3, 250);
allEnemies[6] = new Enemy(1, 200);
allEnemies[7] = new Enemy(1, 100);
allEnemies[8] = new Enemy(2, 300);

var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
