var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Tumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);


var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
}; 

var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
    
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // IF PLAYER CHOOSES TO SKIP
    if (promptFight === "skip" || promptFight === "SKIP") {
        //CONFIRM PLAYER WANTS TO QUIT 
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // IF YES (TRUE), LEAVE FIGHT
        if (confirmSkip) {
        window.alert(playerName + " has chosen to skip this fight! Goodbye!");
        //SUBTRACT MONEY FROM playerMoney FOR SKIPPING 
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
    }
}

// SUBRACT THE VALUE OF -PLAYERATTACK- FROM THE VALUE OF -ENEMYHEALTH- AND USE THAT RESULT TO UPDATE THE VALUE IN THE -ENEMYHEALTH- VARIABLE
var damage = randomNumber(playerAttack - 3, playerAttack);

enemyHealth = Math.max(0, enemyHealth - damage);
console.log (
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

// CHECK ENEMY HEALTH
if (enemyHealth <= 0) {
window.alert(enemyName + " has died!");

playerMoney = Math.max(0, playerMoney - 10);

    break;
} else {
window.alert(enemyName + " still has " + enemyHealth + " health left.");
} 

// SUBRACT THE VALUE OF -ENEMYATTACK- FROM THE VALUE OF -PLAYERHEALTH- AND USE THAT RESULT TO UPDATE THE VALUE IN THE -PLAYERHEALTH- VARIABLE
var damage = randomNumber(enemyAttack - 3, enemyAttack);

playerHealth = Math.max(0, playerHealth - damage);
console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);

// CHECK PLAYER'S HEALTH
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
    break;
} else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}}
};

var startGame = function() {
    //RESET PLAYER STATS
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {

        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        
            var pickedEnemyName = enemyNames[i];
    
            enemyHealth = randomNumber(40, 60);
    
            // debugger;
    
            fight(pickedEnemyName);
    
        } 

        // IF PLAYER STILL ALIVE & WE'RE NOT AT THE LAST ENEMY IN THE ARRAY
        if (playerHealth > 0 && i < enemyNames.length - 1) {
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

            // IF YES
            if (storeConfirm) {
                shop();
            }
        }

        // IF PLAYER DIES
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
            // AFTER LOOP ENDS
            endGame();
        
}

var endGame = function() {
    // IF PLAYER IS STILL ALIVE, PLAYER WINS
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");

   

    if (playAgainConfirm) {
        // RESTART
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");

                // INCREASE HEALTH / DECREASE MONEY
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            } else {
                window.alert("You don't have enough money!");
            }


            break;

        case "UPGRADE":
        case "upgrade":
           if (playerMoney >= 7) {
               window.alert("Upgrading player's attack by 6 for 7 dollars.");

            // INCREASE ATTACK / DECREASE MONEY
            playerAttack =  playerAttack + 6;
            playerMoney =  playerMoney - 7;
           } else {
               window.alert("You don't have enough money!");
           }

            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
            // DO NOTHING, FUNCTION WILL END
            break;
            
        default: 
        window.alert("You did not pick a valid option. Try again.");

        // CALL SHOP FUNCTION AGAIN TO PICK VALID OPTION
        shop();
        break;
    }
};



startGame();
    