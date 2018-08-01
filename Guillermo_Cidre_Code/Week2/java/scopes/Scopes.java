/*
--uninitialized vars have default value except in methods
*/


public class Scopes{
    int instanceScope=5;
    static char c;
    static boolean bool;
    static double d;
    static byte byt;
    static long l;
    static float f;
    static short s;
    static Integer integer;

    static {
        System.out.println("DEFAULT VALUE:");
        System.out.println("char " + c);
        System.out.println("bool " + bool);
        System.out.println("double " + d);
        System.out.println("byte " + byt);
        System.out.println("long " + l);
        System.out.println("float " + f);
        System.out.println("short " + s);
        System.out.println("Objects " + integer);
    }

    static int staticScope=10;

    public static void main(String[] args){
        int methodScope = 20;

        if(staticScope > 10){
            int blockScope;
        }
    }

    static {
        Scopes inst = new Scopes();
        System.out.println(inst.instanceScope);
        //System.out.println(this.instanceScope); wrong 'this' is not valid
        System.out.println(staticScope);
    }
}