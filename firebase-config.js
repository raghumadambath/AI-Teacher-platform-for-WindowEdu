// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAVAKnBISm4OtFlArh0tOn4jDzAdOgOyc",
  authDomain: "windowedu-ai-teacher.firebaseapp.com",
  projectId: "windowedu-ai-teacher",
  storageBucket: "windowedu-ai-teacher.appspot.com", 
  messagingSenderId: "865665500335",
  appId: "1:865665500335:web:986fd660d523917851c05a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get Firebase authentication instance
const auth = firebase.auth();
