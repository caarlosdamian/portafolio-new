import { Link } from 'react-router-dom';
import { NavMenu } from '../navMenu/NavMenu';
import { useState } from 'react';

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="h-[80px] px-[50px] py-7">
      <nav role="navigation" className="flex justify-between">
        <Link
          to="/"
          className="font-bold text-xl"
          onClick={() => (showMenu ? setShowMenu(false) : null)}
        >
          CD
        </Link>
        <NavMenu showMenu={showMenu} setShowMenu={setShowMenu} />
        <img
          src="/menu.svg"
          alt="menu"
          onClick={() => setShowMenu((prev) => !prev)}
          className="cursor-pointer w-[25px] h-[23px] object-contain sm:hidden"
        />
      </nav>
    </header>
  );
};
