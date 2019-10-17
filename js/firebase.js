// Inicializa firebase
firebase.initializeApp(firebaseConfig);

// Inicializa Firestore
var db = firebase.firestore();

// Provedores de autenticação
var provider1 = new firebase.auth.GoogleAuthProvider();

// Variável que contém dados do usuário logado
var user = {};