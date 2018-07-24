import java.util.ArrayList;

import com.sun.org.apache.bcel.internal.generic.INSTANCEOF;

//primitives file example
/**
 * @author Brandon Cassidy
 * 
 */
//package
//import other packages


public class Primitives{
    /* 
    number|direct string|array|char (raw data) in code called a literal
    assign primitive types to have a way to group it
    primitive types are int, long, short, float, double, byte char, bool
    */
    public static void main(String[] args) {
        
        int integ=15;
        
        double d = 10.0_0;

        long camelCase = 19019009876938L;
        long l= 1234098521034l;

    //casting 1 ref type to another: big to small may be truncated;
    //small to large casts implicitly
        short s = (short) integ;
        int test= (int) camelCase;

        System.out.print("\007");
        System.out.flush();
        boolean $1e_2 = true;
        // int 1e =5; WRONG; number may not begin a var name
        int _testing = 3;

        int dec=10;

        int bin=0b1010;
        System.out.println(bin);

    //WRAPPER CLASS
    /* the object that wraps its respecitve primitive data types.
    It is easy to convert wrappers to their primitives through a process called boxing.
    */
        Integer wrap = new Integer(10);
        System.out.println(wrap);
        int prim = wrap; //unboxing
        int b = 5;
        int boxing = b;//autoboxing
        System.out.println( wrap instanceof Integer);
    }
}