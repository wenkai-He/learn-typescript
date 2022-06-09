//get set
var user15 = /** @class */ (function () {
    function user15(name) {
        this.name = name;
    }
    user15.prototype.get = function () {
        return this.name;
    };
    user15.prototype.set = function (Name) {
        this.name = Name;
    };
    return user15;
}());
var owen15 = new user15('owen');
owen15.set('he');
console.log(owen15.get());
