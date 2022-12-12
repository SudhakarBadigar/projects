@Function interface;
interface testimpl2{
     public abstract void m1();
}

class lambdaexp implements testimpl2{
    public static void main (String[] args){
        lambdaexp t2 = () -> {
            System.out.println("Lambda expression");
        };
        t2.m1();

    }
}