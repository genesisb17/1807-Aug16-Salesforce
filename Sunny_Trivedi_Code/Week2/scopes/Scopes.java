/*
Scope = where out entitiy (variable,method,etc) is accessible and visible

static /class -- entity i s shared between all instances of the class, and is accessible without an instance of the class,
and is accessible without an instance (ie class.entity)
Instance /object --variable is specific to/method is only accessible from a particular instance(class i = new Class(); i.entity)
Method - inside of a method
vblock scope - inside a control staemnet/block -- no default vals
 */

public class Scopes {
    int instanceScope;
  static char c;
  static boolean bool;
  static double d;
  static byte byt;
  static long l;
  static float f;
  static short s;

    static{
        System.out.println("DEFAULT VLAUES: ");
        System.out.println("char " + c);
        System.out.println("boolean " + bool);
        System.out.println("double " + d);
        System.out.println("byte " + byt);
        System.out.println("long " + l);
        System.out.println("flaot " + f);
        System.out.println("objects " + s);
    }
    static int staticScope;

    public static void main(String[] args){
        int methodScope = 0;

        if(true){
            System.out.println(methodScope);
            int blockScope;
        }
    }
    static{
        Scopes inst = new Scopes();
        System.out.println(inst.instanceScope);
        System.out.println(staticScope);    
    } 
}