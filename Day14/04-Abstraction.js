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
var ElementWrapper = /** @class */ (function () {
    function ElementWrapper() {
    }
    //Not allowed to create an object
    ElementWrapper.prototype.typeAndTab = function () {
        console.log("Type in the data and tab");
    };
    return ElementWrapper;
}());
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Login.prototype.takeScreenshot = function () {
        console.log("screenshot for each test");
    };
    Login.prototype.clearandType = function () {
        console.log("Hello");
    };
    Login.prototype.browserImpl = function () {
        console.log("launch Browser");
    };
    Login.prototype.handleWindow = function () {
        console.log("launch Browser");
    };
    return Login;
}(ElementWrapper));
var login = new Login();
login.typeAndTab();
login.takeScreenshot();
login.browserImpl();
login.clearandType();
login.handleWindow();
