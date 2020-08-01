# The Sorting Hat
This was a small group project to show our use of bootstrap and event listeners

### Motivation
This was great practice on how callback functions and it taught me when to assign event listeners and when to call functions, instead of just having everything run right when the page loads.

### Build Status
Complete. Just adjusting the styling 

### Screenshot
![Screen Shot 2020-08-01 at 2 19 16 PM](https://user-images.githubusercontent.com/66916708/89108887-14ab1180-d402-11ea-9f8a-95d1ccd2c6ee.png)

### Features 
Uses event listeners to assign functions to certain buttons and pulls data the user puts into a form, assigns the user a random house from hogwarts and prints it to the screen

### Code Example
```const randomizer = () => {
  const houseArray = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
  let randomHouse = houseArray[Math.floor(Math.random() * houseArray.length)];
  return randomHouse;
};

// THIS PRINTS THE CARDS
const houseCards = (e) => {
  let domString = "";
  for (let i = 0; i < studentInput.length; i++) {
    if (studentInput[i].studentName) {
      domString += `<div class="card ${studentInput[i].house}" style="width: 18rem;">
                    <img src="images/${studentInput[i].house}.png" class="card-img-top" alt="Hogwarts House">
                    <div class="card-body">
                    <h2 class="card-title">${studentInput[i].house}</h2>
                    <h3 id="studentsNameCard">${studentInput[i].studentName}</h3>
                    <div>
                    <button id="expel"> EXPEL! </button>
                    </div>
                    </div>
                    </div>`;
    }
  }
  printToDom("#cardSection", domString);
  // this assigns an event listener to the expel button
  document
    .querySelector("#cardSection")
    .addEventListener("click", expelStudent);
};
```
### Website Link
https://sortinghatcl.netlify.app
