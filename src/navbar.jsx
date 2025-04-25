import React from 'react';

// Define navigation items as an array of objects
const navItems = [
  { id: 1, label: 'Home', href: '/' },
  { id: 2, label: 'About', href: '/about' },
  { id: 3, label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  return (
    <nav>
      <ul>
        {navItems.map((item) => (
          <li key={item.id}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;