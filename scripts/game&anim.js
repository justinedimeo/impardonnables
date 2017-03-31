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
    if (secon > 59) { // Debug for the final timer
      restTime = secon - 60;
      secon = 0;
      secon += restTime;
      minu++
    }
    game.style.display = "none"; //The game disappears
    fin.style.display = "block"; //end of the game 
    fin.innerHTML = ("You Finished in " + minu + ":" + secon + ":" + centi); //Displays the score (timer)
    document.querySelector("#mainText").style.display = "block";
    document.querySelector("#submit").style.display = "block";
    document.querySelector("#yourName").style.display = "block"; document.querySelector("#linkclassement").style.display = "block";


  }
}

////////////////////////////////INDICATION////////////////////////////////////////////////////////////////////////////////////////////
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
      document.getElementById('question').style.left = "40%"; // Move of the block question : answer is true
      setTimeout(function () {
        document.getElementById('question').style.left = "30%"; //back to the initial position
      }, 300);
      document.querySelector('#question').style.backgroundColor = "#B1D696"; //change color in green : answer is true
      setTimeout(function () {
        document.querySelector('#question').style.backgroundColor = "white"; // back to the initial color

      }, 300);

    } else if (reponse != motsDef[def.indexOf(question)]) { //If answer is equal to the response of the same index as the question
      prof.style.transform = "rotate(-60deg)"; /////// Character Rotation
      setTimeout(function () {
        prof.style.transform = "rotate(0deg)";
      }, 100);
      document.getElementById('question').style.left = "15%"; // Move of the block question : answer is false
      setTimeout(function () {
        document.getElementById('question').style.left = "30%"; //back to the initial position
      }, 300);
      document.querySelector('#question').style.backgroundColor = "#FF8E8E"; //change color in red : answer is false
      setTimeout(function () {
        document.querySelector('#question').style.backgroundColor = "white"; // back to the initial color

      }, 300);
      correction.textContent += "   / " + motsDef[aleasecondaire]; // For the training mode
      secon += 25; // add seconds when your answer is false

    }

    counter++;
    document.querySelector(".chronoVisible").innerHTML = counter + "/10"; //show you your progression in the game : you can change the "10" if you want to change the number of definition you want 
    showQuestion();
  }
});