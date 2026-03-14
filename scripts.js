/**
 * Renders all tasks from initialTasks into their correct columns on the board.
 * Clears existing content first to avoid duplicates.
 */
function renderTasks() {
  const todoCont = document.getElementById("todo-tasks-container");
  const doingCont = document.getElementById("doing-tasks-container");
  const doneCont = document.getElementById("done-tasks-container");

  // Clear containers
  todoCont.innerHTML = "";
  doingCont.innerHTML = "";
  doneCont.innerHTML = "";

  // Count tasks per status for header updates
  let todoCount = 0;
  let doingCount = 0;
  let doneCount = 0;

  initialTasks.forEach((task) => {
    const taskCard = createTaskCard(task);

    if (task.status === "todo") {
      todoCont.appendChild(taskCard);
      todoCount++;
    } else if (task.status === "doing") {
      doingCont.appendChild(taskCard);
      doingCount++;
    } else if (task.status === "done") {
      doneCont.appendChild(taskCard);
      doneCount++;
    }
  });

  // Update column headers with live counts
  document.getElementById("toDoText").textContent = `TODO (${todoCount})`;
  document.getElementById("doingText").textContent = `DOING (${doingCount})`;
  document.getElementById("doneText").textContent = `DONE (${doneCount})`;
}

/**
 * Creates a single task card element for the board.
 * @param {Object} task - The task object.
 * @param {number} task.id - Unique task ID.
 * @param {string} task.title - The task title.
 * @param {string} task.description - The task description.
 * @param {string} task.status - The task status.
 * @returns {HTMLDivElement} The task card element.
 */
function createTaskCard(task) {
  const taskCard = document.createElement("div");
  taskCard.classList.add("task-div");
  taskCard.textContent = task.title;
  taskCard.dataset.taskId = task.id;
  return taskCard;
}

// Run on DOM ready
document.addEventListener("DOMContentLoaded", renderTasks);
