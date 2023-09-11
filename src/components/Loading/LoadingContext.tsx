import React, { createContext, useContext, useState } from 'react';

// @ts-ignore
const LoadingContext = createContext();

export function useLoading() {
  return useContext(LoadingContext);
}
type Props = {
  children: React.ReactNode;
};
export function LoadingProvider({ children }: Props) {
  const [loading, setLoading] = useState(false);
  const showLoading = () => setLoading(true);
  const hideLoading = () => setLoading(false);

  return (
    <LoadingContext.Provider value={{ loading, showLoading, hideLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}
