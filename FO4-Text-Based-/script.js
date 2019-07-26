function startGame() {
  var HTMLString = "<button class='game-button' id='Enter Vault' onclick='exitVault()'=>Enter Vault 111</button><br><button class='game-button' id='doNotEnterVault' onclick='DEATH()'>Do not enter Vault 111</button>"
document.getElementById('stage').innerHTML = HTMLString;
}
  function DEATH() {
    alert('You died')
      var HTMLString = "<button class='game-button' id='Try again' onclick='startGame()'>Try again!</button>"
    document.getElementById('stage').innerHTML = HTMLString;
  }
function exitVault() {
  alert('You exited the vault')
    var HTMLString = "<button class='game-button' id='Go to concord' onclick='arrivedAtConcord()'>Go to concord</button><br><button class='game-button' id='Go to dimond city' onclick= 'arrivedAtDimondCity()'>Go to dimond city</button>"
document.getElementById('stage').innerHTML = HTMLString;
}
function arrivedAtConcord() {
  alert('You have arrived at concord')
    var HTMLString = "<button class='game-button' id='Save the minutemen' onclick='savedTheMinutemen()'>Save the minutemen</button><br><button class='game-button' class='game-button' class='game-button' id='Leave the minutemen to die' onclick='deathToMinutemen()'>Leave the minutemen to die</button>"
    document.getElementById('stage').innerHTML = HTMLString;
}
function arrivedAtDimondCity() {
  alert('You have arrived at dimond city')
    var HTMLString = "<button class='game-button' class='game-button' id='Meet piper for the interview' onclick='storyOfTheYear()'>Meet Piper for the interview</button><br><button class='game-button' id='Go to the detective agency' onclick='findTheFake()'>Go to the detective agency</button>"
    document.getElementById('stage').innerHTML = HTMLString;
}
function savedTheMinutemen() {
  alert('[Power armor aquired]')
    var HTMLString = "<button class='game-button' id='Join the minutemen' onclick='joinedTheMinutemen()'>Join the minutemen</button><br><button class='game-button' id='Go to dimond city' onclick='arrivedAtDimondCity()'>Go on your way</button>"
  document.getElementById('stage').innerHTML = HTMLString;
}
function deathToMinutemen() {
  alert('[Power armor aquired]')
  alert('They shall not mark you map!')
    var HTMLString = "<button class='game-button' id='Go to dimond city' onclick='arrivedAtDimondCity()'>Go to dimond city</button>";
  document.getElementById('stage').innerHTML = HTMLString;
}
function storyOfTheYear() {
  alert('[Piper is now avalible as you companion]')
  var HTMLString = "<button class='game-button' id='Go to the detective agency' onclick='findTheFake()'>Go to the detective agency</button>"
  document.getElementById('stage').innerHTML = HTMLString;
}
function findTheFake() {
  alert('You have arrived at the detective agency');
    var HTMLString = "<button class='game-button' id='Find Nick Valentine' onclick='unLuckyValentine()'>Find Nick Valentine</button>"
  document.getElementById('stage').innerHTML = HTMLString;
}
function joinedTheMinutemen() {
  alert('[You have joined the minutemen faction]')
    var HTMLString = "<button class='game-button' id='Talk to preston' onclick='IMarkedYourMap()'>Talk to Preston</button><button class='game-button' id='Talk to Sturges' onclick='questOfBeds()'>Talk to Sturges</button>"
    document.getElementById('stage').innerHTML = HTMLString;
}
function unLuckyValentine() {
  alert('Arrived at vault 98')
    var HTMLString = "<button class='game-button' id='Enter vault 98' onclick='vault98()'>Enter vault 98</button>"
  document.getElementById('stage').innerHTML = HTMLString;
}
function vault98() {
  alert('Entered vault 98')
    var HTMLString = "<button class='game-button' id='Free Nick Valentine' onclick='freeValentine()'>Free Nick Valentine</button>"
    document.getElementById('stage').innerHTML = HTMLString;
}
function freeValentine() {
  alert('You freed Nick Valentine')
    var HTMLString = "<button class='game-button' id='Exit Vault 98' onclick='eVault98()'>Exit Vault 98</button>"
    document.getElementById('stage').innerHTML = HTMLString;
}
function eVault98() {
  alert('You exited Vault 98')
    var HTMLString = "<button class='game-button' id='Tell Nick about your son' onclick='investigationStarted()'>Tell Nick about your son</button>"
  document.getElementById('stage').innerHTML = HTMLString;
}
function investigationStarted() {
  alert("Find Kellog's house")
  alert('[Nick Valentine is avalible as your companion]')
    var HTMLString = "<button class='game-button' id='Go to Kellogs house' onclick='kellog()'>Go to Kellog's house</button>"
  document.getElementById('stage').innerHTML = HTMLString;
}
function kellog() {
  alert("Arrived at Kellog's house")
    var HTMLString = "<button class='game-button' id='Pick lock' onclick='kellogsHouse()'>Pick lock</button><button class='game-button' id='Ask Geniva for the key' onclick='kellogsHouse()'>Ask Geniva for the key</button>"
  document.getElementById('stage').innerHTML = HTMLString;
}
function kellogsHouse() {
  alert('[You made it to the end]')
    var HTMLString = "<h1 id='end-text'>Continued in part 2</h1><br><Button class='game-button' id='Play again' onclick='startGame()'>Play again</Button>"
  document.getElementById('stage').innerHTML = HTMLString;
}