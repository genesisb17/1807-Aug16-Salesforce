import java.util.LinkedList;
import java.util.List;

public class Practice {
    public static void main(String[] args) {
        A a = new A();
        B b = new B();
        C c = new C();

        System.out.println(a.getClass());
        System.out.println(b.getClass());
        System.out.println(c.getClass());

        List<A> aList = new LinkedList<A>();
        aList.add(a);
        aList.add(b);
        aList.add(c);

        for(A element : aList) {
            System.out.println(element.getClass());
        }

    }
}

class A {
    char a;
    public A() {
        this.a = 'A';
    }
}
class B extends A {
    char b;
    public B() {
        this.b = 'B';
    }
}
class C extends B {
    char c;
    public C() {
        this.c = 'C';
    }
}