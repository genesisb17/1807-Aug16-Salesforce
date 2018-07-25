public class TestClass{
    public static void main(String[] args) {
        /*ClassBasics cb = new ClassBasics();
        cb.count = 1;
      

        ClassBasics cb2 = new ClassBasics("Passed in name param");
        cb2.count = 10;

        System.out.println("CB NAME: " + cb.getName());
        System.out.println("CB2 NAME: " + cb2.getName());

        System.out.println(cb.count);
        System.out.println(cb2.count); */

        A poly = new C();
        System.out.println("getting property:" + poly.name);
        System.out.println(poly.getName());
        System.out.println(poly.test);
        System.out.println(poly.testing());
    }
}

class A{
    public A(){
        System.out.println("IN CLASS A CONSTRUCTOR");
    }
    String name = "A";
    String getName(){
        System.out.println("In Class A getName()");
        return this.name;
    }
}

class B extends A{
    public B(){
        System.out.println("IN CLASS B CONSTRUCTOR");
    }
    String name = "B";
    String getName(){
        System.out.println("In Class B getName()");
        return this.name;
    }
}

class C extends B{
    public C(){
        System.out.println("IN CLASS C CONSTRUCTOR");
    }
    String t = "test";
    String name = "C";
    String getName(){
        System.out.println("In Class C getName()");
        return this.name;
    }

    void testing(){
        System.out.println("this method exists only in the C class");
    }
}