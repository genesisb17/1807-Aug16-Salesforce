public class FizzBuzz {
  public static void fb(int n) {
    for (int i = 1; i <= n; ++i) {
      String s = "";
      if (i % 3 == 0)
        s += "Fizz";
      if (i % 5 == 0)
        s += "Buzz";
      if (s.isEmpty())
        s += i;
      System.out.println(s);
    }
  }

  public static void main(String [] args) {
    for (String s : args)
      fb(Integer.parseInt(s));
  }
}
