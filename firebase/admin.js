
var admin = require("firebase-admin");

var serviceAccount = require("../firebase/microservice-firebase-comments-firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const DB = admin.firestore();
module.exports = {admin,DB};
