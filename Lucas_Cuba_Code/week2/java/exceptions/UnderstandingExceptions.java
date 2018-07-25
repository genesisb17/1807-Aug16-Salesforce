public class UnderstandingExceptions {
    /**
     * An exception is a specific type of problem that can occur at runtime. Exceptions are NOT erros, but are related
     *      exception hierarchy
     * 
     * Anything that is throwable (extends Throwable) is catchable (can be caught in a try-catch block). However, you should not catch errors
     * 
     * Errors:
     *  - things that go wrong typically regarding our development environment such as a StackOverflowError or an OutOfMemoryError. Catching these do nothing, so we do not catch them. Just attempt to avoid
     * 
     * Exception
     *  - "an exceptional event that happens at runtime" Can prepare for all, but must "handle" some, others we can opt in/out. 
     *  - anything that extends directly from exception is considered a "compile0time" or "checked"
        - Examples: IOException, SQLException, FileNotFoundException
        - runtime exceptions(AKA "unchecked") do not have to be handled but should in risky code to prevent execution shutting down (crashing)
            ie. ArrayIndexOutOfBoundsException
        - keywords: try, catch, finally, thorw, throws
     */

     public static void main(String[] args) {
         
        try {
        System.out.println("Here is my first element: " + args[0]);
        }
        catch(ArrayIndexOutOfBoundsException e) {
        System.out.println("End of the main method");
        }
        finally {
            //not necessary, but happens regardless of if an exception is thrown or not
        }
     }
}