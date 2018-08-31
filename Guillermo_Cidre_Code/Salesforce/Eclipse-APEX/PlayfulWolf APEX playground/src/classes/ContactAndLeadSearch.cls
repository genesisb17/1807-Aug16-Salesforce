public with sharing class ContactAndLeadSearch {
    
    public static List<List< SObject>> searchContactsAndLeads(String sear){
    	return [FIND :sear IN NAME FIELDS RETURNING Contact(FirstName,LastName), Lead(FirstName, LastName)];
    }
}