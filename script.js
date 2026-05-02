function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if(name == "" || email == "") {
        alert("Fill all fields!");
        return false;
    }

    alert("Form submitted!");
    return true;
}
let cart = [];

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-cart")) {
    const name = e.target.dataset.name;
    const price = Number(e.target.dataset.price);

    cart.push({ name, price });

    alert(name + " added to cart!");

    // SAVE CART IN LOCAL STORAGE
    localStorage.setItem("cart", JSON.stringify(cart));
  }
});