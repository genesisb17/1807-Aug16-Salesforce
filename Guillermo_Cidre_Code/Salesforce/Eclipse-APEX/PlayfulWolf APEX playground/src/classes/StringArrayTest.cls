public with sharing class StringArrayTest {
    
    public static List<String> generateStringArray(Integer num){
    	List<String> ans = new List<String>();
    	for(Integer i = 0; i<num; i++){
    		 ans.add('Test ' + i);
    	}
    	return ans;
    }
}