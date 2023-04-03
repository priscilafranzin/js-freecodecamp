{
    function reusableFunction(string) {
        console.log(string);
      }
      reusableFunction('Hi World')
}
{
    function functionWithArgs(num1, num2){
        console.log(num1 + num2)
      }
      functionWithArgs(1 , 2)
}
{
    function timesFive(num) {
        return num * 5
      }
}
{
    let myGlobal = 10

function fun1() {
  // Assign 5 to oopsGlobal here
 oopsGlobal = 5 // errado , não usar sem a variavel
}
}
{
    function myLocalScope() {
        // Only change code below this line
      let myVar = 10
        console.log('inside myLocalScope', myVar);
      }
      myLocalScope();
}
{
    const outerWear = "T-Shirt";

    function myOutfit() {
  // Only change code below this line
    let outerWear = 'sweater'
  // Only change code above this line
    return outerWear;
}

    myOutfit();
}
{
    // Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5
}

// Only change code above this line

addThree();
addFive();
}
{
    let processed = 0;

    function processArg(num) {
    return (num + 3) / 5;
}

// Only change code below this line
    console.log(processed)
    processed = processArg(7)
    console.log(processed)
}
{
  function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item)
    
    const elementoRemovido = arr.shift()
    return elementoRemovido ;
    // Only change code above this line
  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));
}
{
  function welcomeToBooleans() {
    // Only change code below this line
  
    return true; // Change this line
}
}
{
  function trueOrFalse(wasThatTrue) {
    // Only change code below this line
  if (wasThatTrue) {
    return 'Yes, that was true'
  
  }
  return 'No, that was false'
  //não pode ter dois return no mesmo escopo
}
}
{
  // Setup
function testEqual(val) {
  if (val== 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
}
{
  function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);
}
{
  function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");
}
{
  function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);
}
{
  function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);
}
{
  function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
  
    if (val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);
}
{
  function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
      return "20 or Over";
    }
  
    if (val >= 10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);
}
{
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
}
{
  function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= 24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);
}
{
  function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val <= 50 && val >= 25) {
      
        return "Yes";
    }
    return "No";
    }
  
    // Only change code above this line
  
  
  testLogicalAnd(10);
}
{
  function testLogicalOr(val) {
    // Only change code below this line
  
    if (val > 20 || val < 10) {
      return "Outside";
    }
  
    return "Inside";
   
  
    // Only change code above this line
  }
  
  testLogicalOr(15);
}