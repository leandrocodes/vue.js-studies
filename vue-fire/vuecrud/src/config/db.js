import Firebase from 'firebase'
 let config = {
    apiKey: "AIzaSyAKWTlQHKeJ70Rdj-i72hTVTSbCvKvhS28",
    authDomain: "zooware-4096e.firebaseapp.com",
    databaseURL: "https://zooware-4096e.firebaseio.com",
    projectId: "zooware-4096e",
    storageBucket: "zooware-4096e.appspot.com",
    messagingSenderId: "1006273390199"
  };
let app = Firebase.initializeApp(config)
export const db = app.database()