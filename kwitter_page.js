//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyDwGs9CLCqgPbB4VlQ168EvU6ubvoZzINw",
      authDomain: "let-s-chat-d65c0.firebaseapp.com",
      databaseURL: "https://let-s-chat-d65c0-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-d65c0",
      storageBucket: "let-s-chat-d65c0.appspot.com",
      messagingSenderId: "1079461607265",
      appId: "1:1079461607265:web:9ef58389cf3895965db720"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
