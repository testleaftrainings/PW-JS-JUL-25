"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webElement = void 0;
var webElement = /** @class */ (function () {
    function webElement() {
    }
    webElement.prototype.clearandType = function () {
        console.log("Hello");
    };
    webElement.prototype.browserImpl = function () {
        console.log("launch Browser");
    };
    webElement.prototype.handleWindow = function () {
        console.log("launch Browser");
    };
    webElement.prototype.typeAndEnter = function (locator) {
        console.log("login loactor ".concat(locator, " "));
    };
    return webElement;
}());
exports.webElement = webElement;
var ob = new webElement();
ob.browserImpl();
ob.clearandType();
ob.handleWindow();
ob.typeAndEnter("locatorValue");
