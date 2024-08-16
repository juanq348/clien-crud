export const createTask = (task) =>{
    return `
    <div class = "task-card">
    <h1>${tarea.title}</h1>
    <p>${tarea.description}</p>
    <span>${tarea.isComplete ? "completa" : "pendiente"}</span>
</div>  
`
}

