class Vegetable {
    constructor(name){
      this.name = name;
    }
  }
  // Only change code above this line
  
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // Should display 'carrot'
  {
    // Only change code below this line
class Thermostat {
    constructor (fahrenheit) {
      this._temperature = fahrenheit;
    }
  get temperature(){
    return 5/9 * (this._temperature - 32)
  }
  set temperature(celsius){
    return this._temperature = celsius * 9.0 / 5 + 32
  }
  }
  // Only change code above this line
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius
  }