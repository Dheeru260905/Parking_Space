// Initialize Firebase (make sure this script is loaded *after* Firebase scripts in HTML)
const firebaseConfig = {
    apiKey: "AIzaSyBFOvNU3oABnvXj80rfpFhtu3wX_7Tunm0",
    authDomain: "parking-using-ultrasonic-waves.firebaseapp.com",
    projectId: "parking-using-ultrasonic-waves",
    storageBucket: "parking-using-ultrasonic-waves.appspot.com",
    messagingSenderId: "914429921074",
    appId: "1:914429921074:web:768fdc599ce6d9415b792b"
  };
  
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
  // Handle Login
  function loginUser(email, password) {
    auth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        return userCredential.user.getIdToken();
      })
      .then(token => {
        // Send token to Flask backend
        return fetch('/api/verify-token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ idToken: token })
        });
      })
      .then(response => response.json())
      .then(data => {
        if (data.status === "success") {
          window.location.href = "/home.html";
        } else {
          alert("Login failed: " + data.message);
        }
      })
      .catch(error => {
        alert("Error: " + error.message);
      });
  }
  
  // Handle Signup
  function signupUser(email, password) {
    auth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        alert("Signup successful! Please log in.");
        window.location.href = "/login.html";
      })
      .catch(error => {
        alert("Signup failed: " + error.message);
      });
  }
  
  // Bind to form
  document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
  
    if (loginForm) {
      loginForm.addEventListener('submit', e => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        loginUser(email, password);
      });
    }
  
    if (signupForm) {
      signupForm.addEventListener('submit', e => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        signupUser(email, password);
      });
    }
  });
  