const todoList = [];

renderTodoList();

function renderTodoList(){
    let todoListHTML = '';
    
    for(let i = 0; i < todoList.length; i++){
        const todoObject = todoList[i];
        //const name = todoObject.name;
        //const dueData = todoObject.dueData
        const {name, dueData} = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueData}</div> 
            <button class="delete-todo-button" onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
            ">Delete</button> 
        `
        todoListHTML += html;
    }
    
    console.log(todoListHTML);
    
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


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