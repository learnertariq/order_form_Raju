$(".chosen").chosen();
var sel = document.querySelector(".product-list");
var productAddButton = document.querySelector(".product-add-button");
var totalPrice = document.querySelector(".product-prices__total");
var inputs;
var productSelected = sel.options[sel.selectedIndex];
var total = document.querySelector(".total-prices-row");

// listen touch event
productAddButton.addEventListener("touchstart", (ev) => {
  productSelected = sel.options[sel.selectedIndex];

  addNewProduct(productSelected);

  //updating inputs
  inputs = document.querySelectorAll(".input-product");
});

// listen click event
productAddButton.addEventListener("click", (ev) => {
  productSelected = sel.options[sel.selectedIndex];

  addNewProduct(productSelected);

  //updating inputs
  inputs = document.querySelectorAll(".input-product");
});

// add new product Html
 function addNewProduct(productSelected) {
  total.insertAdjacentHTML(
    "beforebegin", 
    `<tr class="product-prices__item">
      <td class="product-prices__name">${productSelected.text}</td>
      <td class="product-prices__price"><input class="input input-product" type="number" value="${productSelected.value}"></td>
      <td><button class="btn btn--xsmall btn--primary product-remove-btn">rm</button></td>
    </tr>`);

    totalPrice.value = parseInt(totalPrice.value) + parseInt(productSelected.value);
 }


// calculating total prices
function recalculateTotal() {
  var total = 0;
  for (var i = 0; i < inputs.length; i++) {
    total += parseInt(inputs[i].value);
  }
  totalPrice.value = total;
}

//updating prices on change explicitly CLICK
document.querySelector(".update-prices-btn").addEventListener('click', () => {
  recalculateTotal();
});

//updating prices on change explicitly TOUCH
document.querySelector(".update-prices-btn").addEventListener('touchstart', () => {
  recalculateTotal();
});


// removing product row CLICK
document.addEventListener('click', (ev) => {
  console.log(ev)
  if (ev.target.classList.contains("product-remove-btn")) {
    ev.target.parentElement.parentElement.remove();

    //updating inputs
    inputs = document.querySelectorAll(".input-product");

    recalculateTotal();
  }
});

// removing product row TOUCH
document.addEventListener('touchstart', (ev) => {
  console.log(ev)
  if (ev.target.classList.contains("product-remove-btn")) {
    ev.target.parentElement.parentElement.remove();

    //updating inputs
    inputs = document.querySelectorAll(".input-product");

    recalculateTotal();
  }
});



