/* Control Statements
Loops:

for loop
"enhanced for" OR "for-each" loop
while
do while

Statements:

if
if else
switch
*/

public class ControlStatements {

    public static void main(String[] args) {

        int[] arr = new int[]{1,2,3,4,5,6,7,8};
        int counter = 0;
        int count = 0;
        int a = 5;
        int b = 6;
        int d = 7;

        for (int c=0; c < arr.length; c++) {
            System.out.println(arr[c]);
        }

        for (int element : arr) {
            System.out.println("Element: " + element);
        }

        while (counter < arr.length) {
            System.out.println("while loop -> " + arr[counter]);
            counter++;
        }

        do {
            System.out.println("Do while: done first in do block -> " + arr[count]);
            count++;
        } while (count < arr.length);

        if (a > b) {
            //first evals to true
        } else if (b > d) {
            //else if true
        } else { 
            //else if false
        }

        switch {
    
        }
    }    
}   