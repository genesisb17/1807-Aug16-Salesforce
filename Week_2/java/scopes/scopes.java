/*
Scope = where our entity (variable, method) is accessible and visible

Static/Class -- entity is shared between all instances of the class, and is
    accessible without an instance (ie Class.entity)
    --uninitialized vars are given default value
Instance/Object -- entity is specific to/method is only accessible from a
    particular instance (Class i = new Class(); i.entity)
    --uninitialized vars are given default value
Method - inside of a method
    --no default vals
Block Scope - inside a control statement/block
    --no default vals
*/

public class scopes {
    int instanceScope;
    static int i;
    static char c;
    static boolean bool;
    static double d;
    static byte b;
    static long l;
    static float f;
    static short s;
    static Integer integer;

    static {
        System.out.println("integer " + i);
        System.out.println("char " + c);
        System.out.println("boolean " + bool);
        System.out.println("double " + d);
        System.out.println("byte " + b);
        System.out.println("long " + l);
        System.out.println("float " + f);
        System.out.println("short " + s);
        System.out.println("objects " + integer);
    }

    static int staticScope;

    public static void main(String[] args) {
        int methodScope = 0;
        int x;

        if(true) {
            System.out.println(methodScope);
            int blockScope;
            int y;
        }
    }

    static{
        scopes inst = new scopes();
        System.out.println(inst.instanceScope);
        System.out.println(staticScope);
    }
}