

/****************************************
 * 1️⃣ THEME TOGGLE (click event)
 * --------------------------------------
 * Task:
 * - Select the theme button.
 * - Add a click event listener.
 * - Check current body class.
 * - If body is "dark":
 *      → switch to "light"
 *      → change button text to "Switch Dark Mode"
 * - Else:
 *      → switch to "dark"
 *      → change button text to "Switch Light Mode"
 ****************************************/
// let themeBtn = document.getElementById("themeBtn");
// themeBtn.addEventListener('click', changeClass);
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  const body = document.body;

  if (body.className === "dark") {
    body.className = "light";
    themeBtn.innerText = "Switch Dark Mode";
  } else {
    body.className = "dark";
    themeBtn.innerText = "Switch Light Mode";
  }
});

/****************************************
 * 2️⃣ ADD TASK (click event)
 * --------------------------------------
 * Task:
 * - Select the input field and Add button.
 * - On click:
 *      → get the input value
 *      → if empty → alert message
 *      → else create a new <li>:
 *            <span>text</span>
 *            <button>Delete</button>
 *      → append to the <ul>
 *      → clear input field
 *      → update total count
 ****************************************/

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();

  if (text === "") {
    alert("Please enter something!");
    return;
  }

  taskList.innerHTML += `
    <li>
      <span class="taskText">${text}</span>
      <button>Delete</button>
    </li>
  `;

  taskInput.value = "";
  updateTotal();
});


/****************************************
 * 3️⃣ SEARCH FILTER (input event)
 * --------------------------------------
 * Task:
 * - Select the search input.
 * - Add "input" event listener.
 * - On every keystroke:
 *      → get the lowercase search value
 *      → loop through all <li>
 *      → compare searchValue with each <span> text
 *      → hide <li> if not matching
 *      → show <li> if matching
 ****************************************/
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  document.querySelectorAll("#taskList li").forEach(li => {
    const text = li.querySelector(".taskText").textContent.toLowerCase();
    li.style.display = text.includes(value) ? "flex" : "none";
  });
});






/****************************************
 * 3.5️⃣ ADD TASK USING KEYDOWN (Enter key)
 * --------------------------------------
 * Task:
 * - Add a "keydown" event listener to the task input field.
 * - When a key is pressed:
 *      → check if the key is "Enter"
 *      → if yes:
 *            → perform the SAME steps as clicking Add button
 *            (get value → validate → create <li> → add to list → clear input → update count)
 ****************************************/

taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const text = taskInput.value.trim();

    if (text === "") {
      alert("Please enter something!");
      return;
    }

    taskList.innerHTML += `
      <li>
        <span class="taskText">${text}</span>
        <button>Delete</button>
      </li>
    `;

    taskInput.value = "";
    updateTotal();
  }
});




/****************************************
 * 4️⃣ DELETE TASK (event delegation)
 * --------------------------------------
 * Task:
 * - Add one click listener to the <ul>.
 * - When clicked:
 *      → check if the clicked element is a Delete button
 *      → if yes:
 *            → remove the parent <li>
 *            → update total count
 ****************************************/
taskList.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
    updateTotal();
  }
});



/****************************************
 * 5️⃣ HOVER EFFECT (mouseover + mouseout)
 * --------------------------------------
 * Task:
 * - Add mouseover listener to <ul>.
 *      → if hovered element is <li>
 *            → change its background color
 *
 * - Add mouseout listener to <ul>.
 *      → if leaving a <li>
 *            → reset the background color
 ****************************************/
taskList.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "LI") {
    e.target.style.background = "#cfe3ff";
  }
});

taskList.addEventListener("mouseout", (e) => {
  if (e.target.tagName === "LI") {
    e.target.style.background = "";
  }
});

/****************************************
 * 6️⃣ TOTAL TASK COUNTER FUNCTION
 * --------------------------------------
 * Task:
 * - Create a function to:
 *      → count all <li> inside the <ul>
 *      → update <h2 id="count"> with: "Total Task: X"
 *
 * - Call this function after:
 *      → adding a task
 *      → deleting a task
 ****************************************/
function updateTotal() {
  const total = document.querySelectorAll("#taskList li").length;
  document.getElementById("count").innerText = `Total Task: ${total}`;
}
