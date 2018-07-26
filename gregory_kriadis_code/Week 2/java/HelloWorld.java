/**
 * @author Greg Kriadis
 */
// package
// import [other packages]

// [access mod] class [className]
public class HelloWorld {

    // instance variable [access mod] [var type] [var name];
    int x;
    // static variable
    static int y;

    static {
        System.out.println("This is the static block.");
    }
    
    // METHOD SIGNATURE FOR MAIN METHOD IN JAVA - STARTING POINT OF ANY NON-WEB APP
    // [accessMod] [nonAccessMod] [returnType] [name]([parameters])
    public static void main(String[] args) {
        try {
            System.out.println("Hello World!" + args[0]);
        }
        catch(ArrayIndexOutOfBoundsException e) {
            System.out.println("Please enter a parameter");
            e.printStackTrace();
        }
        System.out.println("Made it to the end of the main method");
    }

    static {
        System.out.println("This is after the main method.");
    }

}