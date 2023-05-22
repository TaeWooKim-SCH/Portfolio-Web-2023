import React from "react";
import './Tag.css';

export default function Tag({word}) {
  return (
    <div className="tag">
      # {word}
    </div>
  );
}