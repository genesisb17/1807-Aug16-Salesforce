/*
    Scope = where our entity (variable, method, etc.) is accessible and visible
    
    Static/Class -- entity is shared between all instances of the class, and is
        accessible without an instance (ie Class.entity)
        -- uninitialized vars are given default values
    Instance/Object -- variable is specific to/method is only accessible
        from a particular instance (Class i = new Class(); i.entity)
    Method -- inside of a method
    Block scope -- inside a control statement/block
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
        System.out.println("DEFAULT VALUES:");
        System.out.println("char: " + c);
        System.out.println("boolean: " + bool);
        System.out.println("double: " + d);
        System.out.println("byte: " + byt);
        System.out.println("long : " + l);
        System.out.println("float" + f);
        System.out.println("short: " + s);
        System.out.pritln("Objects: " + integer);
    }

    static int staticScope;
    
    public static void main(String[] args) {
        int methodScope;
        int x;

        if (staticScope) {
            System.out.println(methodScope);
            int blockSpace;
            int y;
        }
    }
    static {
        Scopes inst = new Scopes();
        System.out.println(inst.instanceScope);
        //System.out.println(this.instanceScope); // WRONG - can't access this keyword here
        System.out.println(staticScope);
    }
    
}