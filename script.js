class Patient {
  constructor(firstName, lastName, priority) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.priority = priority;
  }
}

class ERQueue {
  queue = [[], [], [], [], []]; //an array for each priority of patient 1-5

  enqueue(patient) {
    this.queue[patient.priority - 1].unshift(patient);
  }

  dequeue() {
    let patientAtFrontOfLine;

    for (let i = 4; i >= 0; i--) {
      if (this.queue[i].length > 0) {
        patientAtFrontOfLine = this.queue[i].pop();
        return patientAtFrontOfLine;
      }
    }
    return -1;
  }

}

const queue = new ERQueue();


function submitButtonClicked() {
  //link to HTML form elements
  const htmlElement = document.getElementById("data");
  const firstNameField = document.getElementById("fname");
  const lastNameField = document.getElementById("lname");
  const priority = document.getElementById("priority");

  //Validation check that form is fully filled out
  if (firstNameField.value == '' || lastNameField.value == '') {
    htmlElement.outerHTML = `<h4 id="data">Please Fill in all Fields</h4>`;
  }

  //form is filled out
  else {
    //create patient and add to queue
    const newPatient = new Patient(firstNameField.value, lastNameField.value, priority.value);
    queue.enqueue(newPatient);

    //output text to window for user to know patient added
    let innerHTML = `Added Priorty(${priority.value}) Patient: ${firstNameField.value} ${lastNameField.value}`;
    htmlElement.outerHTML = `<h4 id="data">${innerHTML}</h4>`;


    //clear form fields
    firstNameField.value = '';
    lastNameField.value = '';
    priority.value = 1;
  }
}

//returns ordered list of patients in que
function listAllPatientsClicked() {

  let patientArray = queue.queue.flat().reverse();
  const htmlElement = document.getElementById("data");

  if (patientArray.length == 0) {
    htmlElement.innerHTML = "Queue is empty";
  }
  else {
    let listData = "";

    patientArray.forEach(element => {
      listData += `<li>${element.firstName} ${element.lastName} P${element.priority}</li>`;
    });

    //assign css class based on number of patients

    if (patientArray.length > 15) {
      htmlElement.outerHTML = "<ol class=\"twentyPlusItems\" id=\"data\">" + listData + "</ol>";
    }
    else {
      htmlElement.outerHTML = "<ol id=\"data\">" + listData + "</ol>";
    }

  }
}

//generate dummy data. Can only be clicked once.
let flag = false;
function dummyDataClicked() {


  if (!flag) {
    const dummyData = [];
    dummyData.push(new Patient("Cowboy", "Woody", 5));
    dummyData.push(new Patient("Buzz", "Lightyear", 5));
    dummyData.push(new Patient("Mr. Potato", "Head", 4));
    dummyData.push(new Patient("T", "Rex", 4));
    dummyData.push(new Patient("Slinky", "Dog", 4));
    dummyData.push(new Patient("Hamm", "Pig", 4));
    dummyData.push(new Patient("Cowgirl", "Jessie", 4));
    dummyData.push(new Patient("Ol'", "Bullseye", 3));
    dummyData.push(new Patient("Mrs. Potato", "Head", 3));
    dummyData.push(new Patient("Bo", "Peep", 3));
    dummyData.push(new Patient("Kid", "Andy", 3));
    dummyData.push(new Patient("Little", "Alien", 2));
    dummyData.push(new Patient("Lots", "O", 2));
    dummyData.push(new Patient("Kid", "Bonnie", 2));
    dummyData.push(new Patient("Forky", "Toy", 2));
    dummyData.push(new Patient("Barbie", "Doll", 1));
    dummyData.push(new Patient("Big", "Al", 1));
    dummyData.push(new Patient("Giggle", "McDimples", 1));
    dummyData.push(new Patient("Big", "Baby", 1));
    dummyData.push(new Patient("Ducky", "Bunny", 1));
    dummyData.push(new Patient("Andys", "Mom", 1));
    dummyData.push(new Patient("Emperor", "Zerg", 1));
    dummyData.push(new Patient("Wheezy", "Penguin", 1));
    dummyData.push(new Patient("G.I.", "Joe", 1));
    dummyData.push(new Patient("Kid", "Sid", 1));
    dummyData.push(new Patient("R.C.", "Car", 1));

    dummyData.forEach(element => {
      queue.enqueue(element);
    });

    flag = true;
  }
}

//remove next patient in Queue from queue and print their info to screen.
function processNextPatientClicked() {
  const htmlElement = document.getElementById("data");
  const patient = queue.dequeue();

  if (patient == -1) {
    htmlElement.innerHTML = "Queue is empty"
  }
  else {
    let innerHTML = `Now Processing Patient: ${patient.firstName} ${patient.lastName} P${patient.priority}`;
    htmlElement.outerHTML = `<h4 id="data">${innerHTML}</h4>`;

  }

}