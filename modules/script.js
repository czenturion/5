const tasks = []

const createTask = (taskList, task) => {
  const taskItem = document.createElement('div')
  taskItem.className = 'task-item'

  const taskText = document.createElement('p')
  taskText.className = 'task-text'
  taskText.textContent = `${task.name} - ${task.completed ? 'Выполнена' : 'Не выполнена'}`
  taskItem.appendChild(taskText)

  const deleteButton = document.createElement('button')
  deleteButton.className = 'delete-button'
  deleteButton.textContent = 'Удалить'
  deleteButton.onclick = () => {
    deleteTask(task.name)
    displayTasks()
  }
  taskItem.appendChild(deleteButton)

  const completeButton = document.createElement('button')
  completeButton.className = 'complete-button'
  completeButton.textContent = 'Выполнена'
  completeButton.onclick = () => {
    completeTask(task.name)
    displayTasks()
  }
  taskItem.appendChild(completeButton)

  taskList.appendChild(taskItem)
}

const displayTasks = () => {
  const taskList = document.getElementById('task-list')
  taskList.innerHTML = ''

  tasks.forEach((task) => createTask(taskList, task))
}



const addTask = (event) => {
  event.preventDefault()

  const newTask = event.target.elements.task.value.trim()

  tasks.push({ name: newTask, completed: false })
  event.target.reset()
  displayTasks()
}

const deleteTask = (name) => {
  const taskIndex = tasks.findIndex((task) => task.name === name)
  console.log(taskIndex)
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1)
  } else {
    alert(`Задача "${name}" не найдена`)
  }
}

const completeTask = (name) => {
  const task = tasks.find((task) => task.name === name)
  if (task) {
    task.completed = true
  } else {
    alert(`Задача "${name}" не найдена`)
  }
}

document.querySelector('.task-input form').addEventListener('submit', addTask)