/**
 * @author Genesis Bonds
 * 
 */
// package
// import [other packages]

// [access mod] class [className]
public class HelloWorld {

    // instance variable [access mod] [var type] [var name];
    int x;
    // static vars
    static int y;

    static {
        System.out.println("THIS IS THE STATIC BLOCK");
    }

    // METHOD SIGNATURE FOR THE MAIN METHOD IN JAVA -- AKA THE STARTING POINT OF ANY
    // NON WEB 
    //[accessMod] [nonAccessMods] [returnType] [name]([parameters])
    public static void main(String[] args){
        try{
            System.out.println("Hello World!" + args[0]);
        }
        catch(ArrayIndexOutOfBoundsException e){
            System.out.println("please enter a parameter");
            e.printStackTrace();     
        }
        System.out.println("made it to the end of the main method");
    }

    static {
        System.out.println("THIS IS AFTER THE MAIN METHOD");
    }
}