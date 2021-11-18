class Patient {
  constructor(firstName, lastName, priority) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.priority = priority;
  }
}

class ERQueue {
  queue = [[],[],[],[],[]]; //an array for each priority of patient 1-5

  enqueue(patient) {
    this.queue[patient.priority - 1].push(patient);
  }

  dequeue() {
    
  }

}

function clicked() {
  const htmlElement = document.getElementById("data");
  counter++;
  htmlElement.innerHTML = counter;
}