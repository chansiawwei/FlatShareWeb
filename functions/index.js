const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const createNotification = ((notification) => {
    return admin.firestore().collection('notifications')
      .add(notification)
      .then(doc => console.log('notification added', doc));
  });

  
  exports.todoCreated = functions.firestore
  .document('todos/{todoId}')
  .onCreate(doc => {

    const todo = doc.data();
    const notification = {
      content: 'Added a new todo',
      user: `${todo.authorFirstName} ${todo.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);

});

exports.billCreated = functions.firestore
  .document('bills/{billId}')
  .onCreate(doc => {

    const bill = doc.data();
    const notification = {
      content: 'Added a new bill',
      user: `${bill.authorFirstName} ${bill.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);

});

exports.userJoined = functions.auth.user()
  .onCreate(user => {
    
    return admin.firestore().collection('users')
      .doc(user.uid).get().then(doc => {

        const newUser = doc.data();
        const notification = {
          content: 'Joined the party',
          user: `${newUser.firstName} ${newUser.lastName}`,
          time: admin.firestore.FieldValue.serverTimestamp()
        };

        return createNotification(notification);

      });
});
