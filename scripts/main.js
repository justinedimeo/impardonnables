/* GAME */

// Tableau des définitions
var def = Array("Approuvé par une majorité. ", "Simple voire vulgaire. ", "Spécialité de quelqu'un / quelque chose", "Etre dans une situation désespérée. ", "Habileté. ", "Obscur. ", "Droit / loyal.", "Pressentir.", "Bon jusqu’à la faiblesse.", "S’accrocher à ses opinions /têtu", "Arrogant, orgueil, audace, vanité, insolence", "Conforme, conventionnel, canonique", "Vide de sens", "Un penchant naturel, prédisposition", "Prôner le retour en arrière", "nature à troubler/renverser l’ordre social ou politique", "Quelqu’un semant le trouble, le désordre.", "Idolâtrer", "Sournois, qui vise à tromper", "Tape à l’œil.", "Illustre, appuie, vérifie, justifie ce que je dis ou fait", "Une révolte ", "Une supposition, une hypothèse, un postulat", "Fait d’un seul bloc / d’un seul tenant", "Tourner autour du pot", "Qui décape, corrosif (peut être utilisé pour désigner un humour). ", "qui aime ou qui est fait d’éléments très divers, de beaucoup de tendances", "mauvaise ambiance, état de découragement", "Diminuer la valeur ou l’importance de quelque chose", "Tromper, duper", "Propos dénué d’intelligence, de sens", "Caractère de ce qui a deux aspects. Propriétés opposées.", "Marquer, caractériser", "Prudent", "Indiscutable, sans réplique possible.", "Imprévu", "Conflit, scandale", "Il a dit, selon, d’après.", "Détours complexes, voies imprévues.", "A petite dose, modérément", "Détester, haïr", "Défense publique", "Finir brutalement, de manière décevante, sans donner les résultats attendus.", "excessivement louangeur.", "Bagatelle, brimborion, chose sans importance", "Qui n'est pas convenable, déplacé", "hostile à la religion (ça c’était avant) maintenant c’est hostile aux traditions, non conventionnel", "un bon vivant, jovial", "Une besogne / un travail très simple", "Attitude de supériorité méprisante de qqun qui tout en accordant une faveur fait sentir qu’il pourrait la refuser.", "Simultané", "Un pamphlet ", "Déprécier/dénigrer", "Vitupérer contre/protester contre", "le déshonneur = jeter la honte", "Le bluff.", "Les aléas de la vie, du destin", "Qui vise à tromper, sournois", "Tranchant, mordant (belliqueux)", "Ambigüe, sujet à diverse interprétation", "Qui a une importance secondaire", "Secret que tout le monde connait.", " Disposition à faire le minimum d’effort pour faire quelque chose.", "Des bêtises", "personne détachée de choses matérielles", "Quelqu’un à l’esprit rationnel, rigoureux et quelque peu formaliste. "); // Veuillez insérer vos définitions entre guillemets exemple : "ma définition"


// Tableau du Vocabulaire
var motsDef = Array("PLEBISCITE", "PROSAIQUE", "APANAGE", "AUX ABOIS", "DEXTERITE", "ABSCONS", "RECTITUDE", "SUBODORER", "DEBONNAIRE", "OPINIATRE", "OUTRECUIDANCE", "ORTHODOXE", "VACUITE", "INCLINATION", "REACTIONNAIRE", "SUBVERSIF", "TRUBLION", "METTRE SUR UN PIEDESTAL", "INSIDIEUX", "OSTENTATOIRE", "CORROBORER", "FRONDE", "ASSERTION", "MONOLITHIQUE", "TERGIRVERSER", "CAUSTIQUE", "ECLECTIQUE", "MARASME", "MINORER", "FLOUER", "INEPTIE", "AMBIVALENT", "ESTAMPILLER", "CIRCONSPECT", "PEREMPTOIRE", "IMPONDERABLE", "ESCLANDRE", "DIXIT", "MEANDRES", "PARCIMONIE", "ABHORRER", "APOLOGIE", "FINIR EN QUEUE DE POISSON", "DITHYRAMBIQUE", "BROUTILLE", "INCONGRU", "ICONOCLASTE", "TRUCULENT", "SINECURE", "CONDESCENDANCE", "CONCOMITANT", "DIATRIBE", "VILIPENDER", "INVECTIVER", "JETER L'OPPROBRE", "ESBROUFRE", "VICISSITUDES", "FALLACIEUX", "INCISIF", "EQUIVOQUE", "CONTINGENT", "SECRET DE POLICHINELLE", "INDOLENCE", "GALIMATIAS", "ASCETE", "CARTESIEN"); // Veuillez insérer vos mots à définir entre guillemets exemple :"Vocabulaire" ATTENTION : respectez le même ordre que les définitions

var indiceDef = Array("VOTE A MAIN LEVEE", "COMMUN / BANAL", "CARACTERISTIQUE", "DIFFICULTE", "AGILITE / INGENIOSITE", "ENIGMATIQUE", "JUSTESSE", "FLAIRER", "BIENVEILLANT", "PERSISTANT", "EFFRONTERIE", "TRADITIONNEL", "ENNUI", "APTITUDE", "RETROGRADE / CONSERVATEUR", "DESTRUCTEUR", "AGITATEUR", "DIVINATION", "RUSE", "VOYANT", "VALIDER", "MAZARINADE", "THEORIE", "HOMOGENE", "BIAISER", "ACIDE", "DIVERS", "DÉPRESSION", "DIMINUER", "DÉMUNIR", "ÂNERIE", "AMBIGUE", "POINÇONNER", "AVISER", "AUTORITAIRE", "HASARDEUX", "DÉSORDRE", "LA PREMIERE LETTRE EST D ", "CONTOUR", "RADINERIE", "MAUDIRE", "ÉLOGE", "RATER", "FLATEUR", "FUTILITE", "INDECENT", "VANDALE", " COMIQUE", "FACILE", "HAUTAIN", "COINCIDENT", "CRITIQUE", "MEDIRE", "ABOYER", "INFAMIE", "ÉPATE", "HASARD", "FOURBE", "VIF", "DOUTEUX", "ÉVENTUEL", "SAVOIR", "NONCHALANCE", "CONFUSION", "ERMITE", "CLAIRE");

var score = 0,
    compteur = 0,
    defSelec = [],
    centi = 0,
    secon = 0,
    minu = 0,
    vitesse = 20,
    timerEnCours = false,
    indice = document.querySelector("#indice"),
    aleasecondaire = 0,
    indiceView = document.querySelector(".indiceView"),
    jeu = document.getElementById("jeu"),
    balle = document.querySelector("#balle"),
    tir = document.querySelector("#avatarMain"),
    prof = document.getElementById("avatarProf"),
    start = document.getElementById("play"),
    buttonMute = document.getElementById("buttonMute"),
    NombreCoeur = 3,
    coeur = document.getElementById("coeur"),
    largeurJeu = 1500,
    hauteurJeu = 500,
    posX = 300,
    posXmax = 1100,
    posY = 625,
    dirX = 10,
    dirY = -3,
    son1= document.getElementById("son1"),
    mute = document.getElementById("mute"),
    isPlaying = false,
    myAudio = document.getElementById("myAudio")
    fin = document.getElementById('fin');




//////////////////////////////////////INITIALISATION///////////////////////////////////////
jeu.style.width = largeurJeu + "px";
jeu.style.height = hauteurJeu + "px";
prof.style.display = "block";
tir.style.display = "block";

//////////////////////////////////////////////START OF THE GAME ////////////////////////



showQuestion(); //Affiche la première question 
chrono();
myAudio.play();
myAudio.volume=0.05;

// SOUND

function togglePlay() {
  if (isPlaying) {
    myAudio.pause()
    son1.pause()
    buttonMute.setAttribute("src", "../images/speaker2.png");
  } else {
    myAudio.play()
    buttonMute.setAttribute("src", "../images/speaker.png");
  }
};
myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
},false;
