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