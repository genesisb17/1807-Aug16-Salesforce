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