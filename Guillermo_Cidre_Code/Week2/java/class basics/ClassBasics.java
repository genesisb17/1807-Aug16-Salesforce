public class ClassBasics{
    private String name;
    private String text;
    static int count;
    public int age;


    //Constructors 

    //No-Args Constructor
    public ClassBasics(){
        this("My name is Guillermo");
        System.out.println("IN NO ARGS CONSTRUCTOR");
    }

    public ClassBasics(String name){
        //super(); not neccessary will assume so
        System.out.println("IN NAME CONSTRUCTOR");
        this.name = name;
    }

    public void setName(String name){
        this.name = name;
    }

    public String getName(){
        return name;
    }

}