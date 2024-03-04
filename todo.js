"use strict";
let store = [];
let todo = document.getElementById('todo');
let list = document.getElementById('list');
let btn2 = document.getElementById('.btn2');
console.log(btn2);
let btn = document.querySelector(".btn");
let submit = () => {
    store.push(todo.value);
    todo.value = '';
    // console.log(store);
    let data = '';
    for (let i = 0; i < store.length; i++) {
        // console.log(store[i]);
        data += `
           
            <li>${store[i]}</li>
            <button id="btn2">Edit </button>
            <button id="btn3">Delete</button>
           
             `;
        list.innerHTML = data;
    }
    console.log(data);
};
let id = 0;
// let deleteItem = (x: number)=>{
//     for(let i=0; i < store.length; i++){
//         if(x === i){
//             store.splice(x, 1)
//         }
//     }
// }
// function deleteItem(button:HTMLButtonElement) {
//     const li: any =button.parentElement;
//     li.remove
// }
let deleteItem = (del) => {
    let confirmed = confirm("Are you sure");
    if (confirmed) {
        store.splice(del, 1);
        submit();
        todo.value = "";
    }
    else {
        submit();
    }
};
// btn.addEventListener("click", ()=>{
//    console.log(todo.value);
//     store.push(todo.value)
// })
// for(let i=0; i <= store.length; i++){
//     console.log(store[i]);
// }
