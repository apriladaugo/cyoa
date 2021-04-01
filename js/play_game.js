// CYOA Code

function the_ending() {

}

function game_over() {

}

// function for game logic
function playGame() {
    // Game Logic
    var enterHut = confirm("Muna finds a strange looking hut in the forest. Should he go inside?");

    if (enterHut == true) {
        //Muna enters the hut
        // alert("Muna decided to enter the hut. He found 3 plates of Jollof Rice.. ");
        var jollofRiceChoice = prompt(
            "Muna enters the hut and finds three plates of Jollof Rice. Which of the meals is perfectly spiced! 1, 2 or 3?");

        if (jollofRiceChoice == 1) {
            // Muna chose option 1
            alert("this jollof rice is too spicy");
        } else if (jollofRiceChoice == 2) {
            // Muna choose option 2
            alert("this jollof rice is not spicy at all");
        } else if (jollofRiceChoice == 3) {
            // Option 3 is the right choice
            alert("this plate of jollof is just right");

            // If Muna selects the plate of jollof rice that is just right, we want him to dinf the right stool to eat it
            var stoolChoice = prompt(
                "Muna needs to sit and enjoy his plate of perfectly spiced Jollof rice. Which of the stools is right? 'Big', 'Medium', 'Small'... "
            );
            if (stoolChoice == 'big') {
                alert("the chair is the way too big! the end");
            } else if (stoolChoice == "medium") {
                alert("the stool is too soft, The end");
            } else {
                alert("this stool is just right");

                var bedChoice = prompt(
                    "Muna walks into the room after enjoying the delicous plate of jollof rice, and finds a big, medium and small bed. Help Muna choose the right bed..."
                );
                if (bedChoice == "big") {
                    alert("Muna can't sleep on this bed because its too hard");
                } else if (bedChoice == "medium") {
                    alert("Muna can't sleep on this bed because it is too soft... The end");
                } else {
                    alert("The bed is just right and Muna falls asleep");
                    alert(
                        "Muna wakes up to see three Honey Badgers staring at him, suprised that a stranger was in their hut"
                    );
                    alert("Shocked, Muna gets up and runs aways");
                }
            }

        }


    } else {
        //Muna has chosen not to enter the hut (enterHut is false)
        alert("Muna got scared and choose not to enter the hut...Goodbye");
    }

    // play game again, else return to the home page
    var playAgain = confirm("Do you want to play again?");
    if (playAgain == true) {
        playGame();
    } else {
        window.location = "index.html";
    }
}


playGame();