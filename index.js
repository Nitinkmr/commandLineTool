var term = require( 'terminal-kit' ).terminal ;  

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.close();
var delay = function()
{
	for(var  i=0;i<100000000;i++)
	{}

for(var  i=0;i<100000000;i++)
	{}

for(var  i=0;i<100000000;i++)
	{}
}


var arr = [1,2,3,4,5,6,7,8,9,10]
var x = 0;


var ans = "N";
while(ans == "Y")
{
	x = x%5;
	term.restoreCursor();
	for(var i =0;i<x;i++)
	{
		term(arr[i]);
		term.nextLine(1);
	}

	

	readline.question(`What's your name?`, (ans) => {
	  console.log(`Hi ${ans}!`)


	 // readline.close()
	});

	  if(ans=='N')
	  	break;


	x = x + 1;

}


/*for(var i=0;i<100;i++)
{
	term(i);
	term.nextLine(1);
	term.scrollUp(1);
	term.up(1);
}*/
x = 0;
term.insertLine(100);
term.saveCursor();
while(x<=9)
 {
 	term.restoreCursor();
 	term.up(x);
	for(var i =0;i<x;i++)
	{
		term(arr[i]);
		term.nextLine(1);
		term.scrollUp(1);
		term.up(1);
		term.scrollDown(1);
		if(i==0)
			term.saveCursor();
		//term.nextLine(1);

		//term.insertLine(1);
		
		
	//term.scrollDown(1);
	//term.up(1);
		delay();
	}

	

delay();
x = x +1;
}

delay();
console.log("cursor");
