import React, { useState } from "react";

const Memory = () => {
  console.log("Memory 컴포넌트 렌더링");

  const [text, setText] = useState("");

  return (
    <div className="memory">
      <h1 id="title">기억의 도서관</h1>
      <textarea
        id="input"
        placeholder="가장 기억에 남는 순간은 언제였나요?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button id="send-btn">SEND </button>
    </div>
  );
};

export default Memory;
