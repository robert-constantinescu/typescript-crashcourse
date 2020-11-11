var CustomerPrivate = /** @class */ (function () {
    function Customer(first, last) {
        this._firstName = first;
        this._lastName = last;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("Obama", "Barack");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
myCustomer.firstName = "Biden";
myCustomer.lastName = "Joe";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
