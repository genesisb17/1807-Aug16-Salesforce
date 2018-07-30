public class LambdaEx {

    public static void main(String[] args) {
        int x = add(2,3,7,8,9);

        Addition add = new Addition();
        System.out.println(add.calculate(2,3));

        //lambdaEx right here
        Calculable sub = (a, b) -> {
            return a-b;
        };

        //String[] words = {"hello", "asdf"};
        ArrayList<String> words = new ArrayList<Strings>();
        words.add("hello");
        words.add("asdf");

        for (String w : words) {
            System.out.print(w + ",");
        }

        Predicate<Integer> test = (a) -> a > 10;
        System.out.println(test.test(11));
    }

    static int add(int a, int b) {
        return a + b;
    }

    //varargs. must be the last parameter taken in from your method.
    static int add(int... nums) { //... means create array
        int sum = 0;
        for (int n : nums) {
            sum = sum+n;
        }
        return sum;
    }

}

//can only use lambdas with interfaces that have one abs method (funcitonal interfaces)
interface Calculable {
    public double calculate(double a, double b) {

    }

    class Addition implements Calculable {
        public double calculate(double a, double b) {
            return a + b;
        }
    }

}