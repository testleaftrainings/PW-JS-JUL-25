import { EmployeeSignUp } from "./04-accessModifiers";
import { FakerData } from "./faker_static";


class HR extends EmployeeSignUp{

    empUpdate(){
        this.ephno=9889898 // you can rewrite the phonr number or print thr number
      console.log(this.ephno); 
      console.log(FakerData.getFirstName());
      
    }

}

let emp = new HR()
emp.empUpdate()

/* Notes:
1. Whenever the create an object of HR class,
 automatically the constructor of EmployeeSignUp (Base class) gets executed first, before any child class method run

 constructor(){
        this.eName="Ravi"
        this.eid="eid1234"
        this.ephno=880890
        this.eSalary=23423
        console.log("This is a constructor from BaseClass");
    
        is executed once you call HR(), even though you never explicitly called it.

All your base class methods got executed :

1. you explcitly created an object of EmployeeSignUp in the base file (04-accessModifier.ts)

When import that file in 05-accessModifierPro.ts, that object runs automatically, and executes printDetails()

Later when you created a HR object, parent constructor also gets executed.
    } */