function cmp_lvl_6()
{
	var correct_answers = 0;

	var answers = [
		"cc-DMY_MACRO=42main.c",
		"ccmain.c-DMY_MACRO=42",
	];

	var userInput = [
		document.getElementById("0").value.replaceAll(' ', ''),
	];
	//console.log(userInput);
		if (answers[0] == userInput[0] || answers[1] == userInput[0])
		{
			correct_answers = 1;
			document.getElementById("0").style.color="green";
		}
		else
			document.getElementById("0").style.color="red";

	if (userInput.length == correct_answers)
	{
		document.getElementById("restest").innerHTML = "Good Job!!";
		document.getElementById("next").style="visiblity: visible";
	}
	else
		document.getElementById("restest").innerHTML = "try again!!";
}