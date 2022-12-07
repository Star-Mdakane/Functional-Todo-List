todos = JSON.parse(localStorage.getItem('todos')) || [];
const inputF = document.querySelector('.input-text');
const addBtn = document.querySelector('.add-btn');
const taskList = document.querySelector('.task-list');

let editId;
let isEditable = false;

addBtn.addEventListener('click', () => {
    let data = inputF.value;
    let todo = { task: data, status: 'pending' }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
})