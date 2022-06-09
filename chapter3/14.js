//单例
var axios14 = /** @class */ (function () {
    function axios14() {
        console.log('私有构造函数');
    }
    axios14.make = function () {
        if (axios14.instance === null) {
            axios14.instance = new axios14();
        }
        return axios14.instance;
    };
    axios14.instance = null;
    return axios14;
}());
var instance1 = axios14.make();
var instance2 = axios14.make();
var instance3 = axios14.make();
var instance4 = axios14.make();
