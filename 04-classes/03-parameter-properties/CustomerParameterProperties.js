"use strict";
var CustomerParameterProperties = /** @class */ (function () {
    function CustomerParameterProperties(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(CustomerParameterProperties.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerParameterProperties.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerParameterProperties;
}());
var myCustomerParam = new CustomerParameterProperties("Obama", "Barack");
console.log(myCustomerParam.firstName);
console.log(myCustomerParam.lastName);
myCustomerParam.firstName = "Biden";
myCustomerParam.lastName = "Joe";
console.log(myCustomerParam.firstName);
console.log(myCustomerParam.lastName);
