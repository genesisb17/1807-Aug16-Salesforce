public with sharing class classNine {
    public Contact obj{get;set;}
    
    public ClassNine(){
    	obj = new Contact();
   		obj.ownerID = UserInfo.getUserId();
    }
    
    public void save(){
    	insert obj;
    }
    
    public void saveAndNew(){
    	
    }
    
    public void cancel(){
    	
    }
    
}