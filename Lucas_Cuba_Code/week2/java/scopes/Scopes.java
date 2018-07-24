import sun.reflect.generics.scope.MethodScope;

/**
 * Scope = where our entity (variable, method, etc) is accessible and visible
 * 
 * Static/Class -- entity is shared between all instances of the class, and is accessible without an instance (id Class.entity)
 *  -- uninitalized values are given a default
 * Instance/Object -- variable is specific to/method is only accessible from a particular instance (Class i = new Class(); i.entity)
 *  --  uninitalized values are given a default
 * Method - inside of a method -- no default
 * Block - inside a control statement/block -- no default
 * 
 * default int is 0
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
     static Integer integer;

     static {
        System.out.println("DEFAULT VALUES: ");
        System.out.println(c);
        System.out.println(bool);
        System.out.println(d);
        System.out.println(byt);
        System.out.println(l);
        System.out.println(f);
        System.out.println(s);
        System.out.println(integer);
     }

     static int staticScope;

     public static void main(String[] args) {
        int methodScope = 0;
         if (true) {
             System.out.println(methodScope);
             int blockScope;
             int y;
         }
     }

     static {
         Scopes inst = new Scopes();
         System.out.println(inst.instanceScope);
         System.out.println(staticScope);
     }
     
 }

 /**
  * access modifiers
 public, protected, [default], private

 public - accessible anywhere
 protected - same package/subclasses
 [default] - package
 private - only within class
  */