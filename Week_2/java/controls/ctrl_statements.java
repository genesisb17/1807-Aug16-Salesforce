/*
LOOPS
    for loops
    "enchanced for" OR "for-each" loop
    while
    do while

STATEMENTS
    if
    if else
    switch
*/

public class ctrl_statements {
    public static void main (String[] args) {
        //for
        for (int i=0; i<10; i++) {
            System.out.println(i + " ");
        }

        //foreach
        for (String str : args) {
            System.out.println(str);
        }

        while (int a<3) {
            System.out.println(a);
            a++;
        }

        //do while is while loop that executes at least once
        int b = 0;
        do {
            System.out.println(b);
            b++;
        }
        while (b<0);

        if(b == 0) {
            System.out.println("b is zero whoop whoop");
        }
        else if (b<0) {
            System.out.println("b less than zero");
        }
        else {
            System.out.println("else");
        }

        //switch checks equality of parameter with cases
        /*
        can hold int, short, byte, char & their wrapper classes
        can hold string, enum
        */
        switch(b) {
        case 1:
            System.out.println("1");
            break;
        case 0:
            System.out.println("0");
            break;
        case 10:
            System.out.println("10");
            break;
        default:
            System.out.println("default");
        }
    }
}