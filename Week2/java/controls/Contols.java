public class Controls{

    public static void main(String[] args) {
        //FOR LOOP
        //for(initialize counter; set limit; increment)
        for(int i = 0; i < 10; i++){
            System.out.print(i + " ");
        }
        int count = 5;
        for(; count < 20 ;){
            count = count + 7;
            System.out.println(--count);
        }

        for(;;){
            //none are necessary. but useful to avoid infinite loops
        }

        //FOR EACH AKA ENHANCED FOR LOOPS. 
        //used to iterate over some array or collection
        for(String str : args){
            System.out.println(str);
        }
        // written as for
        for(int i = 0; i < args.length; i++){
            System.out.println(args[i]);
        }
    }
}