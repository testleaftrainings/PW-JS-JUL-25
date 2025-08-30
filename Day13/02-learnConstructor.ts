// class Employee{

//     public empName : string // global in nature it is public accessmodifiers
//     public empId : string

//     printDetails(Tname:string,Tid:string){
//         this.empName=Tname
//         this.empId=Tid

//      //   let empNameLocal = "Local Emp"
//         console.log(`Employee details ${this.empName}  : ${this.empId}`);
//      //    console.log(`Employee details ${empNameLocal}  : ${this.empId}`);
        
//     }

//     payroll(){
//         console.log("emp payroll process");
//     }

//     empDetails(emid:string){ // emid --> local variable available onlt for this block
//         console.log(`The id of the emmployee ${emid}`);   

//     }

//     constructor(){
//         console.log("This is a default constructor");
        
//     }

  
// }

// const emp = new Employee()// constructor is a special method were the class name is same as the method name
// emp.printDetails("Ravi","emp1234");
// emp.printDetails("Hari","emp4567");

// emp.payroll()
// emp.empDetails("emp789")

/* Note :

Hierachy of execution of methods:
1. constructor()
2. Normal method/ property

constructor is a special method that get executed before all the notmal methods*/

class Login{

    page : string // global property //1st -->pg1234 , 2nd --> pf7894

    loadUrl(applnName:string){ //global method
        console.log(`page is loaded with ${applnName} url : ${this.page}`);       

    }

    constructor(lpage:string, applnName : string){
        this.page = lpage // pg1234
        console.log("Using the pagr reference from constructor:"+this.page);
        this.loadUrl(applnName)
    }
}

const lf = new Login("pg1234","Leaftaps") // first parameterized constructor
//lf.loadUrl("LeafTaps")

const sf = new Login("pg7894","Salesforce")// second parameterized constructor
sf.loadUrl("Salesforce")