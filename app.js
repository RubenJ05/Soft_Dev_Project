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

        const taskText = document.createElement('span');
        taskText.className = 'task-text';
        taskText.textContent = task.text;

        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.className = 'delete-button';
        deleteButton.dataset.taskId = task.id;
        deleteButton.setAttribute('aria-label', `Delete task: ${task.text}`);
        deleteButton.title = 'Delete task';
        deleteButton.textContent = '🗑';

        listItem.appendChild(taskText);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    });
}

function removeTask(taskId) {
    if (!taskId) {
        return;
    }

    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    if (taskIndex === -1) {
        return;
    }

    tasks.splice(taskIndex, 1);
    renderTasks();
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
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
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

taskList.addEventListener('click', (event) => {
    const deleteButton = event.target.closest('.delete-button');
    if (!deleteButton) {
        return;
    }

    removeTask(deleteButton.dataset.taskId);
});

renderTasks();
