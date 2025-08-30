var Browser = /** @class */ (function () {
    function Browser() {
        this.browserInfo = "Chrome";
        this.browserVersion = 111;
    }
    Browser.prototype.launchBrowser = function () {
        console.log("Launching chrome");
    };
    return Browser;
}());
var leafTaps = new Browser(); // leaftaps is the object created using the constructor
console.log(leafTaps.browserInfo);
console.log(leafTaps.browserVersion);
leafTaps.launchBrowser();
