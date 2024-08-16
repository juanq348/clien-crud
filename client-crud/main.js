import './style.css'
import { createTask } from "./tasks"

const $app = document.getElementById("app");
const $taskForm = documen.getElementById("create-task-form");

const listaDeAlgo = []

fetch("API_URL")
  .then((res) => res.json())
  .then((data) =>{
    data.forEach((tarea) =>{
      $app.innerHTML += createTask(tarea);
    });
  });

  $taskForm.addEventListener("submit", (event) =>{
    event.preventDefault();
    
    const $titleInput = document.getElementById("input-title");
    const $descriptionInput = document.getElementById("input-description");
    const $isCompleteInput = document.getElementById("input-is-complete");

    const API_URL = "https://localhost:4000/tasks";

    fetch("API_URL",{
      method: "POST",
      body: JSON.stringify({
        title: $titleInput.ariaValueMax,
        description: $descriptionInput.value,
        isComplete: $isCompleteInput.ariaChecked,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }), then((event) =>{
      e.target.reset();
      resetTasks();
    });
  });

// $app.innerHTML = `
//   <div>
//     <h1>Hola Mundo!</h1>
// </div>  
// `