import { Outlet } from 'react-router-dom';
import { Header } from '../../components';

export const RootLayout = () => {
  return (
    <main>
      <Header />
      <section>
        <Outlet />
      </section>
    </main>
  );
};
