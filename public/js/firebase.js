import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



const firebaseConfig = {
    apiKey: "AIzaSyDk2m7sPWwlop9NvtTofP30vC8JxYY_U1M",
    authDomain: "e-learning-c6f73.firebaseapp.com",
    projectId: "e-learning-c6f73",
    storageBucket: "e-learning-c6f73.appspot.com",
    messagingSenderId: "511239308310",
    appId: "1:511239308310:web:1bacd13647ecc753de6137",
    measurementId: "G-DEC72DFYMN"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  function handleClick() {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

module.exports = handleClick;