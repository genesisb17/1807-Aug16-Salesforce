/*
    An exception is a specific type of problem that can occur at runtime.
    Exceptions are NOT errors, but are related
                                    Throwable (Abstract)
                                        /       \
                                    Error       Exception
                                                /     \
                                        compile-time  RuntimeException
    
    Anything that is throwable (extends Throwable) is catchable. HOWEVER, you should not** catch Errors.

    Errors:
        -Things that go wrong typically regarding our development environment such as StackOverflowError
        or an OutOfMemoryError. Catching these would do nothing.

    Exceptions:
        -"An exceptional event that happens at runtime": meaning something that goes wrong during the
        execution of your code. We can prepare for all of these, however we MUST "handle" some, others
        we can opt to handle
        -Can randomly catch RunTimeException.
        -Anything that extends directly from Exception is considered a "compile-time" or "checked"
        exception. Meaning it must be handled for our code to compile. However it still OCCURS or is
        "thrown" at runtime.
        EX: IOException, SQLException, FileNotFoundException
        -Runtime/"unchecked" exceptions do not have to be handled, but should in risky code in order to 
        avoid execution shutting down mid app.
        EX: ArrayIndexOutOfBoundsException, NullPointerException, ArithmeticException

    Exception handling:
        -Keywords: try, catch, finally, throw, throws
    */

import java.io.IOException;

public class UnderstandingExceptions {

    public static void main(String[] args) {    
        try {
            //risky code here
            //System.out.println(args[0]);
            throw new MyException();
        }
        catch(MyException e) {
            //provide backup for risky code
            e.printStackTrace();
            System.out.println("catching " + e.getClass());
            //throw new ArrayIndexOutOfBoundsException();
        }
        catch(Exception e) {
            System.out.println(e.getMessage());
            System.out.println("catching exception e");
        }
        finally {
            //not necessary, but happens regardless if an exception is thrown or not
        }
        System.out.println("END OF MAIN METHOD");
    }

    //second way to handle an exception is to propagate it up to the method that calls the method
    //with risky behavior and allow it to handle the exception
    public void riskyStuff() throws IOException {
        throw new IOException();
    }

}