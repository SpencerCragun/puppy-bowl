// get api information. async, await, .json etc.
const getPuppies = async () => {
const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2409-ftb-et-web-ft/players`);
const data = await response.json();
const allPuppies = data.data.players

// create an li for each dog name
const puppyNames = allPuppies.map((puppy) => {
  return `<li>${puppy.name}</li>`
})

// grab the ul from html
const nameList = document.querySelector(`.dog-names`)
console.log(nameList)

//append li to the ul
nameList.innerHTML = puppyNames.join(``)



}

getPuppies()








// append each dog into the ul