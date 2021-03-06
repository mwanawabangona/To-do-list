import './style.css';
import TodoList from './todolist.js';

const todoList = new TodoList();
todoList.displayTasks();

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newActivity = form.elements.new_task.value;
  todoList.addTask(newActivity);
  todoList.displayTasks();
  form.reset();
});

document.querySelector('#clear-completed').addEventListener('click', (e) => {
  e.preventDefault();
  todoList.clearCompleted();
})