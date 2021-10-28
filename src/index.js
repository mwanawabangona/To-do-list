import './style.css';

const tasks = [
    {
        description: 'task 1',
        completed: true,
        index: 0,
    },
    {
        description: 'task 2',
        completed: false,
        index: 1,
    },
    {
        description: 'task 3',
        completed: true,
        index: 2,
    },
    {
        description: 'test4',
        completed: false,
        index: 3,
    },
];
const displayTasks = () =>{
    const taskSection = document.querySelector('.task-list');
    taskSection.innerHTML = '';
    tasks.forEach((task) => {
        let task_temp = `
        <li class="item d-flex">
            <div class="task d-flex">
            `;
            if(task.completed === true){
                task_temp += `<i class="fa fa-check" job="complete"></i>`;
            }else{
                task_temp += `<i class="fa fa-square-o" job="complete"></i>`;
            }
            task_temp += `<p class="ptag" contenteditable="true">${task.description}</p>
            </div>
            <i class="fa fa-trash-o" job="delete"></i>
        </li>
        `;
        taskSection.innerHTML += task_temp;
    });
}

displayTasks();