


var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
}; 

var fightOrSkip = function() {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");


    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }

    promptFight = promptFight.toLowerCase();
    if (promptFight === "skip") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        if (confirmSkip) {
            window.alert(playerInfo.name + " has chosen to skip this fight! Goodbye!");

            playerInfo.money = Math.max(0, playerInfo.money - 10);
            return true;
        }
    }
}

var fight = function(enemy) {
    var isPlayerTurn = true;
    if (Math.random() > 0.5) {
        isPlayerTurn = false;
    }

    while(playerInfo.health > 0 && enemy.health > 0) {
        if (fightOrSkip()); {
            break;
        }
        
    }
    // SUBRACT THE VALUE OF -PLAYERATTACK- FROM THE VALUE OF -ENEMYHEALTH- AND USE THAT RESULT TO UPDATE THE VALUE IN THE -ENEMYHEALTH- VARIABLE
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);
        console.log (
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
            );

        // CHECK ENEMY HEALTH
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");

            playerInfo.money = playerInfo.money + 20;
            break;
            } else {
                window.alert(enemy.name + " still has " + enemy.health + " health left.");
            

        // SUBRACT THE VALUE OF -ENEMYATTACK- FROM THE VALUE OF -PLAYERHEALTH- AND USE THAT RESULT TO UPDATE THE VALUE IN THE -PLAYERHEALTH- VARIABLE
            } else {
        var damage = randomNumber(enemy.attack - 3, enemy.attack);

        playerInfo.health = Math.max(0, playerInfo.health - damage);
            console.log(
                enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
                );

        // CHECK PLAYER'S HEALTH
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            break;
            } else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        };
    }
    isPlayerTurn = !isPlayerTurn;
}

var startGame = function() {
    //RESET PLAYER STATS
    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {

        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

        
            var pickedEnemyObj = enemyInfo[i];
    
            pickedEnemyObj.health = randomNumber(40, 60);
    
            // debugger;
    
            fight(pickedEnemyObj);
    
        } 

        // IF PLAYER STILL ALIVE & WE'RE NOT AT THE LAST ENEMY IN THE ARRAY
        if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
shopOptionPrompt = parseInt(shopOptionPrompt);

    switch (shopOptionPrompt) {
        case 1:
            playerInfo.refillHealth();
            break;

        case 2:
            playerInfo.upgradeAttack();
            break;
            
        case 3:
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

var getPlayerName = function() {
    var name = "";

    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }


    console.log("Your robot's name is " + name);
    return name;
};

var test = function() {
    var response = prompt("Question?");
    if (response === "" || response === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        test();
    }
    return response;
}

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health += 20;
        this.money -= 7;
    } else {
        window.alert("You don't have enough money!");
    }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.")
        this.attack += 6;
        this.money -= 7;
        } else {
            window.alert("you don't have enough money!");
        }
    }
};

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    }, 
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];


startGame();
    