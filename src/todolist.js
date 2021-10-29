export default class TodoList {
  constructor() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if(savedTasks){
      this.tasks = savedTasks;
    }else{
      this.tasks = [
        {
          description: 'task 1',
          completed: false,
          index: 1,
        },
        {
          description: 'task 2',
          completed: true,
          index: 2,
        },
        {
          description: 'test3',
          completed: false,
          index: 3,
        },
        {
          description: 'test4',
          completed: false,
          index: 4,
        },
      ];
    }
  }

  displayTasks() {
    this.sortAndSave();
    const check = "fa-check";
    const uncheck = "fa-square-o";
    const line_through = "linethrough";
    const taskSection = document.querySelector('.task-list');
    taskSection.innerHTML = '';
    this.tasks.forEach((task) => {
      const Done = task.completed ? check : uncheck;
      const Line = task.completed ? line_through : "";
      let task_temp = `
      <li class="item d-flex">
        <div class="task d-flex">
          <i class="fa ${Done} update-status" job="complete" data="${task.index}"></i>
          <p class="ptag ${Line}" contenteditable="true"  data="${task.index}">${task.description}</p>
        </div>
        <i class="fa fa-trash-o" job="delete"  data="${task.index}"></i>
      </li>
      `;
      taskSection.innerHTML += task_temp;
    });
    this.attachEvents();
  }

  sortAndSave() {
    this.tasks.forEach((object, index) => {
      this.tasks[index].index = index+1;
    });
    this.tasks.sort((a, b) => {
      if (a.index < b.index) return -1;
      if (a.index > b.index) return 1;
      return 0;
    });
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  updateTaskStatus(index){
    const target  = this.tasks[index-1];
    if (target.completed === true) {
      this.tasks[index-1].completed = false;
    } else {
      this.tasks[index-1].completed = true;
    }
    this.displayTasks();
  }
  
  attachEvents() {
    const listItems = document.querySelectorAll('.update-status');
    listItems.forEach((checkbox) => {
      checkbox.addEventListener('click', (e) => {
        const taskIndex = e.target.getAttribute('data');
        console.log(taskIndex);
        this.updateTaskStatus(taskIndex);
      });
    })
  }
}