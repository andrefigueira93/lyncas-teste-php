import React from 'react';
import { CookiesProvider } from 'react-cookie';
import { FavoritoProvider } from './favorito';
import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => (
    <ToastProvider>
      <CookiesProvider>
        <FavoritoProvider>
          {children}
        </FavoritoProvider>
      </CookiesProvider>
    </ToastProvider>
);

export default AppProvider;