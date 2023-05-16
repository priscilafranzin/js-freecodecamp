<html>
  <body>
    <!-- Only change code below this line -->
    <script type='module' src='index.js'></script>
    <!-- Only change code above this line -->
  </body>
</html>
{
    export const uppercaseString = (string) => {
        return string.toUpperCase();
      }
      export const lowercaseString = (string) => {
        return string.toLowerCase()
      }
}
{
    import {uppercaseString, lowercaseString } from './string_functions.js';

    uppercaseString("hello");
    lowercaseString("WORLD!");
}
{
    import * as stringFunctions from './string_functions.js';
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
}
{
    export default function subtract(x, y) {
        return x - y;
      }
}
{
    import subtract from './math_functions.js'
subtract(7,4);
}
{
    const makeServerRequest =  new Promise((resolve, reject) =>{
    })
}
{
    const makeServerRequest = new Promise((resolve, reject) => {
        // responseFromServer represents a response from a server
        let responseFromServer;
          
        if(responseFromServer) {
         resolve('We got the data') // Change this line
        } else {  
          reject('Data not received')// Change this line
        }
      });
}
{
    const makeServerRequest = new Promise((resolve, reject) => {
        // responseFromServer is set to true to represent a successful response from a server
        let responseFromServer = true;
          
        if(responseFromServer) {
          resolve("We got the data");
        } else {  
          reject("Data not received");
        }
      }).then((result) => console.log(result));
}
