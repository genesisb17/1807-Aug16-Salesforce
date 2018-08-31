public with sharing class AccountHandler {
    
    public static Account insertNewAccount(String str) {
    	if(String.isBlank(str)){
    		return null;
    	}
    	else {
    		Account a = new Account();
    		a.name = str;
    		insert a;
    		return a;
    	}
    }
}