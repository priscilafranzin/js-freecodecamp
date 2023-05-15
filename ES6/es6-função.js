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
  let a = 8, b = 6;
// Only change code below this line
 [a, b] = [b,a]
console.log(a,b)
{
  function removeFirstTwo(list) {
  // Only change code below this line
  const [a, b, ...shorterList] = list; // Change this line
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
}
{
  const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max, min}) => (max + min) / 2.0; 
}
//Template Literals
{
  const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    for(let i = 0; i < arr.length; i++) {
   failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);
}
{
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return { 
    name,
    age,
    gender
  };
  // Only change code above this line
};
}
{
  const bicycle = {
  gear: 2,
  setGear (newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
}
  
