/**
 * @author Guillermo Cidre
 * 
 */
//package
//import [other packages]

//package org.gcidre1.hello;

//[access mod] class [className]
public class HelloWorld{

    //instance variables
    int x;
    //static vars
    static int y;

    static {
        System.out.println("This is a static block");
    }

    //METHOD SIGNATURE FOR MAIN METHOD IN JAVA --AKA THE STARTING OF ANY WEB APP
    //[access mod] [nonaccess mod] [return type] functionName
    public static void main(String [] args){
        try{
        System.out.println("Hello World!" + args[0]);
        }
        catch(ArrayIndexOutOfBoundsException e){
            System.out.println("Please enter a parameter!");
            //e.printStackTrace();
        }
        System.out.println("We made it.");
    }

    static {
        System.out.println("After Main method");
    }

}