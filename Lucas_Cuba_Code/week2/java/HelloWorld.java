/**
 * @author Lucas Cuba
 * Java docs
 */

 //package
 //import other packages

//[access modifier] class [className]
public class HelloWorld {

    //instance variables
    int x;
    //static variable
    static int y;

    static {
        System.out.println("THIS IS THE STATIC BLOCK");
    }

    //Main method signature -- aka the starting point of execution of any non-web app
    //[accessMod] [nonaccessmod] [returntype] [name] ([parameters]) {}
    //class structure: [accessmode] [nonaccessmod] class [class name (same as file name)]
    //variables: [accessmod] [N.A.M] [ref types] [varname]
    //constructor: [accessmod] [classname] ([vals to populate instance var w/])
    public static void main(String[] args) {
        //try/catch blocks
        try {
            System.out.println("Hello World" + args[0]);
        }
        catch(ArrayIndexOutOfBoundsException e) {
            System.out.println("please enter a parameter");
            e.printStackTrace();
        }
        System.out.println("made it to the end of the main method");
    }

    static {
        System.out.println("THIS IS AFTER THE MAIN METHOD");
    }
} 

/* 
Strings

special in java. Object, have memory space called the string pool in the object heap.

string hi =  "hi";
string hello = "hi"; 

hi == hello is true because references are the same in memory

when constructing from String in String x = new String("hi") it moves it out of the string pool as an object. when assigned back to primitive type, the object out in memory is garbage collected
*/