

/////////////////////////////////////////////CHOIX ALEATOIRE + ENTRER REPONSE////////////////////
function showQuestion() {
    if (counter < 10) {
        var alea = Math.floor(Math.random() * 66);
        if (defSelec.indexOf(alea) == -1) {
            aleasecondaire = alea;
            defSelec.push(alea);
            document.getElementById('question').innerHTML = def[alea];
            document.getElementById('reponse').value = "";
        }
    } else {
        game.style.display="none";
        fin.style.display="block";
        fin.innerHTML= ("YOU WIN in " + minu + "m" + secon + "s");


    }
}

indice.addEventListener(
    'click',
    function () {
        indiceView.innerHTML = indiceDef[aleasecondaire];
        indiceView.style.display = "block";
        secon += 15;
    }
);

document.getElementById('reponse').addEventListener('keypress', function (event) { //L'utilisateur a appuyé sur une touche
    if (event.which == 13) { //Si c'est la touche entrée
        var question = document.getElementById('question').innerHTML; //On récupère la question
        var reponse = document.getElementById('reponse').value;
        reponse=this.value.toUpperCase()//On récupère la réponse
        indiceView.style.display = "none";
        if (reponse == motsDef[def.indexOf(question)]) { //Si reponse est égale à la réponse du même index que la question
            score++;
            document.getElementById('question').style.left="40%";
            setTimeout(function () {
                document.getElementById('question').style.left="30%";
                
                

            }, 300);
        } else if (reponse != motsDef[def.indexOf(question)]) { //Si reponse est égale à la réponse du même index que la question
            prof.style.transform = "rotate(-60deg)"; /////// Rotation du personnage
            setTimeout(function () {
                prof.style.transform = "rotate(0deg)";

            }, 100);
            document.getElementById('question').style.left="15%";
            setTimeout(function () {
                document.getElementById('question').style.left="30%";

            }, 300);



            secon += 30;

        }
        counter++;
        showQuestion();
    }
});

