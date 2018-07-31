public class Testing {
    
    public static void main(String[] args) {        
        try {
            doBadMath();
        }
        catch(ArithmeticException e) {
            System.out.println("You cannot divide by zero.");
        }
    }

    public static void doBadMath() throws ArithmeticException {
        int x = 0;
        int y = 2;
        System.out.println(7 / x);
        throw new ArithmeticException(); // This just intentionally throws an exception instead of the above code, which just will by happenstance
    }

    public static void badLoad() {
        throw new IOException();
    }

}