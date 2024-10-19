import { Link } from 'react-router-dom';
import { HEADER_CONST } from '../../utils';

export const Header = () => {
  return (
    <header>
      <nav role="navigation">
        <ul>
          {HEADER_CONST.map(({ label, path }) => (
            <li key={path}>
              <Link to={path}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
