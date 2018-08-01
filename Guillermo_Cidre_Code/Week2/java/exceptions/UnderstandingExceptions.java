import java.io.IOException;
class UnderstandingExceptions {
    public static void main(String[] args) {
        try {
            throw new MyException();
            
        } catch (MyException e) {
            e.printStackTrace();
            System.out.println("Error Caught");
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // Not neccessary
        }

        System.out.println("END OF MAIN METHOD");
    }

    public static void riskyBusiness() throws IOException{
        throw new IOException();
    }
}