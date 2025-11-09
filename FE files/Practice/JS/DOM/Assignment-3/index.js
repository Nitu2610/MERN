let root=document.querySelector('#root');

let Box1=document.createElement('div');
Box1.className="Box1";

let AddToDOBtn=document.createElement('button');;
AddToDOBtn.className='AddToDoBtn';
AddToDOBtn.innerText='Add ToDo Task';

let inputBox=document.createElement('input');
inputBox.type='text';
inputBox.placeholder="Enter the task name";

Box1.append(AddToDOBtn);

root.append(Box1)

