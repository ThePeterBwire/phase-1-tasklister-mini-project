document.addEventListener("DOMContentLoaded", () => {
  // your code here
    // Get references to the form and task list
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");
  
    // Add a submit event listener to the form
    form.addEventListener("submit", function (event) {
      // Prevent the form from submitting and refreshing the page
      event.preventDefault();
  
      // Get the task description from the input field
      const taskDescription = document.getElementById("new-task-description").value;
  
      // Create a new list item (<li>) for the task
      const taskItem = document.createElement("li");
      taskItem.textContent = taskDescription;
  
      // Append the new task to the task list
      taskList.appendChild(taskItem);
  
      // Clear the input field
      document.getElementById("new-task-description").value = "";

      // Add a Delete Button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function () {
      taskItem.remove(); // Remove the task when the button is clicked
      });

      taskItem.appendChild(deleteButton); // Add the delete button to the task

      // Add Priority Levels
      const priority = document.getElementById("priority").value;
      taskItem.style.color =
      priority === "high" ? "red" : priority === "medium" ? "yellow" : "green";

      // Add Due Date
      const dueDate = document.getElementById("due-date").value;
      taskItem.textContent = `${taskDescription} (Due: ${dueDate})`;


})});
