

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let addEmp = window.document.getElementById("addForm");
let empTable = window.document.getElementById("employees");

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = 0;
document.querySelector("output").innerText = empCount;


// ADD EMPLOYEE
addEmp.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.querySelector('#id').value;
    let name = document.querySelector('#name').value;
    let ext = document.querySelector('#extension').value;
    let email = document.querySelector('#email').value;
    let dept = document.querySelector('#department').value;
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = empTable.insertRow();
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell();
    let cellName = row.insertCell();
    let cellExt = row.insertCell();
    let cellEmail = row.insertCell();
    let cellDept = row.insertCell();
    let celldelete = row.insertCell();
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(id));
    cellName.appendChild(document.createTextNode(name));
    cellExt.appendChild(document.createTextNode(ext));
    cellEmail.appendChild(document.createTextNode(email));
    cellDept.appendChild(document.createTextNode(dept));
    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('X'));
    celldelete.appendChild(deleteBtn);
    // RESET THE FORM
    addEmp.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    empCount += 1;
    document.getElementById("empCount").innerHTML = empCount;
    
     
});

// DELETE EMPLOYEE

empTable.addEventListener('click', (e) => {
        if (confirm("Are you sure you want to delete this task?")) {
            empTable.deleteRow(e.target.parentNode.parentNode.rowIndex);
            empCount -= 1;
            document.getElementById("empCount").innerHTML = empCount;
        }
       
})

