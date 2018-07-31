import java.util.List;
public class Playground {

    public static void main(String[] args) {
        // Some polymorphism
        Animal.description();
        Human.description();

        // Generics
        Animal a = new Dog();
        Animal b = new Dog();
        Animal c = new Dog();
        Human x = new Human();
        Human y = new Human();
        Human z = new Human();

        List<Animal> animals = new ArrayList<Animal>();

        animals.add(a);
        animals.add(b);
        animals.add(c);
        animals.add(x);
        animals.add(y);
        animals.add(z);

        System.out.println(animals);

        for (Animal thing : animals) {
            System.out.println(thing.toString());
        }

    }
}