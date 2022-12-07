const inputF = document.querySelector('.input-text');
const addBtn = document.querySelector('.add-btn');
const taskList = document.querySelector('.task-list');

let editId;
let isEditable = false;

todos = JSON.parse(localStorage.getItem('todos'));

addBtn.addEventListener('click', () => {
    let data = inputF.value;
    todos = !todos ? [] : todos;

    let taskData = { task: data, status: 'pending' }
    todos.push(taskData);

    inputF.value = '';
    localStorage.setItem('todos', JSON.stringify(todos));
    showItems();
});

function showItems() {
    let liTag = '';
    if (todos) {
        todos.forEach((todo, id) => {
            let completed = todo.status == 'completed' ? 'checked' : '';
            liTag += `
                <li class="task">
                    <label for="${id}">
                        <input onclick='statusUpdate(this)' type="checkbox" name="" id="${id}" >
                        <p class='${completed}'>${todo.task}</p>
                    </label>
                    <div class="actions">
                        <button class="edit">Edit</button>
                        <button class="del">Delete</button>
                    </div>
                </li>
            `
        })
    }

    taskList.innerHTML = liTag;
    let taskNo = taskList.querySelectorAll('.task');
    let count = document.querySelector('footer p');

    taskNo.length > 0 ? count.innerHTML = `You have ${taskNo.length} task(s) pending` :
        count.innerHTML = `You have no tasks`;

}

showItems();

function statusUpdate(selectedTask) {
    let taskName = selectedTask.parentElement.lastElementChild;
    if (selectedTask.checked) {
        taskName.classList.add('checked');
        todos[selectedTask.id].status = 'completed';
    } else {
        taskName.classList.remove('checked');
        todos[selectedTask.id].status = 'pending';
    }
    localStorage.setItem('todos', JSON.stringify(todos));
}