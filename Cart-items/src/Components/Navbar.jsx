//import React from 'react'

export default function Navbar() {
  const links = [
    {
      path: "/Cart",
      label: "Items",
    },
  ];
  return (
    <div>
      {links.map((link) => (
        <p key={link.path} to={link.path}>
          {link.label}
        </p>
      ))}
    </div>
  );
}
