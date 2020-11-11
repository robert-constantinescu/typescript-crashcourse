class CustomerParameterProperties {

    constructor(private _firstName: string, private _lastName: string) {
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }
}

let myCustomerParam = new CustomerParameterProperties("Obama", "Barack");

console.log(myCustomerParam.firstName);
console.log(myCustomerParam.lastName);

myCustomerParam.firstName = "Biden";
myCustomerParam.lastName = "Joe";

console.log(myCustomerParam.firstName);
console.log(myCustomerParam.lastName);
