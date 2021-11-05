describe('tests',() => {
    test('addtodo test',() =>{
        const toadd = 'laundry';
        const tasks = [
            {description:'task1',completed:false,index:0},
            {description:'task2',completed:false,index:1},
            {description:'task3',completed:false,index:2}
        ]
       function addTask(task, taskarray){
            taskarray.push({
              description: task,
              completed: false,
              index: 1
            });
            return taskarray.length;
          }
    expect(addTask(toadd,tasks)).toBe(4)
    })
    test('removefromarray',() => {
        const tasks = [
            {description:'task1',completed:false,index:0},
            {description:'task2',completed:false,index:1},
            {description:'task3',completed:false,index:2}
        ]
        function removetask(index, taskarray){
            taskarray.splice(index,1)
            return taskarray.length;
          }
    expect(removetask(1,tasks)).toBe(2)
    })
    test('updateTaskStatus',() => {
        const tasks = [
            {description:'task1',completed:false,index:0},
            {description:'task2',completed:false,index:1},
            {description:'task3',completed:false,index:2}
        ]
        function updateTaskStatus(index, taskarray, imp){
            taskarray[index].description = imp 
            return  taskarray[index].description
          }
    expect(updateTaskStatus(1,tasks,'test')).toBe('test')
    })
    test('clearcompleted',() => {
        const tasks = [
            {description:'task1',completed:false,index:0},
            {description:'task2',completed:true,index:1},
            {description:'task3',completed:true,index:2}
        ]
        function clearcompleted(taskarray){
           taskarray.forEach((item,index) => {
               if (item.completed === true) {
                   taskarray.splice(index,1)
               }
           })
            return tasks.length
          }
    expect(clearcompleted(tasks)).toBe(2)
    })

})