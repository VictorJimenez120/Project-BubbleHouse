import React, { useState } from 'react';
import { ImBook, ImMug } from 'react-icons/im';
import { BsCartPlusFill, BsBoxArrowRight } from 'react-icons/bs';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';

export default function NavBarSecondary() {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
  };

  const icons = [
    { Component: ImBook, title: "Menú" },
    { Component: ImMug, title: "Crear Bubble" },
    { Component: BsCartPlusFill, title: "Carrito" },
    { Component: BsBoxArrowRight, title: "Iniciar Sesión" },
  ];

  return (
    <div className="flex justify-center items-center overflow-x-auto bg-white p-2 w-full space-x-4 md:space-x-8">
      <div className="flex justify-center items-center space-x-4 md:space-x-8">
        {icons.map(({ Component, title }, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex justify-center items-center rounded-lg p-2 md:p-4 hover:bg-gray-300 cursor-pointer transition-colors duration-200"
            onClick={() => handleIconClick(title)}
          >
            <Tooltip title={title}>
              <Link>
                <Component
                  className={`text-gray-800 ${selectedIcon === title ? 'text-purple-600' : ''} text-2xl md:text-4xl`}
                />
              </Link>
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
}
