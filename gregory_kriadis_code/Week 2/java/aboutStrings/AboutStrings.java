public class AboutStrings {
    /*
    The string class represenets character strings.
    All string literlas in Java ("like this") are
    implemented as instances of this class.
    Strings are immutable - their values cannot be
    changed once they are initialized.
    We use StringBuffer and StringBuilder as mutable
    versions of String.

    new Strings can be created in two ways:
    String str = "This is a string"; // lives in string pool
    String str2 = new String("String"); // lives in the heap
        the "new" keyword will create a new object every
        time it is called even if the string exists already
    */

    public static void main(String[] args) {
        String a = "hello";
        String b = "helllo";
        System.out.println(a == b); // True
        String c = new String("hello");
        System.out.println(a == c); // False
        String d = new String("hello");
        System.out.println(c == d); // False
        System.out.println(a.equals(d)); // True
        a = a.concat(" world!");
        System.out.println(a); // "hello world!"

        StringBuilder sbuild = new StringBuilder("String Builder");
        sbuild.append(" - we have appended a string");
        System.out.println(sbuild);

        // Thread safe
        StringBuffer sbuff = new StringBuffer("String buffer");
    }
}