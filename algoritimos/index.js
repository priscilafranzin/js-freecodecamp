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