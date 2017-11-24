import * as firebase from 'firebase'
import * as AppActions from '../actions/AppActions.js';

export function initializeFirebase(){

	let config = {
    apiKey: "AIzaSyBHrgotszvZymSf1blqI2-iU6chW-DFvd0",
    authDomain: "contact-list-d.firebaseapp.com",
    databaseURL: "https://contact-list-d.firebaseio.com",
    storageBucket: "contact-list-d.appspot.com"
  	};

	firebase.initializeApp(config);
}

let userID = 0;

export function saveContact(contact){

	let database = firebase.database();
	database.ref('contactID-' + userID).set({
		contact: contact
	});

	userID++

}

export function getContacts(){

	let database = firebase.database();
	database.ref().on("value", function(snapshot){

		var contacts = [];
		
		snapshot.forEach(function(childSnapshot){
			
			var contact = {
				id: childSnapshot.key,
				name: childSnapshot.val().contact.name,
				phone: childSnapshot.val().contact.phone,
				email: childSnapshot.val().contact.email
					}
			contacts.push(contact);
			console.log(contact);
			AppActions.receiveContacts(contacts);
		
		});
		
	});
}