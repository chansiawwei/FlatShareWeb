import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC0irKM_ZpiO5Tc6_q_RHew_Vc51kbWGrw",
    authDomain: "flatshareweb-3c5b2.firebaseapp.com",
    databaseURL: "https://flatshareweb-3c5b2.firebaseio.com",
    projectId: "flatshareweb-3c5b2",
    storageBucket: "",
    messagingSenderId: "504851365221",
    appId: "1:504851365221:web:d4064782a1b5ca92"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.firestore().settings({timestampsInSnapshots:true})

  export default firebase;