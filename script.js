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
let enemyName = document.querySelector("#enemy-name");
let enemyBugs = document.querySelector("enemy-bugs");

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
    "text": "Filler text."
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

let easyEnemies = [
  {
    "name": "Weather App",
    "bugs": 20,
    "power": 10,
  },
  {
    "name": "Rock Paper Scissors",
    "bugs": 20,
    "power": 10,
  },
  {
    "name": "To-Do List",
    "bugs": 20,
    "power": 10
  }
];

let hardEnemies = [
  {
    "name": "Message Board",
    "bugs": 100,
    "power": 20,
  },
  {
    "name": "Shopping Cart",
    "bugs": 100,
    "power": 20,
  },
  {
    "name": "Tic Tac Toe",
    "bugs": 100,
    "power": 20
  }
];

let interviewBoss = {
  "name": "\n5-D Chess in Space with Crypto Betting",
  "bugs": 300,
  "power": 30
};

button1.onclick = goShop;
button2.onclick = goCode;
button3.onclick = goInterview;

// Location / display functions

function update(location) {
  enemyStats.style.display = "none";
  button1.textContent = location["button text"][0];
  button2.textContent = location["button text"][1];
  button3.textContent = location["button text"][2];
  textContainer.textContent = location["text"];
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
  enemy = easyEnemies[Math.floor(Math.random() * 3)]; // Selects random index from easyEnemies array
  enemyName.textContent = "\n" + enemy["name"];
  enemyBugs = enemy["bugs"]
  enemyBugs.textContent = enemyBugs;
  textContainer.textContent = "Now coding " + enemy["name"] + ". Squash those bugs!";
}

function battleHard() {
  update(locations[3]);
  enemyStats.style.display = "flex";
  enemy = hardEnemies[Math.floor(Math.random() * 3)]; // Selects random index from hardEnemies array
  enemyName.textContent = "\n" + enemy["name"];
  enemyBugs = enemy["bugs"]
  enemyBugs.textContent = enemyBugs;
  textContainer.textContent = "Now coding " + enemy["name"] + ". Squash those bugs!";
}

function goInterview() {
  update(locations[3])
  enemyStats.style.display = "flex";
  textContainer.textContent = "The dreaded job interview code challenge! This one's a real monster!"
  enemyName.textContent = interviewBoss["name"];
  enemyBugs = interviewBoss["bugs"];
  enemyBugs.textContent = enemyBugs;
}

// Shop functions

function buyConfidence() {
  if (cred < 10) {
    textContainer.textContent = "Not enough cred!";
  } else {
  cred -= 10;
  credText.textContent = cred;
  confidence += 10;
  confidenceText.textContent = confidence;
  textContainer.textContent = "You bought 10 confidence. (Don't question how that works.)";
}
}

function buyGear() {
  if (shopItems.length !== 0) {

  if (cred < 30) {
    textContainer.textContent = "Not enough cred!";
  } else {
  cred -= 30;
  credText.textContent = cred;
  inventory.push(shopItems[0]);
  shopItems.shift();
  textContainer.textContent = "You bought " + 
  inventory[inventory.length -1]["item name"] + ".";
  showInventory();
}

  } else {
    textContainer.textContent = "Shop is all sold out! Wnat to sell?";
    button2.textContent = "Sell gear (30 cred)";
    button2.onclick = sellGear;
  }
}

function sellGear() {
  if (inventory.length === 1) {
    textContainer.textContent = "Don't sell your only item!";
  } else {
    textContainer.textContent = "You sold " + inventory[0]["item name"] + " for 30 cred.";
    shopItems.push(inventory[0]);
    inventory.shift();
    showInventory();
  }
}

function showInventory() {
  textContainer.textContent += "\nCurrent inventory: "
  for (i = 0; i < inventory.length; i++) {
    textContainer.textContent += inventory[i]["item name"]
    if (i != inventory.length - 1) { // Neatly formats inventory listing so that all but last item are followed by ", "
      textContainer.textContent += ", "
    }
  }
 }

// Battle mechanics functions

function attack() {
  
}

function guard() {
  
}