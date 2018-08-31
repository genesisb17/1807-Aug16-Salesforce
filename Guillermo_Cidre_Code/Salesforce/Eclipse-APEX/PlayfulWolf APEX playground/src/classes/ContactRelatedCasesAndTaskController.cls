public with sharing class ContactRelatedCasesAndTaskController {
    public List<Task> taskList {get;set;}
    public List<case> caseList {get;set;}
    
    public ContactRelatedCasesAndTaskController(ApexPages.StandardController stand){
    
    	String contactID = stand.getID();
    	
    	caseList = [select id, type, status, subject, description from Case where contactID = :contactID];
    	taskList = [select id, status, activityDate, subject, description from Task where whoID = :contactID];
    }
    
}