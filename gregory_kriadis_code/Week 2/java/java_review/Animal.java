public abstract class Animal {

    public void eat() {
        System.out.println("Animal eats something");
    }

    public static void description() {
        System.out.println("Living thing");
    }

    @Override
    public String toString() {
        return "I am an Animal";
    }
}