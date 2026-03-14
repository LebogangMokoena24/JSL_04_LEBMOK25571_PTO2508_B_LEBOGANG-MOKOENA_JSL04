# JSL_04_LEBMOK25571_PTO2508_B_LEBOGANG-MOKOENA_JSL04
# JSL04 — Dynamic Task Display & Modal View

## Project Description

A dynamic Kanban task board built with vanilla HTML, CSS, and JavaScript. Tasks are loaded from a JavaScript data file and rendered into the correct board columns based on their status. Clicking a task card opens a modal displaying the task's title, description, and current status. No task content is hardcoded in the HTML.

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
