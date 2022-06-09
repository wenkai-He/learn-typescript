var user20 = /** @class */ (function () {
    function user20(user) {
        this.info = user;
    }
    user20.prototype.get = function () {
        return this.info;
    };
    return user20;
}());
var owen20 = new user20({ name: 'owen', age: 20 });
console.log(owen20.get());
