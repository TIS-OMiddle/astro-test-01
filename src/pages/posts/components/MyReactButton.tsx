import React, { useState } from 'react';

export default function MyReactButton() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(v => v + 1)}>我是react按钮: {count}</button>
    </div>
  );
}
