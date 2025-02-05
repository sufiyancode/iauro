document.addEventListener("DOMContentLoaded", loadFromLocalStorage);

function addRow() {
  const financial = document.getElementById("financial").value;
  const cgst = document.getElementById("cgst").value.trim();
  const sgst = document.getElementById("sgst").value.trim();
  const costOfForm = document.getElementById("costOfForm").value.trim();
  const effectiveFrom = document.getElementById("effectiveFrom").value;

  if (
    financial === "" ||
    cgst === "" ||
    sgst === "" ||
    costOfForm === "" ||
    effectiveFrom === ""
  ) {
    alert("please enter all fields");
    return;
  }
  const data = { financial, cgst, sgst, costOfForm, effectiveFrom };
  const table = document
    .getElementById("financeTable")
    .getElementsByTagName("tbody")[0];

  const newRow = table.insertRow();
  newRow.innerHTML = `
                <td>${financial}</td>
                <td>${cgst}</td>
                <td>${sgst}</td>
                <td>${costOfForm}</td>
                <td>${effectiveFrom}</td>
                <td>
                    <button onclick="deleteRow(this)" class="btn">
                        <span><img style="width: 20px" src="./icons/delete.png" alt="" /></span>
                    </button>
                </td>
                <td>
                    <button onclick="editRow(this)" class="btn">
                        <span><img style="width: 20px" src="./icons/edit.png" alt="" /></span>
                    </button>
                </td>
  `;

  saveToLocalStorage(data);
  document.getElementById("financial").value = "";
  document.getElementById("cgst").value = "";
  document.getElementById("sgst").value = "";
  document.getElementById("costOfForm").value = "";
  document.getElementById("effectiveFrom").value = "";
}

function editRow(button) {
  const row = button.parentNode.parentNode;
  const financial = row.cells[0];
  const cgst = row.cells[1];
  const sgst = row.cells[2];
  const costOfForm = row.cells[3];
  const effectiveFrom = row.cells[4];

  const newFinancial = prompt("Edit financial:", financial.textContent);
  const newCgst = prompt("Edit cgst:", cgst.textContent);
  const newSgst = prompt("Edit sgst", sgst.textContent);
  const newCostOfForm = prompt("Edit costOfForm", costOfForm.textContent);
  const newEffectiveFrom = prompt(
    "Edit effectiveFrom:(YYYY-MM-DD)",
    effectiveFrom.textContent
  );

  if (
    financial !== null &&
    cgst !== null &&
    sgst !== null &&
    costOfForm !== null &&
    effectiveFrom
  ) {
    financial.textContent = newFinancial;
    cgst.textContent = newCgst;
    sgst.textContent = newSgst;
    costOfForm.textContent = newCostOfForm;
    effectiveFrom.textContent = newEffectiveFrom;
    updateLocalStorage();
  }
}

function deleteRow(button) {
  if (confirm("Are you sure you want to delete this row?")) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    updateLocalStorage();
  }
}

function saveToLocalStorage(data) {
  let tableData = JSON.parse(localStorage.getItem("crudData")) || [];
  tableData.push(data);
  localStorage.setItem("crudData", JSON.stringify(tableData));
}

function loadFromLocalStorage() {
  const tableData = JSON.parse(localStorage.getItem("crudData")) || [];
  tableData.forEach((data) => {
    const table = document
      .getElementById("financeTable")
      .getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();
    newRow.innerHTML = `
             <td>${data.financial}</td>
                <td>${data.cgst}</td>
                <td>${data.sgst}</td>
                <td>${data.costOfForm}</td>
                <td>${data.effectiveFrom}</td>
                <td>
                    <button onclick="deleteRow(this)" class="btn">
                        <span><img style="width: 20px" src="./icons/delete.png" alt="" /></span>
                    </button>
                </td>
                <td>
                    <button onclick="editRow(this)" class="btn">
                        <span><img style="width: 20px" src="./icons/edit.png" alt="" /></span>
                    </button>
                </td>
        `;
  });
}

function updateLocalStorage() {
  const rows = document.querySelectorAll("#financeTable tbody tr");
  const tableData = Array.from(rows).map((row) => ({
    financial: row.cells[0].textContent,
    cgst: row.cells[1].textContent,
    sgst: row.cells[2].textContent,
    costOfForm: row.cells[3].textContent,
    effectiveFrom: row.cells[4].textContent,
  }));
  localStorage.setItem("crudData", JSON.stringify(tableData));
}

function sortDatabyCgst(button) {
  let tableData = JSON.parse(localStorage.getItem("crudData")) || [];
  const sortby = button.name;
  if (sortby === "cgst") {
    console.log(sortby);
    tableData.sort((a, b) => parseFloat(a.cgst) - parseFloat(b.cgst));
  }
  if (sortby === "sgst") {
    console.log(sortby);
    tableData.sort((a, b) => parseFloat(a.sgst) - parseFloat(b.sgst));
  }
  if (sortby === "costOfForm") {
    console.log(sortby);
    tableData.sort(
      (a, b) => parseFloat(a.costOfForm) - parseFloat(b.costOfForm)
    );
  }
  if (sortby === "effectiveFrom") {
    console.log(sortby);
    tableData.sort(
      (a, b) => new Date(a.effectiveFrom) - new Date(b.effectiveFrom)
    );
  }
  console.log(tableData);
  console.log(tableData.length);
  localStorage.setItem("crudData", JSON.stringify(tableData));
  const table = document
    .getElementById("financeTable")
    .getElementsByTagName("tbody")[0];
  table.innerHTML = "";
  loadFromLocalStorage();
}
