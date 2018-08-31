public with sharing class SearchAccountListController {
	public account accountType {get;set;}
	public List<Account> accountList {get;set;}
	
	public SearchAccountListController(){
		accountType = new Account();
	}
	
    public void getAccounts(){
    	accountList = [select id, name, phone, billingState from account where type = :accountType.type];
    	
    }
}