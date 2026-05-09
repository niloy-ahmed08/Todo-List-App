

let input = document.getElementById("input")
let btn = document.getElementById("btn")
let listcontainer = document.querySelector(".listcontainer")

let handleclick = () => {
    let list = document.createElement("li");
    
    let taskText = document.createElement("span");
    taskText.innerText = input.value;

  
    let editBtn = document.createElement("span");
    editBtn.innerHTML = "Edit..-";
    editBtn.style.color = "gold";
    editBtn.style.cursor = "pointer"; 
    editBtn.addEventListener("click", () => {
    taskText.contentEditable = "true";
    taskText.focus();
    editBtn.innerHTML = "Save";
    editBtn.addEventListener("click", () => {
        taskText.contentEditable = "false";
        editBtn.innerHTML = "Edit";
    });
    });

    let deleteBtn = document.createElement("span");
    deleteBtn.style.color = "red";
    deleteBtn.innerHTML = "   X";
    deleteBtn.addEventListener("click", () => {
        list.remove();
    });

    list.appendChild(taskText);
    list.appendChild(editBtn);  
    list.appendChild(deleteBtn);
    listcontainer.appendChild(list);
    input.value = '';
}
 