public class TestClass{
    public static void main(String[] args) {
        /*ClassBasics cb = new ClassBasics();
        cb.count = 1;

        ClassBasics cb2 = new ClassBasics("Passed in name param");
        cb2.count = 10;

        System.out.println("CB NAME: " + cb.getName());
        System.out.println("CB2 NAME: " + cb2.getName());

        System.out.println("CB COUNT: " + cb.count);
        System.out.println("CB2 COUNT: " + cb2.count);
        */
        A poly = new C();
        System.out.println("Getting property: " + poly.name);
        System.out.println(poly.getName());
        //System.out.println(poly.test); //not valid
        //System.out.println(poly.testing); //not valid
    }
}

//polymorphism A poly = new C();
//use overriden behaviour of C

class A{
    A(){
        System.out.println("IN CLASS A CONSTRUCTOR");
    }
    String name  = "A";
    String getName() {
        System.out.println("In Class A getName()");
        return this.name;
    }
}

class B extends A{
    B(){
        System.out.println("IN CLASS B CONSTRUCTOR");
    }
    String name = "B";
    String getName() {
        System.out.println("In Class B getName()");
        return this.name;
    }
}

class C extends B{
    C(){
        System.out.println("IN CLASS C CONSTRUCTOR");
    }
    String test = "test";
    void testing(){
        System.out.println("Testing in C");
    }
    String name = "C";
    String getName() {
        System.out.println("In Class C getName()");
        return this.name;
    }
}