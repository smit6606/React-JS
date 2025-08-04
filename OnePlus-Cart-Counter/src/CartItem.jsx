import { useCart } from "./CartContext.jsx";

function CartItem() {
  const { quantity, increment, decrement, removeItem } = useCart();

  return (
    <div className="cart-item">
      <img
        src="https://image01-in.oneplus.net/media/202506/27/c90b7e8798916adaac336ce9279f4741.png?x-amz-process=image/format,webp/quality,Q_80"
        alt="OnePlus Nord 5"
      />
      <div className="item-info">
        <h2>OnePlus Nord 5</h2>
        <p>8 GB RAM + 256 GB ROM | Marble Sands</p>
      </div>
      <div className="price-box">
        <h3>₹31,999</h3>
        <p className="strike">₹34,999</p>
      </div>
      <div className="quantity-box">
        <button onClick={decrement} disabled={quantity === 1}>
          -
        </button>
        <span>{quantity}</span>
        <button onClick={increment}>+</button>
      </div>
      <button className="remove-btn" onClick={removeItem}>
        ✖
      </button>
    </div>
  );
}

export default CartItem;
