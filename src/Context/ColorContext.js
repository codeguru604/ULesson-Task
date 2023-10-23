import React, { createContext, useContext, useState } from 'react';

const ColorContext = createContext();

export function useColor() {
  return useContext(ColorContext);
}

export function ColorProvider({ children }) {
  const [selectedColor, setSelectedColor] = useState('PRIMARY 1');

  const toggleColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <ColorContext.Provider value={{ selectedColor, toggleColor }}>
      {children}
    </ColorContext.Provider>
  );
}