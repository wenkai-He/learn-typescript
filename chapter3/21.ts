//接口模拟支付
interface payinterface {
    handle(price: number): void
}

class Alipay implements payinterface {
    public handle(price: number): void {
        console.log(`alipay${price}$`);

    }
}

class Wxpay implements payinterface {
    public handle(price: number): void {
        console.log(`wxpay${price}$`);

    }
}

function pay(type: string, price: number) {
    let pay: payinterface
    switch (type) {
        case "Alipay":
            pay = new Alipay()
            pay.handle(price)
            break;
        case 'Wxpay':
            pay = new Wxpay()
            pay.handle(price)
    }
}