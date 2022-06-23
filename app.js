import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js'
import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js'

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

  const database = getDatabase(app);
