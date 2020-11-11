for (let i=0; i <5; i++) {
    console.log(i);
}

console.log("another loop \n");

let reviews: number[] = [5, 3, 2, 6, 8, 1];
let total = 0;

for (let i=0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}

let average: number = total / reviews.length;
console.log(`Average review for this one is: ${average}  \n`);

console.log("another loop \n");

let cars: string[] = ["Volkswagen", "Tesla", "Mercedes", "NIO", "BMW", "Nissan"]
for (let tempCar of cars) {
    if (tempCar == "Tesla") {
        console.log(`The first electric car sold in mass: ${tempCar}`);
    }
    console.log(tempCar);
}


