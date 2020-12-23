// 1. Add new values on a list
const input = document.querySelector('.add'); 
const toDos = document.querySelector('.todos');
const trashIcons = document.querySelectorAll('.far'); 

// b. How to insert html on a list?
function addToDo(toDo){
    toDos.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${toDo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;  
};
// a. get the value inside the input form
input.addEventListener('keydown', e => {
    if(e.key == 'Enter'){
        e.preventDefault(); 

        toDo = input.add.value;  
        input.add.value = ''; 
        
        addToDo(toDo);  
    }
}); 
// extra things. Be sure it is unique value, doesn't exist on the list already
// clean the spaces

function removeToDo() {

}; 


// 2. Remove values in the list
// 3. Search for values in the list