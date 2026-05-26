import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, deleteUser } 
 from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
const firebaseConfig = {
  apiKey: "AIzaSyAvsq1s-HtuZvP-xiQim_dBSqxWLDeuO7E",
  authDomain: "yousuf-islam-sonia.firebaseapp.com",
  databaseURL: "https://yousuf-islam-sonia-default-rtdb.firebaseio.com",
  projectId: "yousuf-islam-sonia",
  storageBucket: "yousuf-islam-sonia.firebasestorage.app",
  messagingSenderId: "18123974488",
  appId: "1:18123974488:web:a0e137892c3b65968d272d"
};
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

// sign in Handler --------------------------------------------------->
 function signinHandler(user) {
   const signinBtnId = document.getElementById('signin-btn-id');
   signinBtnId.onclick = (even) => {
    even.preventDefault(); 
    const signinPassword = document.getElementById('signin-password'); 
    let email = document.getElementById('signin-email').value;
    const password = parseInt(signinPassword.value); 

    if(user) {
        email = user;
    }

    if(!signinPassword || !email){
        message('All field are required*','red');
    }else{
       if(!user){
        signInWithEmailAndPassword(auth, email, password)
        .then(res => {
          if(res.user.accessToken)
            location.assign('home.html');
        });
       }else{
        signInWithEmailAndPassword(auth, user, password)
        .then(res => {
            if(res.user.accessToken)
              location.assign('home.html');
          });
       }
    }
   }
 } 
 
function getUserOnAuthStateChanged() {
    onAuthStateChanged(auth, (currentUser) => {
      const user = currentUser?.email;
      signinHandler(user);
      if(!user){
        showElementById('signin-email');
      }
    });
  }
  getUserOnAuthStateChanged();
  
  