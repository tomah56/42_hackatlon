
    function cmpInput()
    {
        var correct_answers = 0;

        var answers = [
            "void",
            "int",
            "int",
            "char*",
            "open",
            "O_RDONLY"
        ];

        var userInput = [
            document.getElementById("void").value.replaceAll(' ', ''),
            document.getElementById("fd").value.replaceAll(' ', ''),
            document.getElementById("i").value.replaceAll(' ', ''),
            document.getElementById("char*").value.replaceAll(' ', ''),
            document.getElementById("open").value.replaceAll(' ', ''),
            document.getElementById("O_RDONLY").value.replaceAll(' ', '')
        ];
    	//console.log(userInput);
        for (let i = 0; i < answers.length; i++)
        {
            if (answers[i] == userInput[i])
            {
                correct_answers++;
            }
            // document.getElementById("counter").innerHTML = userInput[3];
        }
   
        if (userInput.length == correct_answers)
        {
            document.getElementById("restest").innerHTML = "Good Job!!";
            document.getElementById("next").style="visiblity: visible"
        }

        else
    		document.getElementById("restest").innerHTML = "try again!!";
        document.getElementById("counter").innerHTML = "Correct answers: " + correct_answers;

    }
