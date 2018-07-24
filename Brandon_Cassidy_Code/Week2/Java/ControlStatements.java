import java.util.ArrayList;
//for
//enhanced for / foreach
//while
//do while
//if
//if else
//switch
public class ControlStatements {
    public static void main(String[] args) {
        
        ArrayList<Integer> stuff = new ArrayList<Integer>(5);
        for (int i = 0; i < 5; i++) {
            stuff.add(i);
        }
        
        for (int meh : stuff) {
            System.out.println(meh);
        }
        int thing = 10;
        while (thing<11) {
            //do some stuff
            System.out.println(thing);
            thing++;
        }
        thing=10;
        do {
            System.out.println(thing);
            thing++;
        } while (thing<11);
        boolean ifTest=true;
        if (ifTest) {
            System.out.println("if true");
        }
        ifTest=false;
        if (ifTest) {
            //if true
        } else {
            System.out.println("if false goes to else");
        }
        int x=15;
        switch (x) {
            case 15:
                System.out.println("if false goes to else");
                //fallthrough
            case 12:
                System.out.println("if false goes to else");
                break;
                //no fallthrough
            default:
                break;
        }
    }//main
}//controlstatements