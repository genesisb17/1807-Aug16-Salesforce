public with sharing class ContactSearch {
	
	public static List<Contact> searchForContacts(String lastn, String postal) {
		return [select id, name from Contact where lastName = :lastn and MailingPostalCode = :postal];
	}
    
}