function clickTest() {
  var userRef = firebase.database().ref('user');
  var messageText = mainText.value;
  userRef.child(mainText.value).set(messageText + ":" + fin.innerHTML);
}