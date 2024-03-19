let data = document.querySelector(".text");
let btn = document.querySelector("#btn");
let list_data = document.querySelector(".list");
let show_l = document.getElementById("show-l");
let list_container = document.querySelector(".list-container");

function addTask(val) {
    let li = document.createElement("li");
    li.innerText = val;
    list_data.appendChild(li);
    data.value = "";
    let span = document.createElement("span");
    span.innerText = "x";
    span.classList.add("del_span");
    li.appendChild(span);
    saveData();
    alert("Task Added Successfully!");
}

list_data.addEventListener("click", (e)=>{
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

btn.addEventListener("click", ()=>{
    if (data.value) {
        addTask(data.value);
    } else {
        alert("Enter something :)");
    }
});

show_l.addEventListener('click', ()=>{
    if (show_l.innerHTML === "Show List") {
        show_l.innerHTML = "Hide List"
        list_container.style.display = "flex";
    } else {
        show_l.innerHTML = "Show List"
        list_container.style.display = null;
    }
});

function saveData() {
    localStorage.setItem("data", list_data.innerHTML);
}

function getData() {
    list_data.innerHTML = localStorage.getItem("data");
}
getData();