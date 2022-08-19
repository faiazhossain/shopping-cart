// for addition to silicon case
document.getElementById("btn-case-plus").addEventListener("click", function () {
  updateCaseNumber("case-number-field", true, "silicon-amount", 59);
  subtotal();
});

// for subtraction to silicon case
document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    updateCaseNumber("case-number-field", false, "silicon-amount", 59);
    subtotal();
  });

document.getElementById("case-delete").addEventListener("click", function () {
  deleteAll("case-number-field", "silicon-amount", 59);
  subtotal();
});
