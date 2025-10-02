const todoList = [];

renderTodoList();

function renderTodoList(){
    let todoListHTML = '';
    
    todoList.forEach((todoObject) => {
        const {name, dueData} = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueData}</div> 
            <button class="delete-todo-button js-delete-todo-button">Delete</button> 
        `
        todoListHTML += html;
    })

    /*for(let i = 0; i < todoList.length; i++){
        
    }*/
    
    console.log(todoListHTML);
    
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-todo-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(index, 1);
                renderTodoList();
            })     
        });
}

document.querySelector('.js-add-button').addEventListener('click', () => {
    addTodo();
});


function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueData = dateInputElement.value;

    todoList.push({//name: name, dueData: dueData
        name, 
        dueData
    });

    inputElement.value = '';
    renderTodoList();
}