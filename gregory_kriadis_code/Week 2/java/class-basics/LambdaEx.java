import java.util.function.Predicate;
import java.util.*;
public class LambdaEx {
    public static void main (String[] args) {
        int x = add(2, 3, 7, 8, 9); // This uses the overloaded add method with varargs at the bottom
        Addition add = new Addition();
        System.out.println(add.calculate(2, 3));

        Calculable sub = (a, b) -> { // Lambda expression!
            return a - b; // Instead of making a Subtraction class, we use -> to do it quickly here if only using once
        };

        ArrayList<String> words = new ArrayList<String>();
        words.add("hello");
        words.add("greetings");
        words.add("salutations");
        // missed the print code, oh well
        words.stream().filter(word -> word.length() > 7);

        Predicate<Integer> test = (a) -> a > 10;
        System.out.println(test.test(11));
    }

    static int add(int a, int b) {
        return a + b;
    }

    // varargs- must be the last parameter taken in from your method
    static int add(int... nums) {
        int sum = 0;
        for (int n : nums) {
            sum += n;
        }
        return sum;
    }
}

interface Calculable {
    public double calculate(double a, double b);
}
class Addition implements Calculable {
    public double calculate(double a, double b) {
        return a * b;
    }
}