import java.util.Deque;

public class HelloWorld {
    //Method signature for main method in java
    public static void main(String[] args) {
        String str = "camel case was a fun exercise";
        int x = 5;
        System.out.println(CamelCase(str));
        System.out.println(fibn(x));
        x = 0;
        System.out.println(fibn(x));
        x = 6;
        System.out.println(fibn(x));
        x = 7;
        System.out.println(fibn(x));
        x = 1;
        System.out.println(fibn(x));
        x = 20;
        System.out.println(fibn(x));
    

    }
    private static String fibn(int n) {
        /* Declare an array to store Fibonacci numbers. */
        int f[] = new int[n+2]; // 1 extra to handle case, n = 0
        int i;
        String result = "0, 1";
        /* 0th and 1st number of the series are 0 and 1*/
        f[0] = 0;
        f[1] = 1;
        if(n == 0) {
            result = "0";
        }
        
        /* 0th and 1st number of the series are 0 and 1*/
        f[0] = 0;
        f[1] = 1;
        
        for (i = 2; i <= n; i++)
        {
        /* Add the previous 2 numbers in the series
            and store it */
            f[i] = f[i-1] + f[i-2];
            result = result + ", " + f[i];
        }
        return result;
    }
    private static String CamelCase(String string) {
        String[] strArr = string.split(" ");
        String result = "";
        for (String str : strArr) {
            str = str.substring(0, 1).toUpperCase() + str.substring(1);
            result = result + " " + str;
        }
        result = result.trim();
        return result;
    }
}