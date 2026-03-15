# JSL_04_LEBMOK25571_PTO2508_B_LEBOGANG-MOKOENA_JSL04
# JSL04 — Dynamic Task Display & Modal View

## Project Description

This project is a Kanban-style task board built using HTML, CSS, and JavaScript.
The board displays tasks in three workflow columns: To Do, Doing, and Done.

Tasks are stored in a JavaScript data file (initialData.js) and are rendered dynamically when the page loads. Clicking on a task opens a modal that shows more details about that task.

The purpose of this project was to practice DOM manipulation, event handling, and dynamic rendering using JavaScript.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Google Fonts — Plus Jakarta Sans

---

## Features

- Tasks are dynamically rendered from `initialData.js` — no hardcoded task HTML
- Tasks are placed into the correct column based on their `status` field
- Column headers update automatically to show the correct task count
- Clicking a task card opens a modal with the task's full details
- Modal displays the task title and description in editable input fields
- Modal displays the current status in a dropdown with all status options
- Modal closes via the close button, clicking outside it, or pressing Escape
- Smooth fade-in animation on modal open
- Fully responsive on desktop, tablet, and mobile

---

## Setup Instructions

1. Clone or download this repository
2. Open the project folder in VS Code
3. Open `index.html` using the Live Server extension
4. The board will load with all tasks displayed in their correct columns

---

## Usage

| Action | Result |
|---|---|
| Page loads | All tasks appear in their correct columns with live counts |
| Click a task card | Modal opens showing that task's title, description, and status |
| Click the × button | Modal closes |
| Click outside the modal | Modal closes |
| Press Escape | Modal closes |

This project was completed as part of the Dynamic Task Display & Modal View assessment.

Author
Lebogang Mokoena
