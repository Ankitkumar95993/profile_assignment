'use client';
import {ReactNode} from 'react';
import { SessionProvider } from 'next-auth/react';

interface PropsType {
    children : ReactNode
}

 const Providers = ({children}:PropsType) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
};

export default Providers;