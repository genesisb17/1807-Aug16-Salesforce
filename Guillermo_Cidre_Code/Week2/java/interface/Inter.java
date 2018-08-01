public interface Inter{
    public int test = 50; //valid!!!!! But it is treated as static
    /* Not valid
    public void hello() {
        System.out.println("Hello");
    }
    */
    public void hi(); //no need for abstract
    default public void hello() {
        System.out.println("Hello");
    }

}