import org.omg.Messaging.SYNC_WITH_TRANSPORT;

public class Primitives{
    /*
    When a number/string/array/char/etc (basically any raw data) is present in code, it is called a literal.
    We assign primitive data types to data in our code
    as to have some way to group it
    Primitive data types are: int, long. byte. char,
    double, float, boolean, short
    */

    public static void main (String[] args) {
        int x; //declaring int variable
        x = 40;//initializing
        x = 25; //reassigning x

        int y = 20; //declare and initialize in same line
        int riches = 100_000_000;
        //int test = _100_; //wrong

        double d = 10.0_0;

        long camelCase = 19019000938L;
        long l = 19852985l;

        //Casting - changing reference type of variable
        //high to low: error require explicit
        //low to high: no error will happen
        short s = (short) y;
        //int test = camelCase; //must explicitly cast from larger to smaller ref type
        long test = y; //can implicitly cast a smaller literal into a large literal
        boolean $1e_2 = true;
        //int 1e = 5; //wrong
        int _testing = 3;

        //literal values
        //base 10
        int dec = 10;

        int bin = 0b1010;
        int bin2 = 0b100001;
        System.out.println(bin);

        //OCTAL - 076230
        int oct = 01176;
        System.out.println(oct);
        //int test = 09; wrong

        //hex- 0-9 A-F
        int hex = 0xa12d1;
        int hex2 = 0Xb10002;

        char ch = '4';
        char e = 'e';
        //char test = 'sfaf'; Wrong
        char num = 50;
        System.out.println(num);

        //WRAPPER CLASS
        /*
        The object that wraps its respective primitive data types
        We can easily convert between wrapper classes and their
        respective primitive through a process called boxing/autoboxing
        */
        Integer wrapper = new Integer(10);
        System.out.println(wrapper);
        int prim = wrapper; //unboxing

        int b = 5;
        Integer boxing = b; //autoboxing
        int parsed = Integer.parseInt("7");
        
        System.out.println(Integer.MAX_VALUE); //STATIC VAR
        System.out.println(Integer.compare(5,100)); //STATIC METHOD
        System.out.println(boxing.equals(10)); //INSTANCE METHOD
        System.out.println(boxing.MAX_VALUE); //This will work

        Test ct = new Test();
        Test dt = new Test();
        ct.a = 50;
        System.out.println(dt.a); //important to know
    }
}

class Test{
    static int a = 10;
}