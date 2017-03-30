////////////////////// CHRONO///////////////
function chronometer() {

  if (timerCurrent == false) {
    timerCurrent = true;
    centi++; //incrémentation des dixièmes de 1
    if (centi > 9) {
      centi = 0;
      secon++
    } //si les dixièmes > 9, on les réinitialise à 0 et on incrémente les secondes de 1
    if (secon > 59) {
      secon = 0;
      minu++
    } //si les secondes > 59, on les réinitialise à 0 et on incrémente les minutes de 1
    document.getElementById("cent").innerHTML = " " + centi //on affiche les dixièmes
    document.getElementById("sec").innerHTML = " " + secon //on affiche les dixièmes
    document.getElementById("min").innerHTML = " " + minu //on affiche les dixièmes

    compte = setTimeout(function () {
      timerCurrent = false;
      chronometer();
    }, 100); //la fonction est relancée tous les 10° de secondes
  }
}