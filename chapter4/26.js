var collectionnumber = /** @class */ (function () {
    function collectionnumber() {
        this.data = [];
    }
    collectionnumber.prototype.push = function () {
        var _a;
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        (_a = this.data).push.apply(_a, items);
    };
    collectionnumber.prototype.shift = function () {
        return this.data.shift();
    };
    return collectionnumber;
}());
var numbercollection = new collectionnumber();
numbercollection.push(1, 2, 3, 4, 5);
console.log(numbercollection.shift());
