import React, { useState } from "react";


function ProductList({ products, addToCart }) {
  return (
    <div>
      <h3>Sản phẩm</h3>
      {products.map((product, index) => (
        <div key={index}>
          {product.name} - {product.price.toLocaleString()}₫{" "}
          <button onClick={() => addToCart(product)}>Thêm vào giỏ</button>
        </div>
      ))}
    </div>
  );
}


function Cart({ cart }) {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h3>Giỏ hàng</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} - {item.price.toLocaleString()}₫</li>
        ))}
      </ul>
      <p><strong>Tổng tiền: </strong>{totalPrice.toLocaleString()}₫</p>
    </div>
  );
}

function Buy() {
  const products = [
    { name: "Sách", price: 10000 },
    { name: "Bút", price: 5000 },
    { name: "Vở", price: 7000 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Bài 3: Giỏ hàng</h2>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
}

export default Buy;
