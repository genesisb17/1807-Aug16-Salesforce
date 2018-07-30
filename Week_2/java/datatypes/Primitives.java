public class Primitives {
    /*
    When raw data (number, string ,Array,) is present incode, called a literal.
    */
    public static void main(String[] args) {
        int x; //declaring int var
        x = 15;//initizaling in int var
        x = 25; //reassigning x

        int y=20; //declare and initiailize in same line
        int riches = 100_000_000;
        //int test = _100_; //WRONG

        double d = 10.0_0;

        long camelCase = 190194567876L;
        long l = 678767;

        //CASTING - changing reference type of variable
        //datatype in paran means explicitly casting it
        short s = (short) y;
        //int test = camelCase; //wrong; must explicitly cast from large to short
        long test = y; // can implicitly cast a samller literal onto a larger one

        boolean $1e_2 = true;
        //int le = 5; //WRONG numbers cannot be first
        int _testing = 3;

        //LITERAL VALUES

        //BASE 10 aka DECIMAL
        int dec = 10;

        //BINARY - base 2 - put zero + "B" or "b" in front of number
        int bin = 0B1010;
        int bin2 = 0b10010;
        System.out.println(bin); //prints 10 not 1010

        //OCTAL - base 8 - put zero in front of number
        int oct = 01176;
        System.out.println(oct);

        //HEXADECIMAL - base 16 - 0-9, A-F/a-f - put "0x" in front
        int hexa = 0xA43B2;
        int hexa2 = 0Xb12d1;

        char ch = '4';
        char e = 'e';
        char num = 50;
        System.out.println(num);

        //WRAPPER CLASS
        /*
        The object that wraps its respective primitive data types
        We can easily convert between wrapper classes and their respecive primitive through
        a process called boxing/autoboxing.
        */
        Integer wrapper = new Integer(10);
        System.out.println(wrapper);
        int prim = wrapper; //unboxing

        //autoboxing
        int b = 5;
        Integer boxing = b;
        int parsed = Integer.parseInt("7");

        //static methods exist for the class and all objects
        System.out.println(Integer.MAX_VALUE); //static var
        System.out.println(Integer.compare(5, 100)); //static method
        //instance methods require object of class to be created first
        System.out.println(boxing.equals(10)); //instance method
        System.out.println(boxing.MAX_VALUE);
    }
}

class Test {

}