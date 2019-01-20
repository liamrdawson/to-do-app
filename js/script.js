const toDoDiv = document.getElementById('toDo');
const toDoListUl = document.querySelector('ul.toDo')
const inputArea = document.getElementById('inputArea');
const addItemButton = document.getElementById('addItemButton');
const addItemInput = document.querySelector('input.addItemInput');

//  COMPLETED ITEMS LIST
const doneUl = document.querySelector('ul.doneUl');

/*
document.addEventListener( 'click', (event) => {
  console.log(event.target);
});*/


toDoListUl.addEventListener('click', (event)=>{
  if (event.target.tagName == 'BUTTON') {
    if (event.target.className == 'btn btn-sm btn-outline-success') {
      let li = event.target.parentNode.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) { //  Code will only run if there is an existing prevLi. If there isn't, value will return as 'null' & code will not run.
        ul.insertBefore(li, prevLi);
      }
    }
    if (event.target.className == 'btn ml-1 mr-1 btn-sm btn-outline-warning') {
      let li = event.target.parentNode.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi) { //  Code will ONLY run if there is an existing nextLi i.e nextElementSibling.
        ul.insertBefore(nextLi, li);
      }
    }
    if (event.target.className == 'btn btn-sm btn-outline-danger') {
      // Move items from the to do list to the completed list.
      let li = event.target.parentNode.parentNode;
      let done = event.target;
      let down = done.previousElementSibling;
      let up = down.previousElementSibling;
      //Adds li as child of completed list.
      doneUl.appendChild(li);
      done.innerText = "Remove";
      up.style.display = "none";
      down.style.display = "none";
    }
  }
});


doneUl.addEventListener ('click', (event)=>{
  if (event.target.className == 'btn btn-sm btn-outline-danger') {
    let li = event.target.parentNode.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);
  }
});


function addButtonGroup(div) {
  //  create UP button    add it's text content, class names, element type.
  let up = document.createElement('button');
  up.textContent = 'Up';
  up.className = 'btn btn-sm btn-outline-success';
  div.appendChild(up);
  //  create DOWN button
  let down = document.createElement('button');
  down.textContent = 'Down';
  down.className = 'btn ml-1 mr-1 btn-sm btn-outline-warning';
  div.appendChild(down);
  //  create DONE button
  let done = document.createElement('button');
  done.textContent = 'Done';
  done.className = 'btn btn-sm btn-outline-danger';
  div.appendChild(done);
}


// Tell the browser how to create a list item with buttons
addItemButton.addEventListener('click', (event) => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  let div = document.createElement('div');
  let inputArea = document.getElementById('inputArea');
  li.className = 'list-group-item list-group-item-action d-flex justify-content-between';
  li.textContent = addItemInput.value;
  li.appendChild(div);
  addButtonGroup(div);
  ul.insertBefore(li, null);
  addItemInput.value = '';
});
