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
 * Attaches a click event listener to open the modal.
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

  // Open modal when task card is clicked
  taskCard.addEventListener("click", () => openTaskModal(task));

  return taskCard;
}

/**
 * Opens the task modal and populates it with the selected task's details.
 * @param {Object} task - The task to display in the modal.
 * @param {string} task.title - The task title.
 * @param {string} task.description - The task description.
 * @param {string} task.status - The task status.
 */
function openTaskModal(task) {
  document.getElementById("modal-title-input").value = task.title;
  document.getElementById("modal-desc-input").value = task.description;
  document.getElementById("modal-status-select").value = task.status;

  document.getElementById("modal-backdrop").classList.add("active");
}

/**
 * Closes the task modal by removing the active class from the backdrop.
 */
function closeTaskModal() {
  document.getElementById("modal-backdrop").classList.remove("active");
}

/**
 * Attaches all event listeners needed for modal interaction:
 * - Close button click
 * - Backdrop click (clicking outside the modal)
 * - Escape key press
 */
function attachModalEventListeners() {
  const closeBtn = document.getElementById("modal-close-btn");
  const backdrop = document.getElementById("modal-backdrop");
  const modal = document.getElementById("task-modal");

  closeBtn.addEventListener("click", closeTaskModal);

  // Close when clicking outside the modal card
  backdrop.addEventListener("click", (event) => {
    if (!modal.contains(event.target)) {
      closeTaskModal();
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeTaskModal();
    }
  });
}

/**
 * Initialises the board by rendering tasks and setting up modal event listeners.
 */
function init() {
  renderTasks();
  attachModalEventListeners();
}

// Run on DOM ready
document.addEventListener("DOMContentLoaded", init);
