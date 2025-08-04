import { useCart } from "./CartContext.jsx";
import CartItem from "./CartItem.jsx";

function App() {
  const { quantity } = useCart();

  return (
    <div className="container">
      <header className="cart-header">
        <h1>
          Cart <span>({quantity})</span>
        </h1>
      </header>

      {quantity > 0 && (
        <div className="free-shipping">
          🎉 Congratulations! You get free shipping
        </div>
      )}

      {quantity > 0 ? (
        <CartItem />
      ) : (
        <p className="empty-msg">Your cart is empty.</p>
      )}
    </div>
  );
}

export default App;
