public class ClassBasics {

    private String name;
    private String text;
    static int count;

    /* CONSTRUCTORS
        Constructors are special methods used to create instances of the class.
        They have no return type.

        Even if you do not explicitly write one, ALL concrete classes have a
        constructor. The "default" constructor exists implicitly if you don't create
        any constructor, i.e. a no-args constructor.

        Secondly, by default the first line of all constructors will be super();.
        You do not have to write this, but you cannot write other code then explicitly
        writer super() after it. If you don't wannt to call the super class's constructor
        from a constructor, you can call another constructor from a constructor.
        You can call another constructor in the class. This is done with the
        this(); method call.
    */

    // No-args constructor
    public ClassBasics() {
        this("My name is Greg");
        System.out.println("IN NO ARGS CONSTRUCTOR");
    }
    public ClassBasics(String name) {
        super(); // Calls the Object class's constructor
        this.name = name;
        ++count;
        System.out.println("IN NAME CONSTRUCTOR");
    }

    public ClassBasics(String name, String text) {
        
    }

    // Getter and setter methods
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name; // This exists so you call the class's name variable rather than this particular method's
    }
    public String getText() {
        return text;
    }
    public void setText(String text) {
        this.text = text;
    }


}