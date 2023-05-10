{const myDog = {
    // Only change code below this line
  name: 'flokinho',
  legs: 4,
  tails: 1,
  friends: []
  
    // Only change code above this line
  };
}
// Setup
{const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  const hatValue = testObj.hat;      // Change this line
  const shirtValue = testObj.shirt;
}
{
    const testObj = {
        "an entree": "hamburger",
        "my side": "veggies",
        "the drink": "water"
      };
      
      // Only change code below this line
      const entreeValue = testObj['an entree'];   // Change this line
      const drinkValue = testObj['the drink']; 
}
{
    const testObj = {
        12: "Namath",
        16: "Montana",
        19: "Unitas"
      };
      
      // Only change code below this line
      const playerNumber = 16;  // Change this line
      const player = testObj[playerNumber];  
}
{
    const myDog = {
        "name": "Coder",
        "legs": 4,
        "tails": 1,
        "friends": ["freeCodeCamp Campers"]
      };
      myDog.name = 'Happy Coder'
}
{
    const myDog = {
      "name": "Happy Coder",
      "legs": 4,
      "tails": 1,
      "friends": ["freeCodeCamp Campers"]
    };
console.log(myDog)
myDog.bark = 'au au'
console.log(myDog)
}
{
    const myDog = {
      "name": "Happy Coder",
      "legs": 4,
      "tails": 1,
      "friends": ["freeCodeCamp Campers"],
      "bark": "woof"
};
delete myDog.tails;
console.log(myDog)
}
{
  function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  
  const lookup = {
      alpha: "Adams",
      bravo: "Boston",
      charlie: "Chicago",
      delta: "Denver",
      echo: "Easy",
      foxtrot: "Frank"

}
result = lookup[val]
  // Only change code above this line
  return result;
}

console.log(phoneticLookup("alpha"));
}
{
  function checkObj(obj, checkProp) {
    // Only change code below this line
    if(obj.hasOwnProperty(checkProp)){
      return obj[checkProp]
    } 
    return "Not Found";
    // Only change code above this line
  }
}
{
  const myMusic = [
    {
      artist: 'Daft Punk',
      title: 'Homework',
      release_year: 1997,
      formats: [
        'CD','cassete','LP'
      ]
    },
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    }
  ];
}
{
  const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  const gloveBoxContents = myStorage.car.inside['glove box'];
  console.log(gloveBoxContents)
}
{
  const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  const secondTree = myPlants[1].list[1];
  console.log(secondTree)
}
{
  // Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if(value === ''){
    delete records[id][prop]
  }
  if(prop !== 'tracks' && value !== ''){
    records[id][prop] = value
  }
  if(prop === 'tracks' && value !== ''){
   if(!records[id].hasOwnProperty(prop)){
      records[id][prop] = []

   }
      records[id][prop].push(value)

   
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
}
{
  const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line  
  
    for (let i = 0; i < contacts.length; i++ ){
      if(contacts[i].firstName ===  name) {    
        if(contacts[i].hasOwnProperty(prop)) {
          return contacts[i][prop]
        } else {
       return 'No such property'
        } 
      }   
    }
     return 'No such contact'
  
    // Only change code above this line
  }
  
  console.log(lookUpProfile("Kristian", "lastName"));
}