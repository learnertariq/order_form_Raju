$(".chosen").chosen();

// Global Variables
var productUpdateBtn = document.querySelector(".product__update-btn");
var productSelectBtn = document.querySelector(".product__select-btn");
var productSelectOptions = document.querySelector(".product__select-options");
var productPriceInputs = document.querySelectorAll(".product__price .input");
var productRowTotal = document.querySelector(".product__row-total");
var productPriceTotal = document.querySelector(".product__price-total .input");
var productRemoveBtn = document.querySelector(".product__remove-btn");

// Adding New Product
productSelectBtn.addEventListener('click', (ev) => {
  addNewProductHtml();
  // update total price
  recalculateTotal();
});

// update total on change
productUpdateBtn.addEventListener('click', () => recalculateTotal());

// removing product row
document.addEventListener('click', (ev) => {
  console.log(ev)
  if (ev.target.classList.contains("product__remove-btn")) {
    ev.target.parentElement.parentElement.remove();

    updateInputs();
    recalculateTotal();
  }
});


//////////// utility functions  /////////////////

function addNewProductHtml() {
  var productSelected = productSelectOptions.options[productSelectOptions.selectedIndex];
  var newProductHtml =
    `<tr class="product__row">
      <td class="product__name"><button class="btn btn--xsmall btn--primary product__remove-btn">X</button> ${productSelected.text}</td>
      <td class="product__price"><input class="input" type="number" value="${productSelected.value}"></td>
    </tr>`;
  productRowTotal.insertAdjacentHTML('beforebegin', newProductHtml);

  updateInputs();
}

// recalculating total prices
function recalculateTotal() {
  var total = 0;
  for (var i = 0; i < productPriceInputs.length; i++) {
    total += parseInt(productPriceInputs[i].value);
  }
  productPriceTotal.value = total;
  console.log(total);
  console.log(productPriceTotal);
}

function updateInputs() {
  //Updating price inputs
  productPriceInputs = document.querySelectorAll(".product__price .input");
}
