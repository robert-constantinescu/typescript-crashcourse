import {CustomerModule} from "./CustomerModule";

let myCustomerParam = new CustomerModule("Obama", "Barack");

console.log(myCustomerParam.firstName);
console.log(myCustomerParam.lastName);

myCustomerParam.firstName = "Biden";
myCustomerParam.lastName = "Joe";

console.log(myCustomerParam.firstName);
console.log(myCustomerParam.lastName);
