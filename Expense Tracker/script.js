window.addEventListener("DOMContentLoaded", () => {
  const category = document.getElementById("category");
  const customCategory = document.getElementById("custom-category");
  const amount = document.getElementById("amount");
  const date = document.getElementById("date");
  const submit = document.querySelector(".show-btn");
  const year = document.getElementById("year");
  year.textContent = new Date().getFullYear();

  date.value = new Date().toISOString().split("T")[0];

  category.addEventListener("change", () => {
    if (category.value === "others") {
      customCategory.classList.remove("hidden");
      customCategory.value = "";
    } else {
      customCategory.classList.add("hidden");
    }
  });

  loadExpenses();

  submit.addEventListener("click", () => {
    const categoryValue =
      category.value === "others"
        ? customCategory.value.trim()
        : category.value;

    if (!categoryValue || amount.value === "" || date.value === "") {
      alert("Please Enter All the Fields");
    } else {
      const expense = {
        category: categoryValue,
        amount: parseFloat(amount.value),
        date: date.value,
      };
      addExpenseToTable(expense);
      saveExpenseToLocalStorage(expense);
      calculateTotal();
      resetForm();
    }
  });

  document.querySelector(".download-btn").addEventListener("click", () => {
    downloadTableAsCSV();
  });
});

function resetForm() {
  document.getElementById("category").value = "";
  document.getElementById("custom-category").classList.add("hidden");
  document.getElementById("custom-category").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("date").value = new Date()
    .toISOString()
    .split("T")[0];
}

function addExpenseToTable(expense) {
  const showdata = document.querySelector(".show-data");
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";

  td1.innerText = expense.category;
  td2.innerText = expense.amount;
  td3.innerText = expense.date;
  td4.appendChild(deleteButton);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);

  deleteButton.addEventListener("click", () => {
    tr.remove();
    deleteExpenseFromLocalStorage(expense);
    calculateTotal();
  });

  showdata.appendChild(tr);
}

function saveExpenseToLocalStorage(expense) {
  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  expenses.push(expense);
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

function deleteExpenseFromLocalStorage(expenseToDelete) {
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  expenses = expenses.filter(
    (expense) =>
      expense.category !== expenseToDelete.category ||
      expense.amount !== expenseToDelete.amount ||
      expense.date !== expenseToDelete.date
  );
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

function loadExpenses() {
  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  expenses.forEach((expense) => addExpenseToTable(expense));
  calculateTotal();
}

function calculateTotal() {
  let sum = 0;
  document
    .querySelector(".show-data")
    .querySelectorAll("tr")
    .forEach((tr) => {
      sum += parseFloat(tr.children[1].textContent);
    });
  document.querySelector(".amount").textContent = sum;
}

function downloadTableAsCSV() {
  const rows = [["Category", "Amount", "Date"]];
  const tableRows = document.querySelectorAll(".show-data tr");

  tableRows.forEach((row) => {
    const cells = row.querySelectorAll("td");
    const rowData = Array.from(cells)
      .slice(0, 3)
      .map((cell) => cell.innerText);
    rows.push(rowData);
  });

  const csvContent = rows.map((row) => row.join(",")).join("\n");

  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "expenses.csv";
  a.click();
  URL.revokeObjectURL(url);
}
