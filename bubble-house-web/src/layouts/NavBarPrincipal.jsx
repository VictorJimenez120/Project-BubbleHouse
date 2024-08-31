import React, { useState } from 'react';
import {
  BsClipboard2PlusFill,
  BsFillFileRichtextFill,
  BsPersonCircle,
  BsPeopleFill,
  BsBoxArrowLeft
} from 'react-icons/bs';
import { DiApple } from "react-icons/di";
import { ImSpoonKnife } from "react-icons/im";
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

export default function NavBarPrincipal() {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
  };

  const icons = [
    { Component: BsClipboard2PlusFill, title: "Pedidos" },
    { Component: ImSpoonKnife, title: "Productos" },
    { Component: DiApple, title: "Ingredientes" },
    { Component: BsFillFileRichtextFill, title: "Recetas" },
    { Component: BsPersonCircle, title: "Usuario" },
    { Component: BsPeopleFill, title: "Usuarios" },
    { Component: BsBoxArrowLeft, title: "Cerrar Sesión" },
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
