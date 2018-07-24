/**
@author Sunny T
*/
//package
//import[other [ackages]]
//[acess mod] class []classname/

public class HelloWorld {
  //instance variable [acess mod] [var type] [var name];
    //instace var
  int x;

  //static bars
  static int y;

  static {
      System.out.println("This is the static block");
  }
  //method signature for the min method in JAAVA--aka the starting 
  //non web
  //[accessMod] [nonaccessmod] [returnType] [names] [paramters]
  public static void main(String[] args) {
      try {
        System.out.println("Hello World!" + args[0]);
      }
      catch(ArrayIndexOutOfBoundsException e){
        System.out.println("please enter a paramter");
        e.printStackTrace();
      }
     System.out.println("made it tot the end of the main method");
  }
  static {
      System.out.println("This is after the main method");
  }
}