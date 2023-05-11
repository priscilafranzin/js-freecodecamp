{
    function checkScope() {
      var i = 'function scope';
      if (true) {
        i = 'block scope';
        console.log('Block scope i is: ', i);
      }
      console.log('Function scope i is: ', i);
      return i;
    }
  }
  {
    const s = [5, 7, 2];
  function editInPlace() {
    s[0] = 2
    s[1] = 5
    s[2] = 7
    // Only change code below this line
  
    // Using s = [2, 5, 7] would be invalid
  
    // Only change code above this line
  }
  editInPlace();
  }
  {
    function freezeObj() {
      const MATH_CONSTANTS = {
        PI: 3.14
      };
      // Only change code below this line
    Object.freeze(MATH_CONSTANTS)
    
      // Only change code above this line
      try {
        MATH_CONSTANTS.PI = 99;
      } catch(ex) {
        console.log(ex);
      }
      return MATH_CONSTANTS.PI;
    }
    const PI = freezeObj();
  }
  //arrow function
  {
    const magic = () => {
        return new Date();
      };
  }
  {
    const myConcat = (arr1, arr2) =>
   arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));
  }  
  //parametro padrão
  {
    const increment = (number, value = 1) => number + value;
  }
  {
    const sum = (...args) => {
      let total = 0;
      for (let i = 0; i < args.length; i++) {
        total += args[i];
      }
      console.log(args)
      return total;
    }
    sum(1,2,3)
  }
  {
    const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
    let arr2;

    arr2 = [...arr1];  // Change this line

  console.log(arr2);
  }
  //destruturação
  {
    const HIGH_TEMPERATURES = {
      yesterday: 75,
      today: 77,
      tomorrow: 80
    };
    
    // Only change code below this line
    
    const { today , tomorrow } = HIGH_TEMPERATURES
  }
  {
    const HIGH_TEMPERATURES = {
      yesterday: 75,
      today: 77,
      tomorrow: 80
    };
    
    // Only change code below this line
      const {today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
  }
  {
    const LOCAL_FORECAST = {
      yesterday: { low: 61, high: 75 },
      today: { low: 64, high: 77 },
      tomorrow: { low: 68, high: 80 }
    };
    
    // Only change code below this line
       const {today: { low: lowToday , high: highToday }}=LOCAL_FORECAST;
  }
  
