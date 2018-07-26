import java.io.IOException;
public class UnderstandingExceptions {
    /*  An Exception is a specific type of problem that can occur at runtime.
        Exceptions are not errors, but are related.
                Throwable(Abstract Class)
                    /               \
                Error           Exception
                                     \
                                Runtime Exception
        * Anything that is throwable (extends Throwable) is catchable (can be
        caugh in a try-catch block). However, you should not** catch Errors.

        * Errors:
        - Things that go wrong typically regarding our development environment
        such as StackOverflowError or an OutOfMemoryError. Catching these would
        do nothing,, so we do not catch them. Just attempt to avoid, though it
        is possible to catch them, technically speaking.

        * Exception
        - "An exceptional event that happens at runtime"; meaning something that
        goes wrog during execution of cde. We can prepare for all of these, however
        we must "handle" some, others we can opt to handle.
        - Anything that extends directly from Exception is cosidered a "compile-time"
        or "checked" exception.
            Examples: IOException, SQLException, FileNotFoundException
        - Runtime exceptions (AKA "Unchecked" exceptions) do not hve to be handled, but 
        should in risky code in order to avoid execution shutting down mid-app. 
            Examples: ArrayIndexOutOfBoundsException, NullPointerException, ArithmeticException

        * Exception Handling
            - Keywords: try, catch, finally, throw, throws
    */

    public static void main(String[] args) {
        try {
            //System.out.println("Here is my first element: " + args[0]);
            throw new MyException();
        } catch (MyException e) {
            // Provide backup for risky code
            e.printStackTrace();
            System.out.println("catching" + e.getClass());
        } catch (Exception e) {
            System.out.println("catching Exception e");
        } finally {
            // Not necessary, but happens regardless of if an exception is thrown or not
        }
        System.out.println("END OF MAIN METHOD");
    }
    /*  Second way to handle exception is to propagate it or throw it up to the method
        that calls the method w/ risky behavior and allows it to handle the exception */
    public void riskyBusiness() throws IOException {
        throw new IOException();
    }
}