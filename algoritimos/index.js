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