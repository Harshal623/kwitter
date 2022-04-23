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

firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("user")
room_name = localStorage.getItem("Room_name")
document.getElementById("room-name").innerHTML = "room name: " + room_name

function send(){
      msg = document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            new_name:username,message:msg,like:0
      });
      document.getElementById("msg").value = ""
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function logout(){
      localStorage.removeItem("user")
      localStorage.removeItem("Room_name")
      window.location = "index.html"
}