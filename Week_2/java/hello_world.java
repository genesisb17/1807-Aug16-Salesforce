/**
 *@author Steven He
 *
 */

 //package
 //import (other packages)

 //[access mod] class [className]
 public class hello_world{

    //instance var [access mod] [var type] [var name];
    int x;
    //static vars
    static int y;

    static {
        System.out.println("This is the static block.");
    }

    //METHOD SIGNATURE FOR MAIN METHOD IN JAVA, STARTING POINT OF ANY NON-WEB APP
    //only one public main method
    //[accessMod] [nonAccessMod] [returnType] [name([parameters])
    public static void main(String[] args) {
        //check for faults within code
        try{
        System.out.println("Hello World!" + args[0]);
        }
        //attempt to fix faults
        catch(ArrayIndexOutOfBoundsException e) {
            System.out.println("Please enter a parameter:");
            e.printStackTrace();
        }
        System.out.println("made it to the end of the main method.");
    }

    static {
        System.out.println("This is after the main method.");
    }

 }