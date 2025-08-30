"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _04_accessModifiers_1 = require("./04-accessModifiers");
var HR = /** @class */ (function (_super) {
    __extends(HR, _super);
    function HR() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HR.prototype.empUpdate = function () {
        this.ephno = 9889898; // you can rewrite the phonr number or print thr number
        console.log(this.ephno);
    };
    return HR;
}(_04_accessModifiers_1.EmployeeSignUp));
var emp = new HR();
emp.empUpdate();
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
