class Commands
{


	constructor()
	{
		this.commands = [];
	}

	addCommand(command)
	{
		this.commands.push(command);
	}

	getCommands()
	{
		return this.commands;
	}

	setCommands(commandsList)
	{
		this.commands = commandsList;
	}
}

module.exports = Commands;