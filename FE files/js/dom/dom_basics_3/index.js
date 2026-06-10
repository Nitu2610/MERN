let root = document.querySelector("#root");

let Box1 = document.createElement("div");
Box1.className = "Box1";

let DisplayBox = document.createElement("div");
DisplayBox.className = "DisplayBox";

let internalData = [
  { id: 1, taskName: "Buy Grocery", taskStatus: false },
  { id: 2, taskName: "Clean the Room", taskStatus: false },
  { id: 3, taskName: "Complete Homework", taskStatus: false },
  { id: 4, taskName: "Read a Book", taskStatus: false },
  { id: 5, taskName: "Pay Electricity Bill", taskStatus: false },
  { id: 6, taskName: "Go for a Walk", taskStatus: false },
  { id: 7, taskName: "Call a Friend", taskStatus: false },
  { id: 8, taskName: "Water the Plants", taskStatus: false },
  { id: 9, taskName: "Cook Dinner", taskStatus: false },
  { id: 10, taskName: "Wash the Car", taskStatus: false },
];
let inputBox = document.createElement("input");
inputBox.type = "text";
inputBox.placeholder = "Enter the task name";

const addToDo = (e) => {
  e.preventDefault();
  if (inputBox.value.length < 3 || inputBox.value == 0) {
    alert("enter the correct task");
  }
  //   console.log( 'button added', inputBox.value);
  let taskId = internalData.length + 1;
  let obj = {
    id: taskId,
    taskName: inputBox.value,
    taskStatus: false,
  };
  internalData.push(obj);
  let saveToLocalStorage = JSON.stringify(internalData);
  localStorage.setItem("BrowserData", saveToLocalStorage);
  inputBox.value = " ";
  //  console.log(internalData)

  renderTasks();
};

let AddToDOBtn = document.createElement("button");
AddToDOBtn.className = "AddToDoBtn";
AddToDOBtn.innerText = "Add ToDo Task";

AddToDOBtn.addEventListener("click", addToDo);

Box1.append(inputBox, AddToDOBtn);

root.append(Box1);

const checkBoxChanges = (index) => {
  let getInternalData = JSON.parse(localStorage.getItem("BrowserData"));
  let updatedData = getInternalData.map((e) => {
    if (e.id === index) {
      e.taskStatus = !e.taskStatus;
    }
    return e;
  });
  localStorage.setItem("BrowserData", JSON.stringify(updatedData));
  renderTasks();
};

const deleteData = (id) => {
  let getInternalData = JSON.parse(localStorage.getItem("BrowserData"));
  let updatedData = getInternalData.filter((e) => e.id !== id);
  localStorage.setItem("BrowserData", JSON.stringify(updatedData));
  renderTasks();
};

const renderTasks = () => {
  document.querySelector(".DisplayBox").innerText = "";
  let getBrowserData = JSON.parse(localStorage.getItem("BrowserData"));
  getBrowserData.forEach((e) => {
    let { id, taskName, taskStatus } = e;

    let Box2 = document.createElement("div");
    Box2.className = "CardBox";

    let task = document.createElement("h3");
    task.innerText = taskName;

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = taskStatus;
    checkBox.addEventListener("change", () => checkBoxChanges(e.id));
    // console.log(id);

    let S_No = document.createElement("h4");
    S_No.innerText = id;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete Task";
    deleteBtn.className = "deleteBtn";
    deleteBtn.addEventListener("click", () => deleteData(e.id));

    Box2.append(S_No, task, checkBox, deleteBtn);
    // console.log(Box2)
    DisplayBox.append(Box2);
  });
};

root.append(DisplayBox);

renderTasks();
