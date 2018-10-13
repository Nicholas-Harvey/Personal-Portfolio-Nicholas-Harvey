prompt("Hi")
  var config = {
    apiKey: "AIzaSyAkwPVGAfB2HMVyX2273pjJXYRWsfM_zPg",
    authDomain: "contactmessages-3f86d.firebaseapp.com",
    databaseURL: "https://contactmessages-3f86d.firebaseio.com",
    projectId: "contactmessages-3f86d",
    storageBucket: "contactmessages-3f86d.appspot.com",
    messagingSenderId: "850813213085"
  };
firebase.initializeApp(config);
var database = firebase.database();
console.log(config);

  
$(document).on("click", "#contact-button", function (event) {
    console.log("contact-button pressed")
    event.preventDefault();
    });
  var clientName = $("#clientName-input").val().trim();
  var clientEmail = $("#clientEmail-input").val().trim();
  var clientMessage = $("#clientMessage-input").val().trim();

  console.log(clientName + clientEmail + clientMessage)

var newMessage = {
    newName: clientName,
    newEmail: clientEmail,
    newCorrespondance: clientMessage,
};

database.ref().push(newMessage)
console.log(newMessage);
console.log(newName);
console.log(newEmail);
console.log(newCorrespondance);

alert("Message Sent to Nicholas Harvey");


  database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());
    var newName = childSnapshot.val().newName;
    var newEmail = childSnapshot.val().newE;
    var newCorrespondance = childSnapshot.val().newCorrespondance;

    console.log("New Client Name: " + newName);
    console.log("New Client Email: " + newEmail);
    console.log("New Client Correspondance: " + newCorrespondance)


dataRef.ref().push({
    newName: ClientName,
    newEmail: clientEmail,
    newCorrespondance: clientEmail,
    messageAdded:
    firebase.database.ServerValue.TIMESTAMP
});
});