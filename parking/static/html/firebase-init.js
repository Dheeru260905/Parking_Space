// Initialize Firebase (Modular SDK v9+)
const firebaseConfig = {
    apiKey: "AIzaSyBFOvNU3oABnvXj80rfpFhtu3wX_7Tunm0",
    authDomain: "parking-using-ultrasonic-waves.firebaseapp.com",
    projectId: "parking-using-ultrasonic-waves",
    storageBucket: "parking-using-ultrasonic-waves.appspot.com",
    messagingSenderId: "914429921074",
    appId: "1:914429921074:web:768fdc599ce6d9415b792b",
    measurementId: "G-WBZQXJ79NG"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  
  // Access Auth and Firestore if needed
  const auth = firebase.auth();
  const db = firebase.firestore();
  