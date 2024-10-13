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
let cred = 50;
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
    "name": "easy battle",
    "button text": ["Attack", "Think", "Run"],
    "button function": [attack, guard, goHome],
    "text": "Filler text."
  },
  {
    "name": "hard battle",
    "button text": ["Attack", "Think", "Run"],
    "button function": [attack, guard, goHome],
    "text": "Filler text."
  },
  {
    "name": "interview",
    "button text": ["Attack", "Think", "Run"],
    "button function": [attack, guard, goHome],
    "text": "The dreaded job interview code challenge! This one's a real monster!"
  }
]

let shopItems = [
  {
    "item name": "Dual Monitor",
    "power": 5
  },
  {
    "item name": "Gamer Chair",
    "power": 8
  },
  {
    "item name": "Nerd Tattoo",
    "power": 10,
  },
  {
    "item name": "BS in CS",
    "power": 25
  }
]

let easyEnemies = [
  {
    "name": "Weather App",
    "bugs": 20,
    "power": 10,
  },
  {
    "name": "Rock Paper Scissors page",
    "bugs": 20,
    "power": 10,
  },
  {
    "name": "Landing Page",
    "bugs": 20,
    "power": 10
  }
];

let hardEnemies = [];

let interviewBoss = {
  "name": " Dynamic ecommerce page",
  "bugs": 300,
  "power": 30
};

button1.onclick = goShop;
button2.onclick = goCode;
button3.onclick = goInterview;

function goHome() {
  update(locations[0])
}

function goShop() {
  update(locations[1])
}

function goCode() {
  update(locations[2])
}

function goInterview() {
  update(locations[5])
  enemyStats.style.display = "flex";
}

function buyConfidence() {
  if (cred <= 10) {
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
  if (cred <= 30) {
    textContainer.textContent = "Not enough cred!";
  } else {
  cred -= 30;
  credText.textContent = cred;
  inventory.push(shopItems[0]);
  shopItems.shift();
  textContainer.textContent = "You bought a " + inventory[-1]["item name"] + ".";
}
}

function battleEasy() {
  enemyStats.style.display = "flex";
}

function battleHard() {
  enemyStats.style.display = "flex";
}

function attack() {
  
}

function guard() {
  
}

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