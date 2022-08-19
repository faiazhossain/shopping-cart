// for addition to phone
document.getElementById("btn-plus").addEventListener("click", function () {
  updateCaseNumber("phone-number-field", true, "phone-total-price", 1219);
  subtotal();
});

// for subtraction to phone
document.getElementById("btn-minus").addEventListener("click", function () {
  updateCaseNumber("phone-number-field", false, "phone-total-price", 1219);
  subtotal();
});

document.getElementById("phone-delete").addEventListener("click", function () {
  deleteAll("phone-number-field", "phone-total-price", 1219);
  subtotal();
});
