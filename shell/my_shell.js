import { fileSystem } from "./file_system.js";

let curerntDirectory = "~";
let currentPath = [];

const executeCommand = (fn, args) => {
  if (fn === undefined) {
    return inValidCommand();
  }

  return fn(args);
};

const deepObject = (object, key) => {
  return object[key];
};

const runCDCommand = (args) => {
  const pathToGo = args[0].split("/");
  const innerFiles = currentPath.reduce(deepObject, fileSystem);

  if (!pathToGo.reduce(deepObject, innerFiles)) {
    console.log("invalid Path");
    return;
  }

  currentPath = [...currentPath, ...pathToGo];
  curerntDirectory = currentPath.at(-1);
};

const runLSCommand = (args) => {
  console.log("ls command", args);
};

const runMKDIRCommand = (args) => {
  console.log("MKDIR", args);
};

const runRMDIRCommand = (args) => {
  console.log("RMDIR", args);
};

const runTOUCHCommand = (args) => {
  console.log("TOUCH", args);
};

const inValidCommand = () => {
  console.log("command not found!");
};

const executeExternalCommand = (commandName, args) => {
  const externalCommands = {
    mkdir: runMKDIRCommand,
    rmdir: runRMDIRCommand,
    touch: runTOUCHCommand,
  };

  executeCommand(externalCommands[commandName], args);
};

const executeInputCommand = (command, args) => {
  const internalCommands = { cd: runCDCommand, ls: runLSCommand };

  if (command in internalCommands) {
    return internalCommands[command](args);
  }

  return executeExternalCommand(command, args);
};

const seperateArgAndCommand = (commandWithArg) => {
  const words = commandWithArg.split(" ");
  const command = words.shift();

  return [command, words];
};

const runMyShell = () => {
  while (true) {
    const promptLabel = "My_shell @Mohammads-MacBook-Pro " + curerntDirectory;
    const inputCommand = prompt(promptLabel);
    executeInputCommand(...seperateArgAndCommand(inputCommand));
  }
};

runMyShell();
