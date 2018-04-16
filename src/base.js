import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD5d1ZAupa_RxcJDMs_rFRlUGtPU0ZT-II",
    authDomain: "comments-xumes.firebaseapp.com",
    databaseURL: "https://comments-xumes.firebaseio.com",
    projectId: "comments-xumes",
    storageBucket: "",
    messagingSenderId: "563529861495"
})
const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export const providers = {
    'facebook': new firebase.auth.FacebookAuthProvider()
}

export const auth = firebaseApp.auth()
export default base