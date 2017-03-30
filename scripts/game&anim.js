/////////////////////////////////////////////RANDOM CHOICE////////////////////////////////////////////////////////////
function showQuestion() {
    if (counter < 10) { //10 random definition             
        var alea = Math.floor(Math.random() * 66); // create random number 
        if (defSelec.indexOf(alea) == -1) { // dont take the same number 
            aleasecondaire = alea;
            defSelec.push(alea);
            document.getElementById('question').innerHTML = def[alea];
            document.getElementById('reponse').value = "";
        }
    } else {
        game.style.display = "none"; //The game disappears
        fin.style.display = "block"; //end of the game 
        fin.innerHTML = ("You Finished in " + minu + "m" + secon + "s"); //Displays the score (timer)


    }
}

////////////////////////////////Indication////////////////////////////////////////////////////////////////////////////////////////////
indice.addEventListener(
    'click',
    function () {
        indiceView.innerHTML = indiceDef[aleasecondaire];
        indiceView.style.display = "block";
        secon += 10;
    }
);

////////////////////////////////////////////////////////ANIMATION and ENTER ANSWER SYSTEM///////////////////////////////////////////////
document.getElementById('reponse').addEventListener('keypress', function (event) { //The user pressed a key
    if (event.which == 13) { //if it's the enter key
        var question = document.getElementById('question').innerHTML; //Recovery of the question
        var reponse = document.getElementById('reponse').value;
        reponse = this.value.toUpperCase() //Recovery of the answer
        indiceView.style.display = "none";
        if (reponse == motsDef[def.indexOf(question)]) { //If answer is equal to the response of the same index as the question
            score++;
            document.getElementById('question').style.left = "40%";
            setTimeout(function () {
                document.getElementById('question').style.left = "30%";

            }, 300);

            document.querySelector('#question').style.backgroundColor = "#B1D696"
            setTimeout(function () {
                document.querySelector('#question').style.backgroundColor = "white";

            }, 300);

        } else if (reponse != motsDef[def.indexOf(question)]) { //If answer is equal to the response of the same index as the question
            prof.style.transform = "rotate(-60deg)"; /////// Character Rotation
            setTimeout(function () {
                prof.style.transform = "rotate(0deg)";

            }, 100);
            document.getElementById('question').style.left = "15%";
            setTimeout(function () {
                document.getElementById('question').style.left = "30%";

            }, 300);

            document.querySelector('#question').style.backgroundColor = "#FF8E8E";
            setTimeout(function () {
                document.querySelector('#question').style.backgroundColor = "white";

            }, 300);

            correction.textContent += "   / " + motsDef[aleasecondaire];

            secon += 25;

        }

        counter++;
        document.querySelector(".chronoVisible").innerHTML = counter + "/10";
        showQuestion();
    }
});
