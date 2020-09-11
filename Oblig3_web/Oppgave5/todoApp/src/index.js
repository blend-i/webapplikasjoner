
window.onload = oppstart;

let wrapper = document.getElementById("wrapper");

let buttonNumber = 0;

var deleteButtons = [];

var completed = [];

let completedWrapper = document.getElementById("completedWrapper");

function oppstart() {

  var modal = document.getElementById("my-modal");

  var span = document.getElementsByClassName("close")[0];
  // Get the button that opens the modal
  var todoButton = document.getElementById("main-todo-button-id");

  var createButton = document.getElementById("new-todo-button");

  wrapper = document.getElementById("wrapper");
  completedWrapper = document.getElementById("completedWrapper");

  createButton.onclick = function () {
    event.preventDefault();
    createAListItem();
    modal.style.display = "none";
  }

  todoButton.onclick = function () {
    modal.style.display = "block";
  }

  span.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function findLength(){
  return deleteButtons.length;
}

class CompletedTodos { 
  constructor(title, author, description){
    this.title = title;
    this.author = author;
    this.description = description;
  }
}

const createAListItem = () => {

  var tittel = document.getElementById("new_title").value;
  var description = document.getElementById("new_description").value;
  var author = document.getElementById("new_author").value;

  //List noden som Tittel, description, author, og delete/complete knapper henger seg på
  var listNode = document.createElement("li");

  var h4Tittel = document.createElement("h4");
  h4Tittel.id="todoTitle";

  var pDesctiption = document.createElement("p");
  pDesctiption.id="descriptionID";

  var pAuthor = document.createElement("p");
  pAuthor.id="authorID";
  
  var tableRow = document.createElement("tr");
  tableRow.className ="normal-table-row";

  var tabledataTittel = document.createElement("td");
  var tabledataAuthor = document.createElement("td");
  var tabledataDescription = document.createElement("td");
  var tabledataDate = document.createElement("td");

  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1;
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  var newdate = day + "." + month + "." + year;

  var greenCompleteButton = document.createElement("button");
  greenCompleteButton.className ="todo-complete-button";
  greenCompleteButton.addEventListener("click", function () {
    completed.push(new CompletedTodos(tittel, description, author));
    for(i = 0; i < completed.length; i++){
      completedWrapper.appendChild(tableRow);
      tableRow.appendChild(addText(tabledataTittel, tittel));
      tableRow.appendChild(addText(tabledataAuthor, author));
      tableRow.appendChild(addText(tabledataDescription, description));
      tableRow.appendChild(addText(tabledataDate, newdate));
      
      wrapper.removeChild(wrapper.childNodes[buttonIndex]);
      
      if(buttonIndex > -1){
        deleteButtons.splice(buttonIndex, 1);
      }
    }
  });
  
  var redDeleteButton = document.createElement("button");
  redDeleteButton.className ="todo-delete-button";
  redDeleteButton.id="todo-delete";

  deleteButtons.push(redDeleteButton);

  var buttonIndex = findLength();

  redDeleteButton.addEventListener("click", function () {
    try {
      wrapper.removeChild(wrapper.childNodes[buttonIndex]);
      if(buttonIndex > -1){
        deleteButtons.splice(buttonIndex, 1);
      }
    } catch (error) {
      alert(error);
    }
    findLength();
  }); 

  listNode.appendChild(addText(h4Tittel, tittel));
  listNode.appendChild(addText(pDesctiption, description));
  listNode.appendChild(addText(pAuthor, author));
  listNode.appendChild(addText(redDeleteButton, "Delete"));
  listNode.appendChild(addText(greenCompleteButton, "Complete"));

  wrapper.appendChild(listNode);
};

//Lager teksten
const addText = (el, text) => {
  el.innerHTML = text;
  return el;
};

//Lager det faktiske elementet med metodene over
const createElement = (type) => {
  return document.createElement(type);
}

