const main = document.querySelector(`main`)
// get api information. async, await, .json etc.
const getPuppies = async () => {
const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2409-ftb-et-web-ft/players`);
const data = await response.json();
const allPuppies = data.data.players;
console.log(allPuppies)

// create an li for each dog name
const puppyNames = allPuppies.map((puppy) => {
  return `<li data-id="${puppy.id}">${puppy.name}</li>`
});

// grab the ul from html
const ul = document.createElement(`ul`)
main.append(ul)

//append li to the ul
ul.innerHTML = puppyNames.join(``);
}

//set the render and getPuppies function call to an async so that it doesn't run before the api fetching

const renderAllPuppies = async () => {
  await getPuppies();
  

//to make clickable names, grab the li's or buttons
  const Lis = document.querySelectorAll(`li`);
  
// add event listener to each dog name
  Lis.forEach((puppyLi) => {
    puppyLi.addEventListener(`click`, async (event) => {
      const puppyId = event.target.getAttribute(`data-id`);
      
      // use ID to call the api.
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2409-ftb-et-web-ft/players/${puppyId}`);
      const dogData = await response.json();
      console.log(dogData)
      // adjust the main to show specified dog, and image
      main.innerHTML = `
        <h2>${dogData.data.player.name}</h2>
        <img src=${dogData.data.player.imageUrl}>
      `
    })
  })
}

renderAllPuppies();











// append each dog into the ul