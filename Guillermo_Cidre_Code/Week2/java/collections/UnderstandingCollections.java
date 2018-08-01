import java.util.*; //Not the best practice
public class UnderstandingCollections{

    public static void main(String[] args) {
        List<String> l = new ArrayList<String>(); //List is abstract
        l.add("hi");
        //l.add(new Integer(5));
        //l.add(new StringBuilder("this is a stringbuilder"));

        for(int i = 0; i<l.size(); i++){
            System.out.println(l.get(i));
        }
    }
    
}