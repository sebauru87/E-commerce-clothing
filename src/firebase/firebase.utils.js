import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCG24vpJacygVx0fhGQe8yiPjodilqTmbI",
    authDomain: "e-commerce-clothing-db968.firebaseapp.com",
    databaseURL: "https://e-commerce-clothing-db968.firebaseio.com",
    projectId: "e-commerce-clothing-db968",
    storageBucket: "e-commerce-clothing-db968.appspot.com",
    messagingSenderId: "56708246833",
    appId: "1:56708246833:web:e99e7f768b18456cc01410",
    measurementId: "G-8956YZLW8X"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log(snapShot);

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch (error) {
            console.log('error creating user', error.message)
    }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;