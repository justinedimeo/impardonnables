/* GAME */

///////////////////////////////// ARRAY DEFINITION ///////////////////////////////////////////
var def = Array("Approuvé par une majorité", "Simple voire vulgaire", "La spécialité de quelqu’un ou quelque chose", "Etre dans une situation désespérée", "Adresse de la main dans l'exécution de quelque chose", "Très difficile à comprendre", "Qualité intellectuelle ou morale d'une personne droite", "Sentir par intuition quelque chose qui est caché", "Bon jusqu’à la faiblesse.", "S’accrocher à ses opinions", "confiance en soi-même excessive ou arrogante", "Qui se conforme strictement à la doctrine d'une religion", "Fait qu’un contenant, un milieu soit vide", "Avoir un penchant naturel", "Prôner le retour en arrière", "Nature à troubler l’ordre social ou politique", "Quelqu’un semant le trouble, le désordre", "conférer à quelqu'un un prestige exceptionnel", "Sournois, qui vise à tromper", "Qui est montré avec insistance et sans discrétion", "Rendre probant quelque chose", "Arme de jet consistant en une pièce souple", "Proposition affirmative ou négative", "Qui est fait d’un seul bloc", "Tourner autour du pot", "Qui attaque, décape les tissus organiques", "Qui rassemble une grande variété de tendances", "Ralentissement important ou arrêt de l'activité économique", "Diminuer la valeur ou l’importance de quelque chose", "Duper quelqu'un, en particulier en le volant", "Propos dénué d’intelligence et de sens", "Marque apposée sur un objet", "Qui agit avec réflexion et prudence", "À quoi on ne peut rien répliquer", "Dont on ne peut déterminer ou mesurer le poids", "Comportement bruyant et scandaleux", "Conflit, scandale", "Cheminement sinueux de quelque chose", "Distribuer l'argent de poche avec parcimonie", "Avoir en horreur quelqu’un ou quelque chose", "Avoir en horreur quelqu’un ou quelque chose", "Éloge ou justification de quelqu'un", "Finir de manière décevante", "Qui est de nature du dithyrambe", "Objet ou fait de peu d'importance", "Qui n’est pas attendu dans une circonstance donnée", "Qui est ennemi de toute tradition", "Qui est violent est haut en couleur", "Emploi ou l’on est bien payé pour peu de travail", "Attitude de supériorité méprisante", "Qui a lieu en même temps qu'un autre phénomène", "Un discours qui attaque une personne ou une institution", "Traiter avec beaucoup de mépris", "Discours injurieux contre quelqu'un ou quelque chose", "Jeter la honte sur quelqu’un", "Manières fanfaronnes et bruyantes", "Les aléas de la vie et du destin", "Qui vise à tromper de manière sournois", "Qui est propre à inciser, à couper", "Un sujet à diverse interprétation", "Qui a une importance secondaire", "Secret que tout le monde connait", " Disposition à faire le minimum d’effort pour faire quelque chose.", "Discours confus qui semble dire quelque chose mais ne signifie rien", "Personne détachée de choses matérielles", "Quelqu’un à l’esprit rationnel, rigoureux");
// You can insert your defintions or something here  exemple : "my element"

////////////////////////////////Table of the Vocabulary////////////////////////////////////////
var motsDef = Array("PLEBISCITE", "PROSAIQUE", "APANAGE", "AUX ABOIS", "DEXTERITE", "ABSCONS", "RECTITUDE", "SUBODORER", "DEBONNAIRE", "OPINIATRE", "OUTRECUIDANCE", "ORTHODOXE", "VACUITE", "INCLINATION", "REACTIONNAIRE", "SUBVERSIF", "TRUBLION", "METTRE SUR UN PIEDESTAL", "INSIDIEUX", "OSTENTATOIRE", "CORROBORER", "FRONDE", "ASSERTION", "MONOLITHIQUE", "TERGIRVERSER", "CAUSTIQUE", "ECLECTIQUE", "MARASME", "MINORER", "FLOUER", "INEPTIE", "AMBIVALENT", "ESTAMPILLER", "CIRCONSPECT", "PEREMPTOIRE", "IMPONDERABLE", "ESCLANDRE", "DIXIT", "MEANDRES", "PARCIMONIE", "ABHORRER", "APOLOGIE", "FINIR EN QUEUE DE POISSON", "DITHYRAMBIQUE", "BROUTILLE", "INCONGRU", "ICONOCLASTE", "TRUCULENT", "SINECURE", "CONDESCENDANCE", "CONCOMITANT", "DIATRIBE", "VILIPENDER", "INVECTIVER", "JETER L'OPPROBRE", "ESBROUFRE", "VICISSITUDES", "FALLACIEUX", "INCISIF", "EQUIVOQUE", "CONTINGENT", "SECRET DE POLICHINELLE", "INDOLENCE", "GALIMATIAS", "ASCETE", "CARTESIEN");
// Insert the word that the user have to write  exemple :"My answer" BE CAREFUL : you have to insert the answer in the same order as the elements 

////////////////////////////////Indication(optional)//////////////////////////////////////////
var indiceDef = Array("VOTE A MAIN LEVEE", "BANAL", "CARACTERISTIQUE", "DIFFICULTE", "AGILITE", "ENIGMATIQUE", "JUSTESSE", "FLAIRER", "BIENVEILLANT", "PERSISTANT", "LA PREMIERE LETTRE COMMENCE PAR UN O", "TRADITIONNEL", "ENNUI", "APTITUDE", "LA PREMIERE LETTRE COMMENCE PAR UN R", "DESTRUCTEUR", "AGITATEUR", "DIVINATION", "RUSE", "VOYANT", "LA PREMIERE LETTRE COMMENCE PAR UN C", "MAZARINADE", "THEORIE", "HOMOGENE", "DECIDER", "ACIDE", "LA PREMIERE LETTRE COMMENCE PAR UN E", "LA PREMIERE LETTRE COMMENCE PAR UN M", "DIMINUER", "TRUANDER", "ÂNERIE", "AMBIGUE", "LA PREMIERE LETTRE COMMENCE PAR UN E", "AVISER", "AUTORITAIRE", "HASARDEUX", "DÉSORDRE", "LA PREMIERE LETTRE EST D ", "LA PREMIERE LETTRE COMMENCE PAR UN M", "RADINERIE", "MAUDIRE", "LA PREMIERE LETTRE COMMENCE PAR UN A", "RATER", "FLATEUR", "LA PREMIERE LETTRE COMMENCE PAR UN B", "INDECENT", "LA PREMIERE LETTRE COMMENCE PAR UN I", " COMIQUE", "LA PREMIERE LETTRE COMMENCE PAR UN S", "HAUTAIN", "COINCIDENT", "CRITIQUE", "LA PREMIERE LETTRE COMMENCE PAR UN V", "LA PREMIERE LETTRE COMMENCE PAR UN I", "INFAMIE", "ÉPATE", "HASARD", "FOURBE", "LA PREMIERE LETTRE COMMENCE PAR UN I", "DOUTEUX", "LA PREMIERE LETTRE COMMENCE PAR UN C", "SAVOIR", "NONCHALANCE", "CONFUSION", "LA PREMIERE LETTRE COMMENCE PAR UN A", "LA PREMIERE LETTRE COMMENCE PAR UN C");
//BE CAREFUL : you have to insert the elements in the same order as the other elements

////////////////////////////////Variables////////////////////////////////////////////////////
var score = 0,
  counter = 0,
  defSelec = [],
  centi = 0,
  secon = 0,
  minu = 0,
  speed = 20,
  timerCurrent = false,
  indice = document.querySelector("#indice"),
  aleasecondaire = 0,
  indiceView = document.querySelector(".indiceView"),
  game = document.getElementById("jeu"),
  balle = document.querySelector("#balle"),
  tir = document.querySelector("#avatarMain"),
  prof = document.getElementById("avatarProf"),
  start = document.getElementById("play"),
  buttonMute = document.getElementById("buttonMute"),
  numberHearth = 10,
  coeur = document.getElementById("coeur"),
  largeurJeu = 100 + "%",
  hauteurJeu = 400,
  posX = 300,
  posXmax = 1100,
  posY = 625,
  dirX = 10,
  dirY = -3,
  question = document.querySelector(".question"),
  son1 = document.getElementById("son1"),
  mute = document.getElementById("mute"),
  isPlaying = false,
  myAudio = document.getElementById("myAudio"),
  correction = document.getElementById("correction"),
  restTime = 0,
  fin = document.getElementById('fin'),
  mainText = document.querySelector("#mainText"),
  submit = document.querySelector("#submit"),
  classement = document.querySelector("#classement"),
  linkclassement = document.querySelector("#linkclassement"),
  scoretime = fin.innerHTML;

//////////////////////////////////////INITIALIZATION///////////////////////////////////////
jeu.style.width = largeurJeu + "px"; //
jeu.style.height = hauteurJeu + "px"; //     Initialization animation
prof.style.display = "block"; // 
tir.style.display = "block"; //

//////////////////////////////////////////////START OF THE GAME ////////////////////////
showQuestion(); //Show the first question
chronometer(); //Launches function chrono for timer
myAudio.play();
myAudio.volume = 0.05; //Regulates the volume

////////////////////////////////////////// SOUND  /////////////////////////////////////
function togglePlay() { //
  if (isPlaying) { // PAUSE THE AUDIO
    myAudio.pause() //
    son1.pause() //
    buttonMute.setAttribute("src", "../images/speaker2.png"); // Function to mute sound
  } else { // PLAY THE AUDO
    myAudio.play() //
    buttonMute.setAttribute("src", "../images/speaker.png"); //
  } //
};
myAudio.onplaying = function () {
  isPlaying = true;
};
myAudio.onpause = function () {
  isPlaying = false;
}, false;



//// LEADERBOARD ////

clickTest();