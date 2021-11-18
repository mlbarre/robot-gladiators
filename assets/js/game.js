window.alert("This is an alert! Javascript is running!");

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Tumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    while(enemyHealth > 0) {
    
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

        // SUBRACT THE VALUE OF -PLAYERATTACK- FROM THE VALUE OF -ENEMYHEALTH- AND USE THAT RESULT TO UPDATE THE VALUE IN THE -ENEMYHEALTH- VARIABLE
        enemyHealth = enemyHealth - playerAttack;
        // LOG A RESULTING MESSAGE TO THE CONSOLE SO WE KNOW THAT IT WORKED
        console.log (
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
        // CHECK ENEMY HEALTH
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // SUBRACT THE VALUE OF -ENEMYATTACK- FROM THE VALUE OF -PLAYERHEALTH- AND USE THAT RESULT TO UPDATE THE VALUE IN THE -PLAYERHEALTH- VARIABLE
        playerHealth = playerHealth - enemyAttack;
    // LOG A RESULTING MESSAGE TO THE CONSOLE SO WE KNOW THAT IT WORKED
        console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    // CHECK PLAYER'S HEALTH
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // IF PLAYER CHOOSES TO SKIP
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        //CONFIRM PLAYER WANTS TO QUIT 
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // IF YES (TRUE), LEAVE FIGHT
        if (confirmSkip) {
        window.alert(playerName + " has chosen to skip this fight! Goodbye!");
        //SUBTRACT MONEY FROM playerMoney FOR SKIPPING 
        playerMoney = playerMoney - 2;
    }
        // IF NO (FALSE), ASK QUESTION AGAIN BY RUNNING FIGHT()
        else {
            fight();
        }
    } else {
        window.alert("You need to choose a valid option. Try again.");
    }}
 };

for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
 
}