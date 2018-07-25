public class AboutStrings{
    /*
    The String class represents character strings. 
    All string literals in Java ("like this") are
    implemented as instances of this class
    Strings are immutable - their values cannt be 
    changed once they are initialized.
    We use StringBuffer and StringBuilder as mutable
    versions of String

    new Strings can be created in two ways:
    String str = "This is a string"; //lives in string pool
    String str2 = new String("String"); //lives in the heap. 
            the "new" keyword will create a new object every    
            time it is called even if the string exists
            in memory already
    */

    public static void main(String[] args){
        String a = "hello";
        String b = "hello";
        System.out.println(a == b); //T
        String c = new String("hello");
        System.out.println(a == c ); //F
        String d = new String("hello");
        System.out.println(c == d); // F
        System.out.println(a.equals(d)); //T
        a = a.concat(" World!");
        System.out.println(a); 


        StringBuilder sbuild = new StringBuilder("String Builder");
        sbuild.append(" - we have appended a string");
        System.out.println(sbuild);

        //Thread safe
        StringBuffer sbuff = new StringBuffer("String buffer");
    }
}