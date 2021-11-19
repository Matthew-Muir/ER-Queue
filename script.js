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
    this.queue[patient.priority - 1].push(patient);
  }

  dequeue() {
    let patientAtFrontOfLine;

    for (let i = 4; i >= 0; i--) {
      if (this.queue[i].length > 0) {
        patientAtFrontOfLine = this.queue[i].shift();
        return patientAtFrontOfLine;
      }
    }
    return "Queue Empty";
  }

  outPatientList() {
    console.log(this.queue.flat());
  }
}

const enqueue = new ERQueue();




function submitButtonClicked() {
  //link to HTML form elements
  const htmlElement = document.getElementById("data");
  const firstNameField = document.getElementById("fname");
  const lastNameField = document.getElementById("lname");
  const priority = document.getElementById("priority");

  //Validation check that form is fully filled out
  if (firstNameField.value == '' || lastNameField.value == '') {
    htmlElement.innerHTML = "Please Fill Out All Fields";
  }

  //form is filled out
  else {
    //create patient and add to que
    const newPatient = new Patient(firstNameField.value, lastNameField.value, priority.value);
    enqueue.enqueue(newPatient);

    //output text to window for user to know patient added
    let innerHTML = `Added Priorty(${priority.value}) Patient: ${firstNameField.value} ${lastNameField.value}`;
    htmlElement.outerHTML = `<h4>${innerHTML}</h4>`;


    //clear form fields
    firstNameField.value = '';
    lastNameField.value = '';
    priority.value = 1;
  }


}