import { Link } from 'react-router-dom';
import { HEADER_CONST } from '../../utils';
import { useIntl } from 'react-intl';

export const Header = () => {
  const { formatMessage } = useIntl();
  return (
    <header>
      <nav role="navigation">
        <ul className='flex gap-3'>
          {HEADER_CONST.map(({ label, path }) => (
            <li key={path}>
              <Link to={path}>{formatMessage({ id: label })}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
