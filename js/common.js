// Function to add or substract items and show total amount
function updateCaseNumber(inputId, isAddition, totalId, productPrice) {
  const getInputValue = document.getElementById(inputId);
  const getTotalId = document.getElementById(totalId);

  const getInputValueNumber = parseInt(getInputValue.value);
  let newInputValue;
  if (isAddition) {
    newInputValue = getInputValueNumber + 1;
  } else {
    newInputValue = getInputValueNumber - 1;
  }
  getInputValue.value = newInputValue;
  const updatedPrice = newInputValue * productPrice;
  getTotalId.innerText = updatedPrice;
}

function deleteAll(inputId, totalId, amount) {
  const getInputValue = document.getElementById(inputId);
  getInputValue.value = 1;

  const getTotalId = document.getElementById(totalId);
  getTotalId.innerText = amount;
}

function subtotal() {
  const subTotal = document.querySelector(".subtotal");
  const phnTotal = document.getElementById("phone-total-price");
  const caseTotal = document.getElementById("silicon-amount");
  const newSubTotal =
    parseInt(phnTotal.innerText) + parseInt(caseTotal.innerText);
  subTotal.innerText = newSubTotal;
}
