var cartItems = [];
var total = 0;

function addToCart(item) {
  cartItems.push(item);
  
  var cartList = document.getElementById("cart-items");
  var newItem = document.createElement("li");
  newItem.innerHTML = "<span class='cart-item'>" + item.name + " - $" + item.price + " x " + item.quantity + "</span>" +
                      "<button class='remove-from-cart' onclick='removeFromCart(" + item.price + ", " + item.quantity + ")'>Remove</button>";
  cartList.appendChild(newItem);
  
  var itemTotal = item.price * item.quantity;
  total += itemTotal;
  var totalElement = document.getElementById("total");
  totalElement.textContent = "Total: $" + total;
}

function removeFromCart(price, quantity) {
  var index = cartItems.findIndex(function(item) {
    return item.price === price && item.quantity === quantity;
  });
  
  if (index !== -1) {
    var itemTotal = price * quantity;
    cartItems.splice(index, 1);
    
    var cartList = document.getElementById("cart-items");
    cartList.removeChild(cartList.childNodes[index]);
    
    total -= itemTotal;
    var totalElement = document.getElementById("total");
    totalElement.textContent = "Total: $" + total;
  }
}
