

//1st problem: kilometerToMeter
function kilometerToMeter(kilometer){
        var meter = kilometer * 1000;
        return meter;

}

var firstKilometer = kilometerToMeter(210);
console.log(firstKilometer);


//2nd problem:budgetCalculator
function budgetCalculator(watch, mobile, laptop){
    var result = watch + mobile + laptop;
    return result;
}

var sum = budgetCalculator (12000, 35000, 60000);
console.log(sum);


//3rd problem: hotelCost
var days = 45; 
var hotelCost = 0; 
if (days <= 10){
    hotelCost = days * 100;
} else if (days <= 11){
    var firstCost = 10 * 100;
    var remaining = days - 10;
    var secondCost = remaining * 80;
    hotalCost = firstCost + secondCost;
} else {
    var firstCost = 10*100;
    var secondCost = 10*80;
    var remaining = days - 20;
    var thirdCost = remaining *50;
    hotelCost = firstCost + secondCost + thirdCost;
}
console.log(hotelCost);




// 4th problem: megaFriend

var megaFriend = "nahid kolim poltadanga dalim jamil shajhahan hedayetullah";

var megaFriend = megaFriend.split(" ").sort(function(a, b) {return b.length - a.length}) [0];
console.log(megaFriend);
    