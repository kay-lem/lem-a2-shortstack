// FRONT-END (CLIENT) JAVASCRIPT HERE


window.onload = function() {
   const button = document.querySelector("button");
  button.onclick = submit;
}


function sortEvents() {
  var table = document.getElementById("tbl"); 
  var rows = Array.from(table.rows).slice(1); 

 
 var events = rows.map(row => {
    return {
    priorityCell: row.cells[0], // For updating priority
    date: new Date(row.cells[1].innerText), 
    row: row 
    };
    });
  // Sort events by due date (earliest first)
  events.sort((a, b) => a.date - b.date);

  // Assign priority
  events.forEach((event, index) => {
    event.priorityCell.innerText = index + 1; 
    });

// Rebuild table
  var tbody = table.querySelector('tbody');
  tbody.innerHTML = ''; 

  events.forEach(event => {
    tbody.appendChild(event.row);
  });
}

 
function addEvent()
{ 
  var dueDate=document.sample.dueDate.value; 
  var event=document.sample.event.value; 
  
  var tr = document.createElement('tr');
  
  var td1 = tr.appendChild(document.createElement('td'));
  var td2 = tr.appendChild(document.createElement('td'));
  var td3 = tr.appendChild(document.createElement('td'));
  var td4 = tr.appendChild(document.createElement('td'));
  
  td1.innerHTML='something'; // it adds priority later
  td2.innerHTML=dueDate;
  td3.innerHTML=event;
  td4.innerHTML='<input type="button" name="del" value="Delete" onclick="delEvent(this);" class="btn btn-danger">'
  
  document.getElementById("tbl").appendChild(tr);
  sortEvents();
}

function delEvent(eventy){
  var e=eventy.parentNode.parentNode;
  e.parentNode.removeChild(e);
}



