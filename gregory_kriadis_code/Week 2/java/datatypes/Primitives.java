public class Primitives {
    /*
    When a number/string/array/char/etc (any raw data basically) is present
    in code, it is called a literal. We assign primitive data types to data
    in our code as to have some way to group it.
    Primitive data types are: int, long, byte, char, double float, boolean, short
    */
    public static void main (String[] args) {
        int x; // declaring int variable
        x = 15; // initializing int var
        x = 25; // reassigning x
        int y = 20; // declaring & initializing in same line
        int riches = 100_000_000; // can use underscore for visual ease with large numbers
        //int test = _100_; // WRONG
        long camelCase = 19019991914271L; // L at the end forces it to be a long; Java tries to make it int otherwise
        long l = 29854114;

        // Casting - changing reference type of variable
        short s = (short) y; // Explicit cast
        //int test = camelCase; // Wrong- must explicitly cast from larer to smaller type
        boolean $1e_2 = true;
        //int 1e = 5; // Wrong- numbers cannot be first in variable name
        int _test  =3;

        // LITERAL VALUES

        // BASE 10 aka DECIMAL

        // BINARY - base 2 (010101011)
        int bin = 0B1010;
        int bin2 = 0b100001;
        System.out.println(bin); // Print 10 not 1010

        // OCTAL - base 8 - 0171641
        int oct = 01176; // Print octal becuase it starts with 0
        System.out.println("octal: " + oct);
        // int test = 09; // WRONG

        // HEXADECIMAL - base 16 - 0-9, A-F/a-f
        int hex = 0xA12d1;
        int hex2 = 0Xb100002;

        char ch = '4';
        char e = 'e';
        //char test = 'sfaf'; // WRONG - too long

        // WRAPPER CLASS
        /*
        The object that wraps its respective primitive data types.
        We can easily convert between wrapper classes and their
        respective primitive through a process caleld boxing/autoboxing.
        */
        Integer wrapper = new Integer(10);
        System.out.println(wrapper);
        int prim = wrapper; // Boxing

        int b = 5;
        Integer boxing = b; // Autoboxing
        int parsed = Integer.parseInt("7");
        // Check out the documentation on Oracle's site regarding the Integer class
        System.out.println(Integer.MAX_VALUE); // Static variable
        System.out.println(Integer.compare(5, 100)); // Static method
        System.out.println(boxing.equals(10)); // Instance method - Integer.equals() doesn't work
    }
}

class Test {

}