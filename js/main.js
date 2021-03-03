$(".chosen").chosen();
var sel = document.querySelector(".product-list");
var productAddButton = document.querySelector(".product-add-button");
var totalPrice = document.querySelector(".product-prices__total");
var inputs;

// listen touch event
productAddButton.addEventListener("touchstart", (ev) => {
  var productSelected = sel.options[sel.selectedIndex];

  var list = document.querySelector(".product-prices__list");
  list.insertAdjacentHTML(
    "beforeend", 
    `<tr class="product-prices__item">
      <td class="product-prices__name">${productSelected.text}</td>
      <td class="product-prices__price"><input class="input input-product" type="number" value="${productSelected.value}"></td>
    </tr>`);

  totalPrice.innerHTML = parseInt(totalPrice.innerHTML) + parseInt(productSelected.value);

  //updating inputs
  inputs = document.querySelectorAll(".input-product");
});

// listen click event
productAddButton.addEventListener("click", (ev) => {
  var productSelected = sel.options[sel.selectedIndex];

  var list = document.querySelector(".product-prices__list");
  list.insertAdjacentHTML(
    "beforeend", 
    `<tr class="product-prices__item">
      <td class="product-prices__name">${productSelected.text}</td>
      <td class="product-prices__price"><input class="input input-product" type="number" value="${productSelected.value}"></td>
    </tr>`);

  totalPrice.innerHTML = parseInt(totalPrice.innerHTML) + parseInt(productSelected.value);

  //updating inputs
  inputs = document.querySelectorAll(".input-product");
});


// calculating total prices
function recalculateTotal() {
  var total = 0;
  for (var i = 0; i < inputs.length; i++) {
    total += parseInt(inputs[i].value);
  }
  return total;
}

//updating prices on change explicitly
document.querySelector(".update-prices-btn").addEventListener('click', () => {
  totalPrice.textContent = recalculateTotal();
});





