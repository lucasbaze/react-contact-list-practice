import AppDispatcher from '../dispatcher/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';

export function saveContact(contact){
	AppDispatcher.handleViewAction({
		actionType: AppConstants.SAVE_CONTACT,
		contact: contact
	});
}

export function receiveContacts(contacts){
	AppDispatcher.handleViewAction({
		actionType: AppConstants.RECEIVE_CONTACTS,
		contacts: contacts
	})
}