'use strict';

// THIS IS THE FIRST BUTTON CLICK
const letsStartSorting = () => {
  document
    .getElementById("sortingHatButton")
    .addEventListener("click", sortingForm);
};
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};
// THIS PRINTS THE INPUT BOX
const sortingForm = () => {
  let domString = `<form id="student-card">
                        <h2>Enter First Year's Name:</h2>
                        <div class="form-inline">
                            <div class="col-auto">
                                <label class="sr-only" for="inlineFormInput">Name</label>
                                <input type="text" class="form-control mb-2" id="FormInput" placeholder="Harry Potter" required>
                            </div>
                            <div class="col-auto id="sort-buttondiv">
                                <button type="submit" class="btn btn-primary mb-2 id="sort-button">Sort!</button>
                            </div>
                        </div>
                    </form>`
  printToDom("nameForm", domString);
  buttonEvents();
};

// THIS CAPTURES THE STUDENT INPUT
let studentInput = [];


const getStudentName = () => {
  const name = document.querySelector("#FormInput").value;
  let studentObject = { studentName: name, house: randomizer() }
  studentInput.push(studentObject);


houseCards();
    
};

// THIS HOLDS BUTTON EVENTS
const buttonEvents = () => {
//   document.querySelector("#student-card").addEventListener("click", reset);
  document.querySelector("#sort-button").addEventListener("click", getStudentName);
//   document.querySelector("#sort-button").addEventListener("click", houseCards);
};





// THIS SPITS OUT A RANDOM HOUSE
const randomizer = () => {
  const houseArray = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
  let randomHouse = houseArray[Math.floor(Math.random() * houseArray.length)];
  return randomHouse;
};

// THIS PRINTS THE CARDS
const houseCards = () => {
  let domString = '';
  for (let i = 0; i < studentInput.length; i++){
    if(studentInput[i].studentName){
      domString += `<div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                    <h2 class="card-title">${studentNameToInput[i].house}</h2>
                    <h3 id="studentsNameCard>${studentNameToInput[i].studentName}</h3>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    </div>`;
                };
            }
    printToDom("cardSection", domString);
}
const reset = () => {
  document.querySelector("#student-card").reset();
  
};

const init = () => {
  letsStartSorting();
};
init();
