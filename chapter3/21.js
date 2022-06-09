var Alipay = /** @class */ (function () {
    function Alipay() {
    }
    Alipay.prototype.handle = function (price) {
        console.log("alipay".concat(price, "$"));
    };
    return Alipay;
}());
var Wxpay = /** @class */ (function () {
    function Wxpay() {
    }
    Wxpay.prototype.handle = function (price) {
        console.log("wxpay".concat(price, "$"));
    };
    return Wxpay;
}());
function pay(type, price) {
    var pay;
    switch (type) {
        case "Alipay":
            pay = new Alipay();
            pay.handle(price);
            break;
        case 'Wxpay':
            pay = new Wxpay();
            pay.handle(price);
    }
}
