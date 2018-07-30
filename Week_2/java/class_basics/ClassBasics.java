public class ClassBasics{

    private String name;
    private String text;
    private int age;
    static int count = 0;


    /////////////////CONSTRUCTORS///////////////////////////////
    /* Constructors are special methods used to create instances
    of the class. They have no return type. 
    Even if you do not explicitly write one, ALL concrete classes
    have a constructor. The "default" constructor (the one that)
    exists implicitly if you do not create any constructor is a
    no-args constructor. 
    Secondly, by default the first line of all constructors will
    be super();. you do not have to write this, but you cannot 
    write other code then explicitly write super() after it.
    If you do not want to call the super class's constructor from
    a constructor, you can call another constructor in the class
    this is done with the this(); method call.
    */

    //No-Args Constructor
    public ClassBasics(){
      this("My name is Genesis");
      System.out.println("IN NO ARGS CONSTRUCTOR");
    }

    public ClassBasics(String name){
        this.name = name;
        ++count;
        System.out.println("IN NAME CONSTRUCTOR");
    }

    public ClassBasics(String name, int age, String text){
        
    }

    //GETTER AND SETTER METHODS:
    public void setName(String name){
        this.name = name;
    }
    public String getName(){
        return name;
    }
    public void setText(String text){
        this.text = text;
    }
    public String getText(){
        return text;
    }


}