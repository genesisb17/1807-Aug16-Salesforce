public class Primitives{
/*
When a number/string/array/char/etc (bascially, any raw data) is present in code, it is called a literal.
We assign primitive data types to data in our code as t ohave some way to group it
Primitive data types are: int , long, byte, char, double, float, boolean, short
*/ 
    public static void main(String [] arguments){
        int x;//declaring int variable
        x = 15;//initializing int var
        x= 25; // reassigning x

        int y = 20; //declare and initialize in same line
        int riches = 100_00_000;
        //int test = _100_;//wrong

        double d  =10.0_0;

        long camelCase = 1900232324234234234L;
        long l = 234234234234234234l;

        //Casting - changing reference type of variable
        short s = (short) y;
        //int test = camelCase;//wrong; must explicitly cast from larger to small ref 
        // int test = l;
        long test = y;//can implicityly cast a smaller literal into a larger

        boolean $1e_2 = true;
        //int 1e = false;//wrong nums cant be first
        int _testing = 3;

        //literal values
        //base 10 aka decimal
        int dec =20;
        //binary - base 2 (010101010)
        int bin = 0B1010;//prints 10
        int bin2 = 0b101;
        System.out.println(bin);

        //octal - base 8 - 0234223
        int oct = 01176;
        System.out.println(oct);
        //int test = 09;//wrong

        //Hexadecimal-base 16- 0-9, A-F/a-f
        int hex = 0xA12d1;
        int hex2= 0xb10002;

        char ch = '4';
        char e = 'e';
        //char test = 'sfaf';
        char num = 50;
        System.out.println(num);

        //wrapper class
        /*The object that wraps its respective primitive data types We can easily convert between wrapper classes
        and their respectibve primtive through called boxing/autoboxing*/

        Integer wrapper = new Integer(10);
        System.out.println(wrapper);
        int prim = wrapper;//unboxing

        int b = 5;
        Integer boxing = b;//autoboxing
        int parse = Integer.parseInt("7");

        System.out.println(Integer.MAX_VALUE);//static var
        System.out.println(Integer.compare(5,100));//static method
        System.out.println(boxing.equals(10));//instance method
        System.out.println(boxing.MAX_VALUE);
    }
}

class Test{

}