interface testimpl{
    public abstract void m1();
}

class Test implements testimpl{
    
    public void m1(){
        System.out.println("visual studio code IDE java 8");
    }

    public static void main(String[] args){
        Test t = new Test();
        t.m1();

    }
}