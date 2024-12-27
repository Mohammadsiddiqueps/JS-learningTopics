import { fileSystem, curerntDirectory, currentPath } from "./file_system.js";

const runCDCommand = (args) => {
  const pathToGo = args[0].split("/");
  const innerFiles = currentPath.reduce(getNestedKey, fileSystem);

  if (!pathToGo.reduce((object, key) => object[key], innerFiles)) {
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

const executeExternalCommand = (commandName, args) => {
  const externalCommands = {
    mkdir: runMKDIRCommand,
    rmdir: runRMDIRCommand,
    touch: runTOUCHCommand,
  };

  if (!(commandName in externalCommands)) {
    console.log(commandName, "- command not found!");
    return;
  }

  externalCommands[commandName](args);
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
