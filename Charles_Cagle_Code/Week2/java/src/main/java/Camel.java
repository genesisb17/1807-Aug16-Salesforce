public class Camel {
  public static String titleCase(String s) {
    return s.isEmpty() ? s : (s.substring(0, 1).toUpperCase() + s.substring(1).toLowerCase());
  }

  public static String titleCamelCase(String str) {
    String out = "";
    for (String s : str.split("\\s"))
      out += titleCase(s);
    return out;
  }

  public static void main(String [] args) {
    for (String s : args)
      System.out.println(titleCamelCase(s));
  }
}
