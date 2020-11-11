class CustomerPublic {
    firstName: string;
    lastName: string;

    constructor(first: string, last: string) {
        this.firstName = first;
        this.lastName = last;
    }
}

let myCustomer = new CustomerPublic("Obama", "Barack");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

myCustomer.firstName = "Biden";
myCustomer.lastName = "Joe";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
