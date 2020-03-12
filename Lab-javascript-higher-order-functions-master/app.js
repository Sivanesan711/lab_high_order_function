// Function #1: Array Slice

let foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
 
let food = foods.slice(1, 4);

console.log(food);

// Function #2: Array Splice


let foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
 
foods.splice(2, 0, "noodles", "icecream");

console.log(foods);

// Function #3: Filter

let numberArray = [12,324,213,4,2,3,45,4234];

var isEven = numberArray.filter(function(num){
  return num % 2 ==0;
});

console.log(isEven);

// PRIME NUMBER

let numberArray = [12,324,213,4,2,3,45,4234];

function isPrime(num){
  if(num>2 && num%2 == 0)
    {
      return false;
    }
  else
    { 
      return num > 1;
    }
}

let prime = numberArray.filter(isPrime);

console.log(prime);

  // Function #6: Map
  let sqrnum = [11, 34, 20, 5, 53, 16];

console.log(sqrnum.map(num => num * num));


// Function #7: Reduce

let multiply = [11, 34, 20, 5, 53, 16];

console.log(multiply.reduce((acc, init) => acc * init));

