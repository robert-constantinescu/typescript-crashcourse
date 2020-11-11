for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log("another loop \n");
var reviews = [5, 3, 2, 6, 8, 1];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log("Average review for this one is: " + average + "  \n");
console.log("another loop \n");
var cars = ["Volkswagen", "Tesla", "Mercedes", "NIO", "BMW", "Nissan"];
for (var _i = 0, cars_1 = cars; _i < cars_1.length; _i++) {
    var tempCar = cars_1[_i];
    if (tempCar == "Tesla") {
        console.log("The first electric car sold in mass: " + tempCar);
    }
    console.log(tempCar);
}
