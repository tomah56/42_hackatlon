function comperResoults() {
	checkElement(document.getElementById("mydiv"), document.getElementById("mydiv2"), document.getElementById("mydiv3") , document.getElementById("mydiv4"));
	function checkElement(element1, element2, element3, element4) {
		
		// console.log(element1.style.top ,element2.style.top );
		if (element1.style.top < element2.style.top && element2.style.top < element3.style.top && element3.style.top < element4.style.top)
		{
			document.getElementById("wrongmsg").style.visibility = "hidden";
			document.getElementById("correctmsg").style.visibility = "visible";
			document.getElementById("nextvisible").style.visibility = "visible";
		}
		else
		{
			document.getElementById("correctmsg").style.visibility = "hidden";
			document.getElementById("wrongmsg").style.visibility = "visible";
		}
	}
}
