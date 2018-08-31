public with sharing class SearchContactController {
    public String searchString {get;set;}
    public Contact foundContact{get;set;}
    
    public SearchContactController() {
    	foundContact = new Contact();
    }
    
    public void findContact(){
    	List<Contact> contactList = [select id, name, email, phone from contact where lastname = :searchString];
    	if(contactList.size() > 0){
    		foundContact = contactList.get(0);
    	}
    	else{
    		foundContact = new Contact();
    	}
    }
}