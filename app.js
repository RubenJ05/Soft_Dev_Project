const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');
const emptyMessage = document.getElementById('empty-message');
const errorMessage = document.getElementById('error-message');

const tasks = [];

function renderTasks() {
    taskList.innerHTML = '';

    if (tasks.length === 0) {
        emptyMessage.hidden = false;
        return;
    }

    emptyMessage.hidden = true;

    tasks.forEach((task) => {
        const listItem = document.createElement('li');
        listItem.className = 'task-item';
        listItem.textContent = task.text;
        taskList.appendChild(listItem);
    });
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (!taskText) {
        errorMessage.textContent = 'Task description cannot be empty.';
        errorMessage.hidden = false;
        taskInput.focus();
        return;
    }

    errorMessage.hidden = true;
    errorMessage.textContent = '';

    tasks.push({
        id: Date.now() + Math.random(),
        text: taskText,
    });

    renderTasks();
    taskInput.value = '';
    taskInput.focus();
}

taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addTask();
});

addButton.addEventListener('click', (event) => {
    event.preventDefault();
    addTask();
});

taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        addTask();
    }
});

renderTasks();
