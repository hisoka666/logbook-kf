
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBtPOvSyG4jU6NlWHqOcsb7tPqb0lipdMA",
    authDomain: "logbook-kf.firebaseapp.com",
    projectId: "logbook-kf",
    storageBucket: "logbook-kf.appspot.com",
    messagingSenderId: "1096963914458",
    appId: "1:1096963914458:web:2809b6b48b8a3d218603e3",
    measurementId: "G-4DE4ZJ6XMG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);



function login(){
    email = document.getElementById('login-user').value
    pass = document.getElementById('login-pass').value

    firebase.auth().signInWithEmailAndPassword(user, pass)
  .then((userCredential) => {
    var user = userCredential.user;
    document.getElementById('main-page').innerHTML = main
    document.getElementById('user-email').innerHTML = user.email
  })
  .catch((error) => {
    // var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  });
}

