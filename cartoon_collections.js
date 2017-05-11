function dwarfRollCall(dwarves) {
var rollCall = ""
  dwarves.forEach(function (name, index) {
  var number = index +1;
rollCall = rollCall + number + ". " + name + " "
});
return rollCall
}

function summonCaptainPlanet(planeteerCalls){
var elements = []
planeteerCalls.forEach(function (element) {
  var x = element.toUpperCase() + "!"
  elements.push(x)
})
return elements
}

function longPlaneteerCalls(words) {
  var trueOrFalse = false
  words.forEach (function (word){
    if (word.length >= 4){
      trueOrFalse = true
    }
  })
  return trueOrFalse
}


function findTheCheese(foods) {
  var stringToReturn = "no cheese!"
  var cheeseList = ["cheddar", "gouda", "camembert"]
  //examine the list by going through one by one and reading each item on the list to determine if it's a cheese or not a cheese. If it is a cheese, we stop and return the cheese type. If it isn't, we keep going until we find one.
  foods.forEach(function (item){
    if (cheeseList.includes(item)) {
      stringToReturn = item
    }

  })
  return stringToReturn
}
