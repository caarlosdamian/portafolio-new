import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { IntlProvider } from 'react-intl';

import './index.css';
import { MESSAGES } from './translations';
import { Translations } from './types';

const messageKeys = Object.keys(MESSAGES);
const locale =
  typeof navigator.languages === 'object' &&
  messageKeys.includes(navigator.languages[0])
    ? navigator.languages[0]
    : 'en';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IntlProvider
      messages={MESSAGES[locale as keyof Translations]}
      locale={locale}
    >
      <RouterProvider router={router} />
    </IntlProvider>
  </StrictMode>
);
