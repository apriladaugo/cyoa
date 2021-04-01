/* only execute this script when the document is ready */
$(document).ready(function() {
    /* function called when you click of the button */
    $("button").click(function() {

        /* this if else to change the text in the button */
        if ($("button").text() == "☰") {
            $("button").text("🞬");
        } else {
            $("button").text("☰");
        }

        /* this function toggle the visibility of our "li" elements */
        $("li").toggle("slow");
    });
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("mynavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}