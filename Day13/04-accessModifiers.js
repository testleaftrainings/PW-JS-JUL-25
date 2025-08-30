"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeSignUp = void 0;
var EmployeeSignUp = /** @class */ (function () {
    function EmployeeSignUp() {
        this.eName = "Ravi";
        this.eid = "eid1234";
        this.ephno = 880890;
        this.eSalary = 23423;
        console.log("This is a constructor from BaseClass");
    }
    EmployeeSignUp.prototype.printDetails = function () {
        console.log("The emp details ".concat(this.eName, " : ").concat(this.eid, " : ").concat(this.ephno, ":").concat(this.eSalary));
    };
    Object.defineProperty(EmployeeSignUp.prototype, "readData", {
        get: function () {
            return this.eSalary;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmployeeSignUp.prototype, "writeData", {
        set: function (salar) {
            this.eSalary = salar;
        },
        enumerable: false,
        configurable: true
    });
    return EmployeeSignUp;
}());
exports.EmployeeSignUp = EmployeeSignUp;
var emp = new EmployeeSignUp();
emp.printDetails();
var oldSal = emp.readData;
console.log(oldSal);
emp.writeData = 676778;
console.log(emp.readData);
