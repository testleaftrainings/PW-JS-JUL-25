var ElementActions = /** @class */ (function () {
    function ElementActions() {
    }
    //Single imnplemnetation
    ElementActions.prototype.click = function (element, forceClick) {
        if (forceClick) {
            console.log("Forcibly clicking the element ".concat(element));
        }
        else {
            console.log("Clicking the element ".concat(element, " normally"));
        }
    };
    return ElementActions;
}());
var actions = new ElementActions();
//actions.click(`#Login`);
actions.click("#Login", true);
