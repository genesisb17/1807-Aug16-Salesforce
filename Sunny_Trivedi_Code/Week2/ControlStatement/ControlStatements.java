/*Control Statements:
Loops:
-for Loops-"enhanced for" or "for-each" Loops-
while*/
public class ControlStatements {
    public static void main(String[] args) {
        int m = 1;
        for (int i=0; i<=5; i++){
            System.out.println(i);

        }    
        int iterable[] = {1,2,3,4,5};
        for (int j : iterable) {
        System.out.println(j);  
        }
        while (m>0){
            System.out.println("erere");
            m--;
        }
    }

}