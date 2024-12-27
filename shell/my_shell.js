const curerntDirectory = "~";

const fileSystem = {
  "~": {}
}

const executeInputCommand = (command, args) => {
  console.log("command", command);
  console.log("args", args);
};

const seperateArgAndCommand = (commandWithArg) => {
  const words = commandWithArg.split(" ");
  const command = words.shift();

  return [command, words];
};

const runMyShell = () => {
  while (true) {
    const promptLabel = "My_shell @Mohammads-MacBook-Pro" + curerntDirectory;
    const inputCommand = prompt(promptLabel);
    executeInputCommand(...seperateArgAndCommand(inputCommand));
  }
};

runMyShell();
