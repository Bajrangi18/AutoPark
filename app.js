import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js'
import { getDatabase, ref, child, get, set,push, update } from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js'

  const firebaseConfig = {
  apiKey: "AIzaSyCZyWPmFktra6v3pJnuy5mN_FCUYTsVumE",
  authDomain: "autopark-f61ef.firebaseapp.com",
  databaseURL: "https://autopark-f61ef-default-rtdb.firebaseio.com",
  projectId: "autopark-f61ef",
  storageBucket: "autopark-f61ef.appspot.com",
  messagingSenderId: "164346234866",
  appId: "1:164346234866:web:a8fb9a635091dbfe5c8d6b",
  measurementId: "G-M0KXQNBN1W"
};

  const app = initializeApp(firebaseConfig);

  const db = getDatabase(app);

  const button = document.getElementById('submitbt');

button.addEventListener('click', event => {
            const dbRef = ref(getDatabase());
            const userVal = document.getElementById('usernameIn').value;
            const passVal = document.getElementById('passwordIn').value;
          get(child(dbRef, 'username/'+userVal+'/pass')).then((snapshot) => {
            if (snapshot.exists()) {
              if(snapshot.val()==passVal){
                console.log("User is in!");
              }
              console.log(snapshot.val());
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });

});
