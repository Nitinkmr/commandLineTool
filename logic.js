#!/usr/bin/env node
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
var fs = require('fs');
var Commands = require('./Commands.js')
var term = require( 'terminal-kit' ).terminal ;  

var commandsObj= new Commands();
function getCommandsToDisplay(command,commandsObj)
{

	var result = [];
	var allCommands = commandsObj.getCommands();
	//console.log("1" + commandsObj.getCommands());
	for(commandNo in commandsObj.getCommands())
	{
		//console.log(commandNo + allCommands[commandNo]);
		if(allCommands[commandNo].includes(command))
		{
			result.push(commandsObj.getCommands()[commandNo])
		}
	}

	return result;

}

function print(data)
{
	console.log(data);
}

function preProcess(data)
{
	data = data.split(",");
	return data;
}

function writeOnTerminal(data)
{
	//term(data);
	console.log(data);
	//term.nextLine(1);

}


void choice = 'Y';

term.saveCursor();


readline.question(`Enter command `, (command) => {
	 
	 fs.readFile('command.txt','utf-8',
	  	function(err,data)
	  	{
	  		//data = data.replace(/\s+/, "");
	  		commandsObj.setCommands(preProcess(data));
	  		//print(commandsObj.getCommands());
	  		var reqdCommands = getCommandsToDisplay(command,commandsObj);
	  		//term.insertLine(reqdCommands.length);

	  		writeOnTerminal("Similar Commands")
	  		for(var index in reqdCommands)
	  		{
	  		
	  			writeOnTerminal(reqdCommands[index]);
	  		}


	  	});
	 
	 
	  readline.close()
});