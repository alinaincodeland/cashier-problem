class Change {
  constructor() {}

  changeOptions = [
    200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01,
  ];

  getChange(price, amountPaid) {
    let totalChange = (amountPaid - price).toFixed(2);
    let changeLeft = totalChange;
    let changeNotes = [];

    if (price > amountPaid) {
      console.log();
      console.log(
        " /$$$$$$$            /$$                                                                                                           /$$       /$$"
      );
      console.log(
        "| $$__  $$          |__/                                                                                                          | $$      | $$"
      );
      console.log(
        "| $$    $$  /$$$$$$  /$$ /$$$$$$$   /$$$$$$        /$$$$$$/$$$$   /$$$$$$   /$$$$$$   /$$$$$$         /$$$$$$$  /$$$$$$   /$$$$$$$| $$$$$$$ | $$"
      );
      console.log(
        "| $$$$$$$  /$$__  $$| $$| $$__  $$ /$$__  $$      | $$_  $$_  $$ /$$__  $$ /$$__  $$ /$$__  $$       /$$_____/ |____  $$ /$$_____/| $$__  $$| $$"
      );
      console.log(
        "| $$__  $$| $$  |__/| $$| $$  | $$| $$  | $$      | $$ | $$ | $$| $$  | $$| $$  |__/| $$$$$$$$      | $$        /$$$$$$$|  $$$$$$ | $$  | $$|__/"
      );
      console.log(
        "| $$    $$| $$      | $$| $$  | $$| $$  | $$      | $$ | $$ | $$| $$  | $$| $$      | $$_____/      | $$       /$$__  $$ |____  $$| $$  | $$    "
      );
      console.log(
        "| $$$$$$$/| $$      | $$| $$  | $$|  $$$$$$$      | $$ | $$ | $$|  $$$$$$/| $$      |  $$$$$$$      |  $$$$$$$|  $$$$$$$ /$$$$$$$/| $$  | $$ /$$"
      );
      console.log(
        "|_______/ |__/      |__/|__/  |__/ |____  $$      |__/ |__/ |__/ ______/ |__/       |_______/       |_______/ |_______/|_______/ |__/  |__/|__/"
      );
      console.log("                                   /$$  | $$ ");
      console.log("                                 |  $$$$$$/");
      console.log("                                  |______/");
      return console.log(
        `Price: €${price}; Paid amount: €${amountPaid}. You're €${(
          price - amountPaid
        ).toFixed(2)} short, kid!`
      );
    }

    for (let i = 0; i < this.changeOptions.length && changeLeft > 0; i++) {
      let currentNote = this.changeOptions[i];
      while (changeLeft >= currentNote) {
        changeNotes.push(currentNote);
        changeLeft = (changeLeft - currentNote).toFixed(2);
      }
    }

    let counts = [];

    changeNotes.forEach((note) => {
      counts[note] = (counts[note] || 0) + 1;
    });

    console.log(
      `Price: €${price}; Paid amount: €${amountPaid}; Change: €${totalChange}`
    );

    console.log(
      "  ______              __                                                                    __                                                    "
    );
    console.log(
      " /      |            |  |                                                                  |  |                                                        "
    );
    console.log(
      "|  $$$$$$|  ______  _| $$_          __    __   ______   __    __   ______          _______ | $$____    ______   _______    ______    ______   __ "
    );
    console.log(
      "| $$ __|$$ /      ||   $$ |        |  |  |  | /      | |  |  |  | /      |        /       || $$    |  |      | |       |  /      |  /      | |  |"
    );
    console.log(
      "| $$|    ||  $$$$$$||$$$$$$        | $$  | $$|  $$$$$$|| $$  | $$|  $$$$$$|      |  $$$$$$$| $$$$$$$|  |$$$$$$|| $$$$$$$||  $$$$$$||  $$$$$$ |$$"
    );
    console.log(
      "| $$ |$$$$| $$    $$ | $$ __       | $$  | $$| $$  | $$| $$  | $$| $$   |$$      | $$      | $$  | $$ /      $$| $$  | $$| $$  | $$| $$    $$ __  "
    );
    console.log(
      "| $$__| $$| $$$$$$$$ | $$|  |      | $$__/ $$| $$__/ $$| $$__/ $$| $$            | $$_____ | $$  | $$|  $$$$$$$| $$  | $$| $$__| $$| $$$$$$$$|  |      "
    );
    console.log(
      " |$$    $$ |$$     |  |$$  $$       |$$    $$ |$$    $$ |$$    $$| $$             |$$     || $$  | $$ |$$    $$| $$  | $$ |$$    $$ |$$     | |$$      "
    );
    console.log(
      "  |$$$$$$   |$$$$$$$   |$$$$        _|$$$$$$$  |$$$$$$   |$$$$$$  |$$              |$$$$$$$ |$$   |$$  |$$$$$$$ |$$   |$$ _|$$$$$$$  $$$$$$$          "
    );
    console.log(
      "                                  |  |__| $$                                                                            |  |__| $$                    "
    );
    console.log(
      "                                   |$$    $$                                                                             |$$    $$                    "
    );
    console.log(
      "                                    |$$$$$$                                                                               |$$$$$$                     "
    );

    for (const [noteValue, count] of Object.entries(counts).sort(
      (a, b) => Number(b[0]) - Number(a[0])
    )) {
      console.log(`${count} x €${noteValue} `);
    }
  }
}

const change = new Change();

let readline = require("readline");
let rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt("Let me know the price and amount paid: ");
console.clear();

rl.prompt();

rl.on("line", function (input) {
  const inpArr = input.split(",");

  if (change.getChange(+inpArr[0], +inpArr[1])) {
    rl.close();
  }
});
