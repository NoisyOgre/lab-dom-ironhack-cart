// ITERATION 1
console.log("this java is connected")
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
 const price = product.querySelector(".price span").innerText;
  const quantity = product.querySelector(".quantity input").value;
  const totalValue = price * quantity
  const subTotal = product.querySelector(".subtotal span ");
  subTotal.innerText = totalValue;
  return totalValue;
}



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let sum = 0
    const productsList = document.getElementsByClassName("product") 
     const productsListArray = [...productsList];
     productsListArray.forEach((product) => sum += updateSubtotal(product));

    console.log(sum);

  // ITERATION 3
  const totalValue = document.querySelector("#total-value span");
  totalValue.innerText = sum
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.remove();

}

// ITERATION 5
function createProduct(randomPorduct) {
  const target = randomPorduct.currentTarget;
console.log('The target in create is:', target);
const newProduct = document.createElement("input");

}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const deleteButtons= [ ...document.getElementsByClassName("btn-remove")];
  deleteButtons.forEach((button) =>{
    button.addEventListener("click", removeProduct)
  });
  const createProduct= [ ...document.getElementsByClassName("create-product")];
  createProduct.forEach((button) =>{
    button.addEventListener("click", createProduct)
  });
});
