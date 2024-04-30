function add() {
    
    var inputs = document.getElementsByTagName("input");
    var table = document.getElementById("student-list");
    var tr = document.createElement("tr");

    if (inputs[0].value === "" || inputs[1].value === "") {
        alert("Please fill in the registration number and name.");
        return;
    }

    for (let i = 0; i < inputs.length; i++) {
        var td = document.createElement("td");
        var textNode = document.createTextNode(inputs[i].value);
        td.appendChild(textNode);
        tr.appendChild(td);

        var edit = document.createElement("button");
        edit.innerHTML = "Edit";
        edit.className = "edit-btn";
        edit.addEventListener("click", function() {
            editRow(tr, i);
        });
        td.appendChild(edit);
    }
    var act = document.createElement("td");
    var del = document.createElement("button");
    del.innerHTML = "Delete";
    del.className = "delete-btn";
    del.addEventListener("click", function() {
        tr.remove();
    });
    act.appendChild(del);
    tr.appendChild(act);

    table.appendChild(tr);

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
    
}

function editRow(row, cellIndex) {
    var cell = row.cells[cellIndex];
    var newValue = prompt("Enter new value:"); 
    if (newValue) {
        cell.textContent = newValue;
    }
}
