function comperResoults() {
	checkElement(document.getElementById("mydiv"), document.getElementById("mydiv2"));
	function checkElement(element1, element2) {
		
		console.log(element1.style.top ,element2.style.top );
		if (element1.style.left < element2.style.left)
		document.getElementById("restest").innerHTML = "Good Job!!";
		else
		document.getElementById("restest").innerHTML = "try again!";
	}
}
