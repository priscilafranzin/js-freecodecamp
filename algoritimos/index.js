//convertendo celsius para fahrenheit
{
    function convertCtoF(celsius) {
  
        let fahrenheit = (celsius * 9/5) + 32;
        return fahrenheit;
      }
      
      convertCtoF(30);
}
//invertendo uma string
{
    function reverseString(str) {
        let splitString = str.split('');
        let reverseArr = splitString.reverse();
        let joinArr = reverseArr.join('')
        return joinArr;
      }
      
      reverseString("hello");
}
//fatorial de um numero
{
    function factorialize(num) {
        let result = 1
        for(let n = 2; n <= num; n++) {
         console.log(n, result)
          result *= n
          console.log(result)
        }
      
        return result
      }
      
      factorialize(5);
}
//encontrar a maior palavra de uma string
{
  function findLongestWordLength(str) {
 let strSplit = str.split(' ');
 let longestWord = 0;
 for(let i = 0; i < strSplit.length; i++) {
   if(strSplit[i].length > longestWord){
     longestWord = strSplit[i].length
   }
 }
  return longestWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
}
//encontrar o maior numero de um array
{
  function largestOfFour(arr) {
 const results = [];
 for(let i = 0; i < arr.length; i++){
   let largestNumber = arr[i][0];
   for(let j = 1; j < arr[i].length; j++){
     if(arr[i][j] > largestNumber){
       largestNumber = arr[i][j];
     }
   }
   results[i] = largestNumber 
 }

  return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
}
//confirmando uma string no final
{
  function confirmEnding(str, target) {

  return str.substring(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");
}
//criando uma repetição de string
{
  function repeatStringNumTimes(str, num) {
 let result = ''
 while(num > 0){
 console.log('antes', num, result)  
 result += str;
 num--
 console.log('depois', num, result)  
 } 
  
  return result;
}

repeatStringNumTimes("abc", 3);
}
//truncar uma string
{
  function truncateString(str, num) {
if(str.length > num ){
  let  textTrunc = str.substring(0, num) + '...';
  return textTrunc
} else{

  return str;
}
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
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
//boolean
{
  function booWho(bool) {
    if(typeof bool === 'boolean'){
    return true
    }
    return false
     }
    
    
    booWho(null);
}
// deixar uma string com letras maiusculas
{
  function titleCase(str) {
 let myString = ''
 let myArr = str.split(' ')
 
 for(let i = 0; i < myArr.length; i++){
   let palavra = myArr[i];
   let primeiraLetra = palavra.charAt(0).toUpperCase();
   let restante = palavra.slice(1).toLowerCase()
   myString += primeiraLetra + restante + ' '
 }
console.log(myString)
  return myString.trim();
}

titleCase("sHoRt AnD sToUt");
}
// fazer uma copia do array
{
  function frankenSplice(arr1, arr2, n) {
  let arr = [...arr2.slice(0, n), ...arr1, ...arr2.slice(0 - n)];
console.log(arr)
  return arr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
}