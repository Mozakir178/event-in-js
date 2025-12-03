

# **Task 1: Add a Note to the Notes Board**

Using JavaScript:

1. Create a new `<div>` element using `document.createElement()`.
2. Add the class `"note"` to this new div using `classList.add()`.
3. Set the content of this div to whatever text the user typed inside the input box
   – use `textContent` to do this.
4. Append the newly created note to the `.notes-container` element using `appendChild()`.

**In short:**
 *When the user clicks “Add Note”, a new note box should appear on the screen.*

---

# **Task 2: Add a “Delete” Button Inside Every Note**

For every note you create:

1. Create a `<button>` element using `createElement("button")`.
2. Add text `"Delete"` inside the button using `textContent`.
3. Add a class `"delete-btn"` to the button.
4. Add an event listener to this button:

   * When the button is clicked, it should remove the entire note from the screen.
   * You can remove it using `element.remove()` or `parentElement.remove()`.

**In short:**
 *Each note must include a delete button that removes the note when clicked.*

---

# **Task 3: Clear the Input Box After Adding a Note**

After a note is added:

1. Set the input field’s value to an empty string using `input.value = ""`.

**In short:**
 *Once the note is created, the input box should become empty automatically.*

---

# **Task 4: Prevent Adding Empty Notes**

Before creating a note:

1. Check if the input box is empty.
2. If it is empty:

   * Do NOT create a note.
   * Simply return (stop the function).

Example logic (in simple words):
“If the user didn’t type anything, do nothing.”

**In short:**
📌 *Don’t allow the user to add an empty note.*

---

# **Task 5: Add Time of Creation to Each Note**

(For students who want an extra challenge.)

1. Create a small `<p>` element using `createElement("p")`.
2. Get the current time using `new Date().toLocaleTimeString()`.
3. Put this time inside the `<p>` element using `textContent`.
4. Append this `<p>` element inside the note, below or beside the note text.

**In short:**
 *Each note should display the time it was created.*

---


