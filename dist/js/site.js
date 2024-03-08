// Array of quiz questions with options and correct answers
let questions = [
  {
  id: 1,
  question: " Javascript is an _______ language?",
  answer: "Object-Oriented",
  options: [
  "Object-Oriented",
  "Object-Based",
  "Procedural",
  "None of these"
  ]
  },
  {
  id: 2,
  question: "Which of the following keywords is used to define a variable in Javascript?",
  answer: "Both A and B",
  options: [
  "var",
  "let",
  "Both A and B",
  "None of these"
  ]
  },
  {
  id: 3,
  question: "Which of the following methods is used to access HTML elements using Javascript?",
  answer: "Both A and B",
  options: [
  "getElementbyId()",
  "getElementbyClassName()",
  "Both A and B",
  "None of these"
  ]
  },
  {
  id: 4,
  question: "Which of the following methods can be used to display data in some form using Javascript?",
  answer: "All of the above",
  options: [
  "document.write()",
  "console.log()",
  "window.alert()",
  "All of the above"
  ]
  },
  {
  id: 5,
  question: "How can a datatype be declared to be a constant type?",
  answer: "const",
  options: [
  "const",
  "var",
  "let",
  "constant"
  ]
  }
  ];

let question_count = 0;  // Track the current question index
let points = 0;         // Track the user's score
let time = 0;           // Track the time elapsed (added this line to define the time variable)

// Function to execute when the window is loaded
window.onload = function () {
  show(question_count);
};

// Function to move to the next question
function next() {
  let user_answer = document.querySelector("li.option.active");

  // Check if an option is selected
  if (!user_answer) {
      alert("Please select an option before moving to the next question.");
      return;
  }

  user_answer = user_answer.innerHTML;

  // Check if the question at the current index exists
  if (questions[question_count]) {
      // Check if the answer is right or wrong
      if (user_answer == questions[question_count].answer) {
          points += 10;
          sessionStorage.setItem("points", points);
      }

      // Increment the question count
      question_count++;

      // Check if it's the last question
      if (question_count >= questions.length) {
          sessionStorage.setItem("time", time);
          clearInterval(mytime);

          // Delay the redirection to ensure it's not interrupted
          setTimeout(function () {
              window.location.replace("end.html");
          }, 100);

          return;
      }

      // Show the next question
      show(question_count);
  } else {
      console.error("Question at index " + question_count + " is undefined.");
  }
}

// Function to display a question
function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  // Display the current question and options
  question.innerHTML = `
      <h2>Q${count + 1}. ${questions[count].question}</h2>
      <ul class="option_group">
          <li class="option">${first}</li>
          <li class="option">${second}</li>
          <li class="option">${third}</li>
          <li class="option">${fourth}</li>
      </ul>
  `;
  toggleActive();
}

// Function to handle the click event and toggle the active class
function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
      option[i].onclick = function () {
          for (let i = 0; i < option.length; i++) {
              if (option[i].classList.contains("active")) {  // Active class ensures the clicked option is selected
                  option[i].classList.remove("active");
              }
          }
          option[i].classList.add("active");
      };
  }
}
