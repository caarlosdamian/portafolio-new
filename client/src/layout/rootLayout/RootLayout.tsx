import { Outlet } from 'react-router-dom';

export const RootLayout = () => {
  return (
    <main>
      <header>RootLayout</header>
      <section>
        <Outlet />
      </section>
    </main>
  );
};
