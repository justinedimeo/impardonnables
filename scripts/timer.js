////////////////////// CHRONO/TIMER///////////////////////////
function chronometer() {

    if (timerCurrent == false) {
        timerCurrent = true;
        centi++; //Increments of tenths of 1
        if (centi > 9) {
            centi = 0;
            secon++
        } //If the tenths> 9, they are reset to 0 and the seconds are incremented by 1
        if (secon > 59) {
            secon = 0;
            minu++
        } //If seconds> 59, they are reset to 0 and increments the minutes by 1
        document.getElementById("cent").innerHTML = " " + centi //on affiche les dixièmes
        document.getElementById("sec").innerHTML = " " + secon //on affiche les dixièmes
        document.getElementById("min").innerHTML = " " + minu //on affiche les dixièmes

        compte = setTimeout(function () {
            timerCurrent = false;
            chronometer();
        }, 100); //The function is restarted every 10 ° of seconds
    }
}
