import AppDispatcher from '../dispatcher/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';
import { EventEmitter } from 'events';
import * as FirebaseAPI from '../utils/FirebaseAPI.js';

let CHANGE_EVENT = 'change';

let _contacts = [];

class AppStore extends EventEmitter{
	constructor(props){
		super(props);
	}

	addChangeListener = (callback) => {
		this.on(CHANGE_EVENT, callback);
	}

	removeChangeListener = (callback) => {
		this.removeListener(CHANGE_EVENT, callback);
	}

	emitChange = () => {
		this.emit(CHANGE_EVENT);
	}

	saveContact = (contact) => {
		_contacts.push(contact);
	}

	setContacts = (contacts) => {
		_contacts = contacts;
	}

	getContacts = () => {
		return _contacts;
	}

	handleActions(payload){
		let action = payload.action;

		switch(action.actionType){
			case AppConstants.SAVE_CONTACT:
				//Save to the local store
				//this.saveContact(action.contact);
				//Save to Firebase
				FirebaseAPI.saveContact(action.contact);
				this.emitChange();
				break;
			case AppConstants.RECEIVE_CONTACTS:
				//Update to the local store
				this.setContacts(action.contacts);
				this.emitChange();
				break;
			}
	}
}

const appStore = new AppStore;

AppDispatcher.register(appStore.handleActions.bind(appStore));

export default appStore;