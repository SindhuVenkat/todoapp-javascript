var addtask = document.getElementById('addtask');

var container = document.getElementById('container')


function HandleClick() {
    var inputvalue = document.getElementById('inputvalue').value
    var taskbar = document.createElement('div')
    taskbar.className = 'taskbar'
    taskbar.innerHTML= inputvalue
    
    var deletebutton = document.createElement('button')
    deletebutton.className = 'Delete'
    deletebutton.textContent = 'Delete'
    
    deletebutton.addEventListener('click',()=>{
        taskbar.remove()
    })

    taskbar.appendChild(deletebutton)
    container.appendChild(taskbar)
    // container.appendChild(Deletebutton)   
}

addtask.addEventListener('click', HandleClick)