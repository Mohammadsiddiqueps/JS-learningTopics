const promptLabel = "mohammadsiddique@Mohammads-MacBook-Pro "
let currentDir = "DumpShell % ";

function executeCD(args){
  currentDir = args.pop();
}

function executeEcho(args){
  console.log(args.join(""));
}

function executeExternal(args){
  console.log("Command Not Found");
}

function executeCommand(commandToRun) {
  const [command, ...args] = commandToRun.split(" ");
  
  switch (command) {
    case "cd": return executeCD(args);
    case "echo": return executeEcho(args);
    default: return executeExternal(command, args);
  }
}

while (true) {
  const commandToRun = prompt(promptLabel + currentDir);
  executeCommand(commandToRun);
}