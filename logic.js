#!/usr/bin/env node
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
var fs = require('fs');
var Commands = require('./Commands.js')
var term = require( 'terminal-kit' ).terminal ;  

var commandsObj= new Commands();
var stdin = process.openStdin();
stdin.setEncoding('utf8');


var currentCommand = "";


fs.readFile('command.txt','utf-8',
	function(err,data)
	  	{
	  		//data = data.replace(/\s+/, "");
	  		commandsObj.setCommands(preProcess(data));
	  	});

stdin.addListener("data", function(d) {
	stdin.resume();
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that  
    // with toString() and then trim() 

    var re = /\w*{?}?.?\w*/;
  	//var reAlplhaNum = /\w+ /;
   	//Enter - empty ''
   	//AlphaNum
   	//Delete
   	
   	 if(d.toString().trim() == "")
    {
    	console.log("end");
    	
    }else if(d.toString().trim().match(re) && d.toString().trim() != "")
   	{
   		console.log("adding");
   		if(currentCommand == currentCommand + d.toString().trim())
   		{
   			console.log("deleting");
    		currentCommand = currentCommand.slice(0,currentCommand.length - 1);
   		}else
   		{
   			currentCommand = currentCommand + d.toString().trim()
   		}
 
   	}

  

   console.log("current command is" + currentCommand + "bls");


 //    var reqdCommands = getCommandsToDisplay(command,commandsObj);
	//   		//term.insertLine(reqdCommands.length);

	// writeOnTerminal("Similar Commands")
	// for(var index in reqdCommands)
	// {
	//   	writeOnTerminal(reqdCommands[index]);
	// }






    // console.log("you entered: [" + 
    //     d.toString().trim() + "]");
  });


stdin.addListener('end', () => {
  console.info(`Input: ${currentCommand}`);
});



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


var choice = 'Y';

term.saveCursor();



/*
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
});*/