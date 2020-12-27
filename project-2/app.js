// 1. Add new values on a list
const input = document.querySelector('.add');
let ul = document.querySelector('ul');

// b. How to insert html on a list?
function addToDo(toDo) {
    ul.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${toDo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
};
// a. get the value inside the input form
input.addEventListener('keydown', e => {
    if (e.key == 'Enter') {
        e.preventDefault();

        let toDo = input.add.value;
        input.add.value = '';

        addToDo(toDo);
        ul = document.querySelector('ul');
    }
});
// extra things. Be sure it is unique value, doesn't exist on the list already

// 2. Remove values in the list
// get all the to dos
ul.addEventListener('click', e => {
    if (e.target.className === 'far fa-trash-alt delete') {
        e.target.parentNode.remove()
    }
});

// 3. Search for values in the list
// get value in input search
const search = document.querySelector('.search > input');
let searchValue = '';
search.addEventListener('keydown', e => {
    console.log('Search:', search.value);
    const toDos = [];
    ul.querySelectorAll('li').forEach(toDo => {
        toDos.push(toDo.innerText);
    });
    // console.log('To Dos:', toDos);
    const filterToDos = toDos.filter(toDo => toDo.includes(search.value));
    console.log(filterToDos);
    ul.querySelectorAll('li').forEach(toDo => {
        if (!filterToDos.includes(toDo.innerText)) {
            console.log('CORRECT', toDo);
            toDo.remove;
        }
    });
    // toDos.forEach(toDo => {
    //     const filteredList = toDos.filter(toDo => toDo.includes(search.value));
    //     console.log(filteredList);
    //     return filteredList;
    // });
    // console.log('Matches:', searchToDos);
});
// look if the value exists on the list