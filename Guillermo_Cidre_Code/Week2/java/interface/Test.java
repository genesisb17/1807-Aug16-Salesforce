//package org.gcid.inter;
public class Test{
    public static void main(String[] args) {
        A a = new A();
        a.hello();
        System.out.println(Inter.test);
        a.hi();

        B b = new B();
        b.hello();
        System.out.println(b.test);
        b.hi();
    }
}
