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
{
  function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);
}
{
  function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

 else if (val < 5) {
    return "Smaller than 5";
  }
else{
  return "Between 5 and 10";
}
}


testElseIf(7);
}
{
  function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
}
{
  function testSize(num) {
  // Only change code below this line
if (num < 5) {
  return 'Tiny'
}
 else if (num < 10) {
   return 'Small'
 }
 else if ( num < 15) {
return 'Medium'
 }
 else if (num < 20) {
   return 'Large'
 }
 else if ( num >= 20) {
   return 'Huge'
 }

  return "Change Me";
}
}
{
  const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if ( strokes === 1) {
    return names[0]
  } else if ( strokes <= par -2) {
    return names[1]
  } else if (strokes === par -1) {
    return names[2]
  } else if (strokes === par) {
    return names[3]
  } else if (strokes === par +1) {
    return names[4]
  } else if (strokes === par +2) {
    return names[5]
  } else if (strokes >= par +3) {
    return names[6]
  }

  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);
}
{
  function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case 1 :
    answer = 'alpha'
    break;
  case 2 :
    answer = 'beta'
    break;
  case 3 : 
    answer = 'gamma'
    break;
  case 4 :
    answer = 'delta'
    break ;
}


  // Only change code above this line
  return answer;
}

caseInSwitch(1);
}
{
  function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case 'a' :
    answer = 'apple';
    break;
  case 'b' :
    answer = 'bird';
    break;
  case 'c' :
    answer = 'cat';
    break;
  default:
    answer = 'stuff'
}
{
  function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case 1:
  case 2:
  case 3:
    answer = 'Low';
    break;
  case 4:
  case 5:
  case 6:
    answer = 'Mid'
    break;
  case 7:
  case 8:
  case 9:
    answer = 'High'
    break;
}


  // Only change code above this line
  return answer;
}

sequentialSizes(1);
}


  // Only change code above this line
  return answer;
}

switchOfStuff(1);
}
{
  function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case 'bob':
    answer = 'Marley';
    break;
  case 42:
    answer = 'The Answer';
    break;
  case 1:
    answer = "There is no #1";
    break;
  case 99:
    answer = "Missed me by this much!";
    break;
  case 7:
    answer = 'Ate Nine';
    break;

}
 
 
  // Only change code above this line
  return answer;
}

chainToSwitch(7);
}
{
  function isLess(a, b) {
  // Only change code below this line
  return a < b;
  
  // Only change code above this line
}

isLess(10, 15);
}
{
  // Setup
function abTest(a, b) {
  // Only change code below this line

if (a < 0 || b < 0 ) {
  return undefined
}

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
}
{
  //contagem atual
let count = 0;

function cc(card) {
  // Only change code below this line
  
// condicionais card
if ( card >= 2 && card <= 6) {
  count += 1
} 
if (card === 10) {
count -= 1
}
if ( card === 'J'){
  count -= 1
}
if ( card === 'Q'){
  count -= 1
}
if ( card === 'K'){
  count -= 1
}
if ( card === 'A'){
  count -= 1
}

if ( count > 0 ){
  return count +  ' ' + 'Bet'
}



  return count + ' ' + "Hold";
  // Only change code above this line
}

console.log(cc(2)); cc(3); cc(8); cc('K'); cc('A');
}