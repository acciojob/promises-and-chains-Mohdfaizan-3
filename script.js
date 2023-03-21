const form = document.querySelector("form");
form.addEventListener("submit", processForm);

function processForm(e) {
  e.preventDefault();
  const age = document.getElementById("age").value;
  const name = document.getElementById("name").value;
  console.log(name, age);
  // Validate inputs
  if (age === "" || name === "") {
    alert("Please fill in all fields");
    return;
  }


//Create a promise that resolves after 4 seconds
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const person = { name, age };
    if (age >= 18) {
      resolve(person);
    } else {
      reject(person);
    }
  }, 4000);
});

// Chain the promise with two more promises
promise
  .then((person) => {
    // Extract the name from the object
    const { name } = person;
    return name;
  })
  .then((name) => {
    // Create a new object with the extracted name as a property
    const data = {
      message: `Welcome, ${name}. You can vote.`,
    };
    return data;
  })
  .then((data) => {
    // Show an alert with the final object
    alert(data.message);
  })
  .catch((person) => {
    // Show an error alert if the promise is rejected
    alert(
      `Oh sorry ${person.name}. You aren't old enough.`
    );
  });
}