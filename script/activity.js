// activity function
function getActivityByIDandButton(id, button){
    document.getElementById(button).addEventListener("click", function (event) {
        event.preventDefault();
      
        const timee = new Date().toLocaleTimeString();
      
        const activity = document.getElementById(id).innerText;
        const container = document.getElementById("activity-container");
        const para = document.createElement("p");
        para.innerHTML = `
      <div style="background-color: #e2e8f0; padding: 10px; width: 350px; border-radius: 16px; margin: 0 auto;">you have completed the task <br> <b> ${activity}</b> at ${timee}</div><br>
      `;

        container.appendChild(para);

      });
}

// call the activity
getActivityByIDandButton('box1', 'box1-btn');
getActivityByIDandButton('box2', 'box2-btn');
getActivityByIDandButton('box3', 'box3-btn');
getActivityByIDandButton('box4', 'box4-btn');
getActivityByIDandButton('box5', 'box5-btn');
getActivityByIDandButton('box6', 'box6-btn');


// disable button
function disableButton(disButton){
    document.getElementById(disButton).addEventListener('click', function(event){
        event.currentTarget.disabled = true;

        // decrease task assigned number
        const taskNumber = document.getElementById('task-number').innerText;
    const convertedTaskNumber = parseInt(taskNumber);

     const newTaskNumber = convertedTaskNumber - 1;
     document.getElementById('task-number').innerText = newTaskNumber;

     // increase task- completed number
     const allTasks = document.getElementById('tasks').innerText;
    const convertedTasks = parseInt(allTasks);

     const newTasks = convertedTasks + 1;
     document.getElementById('tasks').innerText = newTasks;

    });
}

disableButton('box1-btn');
disableButton('box2-btn');
disableButton('box3-btn');
disableButton('box4-btn');
disableButton('box5-btn');
disableButton('box6-btn');


// remove all activity
document.getElementById('clear-btn').addEventListener('click', function(){
    document.getElementById('activity-container').innerHTML = '';
});


