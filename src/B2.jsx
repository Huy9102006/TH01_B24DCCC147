import React, { useState } from "react";
function ColorBox({ color }) {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: color,
        border: "1px solid black",
        marginTop: "10px",
      }}
    />
  );
}

function Color_change() {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Bài 2: Color Picker</h2>
      <div>
        <button onClick={() => setSelectedColor("red")}>Đỏ</button>
        <button onClick={() => setSelectedColor("green")}>Xanh</button>
        <button onClick={() => setSelectedColor("yellow")}>Vàng</button>
      </div>
      <ColorBox color={selectedColor} />
    </div>
  );
}

export default Color_change;
