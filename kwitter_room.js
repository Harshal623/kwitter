
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAA3oLPAyvEC8bXNupkkvr3IUiQMtOfxEE",
      authDomain: "kwitter-fee83.firebaseapp.com",
      databaseURL: "https://kwitter-fee83-default-rtdb.firebaseio.com",
      projectId: "kwitter-fee83",
      storageBucket: "kwitter-fee83.appspot.com",
      messagingSenderId: "316299698949",
      appId: "1:316299698949:web:15a1adf3c9fe8732ac0d6c",
      measurementId: "G-E4WNKKXD9N"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
