//////////////////////////////////TIR/////////////////////////////////////////

function startTir() {
    balle.style.display = "block";
    son1.play();
    var timer = setInterval(
        function () {
            bougerBalle(timer);
        },
        vitesse
    );
    tir.style.transform = "rotate(-45deg)"; /////// Rotation du personnage
    setTimeout(function () {
        tir.style.transform = "rotate(0deg)";

    }, 100);

    posX = 400; // Reinitialise la fonction à 0
    posY = 625;
    balle.style.left = 300 + "px";
    balle.style.top = 625 + "px";
    prof.style.display="block";
}

function bougerBalle(timer) { // MOUVEMENT DE BALLE

    posX = posX + dirX;
    balle.style.left = posX + "px";
    if (posX == 0 || posX == posXmax) {

        {
            balle.style.display = "none";
            var timerCligno = setInterval("clignotement()", 100);
            clignotement();
            removeCoeur();
            setTimeout(function () {
                clearInterval(timerCligno);
                if (NombreCoeur === 0) {
        
                }
            }, 500);
            stop(timer);
        }
    }
}


function stop(timer) {
    clearInterval(timer);
    balle.style.left = posX + "px";
    balle.style.top = posY + "px";
}



