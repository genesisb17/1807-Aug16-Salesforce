public class TestClass {
    public static void main(String[] args) {
        /*ClassBasics cb = new ClassBasics();
        cb.count = 1;
        System.out.println(cb.getName());

        ClassBasics cb2 = new ClassBasics("Passed in name param");
        cb2.count = 10;

        System.out.println("CB Name: " + cb.getName());
        System.out.println("CB2 Name: " + cb2.getName());

        System.out.println(cb.count);
        System.out.println(cb2.count);*/

        A poly = new C();
        System.out.println("getting property: " + poly.name);
        System.out.println(poly.getName());
        
    }
}

class A {
    public A() {
        System.out.println("IN CLASS A CONSTRUCTOR");
    }
    String name = "A";
    String getName() {
        System.out.println("In Class A getName()");
        return this.name;
    }
}

class B extends A {
    public B() {
        System.out.println("IN CLASS B CONSTRUCTOR");
    }
    String name = "B";
    String getName() {
        System.out.println("In Class B getName()");
        return this.name;
    }
}

class C extends B {
    public C() {
        System.out.println("IN CLASS C CONSTRUCTOR");
    }
    String name = "C";
    String t = "Test";
    String getName() {
        System.out.println("In Class C getName()");
        return this.name;
    }

    void testing() {
        System.out.println("this method exists only in the C class");
    }
}

/**
 * OOP Pillars/principle
 * 
 * Abstraction - hidding implementation details
 *  -> "abstract" methods, classes, and interfaces. Promise behavior to be expanded upon in subclasses/methods/implementations
 * Polymorphism - the ability of an object to behave in different manners
 *  -> method overloading, method overriding, "covariant" data types. Instances of classes with references to their parent classes. behavior from subclasses implemented on state of both subclass and superclass
 * Inheritance - Sharing state and behavior between classes
 *  -> extends, implements
 * Encapsulation - concealing internal state of objects and requiring all interaction with state occur with methods
 *  -> private instance variables, public constructors/getters(access)/setters(mutate)
 */