
////////////////////// CHRONO///////////////
function chrono() {

    if (timerEnCours == false) {
        timerEnCours = true;
        centi++; //incrémentation des dixièmes de 1
        if (centi > 9) {
            centi = 0;
            secon++
        } //si les dixièmes > 9, on les réinitialise à 0 et on incrémente les secondes de 1
        if (secon > 59) {
            secon = 0;
            minu++
        } //si les secondes > 59, on les réinitialise à 0 et on incrémente les minutes de 1
        document.forsec.secc.value = " " + centi //on affiche les dixièmes
        document.forsec.seca.value = " " + secon //on affiche les secondes
        document.forsec.secb.value = " " + minu //on affiche les minutes
        compte = setTimeout(function () {
            timerEnCours = false;
            chrono();
        }, 100); //la fonction est relancée tous les 10° de secondes
    }
}
