"use strict";

// THIS IS ASSIGNING THE FIRST BUTTON CLICK
const letsStartSorting = () => {
  document.querySelector("#sortButton").addEventListener("click", sortingForm);
};
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};
// THIS PRINTS THE INPUT BOX WHEN THE FIRST BUTTON IS CLICKED
const sortingForm = (e) => {
  e.preventDefault();
  let buttonId = e.target.id;
  if (buttonId === "sortButton") {
    let domString = `<form id="student-card">
                        <h2>Enter First Year's Name:</h2>
                        <div class="form-inline">
                            <div class="col-auto">
                                <label class="sr-only" for="inlineFormInput">Name</label>
                                <input type="text" class="form-control mb-2" onClick="this.form.reset()" onfocus="this.value=''" id="formInput" placeholder="Harry Potter" required>
                            </div>
                            <div class="col-auto id="sort-buttondiv">
                                <button type="reset" class="btn btn-primary mb-2" id="sort-button">Sort!</button>
                            </div>
                        </div>
                    </form>`;
    printToDom("#nameForm", domString);
    buttonEvents();
  }
};

// THIS CAPTURES THE STUDENT INPUT
let studentInput = [];

// THIS SAYS THAT WHEN THE SORT BUTTON IS CLICKED, FIRE THIS FUNCTION
const getStudentName = (e) => {
  let buttonId = e.target.id;
  if (buttonId === "sort-button") {
    const name = document.querySelector("#formInput").value;
    let studentObject = { studentName: name, house: randomizer() };
    studentInput.push(studentObject);
  }
};

// THIS HOLDS BUTTON EVENTS
const buttonEvents = () => {
  // these assign the event to th sort button
  let el = document.querySelector("#nameForm");
  el.addEventListener("click", getStudentName);
  el.addEventListener("click", houseCards);
  let formCheck = document.querySelector('#sort-button');
  formCheck.addEventListener('click', emptyForm)
};

// helpful message for an empty form
const emptyForm = () => {
  let uname = document.getElementById('formInput').value;
      if (uname === ''){
          alert("Put 'yer name in the hat!");
          return false; 
      }
      return true;
  };

// THIS SPITS OUT A RANDOM HOUSE
const randomizer = () => {
  const houseArray = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
  let randomHouse = houseArray[Math.floor(Math.random() * houseArray.length)];
  return randomHouse;
};

// THIS PRINTS THE CARDS
const houseCards = (e) => {
  let domString = "";
  for (let i = 0; i < studentInput.length; i++) {
    if (studentInput[i].studentName) {
      domString += `<div class="card" style="width: 18rem;">
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

// This tells the computer to execute this function when the target is clicking the expel button
const expelStudent = (e) => {
  let buttonId = e.target.id;

  if (buttonId === "expel") {
    studentInput.splice(e.target, 1);
    houseCards();
  }
};

const init = () => {
  letsStartSorting();
};
init();
