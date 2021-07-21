import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAVzTBTas3AgpTRoigeIgxx4V3GRoxdmk0",
    authDomain: "react-twitter-aac4c.firebaseapp.com",
    projectId: "react-twitter-aac4c",
    storageBucket: "react-twitter-aac4c.appspot.com",
    messagingSenderId: "1057336995778",
    appId: "1:1057336995778:web:58c745891497233ecdf05b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db;
