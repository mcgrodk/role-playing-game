// Battle sequenes starting, but bugs text not displaying
// ToDo: Simplify enemy array of objects into one object for easyEnemies,
// one object for hardEnemies with an array just for the names?

const button1 = document.querySelector("#button-1");
const button2 = document.querySelector("#button-2");
const button3 = document.querySelector("#button-3");
const expText = document.querySelector("#exp-text");
const confidenceText = document.querySelector("#confidence-text");
const credText = document.querySelector("#cred-text");
const enemyStats = document.querySelector("#enemy-stats");
const textContainer = document.querySelector("#text-container");

let exp = 0;
let confidence = 100;
let cred = 500; // Default 100; Value raised temporarily for testing
let text1 = document.querySelector("#text1");
let text2 = document.querySelector("#text2");
let enemy;
let enemyName = document.querySelector("#enemy-name");
let bugsText = document.querySelector("#bugs-text");
let enemyBugs;

let inventory = [
  {
    "item name": "Raspberry Pi",
    "power": 5
  }
]

const locations = [
  {
    "name": "home",
    "button text": ["Shop online", "Grind code", "Go to interview"],
    "button function": [goShop, goCode, goInterview],
    "text": "Home, sweet home."
  },
  {
    "name": "shop",
    "button text": ["Buy confidence (10 cred)", "Buy gear (30 cred)", "Log out"],
    "button function": [buyConfidence, buyGear, goHome],
    "text": "You log onto the web store."
  },
  {
    "name": "battle hub",
    "button text": ["Attempt easy code challenge", "Attempt hard code challenge", "Log off"],
    "button function": [battleEasy, battleHard, goHome],
    "text": "Ready to take on a code challenge?"
  },
  {
    "name": "battle mode",
    "button text": ["Attack", "Think", "Run"],
    "button function": [attack, guard, goHome],
  },
]

let shopItems = [
  {
    "item name": "Dual Monitor",
    "power": 5
  },
  {
    "item name": "Gamer Chair",
    "power": 10
  },
  {
    "item name": "Nerd Glasses",
    "power": 20,
  },
  {
    "item name": "BS in CS",
    "power": 30
  }
]

let enemies = [
  {
    "name": "Weather App",
    "bugs": 20,
    "power": 8,
  },
  {
    "name": "Rock Paper Scissors",
    "bugs": 10,
    "power": 4,
  },
  {
    "name": "To-Do List",
    "bugs": 15,
    "power": 6,
  },
  {
    "name": "Message Board",
    "bugs": 80,
    "power": 15,
  },
  {
    "name": "Shopping Cart",
    "bugs": 50,
    "power": 11,
  },
  {
    "name": "Tic Tac Toe",
    "bugs": 60,
    "power": 12
  },
  {
  "name": "5-D Chess in Space with Crypto Betting",
  "bugs": 200,
  "power": 20
  }
]

button1.onclick = goShop;
button2.onclick = goCode;
button3.onclick = goInterview;

// Location / display functions

function update(location) {
  enemyStats.style.display = "none";
  button1.textContent = location["button text"][0];
  button2.textContent = location["button text"][1];
  button3.textContent = location["button text"][2];
  text1.textContent = location["text"];
  text2.style.display = "none";
  button1.onclick = location["button function"][0];
  button2.onclick = location["button function"][1];
  button3.onclick = location["button function"][2];
}

function goHome() {
  update(locations[0])
}

function goShop() {
  update(locations[1])
}

function goCode() {
  update(locations[2])
}

function battleEasy() {
  update(locations[3]);
  enemyStats.style.display = "flex";
  enemy = enemies[Math.floor(Math.random() * 3)]; // Selects easy enemy of index 0-2 from enemies array
  enemyName.textContent = "\n" + enemy["name"];
  enemyBugs = enemy["bugs"]
  bugsText.textContent = '\n' + enemyBugs;
  text1.textContent = "Now coding " + enemy["name"] + ". Squash those bugs!";
}

function battleHard() {
  update(locations[3]);
  enemyStats.style.display = "flex";
  enemy = enemies[Math.floor(Math.random() * (6 - 3)) + 3]; // Selects hard enemy of index 3-5 from enemies array
  enemyName.textContent = "\n" + enemy["name"];
  enemyBugs = enemy["bugs"]
  bugsText.textContent = '\n' + enemyBugs;
  text1.textContent = "Now coding " + enemy["name"] + ". Squash those bugs!";
}

function goInterview() {
  update(locations[3])
  enemyStats.style.display = "flex";
  enemy = enemies[6];
  text1.textContent = "The dreaded job interview code challenge! This one's a real monster!"
  enemyName.textContent = '\n' + enemy["name"];
  enemyBugs = enemy["bugs"];
  bugsText.textContent = '\n' + enemyBugs;
}

// Shop functions

function buyConfidence() {
  text2.style.display = "none";
  if (cred < 10) {
    text1.textContent = "Not enough cred!";
  } else {
  cred -= 10;
  credText.textContent = cred;
  confidence += 10;
  confidenceText.textContent = confidence;
  text1.textContent = "You bought 10 confidence. (Don't question how that works.)";
}
}

function buyGear() {
  if (shopItems.length !== 0) {

  if (cred < 30) {
    text1.textContent = "Not enough cred!";
  } else {
  cred -= 30;
  credText.textContent = cred;
  inventory.push(shopItems[0]);
  shopItems.shift();
  text1.textContent = "You bought " + inventory[inventory.length -1]["item name"] + ".";
  showInventory();
}

  } else {
    text1.textContent = "Shop is all sold out! Want to sell?";
    button2.textContent = "Sell gear (30 cred)";
    button2.onclick = sellGear;
  }
}

function sellGear() {
  if (inventory.length === 1) {
    text1.textContent = "Don't sell your only item!";
  } else {
    text1.textContent = "You sold " + inventory[0]["item name"] + " for 30 cred.";
    shopItems.push(inventory[0]);
    inventory.shift();
    showInventory();
  }
}

function showInventory() {
  text2.style.display = "block";
  text2.textContent = "\nCurrent inventory: "
  for (i = 0; i < inventory.length; i++) {
    text2.textContent += inventory[i]["item name"]
    if (i != inventory.length - 1) { // Neatly formats inventory listing so that all but last item are followed by ", "
      text2.textContent += ", "
    }
  }
 }

// Battle mechanics functions

function attack() {
  let attackPower = 0;
  let enemyAttackPower = 0;
  for (let i = 0; i < inventory.length; i++) {
    attackPower += inventory[i]["power"];
  }
  attackPower += Math.floor(Math.random() * 4)
  enemyBugs -= attackPower;
  bugsText.textContent = enemyBugs;
  enemyAttackPower += enemy["power"] + Math.floor(Math.random() * 4)
  confidence -= enemyAttackPower;
  confidenceText.textContent = confidence;
  text1.textContent = `You fixed ${attackPower} bugs and took ${enemyAttackPower} damage to confidence.`  
}

function guard() {
  
}