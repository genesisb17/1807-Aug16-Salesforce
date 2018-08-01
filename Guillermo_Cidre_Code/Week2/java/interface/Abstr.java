public abstract class Abstr{
    public int test = 50; //valid!!!!! And it is an instance
    /* Not valid
    public void hello() {
        System.out.println("Hello");
    }
    */
    public abstract void hi(); //need abstract keyword
    public void hello() {
        System.out.println("Hello");
    }
}