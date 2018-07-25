public class ClassBasics {

    private String name;
    private String text;
    private int age;
    static int count;

    //Constructors//
    /* 
    Constructors are special methods used to cre3ate instances of the class. They have no retun type.
    Even if you do not explicitly write one, ALL concrete classes have a constructor. The "default" constructor AKA the one that exists implicitly if you do not create any constructor is a no-args constructor.

    Secondly, by default the first line of all constructors will be super();. You do not have to write it, but it will only be implied if you write nothing in the constructor. To call another constructor from within one in a class, you use this().
    */

    //No-Args Constructor
    public ClassBasics() {
        this("My name is Lucas");
        System.out.println("IN NO ARGS CONSTRUCTOR");
    }

    public ClassBasics(String name) {
        super(); //calling the Object class' constructor (Objects.java)
        this.name = name;
        ++count; //adding an increment can log information about how many times your constructor has been called
        System.out.println("IN NAME CONSTRUCTOR");
    }

    //getter and setter methods:

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getText() {
        return text;
    }
}