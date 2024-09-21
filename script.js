const inputData=document.getElementById('todo')
const myDiv=document.getElementById('main')
function toDoFun(){
    const newDiv=document.createElement('div');
    newDiv.classList.add('name')
    const para=document.createElement('p')
    para.textContent=inputData.value;
    const button=document.createElement('button')
    button.textContent="❌"
    newDiv.append(para,button);
    myDiv.appendChild(newDiv)
    inputData.value=''
}