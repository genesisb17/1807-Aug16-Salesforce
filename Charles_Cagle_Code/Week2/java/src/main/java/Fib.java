import java.math.BigInteger;

public class Fib {
  public static void fib(long n) {
    BigInteger a = BigInteger.ZERO;
    BigInteger b = BigInteger.ONE;
    while (n-- > 0) {
      final BigInteger next = a.add(b);
      a = b;
      b = next;
      System.out.printf(n > 0 ? "%s," : "%s\n", a);
    }
  }

  public static void main(String [] args) {
    for (String s : args)
      fib(Integer.parseInt(s));
  }
}
