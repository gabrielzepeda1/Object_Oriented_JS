using system; 

class Program { 
    public static void Main (string[] args) { 
        Console.Writeline("Hello World!")

        Program program = new Program()
        Console.Writeline(program.CountItems(30000));
        Console.Writeline(program.CountItems("Hola mundo"));

        Console.Writeline(program.Sum(10,20));
        Console.Writeline(program.Sum(10,20,30));

      var stack = new Stack<String>(); 
      var stack2 = new Stack<int>();

      var john = new Person(); 
      john.Name = "John"; 
      john.Lastname = "Ray";

      program.WriteFullName(john);

      var ryan = new Programmer
      ryan.Name = "Ryan"; 
      ryan.Lastname = "Ray"; 
      ryan.Language = "C#"

        program.WriteFullName(ryan); 
    }

    //Overloading 

    public int CountItems(int x) { 
        return x.ToString().Length;
    }

    public int CountItems(string x) { 
        return x.Length;
    }

    public int Sum(int x, int y) { 
        return Sum(x, y, 0); 
    }
    
    public int Sum(int x, int y, int z) { 
        return x + y + z; 
    }

    public void WriteFullName(Person p) { 
        Console.Writeline(p.Name + " " + p.Lastname);
    } 

}

//GENERICS 

public class Stack<T> { 
    private T[] items; 
    public void Push() { // ACCESS MODIFIERS 

    }  
}

//SUBTLE POLYMORPHISM 

public class Person { 
    public string Name {get; set; }
    public string Lastname {get; set;}
}

public class Programmer: Person { 
    public string Language {get; set;}
}