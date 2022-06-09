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
//abstract
//抽象类 强制子类一定拥有父类的抽象方法、抽象属性
//规范子类 无法实例化
var animation16 = /** @class */ (function () {
    function animation16() {
    }
    animation16.prototype.getPos = function () {
        return [100, 200];
    };
    return animation16;
}());
var tank16 = /** @class */ (function (_super) {
    __extends(tank16, _super);
    function tank16() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = '威震天';
        return _this;
    }
    tank16.prototype.move = function () {
        console.log('tank move');
    };
    return tank16;
}(animation16));
var player16 = /** @class */ (function (_super) {
    __extends(player16, _super);
    function player16() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'owen';
        return _this;
    }
    player16.prototype.move = function () {
        console.log('player move');
    };
    return player16;
}(animation16));
var weizhentian = new tank16();
weizhentian.move();
var owen16 = new player16();
owen16.move();
