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
const originalUl = ul;
let searchValue = '';
search.addEventListener('keydown', e => {
    const toDos = [];
    console.log('Search:', search.value);
    ul.querySelectorAll('li').forEach(toDo => {

        if (!toDo.innerText.includes(search.value)) {
            console.log(toDo.innerText);
            toDo.className = 'list-group-item d-none';
        } else {
            toDo.className = 'list-group-item d-flex justify-content-between align-items-center';
        };
    });
});
// look if the value exists on the list