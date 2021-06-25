
const roastedBeef = 16.90;
const wienerSchnitzel = 22.60;
const nougatSemolina = 10.00;
const josefWein = 35.00;

const marinatedChant = 14.60;
const crownLamb = 26.90;
const apricotDumplings = 7.50;
const beer = 5.60;

const smallDumplings = 13.60;
const schoulderScherzel = 24.90;
const lemonProsecco = 8.50;
const josefBrut = 39.00;


function calculatedInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice) {
    var sum = starterPrice + maindishPrice + dessertPrice + beveragePrice;
    return sum;
}

console.log(calculatedInvoice(roastedBeef,wienerSchnitzel,nougatSemolina,josefWein) + " Example 1");

console.log(calculatedInvoice(marinatedChant, crownLamb, apricotDumplings, beer)+ " Example 2");

console.log(calculatedInvoice(smallDumplings,schoulderScherzel,lemonProsecco,josefBrut)+ " Example 3")


function stundetInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice) {
   
    var foodCost = starterPrice + maindishPrice + dessertPrice;
    var discountSum = foodCost - (foodCost * .10);
    var sum = discountSum + beveragePrice;
    return sum;
}

console.log(stundetInvoice(roastedBeef,wienerSchnitzel,nougatSemolina,josefWein)+ " Discounted Dishes, NOT Beverages Example 1");

console.log(stundetInvoice(marinatedChant,crownLamb,apricotDumplings,beer)+ " Discounted Dishes, NOT Beverages Example 2");

console.log(stundetInvoice(smallDumplings,schoulderScherzel,lemonProsecco,josefBrut)+ " Discounted Dishes, NOT Beverages Example 3")

