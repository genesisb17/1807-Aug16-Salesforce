import java.util.*;
public class UnderstandingCollections {

    /*
        In Java, a Collection is a group of individual objects represented
        as a single unit. We use them to store and organize our gruops of
        objects. Java's collection Framework is extensive and has sveral
        classes and interfaces with different properties and behaviors to
        group our entities together.
                
        Related to but not directly associated with the Collection API is
        Maps. Maps are also considered "collections" but do not
        extennd the Collection interface. They are a grouping of Key, Value pairs.

        Lists- indexed collections with not many restritions. Most common collection.
        Set - only hold unique elements
        Queues - FIFO/LIFO -- accessible like
    */
    public static void main(String[] args) {
        List<String> l = new ArrayList<String>();
        l.add("hi");
        //1.add(new Integer(5));
        //1.add(new StringBuilder("This is a StringBuilder"));

        for (int i = 0; i < l.size(); i++) {
            System.out.println(l.get(i));
        }
    }
}