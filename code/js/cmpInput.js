
    function cmpInput()
    {
        var correct_answers = 0;

        var answers = [
            "void",
            "int",
            "int",
            "char*",
            "open",
            "O_RDONLY",
            "i",
            "line",
            "fd",
            "%s",
            "free"
        ];

        var userInput = [
            document.getElementById("0").value.replaceAll(' ', ''),
            document.getElementById("1").value.replaceAll(' ', ''),
            document.getElementById("2").value.replaceAll(' ', ''),
            document.getElementById("3").value.replaceAll(' ', ''),
            document.getElementById("4").value.replaceAll(' ', ''),
            document.getElementById("5").value.replaceAll(' ', ''),
            document.getElementById("6").value.replaceAll(' ', ''),
            document.getElementById("7").value.replaceAll(' ', ''),
            document.getElementById("8").value.replaceAll(' ', ''),
            document.getElementById("9").value.replaceAll(' ', ''),
            document.getElementById("10").value.replaceAll(' ', '')
        ];
    	//console.log(userInput);
        for (let i = 0; i < answers.length; i++)
        {
            if (answers[i] == userInput[i])
            {
                correct_answers++;
                document.getElementById(i).style.color="green";
            }
            else
                document.getElementById(i).style.color="black";
        }
   
        if (userInput.length == correct_answers)
        {
            document.getElementById("restest").innerHTML = "Good Job!!";
            document.getElementById("next").style="visiblity: visible";
        }
        else
    		document.getElementById("restest").innerHTML = "try again!!";
        document.getElementById("counter").innerHTML = "Correct answers: " + correct_answers + "/11";
    }
