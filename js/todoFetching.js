async function fetchData() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    const parsedTodos = await data.json();


    if (!data.ok) {
        showError();
    } else {
        window.setTimeout(() => {
            deactivateLoader();
            showContent(parsedTodos)
        }, 2000);
    }
}

function showError(errorMessage) {
    const errorTemp = document.querySelector('template');
    const p = errorTemp.content.querySelector('p');

    p.innerHTML = 'Что-то пошло не так';

    const clone = errorTemp.cloneNode(true);
    document.querySelector('#error').appendChild(clone);
}

function showContent(todos) {
    const todoList = document.querySelector('#todo-list');

    for (const todo of todos) {
        const { id, userId, title, completed } = todo;
        const div = document.createElement('div');
        div.className = 'todo-item';
        div.style.boxShadow = `0 0 13px ${ completed ? 'green' : 'red'}`;
        div.style.background = completed ? 'green' : 'red';

        const p = document.createElement('p');

        p.innerText = `${title} @${userId}`;

        div.appendChild(p);

        todoList.appendChild(div);
    }


}

function deactivateLoader() {
    const loader = document.querySelector('.loader');

    loader.style.display = 'none';
}


window.onload = fetchData;
