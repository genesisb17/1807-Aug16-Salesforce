public class Primatives {

    /**
     * When a number/string/array/char/etc (basically, any raw data) is present in code, it is called a literal.
     * We assign primitive data types to data inour code as to have some way to group it
     * Primitive data types are: int, long, byte, char, double, float, boolean, short.
     */

    public static void main(String[] args) { // "7"
        int x; //declaring int variable
        x = 15; //initializing int var
        x = 25; //reassigning x

        int y = 20; //declare and initalize
        int riches = 100_000_000;
        //int text = _100_; //WRONG

        double d = 10.0_0; //10._00 not okay
        long camelCase = 48975451278459549L;
        long l = 4897134897434897474l; //need to specify larger data types like long with L or l

        //CASTING - changing reference type of variable
        short s = (short) y; //explicit casting
        //int test = camelCase; larger to small datatypes, you would lose data. Implicit casting seen here would be bad
        long test = y; //can implicitly cast a smaller literal into a larger reference without losing data or specifiying specifically

        //naming
        boolean $1e_2 = true; //works. numbers cannot be first

        //base 10 aka decimal
        int dec = 10;
        //binary - base 2 (01010101) add "0B" to start
        int bin = 0B1010;
        int bin2 = 0B1000001;
        System.out.println(bin); //will print 10(base 10) not 1010(base 2)
        //octal - base 8 - 017454
        int oct = 01176; //"0" to denote base 8
        System.out.println(oct);
        //hex - base 16 - 0-9, a-f
        int hex = 0xffb4ee; //add uppercase or lowercase x after 0 at the start to denote base 16
        int hex2 = 0Xb10002;

        //chars
        char ch = '4'; //single quotes
        char e = 'e';
        char num = 50;
        System.out.println(num); //prints ASCII 2

        //wrapper classes
        /*
        The object that wraps its respective primitive data types
        We can easily convert between wrapper classes and their respective primitive through a process called boxing/autoboxing 
        */
        Integer wrapper = new Integer(10); 
        System.out.println(wrapper); //10
        int prim = wrapper; //unboxing

        int b = 5;
        Integer boxing = b; //autoboxing
        int parsed = Integer.parseInt("7");

        System.out.println(Integer.MAX_VALUE); //static var
        System.out.println(Integer.compare(5, 100)); //static method
        System.out.println(boxing.equals(10)); //instance method

        /**
         * Scopes
         * 
         * Static/Class
         * Instance/Object
         * Method
         * Block
         */
    }        

class Test {

}