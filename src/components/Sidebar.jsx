import { RiCloseLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import { logo } from '../assets';
import { links } from '../assets/constants';

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start
        items-center my-8 text- font-medium text-gray-400
         hover:text-cyan-400 "
        onClick={() => handleClick && handleClick(false)}
      >
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="md:flex hidden flex-col py-10 px-4 bg-[#171422] w-[10%]">
      <img src={logo} alt="logo" className="w-full h-14 object-contain" />
      <NavLinks />
    </div>
  );
};

export default Sidebar;
