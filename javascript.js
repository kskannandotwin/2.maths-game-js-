var playing = false;
var score;
var action;
var timeremaining;

// if we click on start/restart button
document.getElementById('startreset').onclick = function() {
    // if we are playing
    if (playing == true) {
        // reload page
        location.reload();
    } else {
        // if we are not playing
        // change mode to playing
        playing = true;

        // set scroe to 0
        score = 0;
        document.getElementById('scorevalue').innerHTML = score;

        // show countdown box
        show('timeremaining');
        timeremaining = 60;
        document.getElementById('timeremainingvalue').innerHTML = timeremaining;

        // hide game over box
        hide('gameOver');

        // change button to reset
        document.getElementById('startreset').innerHTML = 'Reset Game';

        // start countdown
        startCountdown();

        // generate a new q&a
        generateQA();
    }

    
}
    // if we are playing
        // reload page
    // if we are not playing
        // set score to 0
        // show count down box
        // reduce time by 1 sec in loops
            // time left?
                // yes => continue
                // no => game over
        // change button to reset
        // generate new q and a

// if we click on answer box
    // if we are playing
        // correct?
            // yes
                // increase score
                // show correct box for 1sec
                // generate new q and a
            // no
                // show try again box for 1sec

// functions

// start counter
function startCountdown() {
    action = setInterval(function() {
        timeremaining -= 1;
        document.getElementById('timeremainingvalue').innerHTML = timeremaining;
        if (timeremaining == 0) {
            stopCountdown();
            show('gameOver');
            document.getElementById('gameOver').innerHTML = '<p>Game over!</p><p>Your score is ' + score + '.</p>';
            hide('timeremaining');
            hide('correct');
            hide('wrong');
            playing = false;
            document.getElementById('startreset').innerHTML = 'Start Game';
        }
    }, 1000);
}

// stop counter
function stopCountdown() {
    clearInterval(action);
}

// hide an element
function hide(Id) {
    document.getElementById(Id).style.display = 'none';
}

// show an element
function show(Id) {
    document.getElementById(Id).style.display = 'block';
}

// generate question and multiple answers
function generateQA() {

}



