public class TestClass {
    public static void main(String[] args) {
        /* ClassBasics cb = new ClassBasics();
        cb.count = 1;
        System.out.print(cb.getName());

        ClassBasics cb2 = new ClassBasics("Passed in name param");
        cb2.count = 10;

        System.out.println("CB NAME: " + cb.getname());
        System.out.println("CB NAME: " + cb2.getname());

        System.out.println(cb.count);
        System.out.println(cb2.count); */

        /*A a = new A();
        System.out.println(a.name + "\n" + a.getName());

        C c = new C();
        System.out.println(c.name + "\n" + c.getName());*/

        A poly = new C();
        System.out.println("getting property: " + poly.name);
        System.out.println(poly.getName());
        //System.out.println(poly.testing); // Not available
    }
}

class A {
    A() {
        System.out.println("IN CLASS A CONSTRUCTOR");
    }    
    String name = "A";
    String getName() {
        System.out.println("In Class A getName()");
        return this.name;
    }
}

class B extends A {
    B() {
        System.out.println("IN CLASS B CONSTRUCTOR");
    }
    String name = "B";
    String getName() {
        System.out.println("In Class B getName()");
        return this.name;
    }
}

class C extends B {
    C() {
        System.out.println("IN CLASS C CONSTRUCTOR");
    }
    String name = "C";
    String getName() {
        System.out.println("In Class C getName()");
        return this.name;
    }

    void testing() {
        System.out.println("This method exists only in C class.");
    }
}