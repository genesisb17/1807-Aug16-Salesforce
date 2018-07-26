// for loop, foreach, while, do while, if, if else, switch

public class Control {
    public static void main(String[] args) {
        // for loop
        int[] basicArray = {0, 1, 2, 3};
        for (int i = 0; i < basicArray.length; i++) {
            System.out.print(basicArray[i] + " ");
        }
        System.out.println();
        // foreach loop
        for (int i : basicArray) {
            System.out.print(i + " " );
        }
        System.out.println();
        // while & do-while loop
        int count = 0;
        while (count <= 5) {
            System.out.print(count + " ");
            count++;
        }
        do {
            System.out.print(count + " ");
            count++;
        } while (count <= 4);

        // if & if-else
        int num = 4;
        if (num % 2 == 0) {
            System.out.println(num + " is even");
        }
        else {
            System.out.println(num + " is odd");
        }

        /*  Switch statemet -- checks equality of parameter w/ cases
            can hold int, short, byte, char & their wrapper classes
            String, enum
        */
        int n = 5;
        switch(n) {
            case 1:
                System.out.println("1");
                break;
            case 5:
                System.out.println("5");
                break;
            case 10:
                System.out.println("10");
                break;
            case 15:
                System.out.println("15");
                break;
        }

        // Fizz buzz
        public static void fizzBuzz(int n) {
            for (int i = 0; i < n; i++) {
                if (n % 3 == 0) {
                    System.out.println("fizz");
                }
                if (n % 5 == 0) {
                    System.out.println("buzz");
                }
                System.out.println(n);
            }
        }
    }
}