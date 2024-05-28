public class demo{
public static void main(String[] args) {
    Adder a = new Adder();
    System.out.println("Access SuperClass Name : "+a.getClass().getSuperclass().getName());
    System.out.println("Access ChildClass NAme: "+a.getClass().getName());
}
}
class Add{

}
class Adder extends Add{

}