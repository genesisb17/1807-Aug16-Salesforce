/**
 * @author Brandon Cassidy
 * 
 */
//package
//import other packages

//accessmod class classname{}
public class helloworld{

        //instance variable:  accessmod vartype varname;
        int x;
        //static vars
        static int y;
        //static block runs before main always; must be inside a class and not a method
        static{
            System.out.println("STATIC BLOCKS HEHE");
        }
        //method sig for main in java; starting point 

        public static void main(String[] args){
            try{System.out.println("Hello World " + args[0]);
        }//try
            catch(ArrayIndexOutOfBoundsException ex){
                ex.printStackTrace();
                System.out.println("please enter a parameter");
            }//catch
            System.out.println("made it to end of main");
        }//main
        static{
            System.out.println("POST MAIN HEHE");
        }
}