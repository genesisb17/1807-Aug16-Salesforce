public class Controls {

    public static void main(String[] args) {
        // FOR LOOP
        // for(initialize counter; set limit; increment)
        for (int i = 0; i < 10; i++) {
            System.out.print(i + " ");
        }
        int count = 5;
        for (; count < 20;) {
            count = count + 7;
            System.out.println(--count);
        }
        /*
         * for(;;){ //none are necessary. but useful to avoid infinite loops }
         */
        // FOR EACH AKA ENHANCED FOR LOOPS.
        // used to iterate over some array or collection
        for (String str : args) {
            System.out.println(str);
        }
        // written as for
        for (int i = 0; i < args.length; i++) {
            System.out.println(args[i]);
        }

        count = 15;
        // WHILE LOOPS
        while (count > 0) {
            System.out.print(count-- + ", ");
        }

        /*
         * DO WHILE LOOP While loop that executes at least once(does operation, THEN
         * checks condition). Must have a semicolon at end of while
         */
        do {
            System.out.println("in while");
        } while (count > 20);

        if (count == 20) {
            System.out.println("count is 20");
        }

        if (count == 15) {
            System.out.println("count is 15");
        } else if (count < 15) {
            System.out.println("count is 15");
        } else if (count == 1000) {
            System.out.println("count is 1000");
        } else {
            System.out.println("else");
        }

        /* SWITCH STATEMENT -- checks equality of parameter w cases
            can hold int, short, byte, char & their wrapper classes
            String, enum
        */
        switch (count) {
        case 1:
            System.out.println("1");
        case 5:
            System.out.println("5");
            break;
        case 10:
            System.out.println("10");
            break;
        case 15:
            System.out.println("15");
            break;
        default:
            System.out.println("default");

        }

    }

}