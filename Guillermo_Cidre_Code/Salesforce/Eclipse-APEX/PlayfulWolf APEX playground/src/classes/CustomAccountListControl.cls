public with sharing class CustomAccountListControl {
    public List<Account> accountList {get;set;}
    
    public CustomAccountListControl() {
    	accountList = [select id, name, phone, fax, website from account];
    }
}