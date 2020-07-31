let studentInput = document.querySelector('#studentName').value



const addStudents = ()=>{
    let template = students.map(student => `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${students.house}</h5>
      <h3 id="studentsNameCard">${students.name}</h3>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`)
  document.querySelector('#cardsSection').innerHTML = template;

}


const handleButtonClick = (e) => {
    const buttonId = e.target.id;
  
    const selectedPies = [];
  
    for (let i = 0; i < pies.length; i++) {
      if (pies[i].instructor === buttonId) {
        selectedPies.push(pies[i]);
      }
    }
  
    const bodySelector = document.querySelector("body");
    // CHANGE BG COLOR
    if (buttonId === "Abbey") {
      bodySelector.style.backgroundColor = "#e76f51";
    } else if (buttonId === "Doc") {
      bodySelector.style.backgroundColor = "#f4a261";
    } else if (buttonId === "Jacob") {
      bodySelector.style.backgroundColor = "#264653";
    } else {
      bodySelector.style.backgroundColor = "aquamarine";
    }
  
    if (buttonId === "All" || buttonId === e.currentTarget.id) {
      pieBuilder(pies);
    } else {
      pieBuilder(selectedPies);
    }
  };


  // const studentNamePush =()=>{
//     let studentInput = document.querySelector('#studentName').value
//     students.name.push(studentInput)
//     students.house.push(randomHouse)
//     return students
// }

// const houseCards = (monkeyButt) => {
//     let domString1 = "";
//             domString1 += `<div class="card" style="width: 18rem;">
//             <img src="..." class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">${students.house}</h5>
//               <h3 id="studentsNameCard">${students.name}</h3>
//               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//               <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//           </div>`;
//           printToDom("cardsSection", domString1)
//           document
//           .getElementById("sort-button")
//           .addEventListener('click', sortingForm)
//         }

const students = [{
    name: '',
    house: ''
}]

const addStudentInfo =()=>{
    let student = {
    name; document.getElementById('input').value,
    house: randomHouseReturn
    }
    students.push(student)
}
