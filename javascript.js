var playing = false;
var score;

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
        document.getElementById('timeremaining').style.display = 'block';

        // change button to reset
        document.getElementById('startreset').innerHTML = 'Reset Game';
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



