var computerGuess;
var userGuessLog = [];
var attempts = 0;
		
function init()
{
	computerGuess = Math.floor(Math.random() * 100 + 1);
	console.log(computerGuess);
}
function newGame()
{
	window.location.reload();
}
function compareGuess()
{
	var userGuess = " " + document.getElementById('inputBox').value;
	console.log(userGuess);
		
	userGuessLog.push(userGuess);
	console.log(userGuessLog);
	document.getElementById('guessLog').innerHTML = userGuessLog;

	document.getElementById('guessLog').innerHTML = attempts;

	
	if(userGuess > computerGuess)
	{
		document.getElementById('outputText').innerHTML = "Your guess was too high!";
		document.getElementById('inputBox').value = "";
	}
	else if(userGuess < computerGuess)
	{
		document.getElementById('outputText').innerHTML = "Your guess was too low!";
		document.getElementById('inputBox').value = "";
	}
	else
	{
		document.getElementById('outputText').innerHTML = "Congrats! You guess it right!";
		document.getElementById('inputBox').innerHTML = attempts;
		attempts++;
	}
}