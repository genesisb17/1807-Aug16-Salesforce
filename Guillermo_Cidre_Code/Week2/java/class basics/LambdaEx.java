import java.util.ArrayList;
import java.util.function.Predicate;

import jdk.nashorn.internal.runtime.arrays.ArrayLikeIterator;
public class LambdaEx{
    public static void main(String[] args) {
        int x = add(2,3,7,8,9);
        Addition add = new Addition();
        System.out.println(add.calculate(5, 6));

        //lambda.... also in Predicate
        Calculable sub = (a,b) -> {
            return a-b;
        };

        //String[] words = {"hello", "aaaaajlkhil", "oooooo"};

        ArrayList<String> words = new ArrayList<String>();

        words.add("hello");
        words.add("ajsdajfdaj");
        words.add("Hallelujah");
        for(String w : words){System.out.println(w + ",");}
        System.out.println();

        words.stream().filter(word -> word.length()>3);

        for(String w : words){System.out.println(w + ",");}
        System.out.println();

        Predicate<Integer> test = (a) -> a>10;
        System.out.println(test.test(11));
    }

    static int add(int a, int b){
        return a+b;
    }

    //varargs. must be last parameter taken in from your method.
    static int add(int... nums){
        int sum = 0;
        for(int n : nums){
            sum += n;
        }
        return sum;
    }
}

interface Calculable{
    public double calculate(double a, double b);
}

class Addition implements Calculable{
    public double calculate(double a, double b){
        return a + b;
    }
}