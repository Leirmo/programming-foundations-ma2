//Question 1
var pets = [
  {
    type: "cat",
    age: 5.5,
  },
  {
    type: "dog",
    age: 3.8,
  },
  {
    type: "parrot",
    age: 4.0,
  },
];

for (var i = 0; i < pets.length; i++) {
  var age = pets[i].age;
  var type = pets[i].type;

  if (age >= 4.0) {
    console.log(type);
  }
}

//Question 2
function logWord(word) {
  console.log(word);
}

logWord("Please pass a boolean value in");

//Question 3
var heading = document.querySelector("h2");
var button = document.querySelector("button");

function changeHeading() {
  var h2 = document.querySelector("h2");
  h2.style.color = "blue";
  heading.innerHTML = "Updated subheading";
}

button.onclick = changeHeading;
