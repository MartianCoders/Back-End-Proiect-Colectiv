import React from 'react';

export function Button({ className, text, onClick }) {
  return (
    <button className={`btnbig ${className}`} onClick={onClick}>
      {text}
    </button>
  );
}