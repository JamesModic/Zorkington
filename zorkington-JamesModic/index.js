const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

start();

let room = {
    raft: raft,
    river: river,
    land: land,
    waterfall: waterfall,
};

let raft = new Room({
name: "you find yourself on a raft in a river",
description: "you see that the raft is going towards a waterfall",
requiredKey: true,
path: ["river"],
inventory: [
    {
        item: "oar",
        message: "You grabbed the and can now paddle down the river",
    },
],
});

let river = new Room({
    name: "the rushing river is bringing you straight towards a waterfall",
    description: "While flying down the river, you notice a floaty that can save your life. You can use, or take the floaty",
    requiredKey: true,
    path: ["land", "raft"],
    inventory: [
        {
            item: "floaty",
            message: "You grabbed the floaty and can now jump in the water to safely swim to shore",
        },
    ],
})

let itemTable = {
    oar: oar,
    floaty: floaty,
    anchor: anchor,
  };

start();
let commands = {
movement: ["move", "enter", "walk", "go"],
pickup: ["pick", "grab", "take", "pickup"],
unlock: ["unlock", "open"],
}


async function start() {
    let welcomeMessage = await ask(
      "Welcome to the white water rafting adventure! Shall we begin the adventure? type (yes) to begin"
    );
    while (welcomeMessage !== "yes") {
      welcomeMessage = await ask(
        "Dont be such a scardy-cat, adventure awaits! Type (yes) to begin"
      );
    }
    console.log(
      "Let the Adventure begin! It appears that you are on a raft going down a roaring river with a paddle. You can type (use oar) to reach for the paddle or (use floaty) to reach for a floatation device"
    );

    }