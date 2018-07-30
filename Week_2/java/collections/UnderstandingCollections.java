/*
    A collection is a group of individual objects represented as a single unit. Used to store and organize our
    groups of objects.

                                                    Collection
                                                    /    |   \
                                                  List  Set  Queue

    Related to but not directly associated with the collection API is Maps. Maps are also considered "collections",
    but do not extend collection interface. They are a grouping of key, value pairs.

    Lists - indexed collections with not many restrictions
    Set - only hold unique elements
    Queues - first in, last out
*/
import java.util.*;
public class UnderstandingCollections {

    public static void main(String[] args) {
        List<Strings> l = new ArrayList<Strings>();
        l.add("hi");

        for (int i=0; i<l.size(); i++) {
            System.out.println(l.get(i));
        }
    }

}