public with sharing class ContactTableController {
    public List<Contact> contactList {get;set;}
    public Contact newContact {get;set;}
    
    /*
    =======================================================================
    	Helper Functions
    =======================================================================
    */
    void refreshList(){
    	contactList = [select id, ownerId, salutation, firstname, lastname, homePhone, mobilePhone,
    				   otherPhone, accountID, title, email, department, AssistantName, birthDate, AssistantPhone, ReportstoID,
    				   phone, fax, leadSource, MailingStreet, otherStreet, MailingCity, otherCity, 
    				   MailingState, otherState, MailingPostalCode, otherPostalCode, MailingCountry, otherCountry,
    				   description from contact];
    }
    
    void initializeNewContact(){
    	//initialize newContact as the standard contact field
    	newContact = new Contact();
    	newContact.ownerID = UserInfo.getUserId();
    }
    
    /*
    =======================================================================
    	Constructor Function
    =======================================================================
    */
    
    public ContactTableController() {
		refreshList();
    	initializeNewContact();
    }
    
    /*
    =======================================================================
    	saveNew Functions
    =======================================================================
    */
    
    public void saveNew(){
    	insert newContact;
    	refreshList();
    	initializeNewContact();
    }
}