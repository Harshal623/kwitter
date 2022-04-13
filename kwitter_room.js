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
user_name = localStorage.getItem("user")
document.getElementById("username").innerHTML = "Welcome " + user_name + "!"
function addroom(){
      Room_name = document.getElementById("room_name").value
      localStorage.setItem("Room_name", Room_name)
      firebase.database().ref("/").child(Room_name).update({
            porpose:"adding room"
      });
      window.location = "kwitter_page.html"
}



function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room names-"+ Room_names)
                  row = "<div id = '"+Room_names+"' class = 'room_name' onclick = 'redirect(this.id)'>"+Room_names + "</div><hr>"
                  document.getElementById("output").innerHTML += row
                  //End code
            });
      });
}
getData();

function redirect(current_room){
      console.log(current_room)
      localStorage.setItem("Room_name", current_room)
      window.location = "kwitter_page.html"
}

function logout(){
      localStorage.removeItem("user")
      localStorage.removeItem("Room_name")
      window.location = "index.html"
}