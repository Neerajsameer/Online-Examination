 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyA6L0Q962o_1WpGU53dODufFIZEQUwov6o",
  authDomain: "examination-system-9df9c.firebaseapp.com",
  databaseURL: "https://examination-system-9df9c.firebaseio.com",
  projectId: "examination-system-9df9c",
  storageBucket: "examination-system-9df9c.appspot.com",
  messagingSenderId: "835946419567",
  appId: "1:835946419567:web:6e400acd0591d42353049a",
  measurementId: "G-ES6EX7DTVX"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var email,password;
function login() {
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(function() {

     email = document.getElementById("useremail").value;
     password = document.getElementById("password").value;
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
}

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
     if(email == "admin@gmail.com")  window.location.href = "Admin.html";
     else window.location.href = "homepage.html";
    } else {
      // No user is signed in.
    }
  });
