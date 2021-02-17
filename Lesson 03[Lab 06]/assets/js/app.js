// Define UI Variables 
const taskInput = document.querySelector('#task'); //the task input text field
const form = document.querySelector('#task-form'); //The form at the top
const filter = document.querySelector('#filter'); //the task filter text field
const taskList = document.querySelector('.collection'); //The UL
const clearBtn = document.querySelector('.clear-tasks'); //the all task clear button
const increasing = document.querySelector('#asc')
const decreasing = document.querySelector('#des')
const reloadIcon = document.querySelector('.fa'); //the reload button at the top navigation 
decreasing.addEventListener('click',descending)
increasing.addEventListener('click',ascending)

//DB variable 

let DB;



// Add Event Listener [on Load]
document.addEventListener('DOMContentLoaded', () => {
    // create the database
    let TasksDB = indexedDB.open('tasks', 1);

    // if there's an error
    TasksDB.onerror = function() {
            console.log('There was an error');
        }
        // if everything is fine, assign the result to the instance
    TasksDB.onsuccess = function() {
        // console.log('Database Ready');

        // save the result
        DB = TasksDB.result;

        // display the Task List 
        displayTaskList();
    }

    // This method runs once (great for creating the schema)
    TasksDB.onupgradeneeded = function(e) {
        // the event will be the database
        let db = e.target.result;

        // create an object store, 
        // keypath is going to be the Indexes
        let objectStore = db.createObjectStore('tasks', { keyPath: 'id'});

        // createindex: 1) field name 2) keypath 3) options
        objectStore.createIndex('taskname', 'taskname', { unique: false });
        objectStore.createIndex('date', 'date', { unique: false });

        console.log('Database ready and fields created!');
    }
});

    form.addEventListener('submit', addNewTask);

    function addNewTask(e) {
        // Insert the object into the database 
        let transaction = DB.transaction(['tasks'], 'readwrite');
        let objectStore = transaction.objectStore('tasks');
        let request = objectStore.put({
            taskname: taskInput.value,
            date:new Date()
        })
        // on success
        request.onsuccess = () => {
            form.reset();
        }
        transaction.oncomplete = () => {
            console.log('New Task added');
            displayTaskList();
        }
        transaction.onerror = () => { console.log('There was an error, try again!'); }
    }

    function displayTaskList() {
        // clear the previous task list
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }

        // create the object store
        let objectStore = DB.transaction('tasks').objectStore('tasks');

        objectStore.openCursor().onsuccess = function(e) {
            // assign the current cursor
            let cursor = e.target.result;

            if (cursor) {

                // Create an li element when the user adds a task 
                const li = document.createElement('li');
                //add Attribute for delete 
                li.setAttribute('data-task-id', cursor.value.id);
                // Adding a class
                li.className = 'collection-item';
                // Create text node and append it 
                li.appendChild(document.createTextNode(cursor.value.taskname));
                const par = document.createElement('p')
                par.className = 'date'
                par.innerHTML = cursor.value.date
                // Create new element for the link 
                const link = document.createElement('a');
                // Add class and the x marker for a 
                link.className = 'delete-item ';
                link.innerHTML = `
                
                <a class = "secondary-content">
                <i class="fa fa-remove" ></i></a>
                    <a href="edit.html?id=${cursor.value.id}" class = "secondary-content"><i class="fa fa-edit"></i> </a>
                    
                
                
                `;
                // style = "color : red"
                
                
                
                // Append link to li
                li.appendChild(par)
                li.appendChild(link);
                
                // Append to UL 
                taskList.appendChild(li);
                cursor.continue();
            }
        }
    }

    // Remove task event [event delegation]
    taskList.addEventListener('click', removeTask);

    function removeTask(e) {

        if (e.target.parentElement.classList.contains('delete-item')) {
            if (confirm('Are You Sure about that ?')) {
                // get the task id
                let taskID = Number(e.target.parentElement.parentElement.getAttribute('data-task-id'));
                // use a transaction
                let transaction = DB.transaction(['tasks'], 'readwrite');
                let objectStore = transaction.objectStore('tasks');
                objectStore.delete(taskID);

                transaction.oncomplete = () => {
                    e.target.parentElement.parentElement.remove();
                }

            }

        }

    }

    //clear button event listener   
    clearBtn.addEventListener('click', clearAllTasks);

    //clear tasks 
    function clearAllTasks() {
        let transaction = DB.transaction("tasks", "readwrite");
        let tasks = transaction.objectStore("tasks");
        // clear the table.
        tasks.clear();
        displayTaskList();
        console.log("Tasks Cleared !!!");
    }
function descending(){
    console.log(taskList)
    const search= document.querySelector('.collection');
    const items=search.getElementsByTagName('li')
    for(i=0;i<items.length;i++){
        for(j=0;j<items.length-1;j++){
            date1=taskList.children[j].children[0].innerHTML
            date2=taskList.children[j+1].children[0].innerHTML
            if (date1 < date2){
                let temp = taskList.children[j].innerHTML;
                taskList.children[j].innerHTML=taskList.children[j+1].innerHTML;
                taskList.children[j+1].innerHTML=temp
            }
        }
    }
}
function ascending(){
    const search= document.querySelector('.collection');
    const items=search.getElementsByTagName('li')
    for(i=0;i<items.length;i++){
        for(j=0;j<items.length-1;j++){
            date1=taskList.children[j].children[0].innerHTML
            date2=taskList.children[j+1].children[0].innerHTML
            if (date1 > date2){
                let temp = taskList.children[j].innerHTML;
                taskList.children[j].innerHTML=taskList.children[j+1].innerHTML;
                taskList.children[j+1].innerHTML=temp
            }
        }
    }
}
filter.addEventListener('keyup', filterTasks);
function filterTasks(e) {
    const term = e.target.value.toLowerCase();
    const search= document.querySelector('.collection');
    const items=search.getElementsByTagName('li')
    Array.from(items).forEach(function(item){
        const entry =item.firstChild.textContent;
        if(entry.toLowerCase().indexOf(term) != -1){
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }
    })};