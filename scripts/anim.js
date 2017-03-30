

/////////////////////////////////////////////CHOIX ALEATOIRE + ENTRER REPONSE////////////////////
function showQuestion() {
    if (compteur < 10) {
        var alea = Math.floor(Math.random() * 66);
        if (defSelec.indexOf(alea) == -1) {
            aleasecondaire = alea;
            defSelec.push(alea);
            document.getElementById('question').innerHTML = def[alea];
            document.getElementById('reponse').value = "";
        }
    } else {
        jeu.style.display="none";
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
        var reponse = document.getElementById('reponse').value; //On récupère la réponse
        indiceView.style.display = "none";
        if (reponse == motsDef[def.indexOf(question)]) { //Si reponse est égale à la réponse du même index que la question
            score++;
        } else if (reponse != motsDef[def.indexOf(question)]) { //Si reponse est égale à la réponse du même index que la question
            secon += 10;
            startTir();
        }
        console.log(compteur);
        compteur++;
        console.log(compteur);
        showQuestion();
    }
});

