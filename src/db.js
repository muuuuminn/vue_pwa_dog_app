import firebase from '@/firebase';

const db = firebase.firestore();
db.enablePersistence({ experimentalTabSynchronization: true }).then(() => {
  console.log("マルチタブでオフラインデータが使えるよ！");
});

export default db;
