{const myArray = [];
let i = 5;

while (i >= 0) {
  myArray.push(i);
  console.log(myArray)
  i--;}
}
{
    const myArray = [];
for (let i = 1; i <= 5; i++){
  myArray.push(i)
}
console.log(myArray)
}
{
    const myArray = [];
for (let i = 1; i<= 9 ;i += 2){
myArray.push(i)
}
console.log(myArray)
}
{
    const myArray = [];
for ( let i = 9; i > 0; i-= 2){
  myArray.push(i)
}
console.log(myArray)
}
{
    let x = 0
    console.log(x)
    x + 3
    console.log(x)
}
{
    const myArr = [2, 3, 4, 5, 6];
let total = 0
for ( let i = 0; i < myArr.length; i++){
  total += myArr[i]
  console.log(total)
}
}
{
  function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
for (let i = 0; i < arr.length; i++){
  for(let j = 0; j < arr[i].length; j++ ){
    product *= arr[i][j]
  }
}
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
}
{
  const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
}while (i < 10);
}
//função com elemento função
{
  function findElement(arr, func) { 

    for(let i = 0; i < arr.length; i++){  
       if(func(arr[i]) === true) {
         return arr[i]
       }     
     }
   }
   
   findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0);
}
