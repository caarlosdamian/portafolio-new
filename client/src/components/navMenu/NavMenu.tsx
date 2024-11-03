import { useIntl } from 'react-intl';
import { HEADER_CONST } from '../../utils';
import { Link } from 'react-router-dom';
import React from 'react';

interface Props {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavMenu = ({ setShowMenu, showMenu }: Props) => {
  const { formatMessage } = useIntl();

  const closeMenu = () => setShowMenu(false);
  return (
    <>
      {showMenu && (
        <div className="sm:hidden">
          <ul className="fixed top-[80px] z-20 left-0 w-screen bg-slate-100 flex gap-6 p-6 flex-col justify-center items-center">
            {HEADER_CONST.map(({ label, path }) => (
              <li key={path} className="hover:underline" onClick={closeMenu}>
                <Link to={path}>{formatMessage({ id: label })}</Link>
              </li>
            ))}
          </ul>
          <div
            onClick={closeMenu}
            className="cursor-pointer fixed top-[80px] left-0 z-0 h-full w-screen overflow-auto bg-black bg-opacity-30"
          />
        </div>
      )}
      <ul className="hidden sm:flex gap-[50px]">
        {HEADER_CONST.map(({ label, path }) => (
          <li key={path} className="hover:underline">
            <Link to={path}>{formatMessage({ id: label })}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
