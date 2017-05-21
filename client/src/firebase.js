import * as firebase from 'firebase/firebase-browser';
import {firebaseConfig} from './config';


class FirebaseApi {

  static initAuth() {
    firebase.initializeApp(firebaseConfig);
    return new Promise((resolve, reject) => {
      const unsub = firebase.auth().onAuthStateChanged(
        user => {
          unsub();
          resolve(user);
        },
        error => reject(error)
      );
    });
  }

  static createUserWithEmailAndPassword(email, password){
    console.log(email)
    console.log(password)
    var auth = firebase.auth();
    console.log(auth)
    return auth.createUserWithEmailAndPassword(email, password);
  }

  static signInWithEmailAndPassword(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  static authSignOut(){
    return firebase.auth().signOut();
  }

  static databasePush(path, value) {
    return new Promise((resolve, reject) => {
      firebase
        .database()
        .ref(path)
        .push(value, (error) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
    });
  }

  static GetValueByKeyOnce(path, key) {
    return firebase
      .database()
      .ref(path)
      .orderByKey()
      .equalTo(key)
      .once('value');
  }

  static GetChildAddedByKeyOnce(path, key) {
    return firebase
      .database()
      .ref(path)
      .orderByKey()
      .equalTo(key)
      .once('child_added');
  }

  static databaseSet(path, value) {

    return firebase
      .database()
      .ref(path)
      .set(value);

  }
}

export default FirebaseApi;