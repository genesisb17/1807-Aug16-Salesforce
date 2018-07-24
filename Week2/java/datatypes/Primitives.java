public class Primitives{
    /*
    When a number/string/array/char/etc (basically, any
    raw data) is present in code, it is called a 
    literal.
    We assign primitive data types to data in our code
    as to have some way to group it
    Primitive data types are: int, long, byte, char,
    double, float, boolean, short 
    */
    public static void main (String[] arguments){ // "7"
        int x; //declaring int variable 
        x = 15; //initializing int var
        x = 25; //reassigning x

        int y = 20; //declare and initialize in same line
        int riches = 100_000_000;
        //int test = _100_; //WRONG

        double d = 10.0_0;

        long camelCase = 190190099876838L;
        long l = 29852985l;

        //CASTING - changing reference type of variable
        short s = (short) y;
       // int test = camelCase; // wrong; must explicitly cast from larger to smaller ref type
        long test = y; // can implicitly cast a smaller literal into a larger reference
        
        boolean $1e_2 = true;
        // int 1e = 5; //WRONG numbers cannot be first
        int _testing = 3;

        //LITERAL VALUES

        //BASE 10 aka DECIMAL
        int dec = 10;

        //BINARY  - base 2 (010101011)
        int bin = 0B1010;
        int bin2 = 0b1000001;
        System.out.println(bin); //prints 10 not 1010

        //OCTAL - base 8 - 0171641
        int oct = 01176;
        System.out.println(oct); 
        // int test = 09; //WRONG 

        //HEXADECIMAL - base 16 - 0-9,A-F/a-f
        int hex = 0xA12d1;
        int hex2 = 0Xb10002;

        char ch = '4';
        char e = 'e';
     //   char test = 'sfaf';
        char num = 50;
        System.out.println(num);        

        // WRAPPER CLASS
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

        System.out.println(Integer.MAX_VALUE);  //STATIC VAR
        System.out.println(Integer.compare(5, 100));   //STATIC METHOD
        System.out.println(boxing.equals(10));  //INSTANCE METHOD
        System.out.println(boxing.MAX_VALUE);  

    }
}

class Test{

}