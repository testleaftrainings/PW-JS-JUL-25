
export class EmployeeSignUp{

    public eName : string // if we dont give any modifier it is taken as public
    public  static eid : string
 //   public   eid : string
  //  protected readonly ephno: number
    protected ephno: number
    private eSalary:number

    constructor(){
        this.eName="Ravi"
        EmployeeSignUp.eid="eid1234"
        this.ephno=880890
        this.eSalary=23423
        console.log("This is a constructor from BaseClass");
        
    }


    printDetails(){

        console.log(`The emp details ${this.eName} : ${EmployeeSignUp.eid} : ${this.ephno}:${this.eSalary}`);

    //    console.log(`The emp details ${this.eName} : ${this.eid} : ${this.ephno}:${this.eSalary}`);
        
    }
    public get readData(){
        return this.eSalary
    }

    public set writeData(salar:number){
        this.eSalary=salar
    }
}

const emp = new EmployeeSignUp();
emp.printDetails()


let oldSal = emp.readData
console.log(oldSal);

emp.writeData=676778
console.log(emp.readData);


