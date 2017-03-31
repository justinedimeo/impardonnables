(function () {
  const config = {
    apiKey: "AIzaSyAgC_-qWvTsW2pflkftj_vHdDh0P44A7WU",
    authDomain: "jshetic-92c18.firebaseapp.com",
    databaseURL: "https://jshetic-92c18.firebaseio.com",
    storageBucket: "jshetic-92c18.appspot.com",
    messagingSenderId: "502411011700"
  };


  const classement = document.getElementById("classement");
  const classementref = firebase.database().ref().child('user');

  classementref.on('value', snap => {
    classement.innerHTML = JSON.stringify(snap.val(), null, 3);
  });






}());