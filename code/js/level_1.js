function showButton()
{
    if (document.getElementById("1").value.replaceAll(" ", "") != "")
    {
        document.getElementById("nextvisible").style="visiblity: visible";
        document.getElementById("storytellerAlf").innerHTML = "Great! Now you and Galaxy Ninja Lad know each other! Let's start your adventure.";

    }

}