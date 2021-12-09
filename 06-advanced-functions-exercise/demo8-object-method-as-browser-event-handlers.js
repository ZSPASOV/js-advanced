const person = {
    name: "Peter",
    respond() {
      alert(`${this.name} says hello!`);
    }
  }
  const boundRespond = person.respond.bind(person);
  documet.getElementById('callBtn')
         .addEventListener('click', person.respond);
  documet.getElementById('callBtn')
         .addEventListener('click', boundRespond);