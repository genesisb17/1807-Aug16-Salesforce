public class Human extends Animal implements Carnivore, Herbivore {
    public void eat() {
        System.out.println("Eats with a fork and plate");
    }

    public void philosophize() {
        System.out.println("Think deeply");
    }

    @Override
    public String toString() {
        return "I am a Human";
    }

    

}